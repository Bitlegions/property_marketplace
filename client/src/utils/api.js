import axios from 'axios'
import {toast} from 'react-toastify';
import dayjs from 'dayjs'

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

    try {
      await api.post( `/user/register`, { email } ,
        {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        } 
      );
      toast.success("Create account successfully", {
        position: "bottom-right",
      });
    } catch (error) {
      // toast.error("Something went wrong, Please try again");
      throw error;
    }
    console.log("createUser is called in api.js");
  };


  export const bookVisit = async (date, propertyId, email, token) => {
    try {
      await api.post(
        `/user/bookVisit/${propertyId}`,
        {
          email,
          id: propertyId,
          date: dayjs(date).format("DD/MM/YYYY"),
        },
        {
          // headers: { 
          //   Authorization: `Bearer ${token}`,
          // },
        }
      );
    } catch (error) {
      toast.error("Something went wrong, Please try again");
      throw error;
    }
  };


  export const removeBooking = async (id, email, token) => {
    try {
      await api.post(
        `/user/removeBooking/${id}`, {email},
        {
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        }
      );
      toast.error("Cancle booking successfully", {
        position: "bottom-right",
      });
    } catch (error) {
      toast.error("Something went wrong, Please try again");
  
      throw error;
    }
  };