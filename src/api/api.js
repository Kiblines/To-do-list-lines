import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // URL du serveur JSON

//POST
export const createTask = async (task) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/tasks`, task);
    return response.data;
  } catch (error) {
    if (error.response) {
      // La requête a été effectuée, mais le serveur a répondu avec un code d'erreur
      throw new Error(
        `Erreur ${error.response.status}: ${error.response.data.message}`
      );
    } else if (error.request) {
      // La requête a été effectuée, mais il n'y a pas eu de réponse du serveur
      throw new Error(
        "Pas de réponse du serveur. Veuillez réessayer plus tard."
      );
    } else {
      // Une erreur s'est produite lors de la configuration de la requête
      throw new Error(
        "Une erreur s'est produite. Veuillez réessayer plus tard."
      );
    }
  }
};

export const getTasks = async () =>
  await axios({
    method: "get",
    url: `${API_BASE_URL}/tasks`,
  });

export const updateTasks = async (id, task) =>
  await axios({
    method: "put",
    url: `${API_BASE_URL}/tasks/${id}`,
    data: task,
  });
