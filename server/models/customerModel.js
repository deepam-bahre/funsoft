const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    id_no: { type: String, required: true },
    nationality: { type: String, required: true },
    city: { type: String, required: true },
    occupation: { type: String, required: true },
    account_number: { type: String, required: true },
    customer_type: { type: String, required: true },
    non_individual_reg_no: { type: String, required: true },
    non_individual_description: { type: String, required: true },
    non_individual_date: { type: String, required: true },
    non_individual_notes: { type: String, required: true },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
