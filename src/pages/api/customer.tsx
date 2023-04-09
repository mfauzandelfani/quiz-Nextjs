import axios from "axios";

const GetData = async () => {
  try {
    const result = await axios.get("http://localhost:3002/customer");
    return result.data;
  } catch (error) {
    return error;
  }

  
};

export default{
    GetData
}