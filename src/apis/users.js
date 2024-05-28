import axios from "axios";
import { SERVER_URL } from "./config";

const API_URL = `${SERVER_URL}/users`;

export const getUsers = async () => {
  try {
    const res = await axios.get(API_URL);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
export const getUser = async id => {
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
export const postUser = async ({ id, name, role }) => {
  try {
    const res = await axios.post(API_URL, { id, name, role });
    console.log(res.data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
export const deleteUser = async id => {
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
export const putUser = async ({ id, name, role }) => {
  try {
    const res = await axios.put(`${API_URL}/${id}`, { name, role });
    console.log(res.data);
  } catch (error) {
    console.log(error);
    alert(error);
  }
};
