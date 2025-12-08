import CustomErrorHandler from "@/lib/CustomErrorHandler";
import dbConnect from "@/lib/db";
import { verifyAuthority } from "@/middleware/auth";
import errorHandler from "@/middleware/errorHandler";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        await dbConnect();

        const validUser = verifyAuthority(request);

        if (!validUser) {
            return errorHandler(CustomErrorHandler.unAuthorized())
        } 

        const data = await User.find({}, "-password"); // hide password field

        return NextResponse.json({ status: 200, success: true, data })
    } catch (error) {
        return errorHandler(error)
    }

} 