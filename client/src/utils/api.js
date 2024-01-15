import axios from 'axios'
// import dayjs from 'dayjas'
import {toast} from 'react-toastify';

export const api =axios.create({
    baseURL:'http://localhost:5555'
})

export const getAllProperties = async ()=> {
    try {
        const response = await api.get("/api/residency/getAllRes", {
            timeout:10*1000,
        })
        if (response.status === 400 || response.status === 500){
            throw response.data
        }
        console.log(response.data);
        return response.data
    } catch (error) {
        toast.error("Something went wrong!");
        throw error;
        
    }
}