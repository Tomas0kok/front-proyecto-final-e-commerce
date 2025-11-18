import apiClient from "./apiClient";

export async function login(email, password) {
  const { data } = await apiClient.post("/users/auth/login", {
    email,
    password,
  });

  return data;
}

export async function registerUser({ firstname, lastname, email, password }) {
  const { data } = await apiClient.post("/users/auth/register", {
    firstname,
    lastname,
    email,
    password,
  });

  return data.user;
}
