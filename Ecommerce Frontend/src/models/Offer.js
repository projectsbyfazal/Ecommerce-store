import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    discountType: { type: String, enum: ["flat", "percent"], required: true },
    discountValue: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Offer || mongoose.model("Offer", offerSchema);
