import axios from 'axios'
import { toast } from 'react-toastify';
import dayjs from 'dayjs'

export const api = axios.create({
  baseURL: 'http://localhost:5555/api'
})

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/getAllRes", {
      timeout: 10 * 1000,
    })
    if (response.status === 400 || response.status === 500) {
      throw response.data
    }
    return response.data
  } catch (error) {
    toast.error("Something went wrong!");
    throw error;

  }
}

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    })
    if (response.status === 400 || response.status === 500) {
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
    await api.post(`/user/register`, { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    toast.success("Create account successfully", {
      position: "bottom-right",
    });
  } catch (error) {
    toast.error("Something went wrong while creating user, Please try again");
    throw error;
  }
  console.log("createUser is called in api.js");
};


export const bookVisit = async (date, propertyId, email, token) => {
// export const bookVisit = async (date, propertyId, email) => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: { 
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    // toast.error("Something went wrong, Please try again");
    throw error;
  }
};


export const removeBooking = async (id, email, token) => {
// export const removeBooking = async (id, email) => {
  try {
    await api.post(
      `/user/cancelBooking/${id}`, { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    toast.error("Your visit has been cancelled", {
      position: "bottom-right",
    });
  } catch (error) {
    toast.error("Something went wrong while canceling bookiong, Please try again");

    throw error;
  }
};


export const toFav = async (id, email, token) => {
// export const toFav = async (id, email) => {
  try {
    await api.post(
      `/user/toFav/${id}`, {email},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};


export const getAllfavs = async (email, token) => {
// export const getAllfavs = async (email) => {
  // if(!token) return 
  try {

    const res = await api.post(
      `/user/getAllfavs`, {email},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["favResidenciesId"]

  } catch (error) {
    // toast.error("Something went wrong while fetching favs");
    console.log("Something went wrong while fetching favs");
    throw error
  }
} 

export const getAllBookings = async (email, token) => {
// export const getAllBookings = async (email) => {
  // if(!token) return 
  console.log("email & tokern in getAllBookings: ");
  console.log(email);
  console.log(token);
  try {
    const res = await api.post(
      `/user/getAllBookings`, { email },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["bookedVisits"]

  } catch (error) {
    // toast.error("Something went wrong while fetching bookings");
    console.log("Something went wrong while fetching bookings");
    throw error
  }
} 

export const createResidency = async (data, token) => {
  try{
    await api.post( `/residency/create`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  }catch(error)
  {
    throw error
  }
}