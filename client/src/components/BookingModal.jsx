import { useContext, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useMutation } from 'react-query';
import UserDetailContext from '../context/UserDetailContext'
import { bookVisit } from '../utils/api';
import { toast } from 'react-toastify';
import useAuthCheck from '../hooks/useAuthCheck';
import dayjs from 'dayjs';

function BookingModal({ email, propertyId }) {

  const { validateLogin } = useAuthCheck();

  const [value, setvalue] = useState(new Date());
  const today = new Date();
  const minDate = today;
  const isPastDay = (day) => day < minDate && !isSameDay(day, today);
  const isSameDay = (date1, date2) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

    const {
      userDetails: { token },
      setuserDetails  
    } = useContext(UserDetailContext);

    
    const handleBookingSuccess = () => {
      toast.success("You have booked your visit", {
        position: "bottom-right",
      });
      
      setuserDetails((prev) => {
        return {
          ...prev,
          bookings: [
            ...prev.bookings,
            {
              id: propertyId,
              date: dayjs(value).format("DD/MM/YYYY"),
            },
          ],
        };
      });
    };
    

    const { mutate, isLoading } = useMutation({
      mutationFn: () => bookVisit(value, propertyId, email, token),
      // mutationFn: () => bookVisit(value, propertyId, email),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message)
    })

  return (
    <>
      <DayPicker
        mode="single"
        selected={value}
        onSelect={setvalue}
        footer={<p style={{ fontSize: '1.3rem' }}  >You picked {format(value, 'PP')}.</p>}
        disabled={isPastDay || isLoading}
      />
      <button
        onClick={() => {
          validateLogin()
          mutate()
        }}
        className='btn btn-dark' style={{ width:'15rem', maxWidth: '15rem', marginTop: '10px', marginLeft: '11px', padding: '10px', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}>
        Book your visit
        </button>
      </>
  );
}

export default BookingModal;
