const pharmacy = require("../models/Pharmacy");

const redis = require("../db/redis");
exports.register = async (req, res) => {
  try {
    const { name, address, contact } = req.body;
    if (!name || !address || !contact) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    const check = await pharmacy.findOne({ name });
    if (check) {
      return res.status(400).json({
        success: false,
        message: "Pharmacy already exist",
      });
    }

    const user = await pharmacy.create({
      name,
      contact,
      address,
    });
    await redis.del("products");

    return res.status(200).json({
      success: true,
      user,
      message: "Pharmacy registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};
