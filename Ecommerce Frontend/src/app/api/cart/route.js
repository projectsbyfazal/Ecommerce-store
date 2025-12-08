import CustomErrorHandler from "@/lib/CustomErrorHandler";
import dbConnect from "@/lib/db";
import { sendSuccessResponse } from "@/lib/reusable";
import { verifyAuthority } from "@/middleware/auth";
import errorHandler from "@/middleware/errorHandler";
import Cart from "@/models/Cart";

export async function POST(request) {
  try {
    const validUser = verifyAuthority(request);
    if (!validUser) {
      return errorHandler(CustomErrorHandler.unAuthorized());
    }

    let { userId, productId, quantity } = await request.json();

    quantity = Number(quantity);

    if (!userId || !productId) {
      return errorHandler({
        status: 400,
        message: "Missing userId or productId"
      });
    }

    await dbConnect();

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity: quantity || 1 }],
      });
    } else {
      const cartIndex = cart.items.findIndex(
        (item) => item.productId.toString() === productId
      );
      if (cartIndex > -1) {
        cart.items[cartIndex].quantity += quantity || 0;

        if (cart.items[cartIndex].quantity <= 0)
          cart.items.splice(cartIndex, 1);
      } else {
        if (quantity <= 0) {
          return errorHandler({
            status: 400,
            message: "Provide minimum 1 quantity.",
          });
        }
        cart.items.push({ productId, quantity: quantity || 1 });
      }
    }

    await cart.save();

    return sendSuccessResponse(cart, "Product added to cart.");
  } catch (error) {
    return errorHandler(error);
  }
}
