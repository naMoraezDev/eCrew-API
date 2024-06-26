import mongoose from "mongoose";

const preferencesSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    subscription: {
      type: String,
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
