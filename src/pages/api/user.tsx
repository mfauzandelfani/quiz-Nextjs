import axios from "axios";
import { domain } from "../../config/config";
import { getCookie } from "cookies-next";

const signup = async (params: any) => {
  try {
    const result = await axios.post(`${domain}/auth/signup`, params);
    return result;
  } catch (error) {
    return error;
  }
};

const signin = async (params: any) => {
  try {
    const result = await axios.post(`${domain}/auth/signin`, params);
    return result;
  } catch (error) {
    return error;
  }
};

const profile = async () => {
  axios.defaults.headers.common = {
    Authorization: `Bearer ${getCookie("access-token")}`,
  };
  try {
    const result = await axios.get(`${domain}/auth/profile`);
    return result;
  } catch (error) {
    return error;
  }
};

export default {
  signup,
  signin,
  profile,
};
