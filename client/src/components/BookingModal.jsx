// import { Modal, Button } from "@mantine/core";
// import { DatePicker } from "@mantine/dates";
// import React, { useState } from "react";

// const BookingModal = ({ opened, setOpened, email, propertyId }) => {

//   const [value, setValue] = useState(null);

//   return (
//     <Modal 
//       opened={opened}
//       onClose={() => setOpened(false)}
//       title="Select your date of visit"
//       centered
//     >
//       <div onClick={()=> console.log("cliked ")} >
//         <DatePicker  />
//         <Button >
//           Book visit
//         </Button>
//       </div>
      
//     </Modal>
//   );
// };

// export default BookingModal;


// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const BookingModal = ({ opened, setOpened, email, propertyId }) => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [value, setValue] = useState(null);

//   return (
//     <div>
//       {opened && (
//         // <div>
//         //   <DatePicker
//         //     selected={selectedDate}
//         //     onChange={(date) => setSelectedDate(date)}
//         //     minDate={new Date()}
//         //     placeholderText="Select your date of visit"
//         //   />
//         //   <button onClick={() => setOpened(false)}>Close</button>
//         // </div>
//         <div className="flexColCenter" style={{gap: "1rem"}}>
//         <DatePicker value={value} onChange={setValue} minDate={new Date()} />
//         <button disabled={!value || isLoading} onClick={() => mutate()}>
//           Book visit
//         </button>
//       </div>
//       )}
//     </div>
//   );
// };

// export default BookingModal;



// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { Button, Modal } from '@mui/material';

// function BookingModal() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [open, setOpen] = useState(false);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleOpenModal = () => {
//     setOpen(true);
//   };

//   const handleCloseModal = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={handleOpenModal}>
//         Book Now
//       </Button>
//       <Modal open={open} onClose={handleCloseModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <div style={{ padding: 16 }}>
//           <DatePicker
//             selected={selectedDate}
//             onChange={handleDateChange}
//             showTimeSelect
//             timeFormat="HH:mm"
//             timeIntervals={15}
//             timeCaption="Time"
//             dateFormat="MMMM d, yyyy h:mm aa"
//             isClearable={false}
//           />
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default BookingModal;


// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import { Button, Modal } from '@mui/material';

// function BookingModal() {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [open, setOpen] = useState(false);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleOpenModal = () => {
//     setOpen(true);
//   };

//   const handleCloseModal = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="contained" onClick={handleOpenModal}>
//         Book Now
//       </Button>
//       <Modal open={open} onClose={handleCloseModal}>
//         <Calendar
//           onChange={handleDateChange}
//           value={selectedDate}
//         />
//       </Modal>
//     </div>
//   );
// }
// export default BookingModal;






import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function BookingModal() {
  const [selected, setSelected] = useState(null);

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}

// export default BookingModal;
