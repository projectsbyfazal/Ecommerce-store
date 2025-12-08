import CustomErrorHandler from "@/lib/CustomErrorHandler";
import dbConnect from "@/lib/db";
import { sendSuccessResponse } from "@/lib/reusable";
import { createBuffersAndUpload } from "@/lib/uploadToCloudinary";
import { verifyAuthority } from "@/middleware/auth";
import errorHandler from "@/middleware/errorHandler";
import Category from "@/models/Category";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const validUser = verifyAuthority(request);
    if (!validUser) {
      return errorHandler(CustomErrorHandler.unAuthorized());
    }

    const formData = await request.formData();
    const name = formData.get("name");
    const parentCategory = formData.get("parentCategory");
    let image = formData.get("image");

    if (!name) {
      return NextResponse.json({
        status: 422,
        message: "Category name is required",
      });
    }

    await dbConnect();

    // check is duplicate entry
    const isWithSameName = await Category.exists({ name });
    if (isWithSameName)
      return errorHandler(
        CustomErrorHandler.alreadyExist(
          `Category with (${name}) name already exist!`
        )
      );

    if (!Array.isArray(image)) {
      image = [image];
    }

    // ✅ convert Files -> Buffers -> Cloudinary
    let imageUrl = "";
    if (image && image?.length) {
      // create buffers and final upload function
      imageUrl = await createBuffersAndUpload(image);
    } else {
      return errorHandler({ message: "Category image is required." });
    }

    const category = await Category.create({
      name,
      imageUrl: imageUrl[0],
      parentCategory: parentCategory || null,
      addedBy: validUser.id,
    });

    return sendSuccessResponse(category, "Category created successfully.");
  } catch (error) {
    return errorHandler(error);
  }
}

export async function GET(request) {
  try {
    await dbConnect();

    const categories = await Category.find().populate("addedBy", "name");

    return sendSuccessResponse(categories);
  } catch (error) {
    return errorHandler(error);
  }
}
