import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function BookingModal() {
  const [selected, setSelected] = useState(null);

  let footer = <p style={{ fontSize: '1.3rem' }} >Please pick a day.</p>;
  if (selected) {
    footer = <p style={{ fontSize: '1.3rem' }}  >You picked {format(selected, 'PP')}.</p>;
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

export default BookingModal;
