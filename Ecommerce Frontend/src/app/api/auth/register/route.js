import CustomErrorHandler from "@/lib/CustomErrorHandler";
import dbConnect from "@/lib/db";
import JwtService from "@/lib/JwtService";
import { registerUserSchema } from "@/lib/ValidationSchemas";
import errorHandler from "@/middleware/errorHandler";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
    try {
        const userData = await request.json();
        // [ ] validate the request
        const { error } = registerUserSchema.validate(userData);
        if (error) {
            return errorHandler(error);
        }

        const { name, email, password } = userData;

        await dbConnect();

        // [ ] check if user is in the database already
        const isAlreadyExist = await User.exists({ email });

        if (isAlreadyExist) {
            return errorHandler(CustomErrorHandler.alreadyExist("User already exist!"));
        }

        // encrypt the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // [ ] prepare model & store in database
        const user = await User.create({ name, email, password: hashedPassword })

        // [ ] generate jwt token
        const access_token = JwtService.sign({ id: user._id, email: user.email })

        // [ ] send response 
        return NextResponse.json({ status: 200, success: true, access_token, user })

    } catch (error) {
        return errorHandler(error)
    }

}