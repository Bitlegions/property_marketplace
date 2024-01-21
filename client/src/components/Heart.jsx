import  { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';


const Heart = ({ id, isFavorite }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    // zIndex: '1' before 
    <AiFillHeart size={24} color={favorite ? '#fa3e5f' : 'white'} style={{ position: 'absolute', top: '25px', right: '30px', zIndex: '0', cursor: 'pointer' }} onClick={toggleFavorite} />
  );
}

export default Heart;
