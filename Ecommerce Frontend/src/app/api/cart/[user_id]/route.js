import CustomErrorHandler from "@/lib/CustomErrorHandler";
import dbConnect from "@/lib/db";
import { sendSuccessResponse } from "@/lib/reusable";
import { verifyAuthority } from "@/middleware/auth";
import errorHandler from "@/middleware/errorHandler";
import Cart from "@/models/Cart";

export async function GET(request, { params }) {
    try {
        const { user_id } = params;

        const validUser = verifyAuthority(request);
        if (!validUser) {
            return errorHandler(CustomErrorHandler.unAuthorized());
        }

        await dbConnect()

        const cart = await Cart.findOne({ userId: user_id }).populate({
            path: "items.productId",
            select: "name price images category",
            populate: {
                path: "category",
                select: "name"
            }
        })

        if (!cart) {
            return errorHandler(CustomErrorHandler.notFound("No Cart is available."))
        } 

        return sendSuccessResponse(cart)
    } catch (error) {
        return errorHandler(error)
    }
}