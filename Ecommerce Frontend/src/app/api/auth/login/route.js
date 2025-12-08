import { setAuthCookie } from "@/lib/cookie";
import CustomErrorHandler from "@/lib/CustomErrorHandler";
import dbConnect from "@/lib/db";
import JwtService from "@/lib/JwtService";
import errorHandler from "@/middleware/errorHandler";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    await dbConnect();
    // find user using email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return errorHandler(CustomErrorHandler.wrongCredentials());
    }

    // compare hashed password with plain password
    const pwd_match = await bcrypt.compare(password, user.password);
    if (!pwd_match) {
      return errorHandler(CustomErrorHandler.wrongCredentials());
    }

    // creating access token
    const access_token = JwtService.sign({
      id: user._id,
      email: user.email,
      role: user.role,
    });

    let response = NextResponse.json({
      status: 200,
      success: true,
      access_token,
      user: `Hi, Welcome ${user.name}`,
    });

    // save token to cookie
    response = setAuthCookie(response, access_token);

    return response;
  } catch (error) {
    return errorHandler(error);
  }
}
