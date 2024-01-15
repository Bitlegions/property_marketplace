import React from 'react'
import PropertyCard from '../components/Propertycard';
import Search from '../components/Search';
import useProperties from '../hooks/useProperties';

const Properties = () => {
  const {data, isLoading, isError } = useProperties()
  // console.log(data);
  return (
    <>
      <Search />
      <PropertyCard />
    </>
  )
}

export default Properties