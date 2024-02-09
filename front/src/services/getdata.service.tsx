import axios from "axios";

export const getDataService = async (page: number, maxNumber: number = 10) => {
  try {
    const response = await axios.get(`http://localhost:3000/data/${page}/${maxNumber}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}