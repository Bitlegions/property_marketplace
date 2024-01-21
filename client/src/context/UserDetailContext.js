// import {createContext} from 'react'

// const UserDetailContext = createContext();

// export default UserDetailContext;


import { createContext } from 'react'
const UserDetailContext = createContext({
    userDetails: { bookings: [], favourite: [], token:null },
    setUserDetails: () => {},
  });
export default UserDetailContext;