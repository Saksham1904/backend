const medicine = require("../models/Medicine");

exports.create = async (req, res) => {
  try {
    const { name, des, price, discount } = req.body;
    if (!name || !price || !des || !discount) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    const newmed = await medicine.create({
      name,
      price,
      des,
      discount,
    });

    return res.status(200).json({
      success: true,
      newmed,
      message: "Medicine created",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Medicine not created",
    });
  }
};

exports.updatemed = async (req, res) => {
  try {
    const { medid } = req.query.id;
    console.log(medid);
    const med = await medicine.findById(medid);

    const updates = req.body;
    console.log(updates);
    if (!med) {
      return res.status(404).json({ error: "Medicine not found" });
    }
    for (const key in updates) {
      if (updates.hasOwnProperty(key)) {
        med[key] = updates[key];
      }
    }
    await med.save();
    return res.status(200).json({
      success: true,
      message: "updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      success: false,
      message: "medicine not updated",
    });
  }
};

exports.delmed = async (req, res) => {
  try {
    const { medid } = req.query.id;
    const med = await medicine.findById(medid);

    if (!med) {
      return res.status(404).json({ error: "Medicine not found" });
    }

    await medicine.findByIdAndDelete(medid);

    return res.status(200).json({
      success: true,
      message: " deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
