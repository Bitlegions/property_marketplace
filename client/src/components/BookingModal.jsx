import { useContext, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useMutation } from 'react-query';
import UserDetailContext from '../context/UserDetailContext'
import { bookVisit } from '../utils/api';
import { toast } from 'react-toastify';

function BookingModal({ email, propertyId }) {

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
      setUserDetails  
    } = useContext(UserDetailContext);
    console.log("token in BookinModal is : " + token );

    const handleBookingSuccess = () => {
      toast.success("You have booked your visit", {
        position: "bottom-right",
      });
      setUserDetails((prev) => ({
        ...prev,
        bookings: [
          ...prev.bookings,
          {
            id: propertyId,
            date: dayjs(value).format("DD/MM/YYYY"),
          },
        ],
      }));
    };

    const { mutate, isLoading } = useMutation({
      mutationFn: () => bookVisit(value, propertyId, email, token),
    onSuccess: () => handleBookingSuccess(),
    onError: ({ response }) => toast.error(response.data.message)
    })
  return (
    <DayPicker
      mode="single"
      selected={value}
      onSelect={setvalue}
      footer={<p style={{ fontSize: '1.3rem' }}  >You picked {format(value, 'PP')}.</p>}
      disabled={isPastDay || isLoading}
    />
  );
}

export default BookingModal;
