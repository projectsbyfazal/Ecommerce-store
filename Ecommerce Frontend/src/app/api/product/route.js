import CustomErrorHandler from "@/lib/CustomErrorHandler";
import dbConnect from "@/lib/db";
import { createBuffersAndUpload } from "@/lib/uploadToCloudinary";
import { productSchema } from "@/lib/ValidationSchemas";
import { verifyAuthority } from "@/middleware/auth";
import errorHandler from "@/middleware/errorHandler";
import Product from "@/models/Product";
import { NextResponse } from "next/server";
import Category from "@/models/Category";
import { sendSuccessResponse } from "@/lib/reusable";

export async function POST(request) {
  try {
    // verify user
    const validUser = verifyAuthority(request);

    if (!validUser) {
      return errorHandler(CustomErrorHandler.unAuthorized());
    }

    const formData = await request.formData();

    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const stockQuantity = formData.get("stockQuantity");
    const category = formData.get("category");
    const brand = formData.get("brand");
    const color = formData.get("color");
    const material = formData.get("material");
    const files = formData.getAll("image");

    await dbConnect();

    // check is duplicate entry
    const isWithSameName = await Product.exists({ name });
    if (isWithSameName) {
      return errorHandler(
        CustomErrorHandler.alreadyExist(
          `Product with (${name}) name already exist!`
        )
      );
    }

    // validate requested data is correct
    const { error } = productSchema.validate({
      name,
      description,
      price,
      stockQuantity,
      category,
      brand,
      color,
      material,
    });

    if (!error) {
      return errorHandler(error);
    }

    // ✅ convert Files -> Buffers -> Cloudinary
    let imageUrls = [];
    if (files.length > 0) {
      // create buffers and final upload function
      imageUrls = await createBuffersAndUpload(files);
    } else {
      return errorHandler({ message: "Atleast 1 image required." });
    }
    // Save product in Mongo
    const product = await Product.create({
      name: name.trim(),
      description,
      price,
      stockQuantity,
      slug: name.toLowerCase().replaceAll(" ", "-").trim(),
      category,
      brand,
      color,
      material,
      images: imageUrls || [],
    });

    return sendSuccessResponse(product, "Product Added Successfully");
  } catch (error) {
    return errorHandler(error);
  }
}

export async function GET(request) {
  try {
    await dbConnect();

    const data = await Product.find({ isActive: true })
      .populate({ path: "category", select: "name" }) 
      .populate({ path: "brand", select: "name" });

    return NextResponse.json({ status: 200, success: true, data });
  } catch (error) {
    return errorHandler(error);
  }
}
