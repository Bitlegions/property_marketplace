import axios from 'axios'
// import dayjs from 'dayjas'
import {toast} from 'react-toastify';

export const api =axios.create({
    baseURL:'http://localhost:5555/api'
})

export const getAllProperties = async ()=> {
    try {
        const response = await api.get("/residency/getAllRes", {
            timeout:10*1000,
        })
        if (response.status === 400 || response.status === 500){
            throw response.data
        }
        return response.data
    } catch (error) {
        toast.error("Something went wrong!");
        throw error;
        
    }
}

export const getProperty = async (id)=> {
    try {
        const response = await api.get(`/residency/${id}`, {
            timeout:10*1000,
        })
        if (response.status === 400 || response.status === 500){
            throw response.data
        }
        return response.data
    } catch (error) {
        toast.error("Something went wrong!");
        throw error;
        
    }
}

export const createUser = async (email, token) => {
    console.log("1 user email: " + email + "token is : " + token);

    try {
      await api.post( `/user/register`, { email } ,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        } 
      );
      console.log("2 user email: " + email + "token is : " + token);
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      throw error;
    }
    console.log("createUser is called in api.js");
  };