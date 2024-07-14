import mongoose from "mongoose";

const userPreferencesSchema = new mongoose.Schema(
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
    saved_posts: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

export const userPreferencesModel = mongoose.model(
  "User_Preferences",
  userPreferencesSchema
);
