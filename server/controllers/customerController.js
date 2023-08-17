const Customer = require("../models/customerModel");


//GET ALL CUSTOMERS
const getAllCustomers = (req, res) => {
  Customer.find()
    .then((customers) => {
      res.status(200).json(customers);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};
//1. CREATE
const addCustomer = async (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.phone;
  const id_no = req.body.id_no;
  const nationality = req.body.nationality;
  const city = req.body.city;
  const occupation = req.body.occupation;
  const account_number = req.body.account_number;
  const customer_type = req.body.customer_type;
  const non_individual_reg_no = req.body.non_individual_reg_no;
  const non_individual_description = req.body.non_individual_description;
  const non_individual_date = req.body.non_individual_date;
  const non_individual_notes = req.body.non_individual_notes;

  //   res.json(req.body);
  if (
    !firstname ||
    !lastname ||
    !email ||
    !phone ||
    !id_no ||
    !nationality ||
    !city ||
    !occupation ||
    !account_number ||
    !customer_type ||
    !non_individual_date ||
    !non_individual_description ||
    !non_individual_notes ||
    !non_individual_reg_no
  ) {
    return res.status(400).json("all details required");
  }
  const customer = await Customer.findOne({ id_no: id_no });

  if (customer) {
    return res.status(400).json("the id number is already taken");
  }
  const newCustomer = new Customer({
    firstname,
    lastname,
    email,
    phone,
    id_no,
    nationality,
    city,
    occupation,
    account_number,
    customer_type,
    non_individual_reg_no,
    non_individual_description,
    non_individual_date,
    non_individual_notes,
  });

  newCustomer
    .save()
    .then((customer) => {
      res.status(201).json({
        message: "customer added successfully",
        customer,
      });
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
};

// DELETE
const deleteCustomer = async (req, res) => {
  const id = req.params.id;

  try {
    const customer = await Customer.findOne({ _id: id });

    if (!customer) {
      return res.status(400).json("customer does not exist or already deleted");
    }
    // res.json(customer);
    const deletedCustomer = await Customer.deleteOne({ _id: customer._id });
    res
      .status(200)
      .json({ message: "user deleted successfuly", deletedCustomer });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  addCustomer,
  getAllCustomers,
  deleteCustomer,
};
