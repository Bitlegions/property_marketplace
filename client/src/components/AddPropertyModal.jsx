// import React from 'react';
// import Modal from 'react-modal';

// const AddPropertyModal = ({ opened, setOpened }) => {
//   return (
//     <Modal
//       isOpen={opened}
//       onRequestClose={() => setOpened(false)}
//       shouldCloseOnOverlayClick
//       style={{
//         overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
//         content: {
//           width: '70rem',
//           height:'45rem',
//           margin: 'auto',
//         },
//       }}
//     >
//         <Container h={"40rem"} w={"100%"}>
//             this is contaimer
//         </Container>
//     </Modal>
//   );
// };

// export default AddPropertyModal;






// import Modal from 'react-modal';
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepButton from '@mui/material/StepButton';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Container } from '@mui/material';

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

// const AddPropertyModal = ({ opened, setOpened }) => {
//     const [activeStep, setActiveStep] = React.useState(0);
//     const [completed, setCompleted] = React.useState({});

//     const totalSteps = () => {
//         return steps.length;
//     };

//     const completedSteps = () => {
//         return Object.keys(completed).length;
//     };

//     const isLastStep = () => {
//         return activeStep === totalSteps() - 1;
//     };

//     const allStepsCompleted = () => {
//         return completedSteps() === totalSteps();
//     };

//     const handleNext = () => {
//         const newActiveStep =
//             isLastStep() && !allStepsCompleted()
//                 ? // It's the last step, but not all steps have been completed,
//                 // find the first step that has been completed
//                 steps.findIndex((step, i) => !(i in completed))
//                 : activeStep + 1;
//         setActiveStep(newActiveStep);
//     };

//     const handleBack = () => {
//         setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     };

//     const handleStep = (step) => () => {
//         setActiveStep(step);
//     };

//     const handleComplete = () => {
//         const newCompleted = completed;
//         newCompleted[activeStep] = true;
//         setCompleted(newCompleted);
//         handleNext();
//     };

//     const handleReset = () => {
//         setActiveStep(0);
//         setCompleted({});
//     };

//     return (
//         <Modal
//             isOpen={opened}
//             onRequestClose={() => setOpened(false)}
//             shouldCloseOnOverlayClick
//             style={{
//                 overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
//                 content: {
//                     width: '70rem',
//                     height: '45rem',
//                     margin: 'auto',
//                 },
//             }}
//         >
//             <Container h={"40rem"} w={"100%"}>
            
//                 <Box sx={{ width: '80%', margin:'auto' }}>
//                     <Stepper nonLinear activeStep={activeStep}>
//                         {steps.map((label, index) => (
//                             <Step key={label} completed={completed[index]}>
//                                 <StepButton color="inherit" onClick={handleStep(index)}>
//                                     {label}
//                                 </StepButton>
//                             </Step>
//                         ))}
//                     </Stepper>
//                     <div>
//                         {allStepsCompleted() ? (
//                             <React.Fragment>
//                                 <Typography sx={{ mt: 2, mb: 1 }}>
//                                     All steps completed - you&apos;re finished
//                                 </Typography>
//                                 <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                                     <Box sx={{ flex: '1 1 auto' }} />
//                                     <Button onClick={handleReset}>Reset</Button>
//                                 </Box>
//                             </React.Fragment>
//                         ) : (
//                             <React.Fragment>
//                                 <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
//                                     Step {activeStep + 1}
//                                 </Typography>
//                                 <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
//                                     <Button
//                                         color="inherit"
//                                         disabled={activeStep === 0}
//                                         onClick={handleBack}
//                                         sx={{ mr: 1 }}
//                                     >
//                                         Back
//                                     </Button>
//                                     <Box sx={{ flex: '1 1 auto' }} />
//                                     <Button onClick={handleNext} sx={{ mr: 1 }}>
//                                         Next
//                                     </Button>
//                                     {activeStep !== steps.length &&
//                                         (completed[activeStep] ? (
//                                             <Typography variant="caption" sx={{ display: 'inline-block' }}>
//                                                 Step {activeStep + 1} already completed
//                                             </Typography>
//                                         ) : (
//                                             <Button onClick={handleComplete}>
//                                                 {completedSteps() === totalSteps() - 1
//                                                     ? 'Finish'
//                                                     : 'Complete Step'}
//                                             </Button>
//                                         ))}
//                                 </Box>
//                             </React.Fragment>
//                         )}
//                     </div>
//                 </Box>
//             </Container>
//         </Modal>
//     );
// };

// export default AddPropertyModal;










// import Modal from 'react-modal';
// // import * as React from 'react';
// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import { Container } from '@mui/material';


// const AddPropertyModal = ({ opened, setOpened }) => {

//     const [active, setActive] = useState(1);

//     const steps = [
//       'Select master blaster campaign settings',
//       'Create an ad group',
//       'Create an ad',
//     ];

//   return (
//     <Modal
//       isOpen={opened}
//       onRequestClose={() => setOpened(false)}
//       shouldCloseOnOverlayClick
//       style={{
//         overlay: {backgroundColor: 'rgba(0, 0, 0, 0.5)'},
//         content: {
//           width: '70rem',
//           height:'45rem',
//           margin: 'auto',
//         },
//       }}
//     >
//         <Container h={"40rem"} w={"100%"}>
//         <Box sx={{ width: '100%' }}>
//       <Stepper activeStep={active} alternativeLabel>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>

//         </Container>
//     </Modal>
//   );
// };

// export default AddPropertyModal;







// import Modal from 'react-modal';
// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import { Container } from '@mui/material';
// import AddLocation from './AddLocation';
// import { useAuth0 } from '@auth0/auth0-react';

// const AddPropertyModal = ({ opened, setOpened }) => {
//     const [active, setActive] = useState(0);
//     const { user } = useAuth0();

//   const [propertyDetails, setPropertyDetails] = useState({
//     title: "",
//     description: "",
//     price: 0,
//     country: "",
//     city: "",
//     address: "",
//     image: null,
//     facilities: {
//       bedrooms: 0,
//       parkings: 0,
//       bathrooms: 0,
//     },
//     userEmail: user?.email,
//   });

//   const nextStep = () => {
//     setActive((current) => (current < 4 ? current + 1 : current));
//   };

//   const prevStep = () => {
//     setActive((current) => (current > 0 ? current - 1 : current));
//   };


//     return (
//         <Modal
//             isOpen={opened}
//             onRequestClose={() => setOpened(false)}
//             shouldCloseOnOverlayClick
//             style={{
//                 overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
//                 content: {
//                     width: '70rem',
//                     height: '45rem',
//                     margin: 'auto',
//                 },
//             }}
//         >
//             <Container h={'40rem'} w={'100%'}>
//                 <Box sx={{ width: '100%' }}>
//                     <Stepper activeStep={active} alternativeLabel>
//                         <Step>
//                             <StepLabel>Location</StepLabel>
//                             <AddLocation 
//                             nextStep={nextStep}
//                             propertyDetails={propertyDetails}
//                             setPropertyDetails={setPropertyDetails}
//                             />
//                         </Step>
//                         <Step>
//                             <StepLabel>Create an ad group</StepLabel>
//                         </Step>
//                         <Step>
//                             <StepLabel>Create an ad</StepLabel>
//                         </Step>
//                     </Stepper>
//                 </Box>
//             </Container>
//         </Modal>
//     );
// };

// export default AddPropertyModal;












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
          width: '70rem',
          height: '45rem',
          margin: 'auto',
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
