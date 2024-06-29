import mongoose from "mongoose";

const newsletterSubscriptionSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    subscribed: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const newsletterSubscriptionModel = mongoose.model(
  "Newsletter_Subscription",
  newsletterSubscriptionSchema
);
