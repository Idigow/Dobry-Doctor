const Client = require("../models/Client.model");

module.exports.clientController = {
  getAllClients: async (req, res) => {
    const users = await Client.find();
    res.json(users);
  },
  getClientById: async (req, res) => {
    const user = await Client.findById(req.user.id);
    await res.json(user);
  },
  createClient: async (req, res) => {
    try {
      const { firstName, lastName, fathersName, phoneNumber, secondPhoneNumber } = req.body;
      const client = await Client.create({
        firstName,
        lastName,
        fathersName,
        phoneNumber,
        secondPhoneNumber
      })
      await res.json(client);
    } catch (e) {
      return res.status(400).json({
        error: "Ошибка при создании клиента " + e.toString(),
      });
    }
  },
};
