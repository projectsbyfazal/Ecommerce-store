import CustomErrorHandler from "@/lib/CustomErrorHandler";
import dbConnect from "@/lib/db";
import { sendSuccessResponse } from "@/lib/reusable";
import { verifyAuthority } from "@/middleware/auth";
import errorHandler from "@/middleware/errorHandler";
import Brand from "@/models/Brand";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const validUser = verifyAuthority(request);
    if (!validUser) {
      return errorHandler(CustomErrorHandler.unAuthorized());
    }

    const { name } = await request.json();

    if (!name) {
      return NextResponse.json({
        status: 422,
        message: "Brand name is required",
      });
    }

    await dbConnect();
    
    // check is duplicate entry
    const isWithSameName = await Brand.exists({ name });
    if (isWithSameName)
      return errorHandler(
        CustomErrorHandler.alreadyExist(
          `Brand with (${name}) name already exist!`
        )
      );

    const brand = await Brand.create({ name });

    return sendSuccessResponse(brand, "Brand Created Successfully.");
  } catch (error) {
    return errorHandler(error);
  }
}

export async function GET(request) {
  try {
    await dbConnect();

    const brands = await Brand.find();

    return sendSuccessResponse(brands);
  } catch (error) {
    return errorHandler(error);
  }
}
