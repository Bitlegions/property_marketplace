import { useAuth0 } from '@auth0/auth0-react';
import  { useContext, useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { useMutation } from 'react-query';
import UserDetailContext from '../context/UserDetailContext';
import useAuthCheck from '../hooks/useAuthCheck';
import { toFav } from '../utils/api';


const Heart = ({ id, isFavorite }) => {
  
  // const [favorite, setFavorite] = useState(isFavorite);
  const [heartColor, setHeartColor] = useState("white")
  const { validateLogin } = useAuthCheck();
  const {user} = useAuth0()
  const {
    userDetails: { favourites, token },
    setuserDetails  
  } = useContext(UserDetailContext);

  // const updateFavourites = (id, favourites) => {
  //   if (favourites?.includes(id)) {
  //     return favourites.filter((resId) => resId !== id);
  //   } else {
  //     return [...favourites, id];
  //   }
  // };

  const updateFavourites = (id, favourites) => {
    if (!Array.isArray(favourites)) {
      favourites = [];
    }
    if (favourites.includes(id)) {
      return favourites.filter((resId) => resId !== id);
    } else {
      return [...favourites, id];
    }
  };
  

  const checkFavourites = (id, favourites) => {
    return favourites?.includes(id) ? "#fa3e5f" : "white";
  };
  useEffect(()=> {
    setHeartColor(()=> checkFavourites(id, favourites))
},[favourites])
  

  const {mutate} = useMutation({
    // mutationFn: () => toFav(id, user?.email, token),
    mutationFn: () => toFav(id, user?.email),
    onSuccess: ()=> {
      setuserDetails((prev)=> (
            {
                ...prev,
                favourites: updateFavourites(id, prev.favourites)
            }
        ))
    }
})

  const handleLike = () => {
    if(validateLogin())
    {
        mutate()
        setHeartColor((prev)=> prev === "#fa3e5f" ? "white": "#fa3e5f")
    }
}

  return (
    // <AiFillHeart size={24} color={favorite ? '#fa3e5f' : 'white'} style={{ position: 'absolute', top: '25px', right: '30px', zIndex: '0', cursor: 'pointer' }} onClick={toggleFavorite} />
    <AiFillHeart size={24} color={heartColor} style={{ position: 'absolute', top: '25px', right: '30px', zIndex: '0', cursor: 'pointer' }} 
      onClick={(e)=> {
      e.stopPropagation()
      handleLike()
  }}/>

  );
}

export default Heart;
