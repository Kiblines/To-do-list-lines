const axios = require("axios");

const API_BASE_URL = "http://localhost:3000"; // URL du serveur JSON

const createTask = async (task) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la création de la tâche");
  }
};
