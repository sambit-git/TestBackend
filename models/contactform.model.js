import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const ContactForm = mongoose.model("ContactForm", ContactSchema);

export default ContactForm;
