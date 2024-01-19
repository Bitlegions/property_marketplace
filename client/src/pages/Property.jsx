import React, { useContext, useState } from 'react'
import { useMutation, useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';
import Heart from '../components/Heart';
import { getProperty, removeBooking } from '../utils/api';
import { FaShower } from "react-icons/fa";
import { AiTwotoneCar } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import Map from '../components/Map';
import useAuthCheck from '../hooks/useAuthCheck';
import { useAuth0 } from '@auth0/auth0-react';
import BookingModal from '../components/BookingModal';
import UserDetailContext from '../context/UserDetailContext'
import { toast } from 'react-toastify';

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isLoading, isError } = useQuery(["resd", id], () => getProperty(id));
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { token, bookings },
    setUserDetails
  } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({ 
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));

      toast.success("Booking cancelled", { position: "bottom-right" });
    },
  });

  if (isError) {
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <span>Error while fetching data!</span>
    </div>
  }
  if (isLoading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '60vh', marginTop: '30vh' }}>
        <PuffLoader height="80" width="80" radius={1} color="#4066ff" aria-label='puff-loadingz' />
      </div>
    )
  }
  return (
    <div style={{ gap: '2rem', position: 'relative', marginTop: '20px', fontWeight: 450 }} className='container'>
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', cursor: 'pointer' }} className="like">
        <Heart />
      </div>
      <img src={data?.image} style={{ alignSelf: 'center', maxHeight: '35rem', width: '100%', borderRadius: '1rem', objectFit: 'cover' }} />
      {/* left side  */}

      <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        {/* left */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* head */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '10px' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{data?.title}</span>
            <span style={{ color: 'orange', fontSize: '1.5rem', marginLeft: '0.5rem' }}>$ {data?.price}</span>
          </div>

          {/* facilities */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row', gap: '2rem', marginTop: '7px' }}>
            {/* bathrooms */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaShower size={20} color="#1F3E72" />
              <span>{data?.facilities?.bathrooms} Bathrooms</span>
            </div>

            {/* parkings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AiTwotoneCar size={20} color="#1F3E72" />
              <span>{data?.facilities.parkings} Parking</span>
            </div>

            {/* rooms */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '7px' }}>
              <MdMeetingRoom size={20} color="#1F3E72" />
              <span>{data?.facilities.bedrooms} Room/s</span>
            </div>
          </div>

          {/* description */}
          <span style={{ fontSize: '1rem', textAlign: 'justify', marginTop: '7px' }}>
            {data?.description}
          </span>

          {/* address */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '7px' }}>
            <MdLocationPin size={25} />
            <span style={{ fontSize: '1rem', fontWeight: 650 }}>
              {data?.address} {data?.city} {data?.country}
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>

            {/* Map componenet */}
            <div className="map" style={{ width: '60%', height: '100%', paddingBottom: '70px' }}>
              <Map address={data?.address} city={data?.city} country={data?.country} />
            </div>

            <div>
              {/* Bokking model  */}
              <BookingModal
                propertyId={id}
                email={user?.email}
              />


              {/* Booking button */}
              {bookings?.map((booking) => booking.id).includes(id) ? (
                <>
                  <button
                    className='btn btn-danger' style={{  width:'15rem', maxWidth: '15rem', marginTop: '10px', marginLeft: '11px', padding: '10px', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}
                    onClick={()=>cancelBooking()}
                    disabled={cancelling}
                    >
                    Cancel Booking
                  </button>
                  <div style={{ marginLeft: '11px', fontSize: '1.2rem'}}>
                    Your visit already booked for date{" "}
                    {bookings?.filter((booking) => booking?.id === id)[0].date}
                  </div>
                </>
              ) : ( 
                <button
                  onClick={() => {
                    validateLogin()

                  }}
                  className='btn btn-dark' style={{ width:'15rem', maxWidth: '15rem', marginTop: '10px', marginLeft: '11px', padding: '10px', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}>
                  Book your visit
                </button>)

              }
            </div>

          </div>


        </div>
      </div>
    </div>

  )
}

export default Property