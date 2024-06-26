import mongoose from "mongoose";

const preferencesSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    stripe_customer_id: {
      type: String,
      required: false,
    },
    subscription: {
      type: Boolean,
      required: false,
    },
    newsletter: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

export const preferencesModel = mongoose.model(
  "Preferences",
  preferencesSchema
);
