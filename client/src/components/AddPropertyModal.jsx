import Modal from 'react-modal';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Container } from '@mui/material';
import AddLocation from './AddLocation';
import { useAuth0 } from '@auth0/auth0-react';
import UploadImage from './UploadImage';
import BasicDetails from './BasicDetails';
import Facilities from './Facilities';

const AddPropertyModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const { user } = useAuth0();

  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    description: '',
    price: 0,
    country: '',
    city: '',
    address: '',
    image: null,
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    userEmail: user?.email,
  });

  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current)); 
  };

  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
    <Modal
      isOpen={opened}
      onRequestClose={() => setOpened(false)}
      shouldCloseOnOverlayClick
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        content: {
          width: '70%',
          height: '45rem',
          margin: 'auto',
          overflow: 'hidden',
          borderRadius: '10px',
          padding: '20px',
        },
      }}
    >
      <Container h={'40rem'} w={'100%'}>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={active} alternativeLabel>
            <Step>
              <StepLabel>Location</StepLabel>
            </Step>
            <Step>
              <StepLabel>Images</StepLabel>
            </Step>
            <Step>
              <StepLabel>Details</StepLabel>
            </Step>
            <Step>
              <StepLabel>Facilities</StepLabel>
            </Step>
          </Stepper>
          {active === 0 && (
            <AddLocation
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          )}
          {active === 1 && (
            <UploadImage
            nextStep={nextStep}
            prevStep={prevStep}
            propertyDetails={propertyDetails}
            setPropertyDetails={setPropertyDetails}
          />
          )}
          {active === 2 && (
            <BasicDetails
            nextStep={nextStep}
            prevStep={prevStep}
            propertyDetails={propertyDetails}
            setPropertyDetails={setPropertyDetails}
          />
          )}
          {active === 3 && (
            <Facilities
            // nextStep={nextStep}
            prevStep={prevStep}
            propertyDetails={propertyDetails}
            setPropertyDetails={setPropertyDetails}
            setOpened={setOpened}
            setActive={setActive}
          />
          )}
        </Box>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
