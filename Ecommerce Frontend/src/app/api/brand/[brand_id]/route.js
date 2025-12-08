import CustomErrorHandler from "@/lib/CustomErrorHandler";
import dbConnect from "@/lib/db";
import { sendSuccessResponse } from "@/lib/reusable";
import { verifyAuthority } from "@/middleware/auth";
import errorHandler from "@/middleware/errorHandler";
import Brand from "@/models/Brand";

export async function PUT(request, { params }) {
  try {
    const validUser = verifyAuthority(request);
    if (!validUser) {
      return errorHandler(CustomErrorHandler.unAuthorized());
    }

    const { brand_id } = params;
    const { name } = await request.json();

    if (!brand_id) {
      return errorHandler({
        status: 422,
        message: "Brand ID is required",
      });
    }

    await dbConnect();

    // find brand
    const brand = await Brand.findById(brand_id);
    if (!brand) {
      return errorHandler(CustomErrorHandler.notFound("Brand not found!"));
    }

    // check duplicate name (ignore current category)
    if (name) {
      const duplicate = await Brand.exists({
        name,
        _id: { $ne: brand_id },
      });
      if (duplicate) {
        return errorHandler(
          CustomErrorHandler.alreadyExist(
            `Brand with (${name}) name already exist!`
          )
        );
      }
      brand.name = name;
    }

    await brand.save();

    return sendSuccessResponse(brand, "Brand Updated Ssuccessfully.");
  } catch (error) {
    return errorHandler(error);
  }
}

export async function GET(request, { params }) {
  try {
    const { brand_id } = params;

    await dbConnect();

    const brand = await Brand.findById(brand_id);

    if (!brand) {
      return errorHandler(CustomErrorHandler.notFound("Brand Not Found."));
    }

    return sendSuccessResponse(brand);
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

    const { brand_id } = params;

    if (!brand_id) {
      return errorHandler({
        status: 422,
        message: "Category ID is required",
      });
    }

    await dbConnect();

    // delete brand from DB
    const brand = await Brand.findByIdAndDelete(brand_id);

    if (!brand) {
      return errorHandler(CustomErrorHandler.notFound("Brand not found!"));
    }

    return sendSuccessResponse(brand.name, "Brand deleted successfully.");
  } catch (error) {
    return errorHandler(error);
  }
}
