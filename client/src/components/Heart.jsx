// // import { AiFillHeart } from 'react-icons/ai'


// const Heart = () => {
//   return (
//     <AiFillHeart size={24} color='black' style={{position:'absolute', top:'25px', right:'30px',  zIndex:'1'}} />
    
//   )
// }

// export default Heart

// import { AiFillHeart } from 'react-icons/ai';

// const Heart = ({ id, isFavorite }) => {
//   return (
//     <AiFillHeart size={24} color={isFavorite ? 'red' : 'black'} style={{ position: 'absolute', top: '25px', right: '30px', zIndex: '1' }} />
//   );
// }

// export default Heart;

import  { useState } from 'react';


const Heart = ({ id, isFavorite }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    // Add logic to update the favorite state on the server or in your data array
  };

  return (
    <AiFillHeart size={24} color={favorite ? '#fa3e5f' : 'white'} style={{ position: 'absolute', top: '25px', right: '30px', zIndex: '1', cursor: 'pointer' }} onClick={toggleFavorite} />
  );
}

export default Heart;
