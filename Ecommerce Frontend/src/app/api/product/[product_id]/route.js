import { NextResponse } from "next/server";
import Product from "@/models/Product";
import dbConnect from "@/lib/db";
import errorHandler from "@/middleware/errorHandler";
import CustomErrorHandler from "@/lib/CustomErrorHandler";
import { verifyAuthority } from "@/middleware/auth";
import { productSchema } from "@/lib/ValidationSchemas";
import { sendSuccessResponse } from "@/lib/reusable";
import {
  createBuffersAndUpload,
  getPublicIdFromUrl,
} from "@/lib/uploadToCloudinary";
import cloudinary from "@/lib/cloudinary";

export async function GET(request, { params }) {
  try {
    const { product_id } = params; // dynamic param from URL

    // verify user
    const validUser = verifyAuthority(request);
    if (!validUser) {
      return errorHandler(CustomErrorHandler.unAuthorized());
    }

    await dbConnect();

    const product = await Product.findOne({ slug: product_id }).populate(
      "category",
      "name"
    );

    if (!product) {
      return errorHandler(CustomErrorHandler.notFound("Product Not Found!"));
    }

    return sendSuccessResponse(product, "Product updated successfully");
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PUT(request, { params }) {
  try {
    const { product_id } = params; // product ID from URL

    // verify user
    const validUser = verifyAuthority(request);
    if (!validUser) {
      return errorHandler(CustomErrorHandler.unAuthorized());
    }

    // Parse form-data
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

    // check product exists
    const existingProduct = await Product.findById(product_id);
    if (!existingProduct) {
      return errorHandler(CustomErrorHandler.notFound("Product not found!"));
    }

    // check duplicate name (exclude self)
    const isWithSameName = await Product.exists({
      name,
      _id: { $ne: product_id },
    });
    if (isWithSameName) {
      return errorHandler(
        CustomErrorHandler.alreadyExist(
          `Product with (${name}) name already exists!`
        )
      );
    }
    console.log("object");

    // validate
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
    if (error) {
      return errorHandler(error);
    }

    // ✅ upload new images if provided
    let imageUrls = existingProduct.images; // keep old images
    if (files && files.length > 0 && files[0].size > 0) {
      const newUrls = await createBuffersAndUpload(files);
      imageUrls = [...imageUrls, ...newUrls]; // merge old + new
    }

    // update product
    if (name && name !== existingProduct.name) {
      existingProduct.name = name?.trim();
      existingProduct.slug = name.toLowerCase().replaceAll(" ", "-").trim();
    }

    if (description && description !== existingProduct.description)
      existingProduct.description = description;

    if (price && price !== existingProduct.price) existingProduct.price = price;
    if (color && color !== existingProduct.color) existingProduct.color = color;

    if (material && material !== existingProduct.material)
      existingProduct.material = material;

    if (stockQuantity && stockQuantity !== existingProduct.stockQuantity)
      existingProduct.stockQuantity = stockQuantity;

    existingProduct.brand = brand || existingProduct.brand;
    existingProduct.category = category || existingProduct.category;
    existingProduct.images = imageUrls;

    await existingProduct.save();

    return NextResponse.json(
      {
        status: 200,
        success: true,
        message: "Product Updated Successfully",
        data: existingProduct,
      },
      { status: 200 }
    );
  } catch (error) {
    return errorHandler(error);
  }
}

export async function DELETE(request, { params }) {
  try {
    const { product_id } = params;

    if (!product_id) {
      return errorHandler({
        status: 422,
        message: "Product ID is required",
      });
    }

    await dbConnect();

    const product = await Product.findById(product_id);
    if (!product) {
      return errorHandler(CustomErrorHandler.notFound("Product Not Found."));
    }

    // delete product image from Cloudinary
    if (product.images) {
      const publicId = getPublicIdFromUrl(product.images);
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }
    }

    const data = await Product.findByIdAndDelete(product_id);

    return sendSuccessResponse(data.name, "Product Deleted Successfully.");
  } catch (error) {
    return errorHandler(error);
  }
}
