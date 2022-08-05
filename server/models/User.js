import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Por favor informe o nome"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Por favor informe o email"],
    validate: {
      validator: validator.isEmail,
      message: "por favor informe um email valido",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Por favor informe a senha"],
    minlength: 6,
  },
  lastName: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "Último Nome",
  },
  location: {
    type: String,
    trim: true,
    maxlength: 20,
    default: "minha cidade",
  },
});

export default mongoose.model("User", UserSchema);
