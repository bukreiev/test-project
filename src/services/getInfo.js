import axios from 'axios';

const BASE_URL = 'https://6433fe641c5ed06c958c3ec2.mockapi.io/';
const endpoint = axios.create({
  baseURL: BASE_URL,
});
export async function getUsers() {
  const response = await endpoint(`users`);
  return response.data;
}
export async function addFollowers() {}
