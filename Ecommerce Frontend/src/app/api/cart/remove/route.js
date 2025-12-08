import CustomErrorHandler from "@/lib/CustomErrorHandler";
import { sendSuccessResponse } from "@/lib/reusable";
import { verifyAuthority } from "@/middleware/auth";
import errorHandler from "@/middleware/errorHandler";
import Cart from "@/models/Cart";

// {
//     "userId": "68cbb8ae90ac182f03b291ab",
//     "productId": "68cbbd1b90ac182f03b291cb",
//     "quantity": "5"
// }

export async function POST(request) {
    try {
        const { productId } = await request.json();

        if (!productId) {
            return errorHandler({ status: 400, message: "Missing productId." })
        }

        const validUser = verifyAuthority(request)
        if (!validUser) {
            return errorHandler(CustomErrorHandler.unAuthorized());
        }

        const cart = await Cart.findOne({ userId: validUser.id });

        if (!cart) {
            return errorHandler({ status: 400, message: "Cart is not Found." })
        }

        const cartIndex = cart.items.findIndex(item => (item.productId.toString() === productId))

        if (cartIndex > -1) {
            cart.items.splice(cartIndex, 1)
        } else {
            return errorHandler({ status: 400, message: "Product not found." })
        }

        await cart.save()

        return sendSuccessResponse(cart, "Product Removed Successfully.")

    } catch (error) {
        return errorHandler(error)
    }
}