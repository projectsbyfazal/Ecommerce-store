import { NextResponse } from "next/server";
import { ValidationError } from "joi";
import CustomErrorHandler from "@/lib older/CustomErrorHandler.js";
import { DEBUG_MODE } from "@/config/index.js";

const errorHandler = (err) => {
    let statusCode = 500;
    let data = {
        message: "Internal server error",
        ...(DEBUG_MODE === "true" ? { originalError: err.message?.replaceAll('"', "") } : {})
    };

    if (err instanceof ValidationError) {
        statusCode = 422;
        data.message = "Invalid payload data";
    }

    if (err instanceof CustomErrorHandler) {
        statusCode = err.status;
        data.message = err.message;
    }

    return NextResponse.json({ status: statusCode, success: false,  error: data });
};

export default errorHandler;
