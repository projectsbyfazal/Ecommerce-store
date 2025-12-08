import cloudinary from "@/lib/cloudinary";
import CustomErrorHandler from "@/lib/CustomErrorHandler";
import dbConnect from "@/lib/db";
import { sendSuccessResponse } from "@/lib/reusable";
import {
  createBuffersAndUpload,
  getPublicIdFromUrl,
} from "@/lib/uploadToCloudinary";
import { verifyAuthority } from "@/middleware/auth";
import errorHandler from "@/middleware/errorHandler";
import Category from "@/models/Category";

export async function PUT(request, { params }) {
  try {
    const validUser = verifyAuthority(request);
    if (!validUser) {
      return errorHandler(CustomErrorHandler.unAuthorized());
    }

    const { category_id } = params;
    const formData = await request.formData();
    const name = formData.get("name");
    let image = formData.get("image");

    if (!category_id) {
      return errorHandler({
        status: 422,
        message: "Category ID is required",
      });
    }

    await dbConnect();

    // find category
    const category = await Category.findById(category_id);
    if (!category) {
      return errorHandler(CustomErrorHandler.notFound("Category not found!"));
    }

    // check duplicate name (ignore current category)
    if (name) {
      const duplicate = await Category.exists({
        name,
        _id: { $ne: category_id },
      });
      if (duplicate) {
        return errorHandler(
          CustomErrorHandler.alreadyExist(
            `Category with (${name}) name already exist!`
          )
        );
      }
      category.name = name;
    }

    // if new image provided -> upload to cloudinary
    if (image) {
      if (!Array.isArray(image)) {
        image = [image];
      }

      const uploadedUrls = await createBuffersAndUpload(image);
      if (uploadedUrls?.length) {
        // remove old image from cloudinary
        if (category.imageUrl) {
          const oldPublicId = getPublicIdFromUrl(category.imageUrl);
          if (oldPublicId) {
            await cloudinary.uploader.destroy(oldPublicId);
          }
        }

        category.imageUrl = uploadedUrls[0]; // overwrite old image
      }
    }

    await category.save();

    return sendSuccessResponse(category, "Category Updated Successfully.");
  } catch (error) {
    return errorHandler(error);
  }
}

export async function GET(request, { params }) {
  try {
    const { category_id } = params;

    await dbConnect();

    const category = await Category.findById(category_id).populate(
      "addedBy",
      "name"
    );

    if (!category) {
      return errorHandler(CustomErrorHandler.notFound("Category Not Found."));
    }

    return sendSuccessResponse(category);
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const validUser = verifyAuthority(request);
    if (!validUser) {
      return errorHandler(CustomErrorHandler.unAuthorized());
    }

    const { category_id } = params;

    if (!category_id) {
      return errorHandler({
        status: 422,
        message: "Category ID is required",
      });
    }

    await dbConnect();

    // delete category from DB
    const category = await Category.findByIdAndDelete(category_id);
    if (!category) {
      return errorHandler(CustomErrorHandler.notFound("Category not found!"));
    }

    // delete category image from Cloudinary
    if (category.imageUrl) {
      const publicId = getPublicIdFromUrl(category.imageUrl);
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }
    }

    return sendSuccessResponse(category.name, "Category Deleted Successfully.");
  } catch (error) {
    return errorHandler(error);
  }
}
