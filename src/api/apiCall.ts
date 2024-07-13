import axios from 'axios';

const base_url = 'http://18.210.108.177:4003/api/';

export const getPackages = async (packagelist: string) => {
  const response = await axios.get(base_url + packagelist);
  return response.data;
};
