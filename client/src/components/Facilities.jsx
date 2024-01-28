import React, { useContext } from "react";
import { useForm } from "@mantine/form";
import {Button, Container, TextField } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from '../context/UserDetailContext'
import useProperties from '../hooks/useProperties'
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createResidency } from "../utils/api";

const Facilities = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActive,
}) => {
  const form = useForm({
    initialValues: {
      bedrooms: propertyDetails?.facilities.bedrooms,
      parkings: propertyDetails?.facilities.parkings,
      bathrooms: propertyDetails?.facilities.bathrooms,
    },
    validate: {
      bedrooms: (value) => (value < 1 ? "Must have atleast one bedroom" : null),
      parkings: (value) => (value < 1 ? "Must have atleast one parkings" : null),
      bathrooms: (value) => (value < 1 ? "Must have atleast one bathrooms" : null),
    },
  });

  const { bedrooms, parkings, bathrooms } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,
        facilities: { bedrooms, parkings, bathrooms },
      }));
      mutate();
    }
  };


   // ==================== upload logic ====================
   const { user } = useAuth0();
   const {
     userDetails: { token },
   } = useContext(UserDetailContext);
   const { refetch: refetchProperties } = useProperties();

   const {mutate, isLoading} = useMutation({
    mutationFn: ()=> createResidency({
        ...propertyDetails, facilities: {bedrooms, parkings , bathrooms},userEmail: user?.email
    }, token),
    // }, ),
    onError: ({ response }) => toast.error(response.data.message, {position: "bottom-right"}),
    onSettled: ()=> {
      toast.success("Property Added Successfully", {position: "bottom-right"});
      setPropertyDetails({
        title: "",
        description: "",
        price: 0,
        country: "",
        city: "",
        address: "",
        image: null,
        facilities: {
          bedrooms: 0,
          parkings: 0,
          bathrooms: 0,
        },
        userEmail: user?.email,
      })
      setOpened(false)
      setActive(0)
      refetchProperties()
    }

  })
  
  return (
    <Container maxWidth="sm" marginTop="50px">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          fullWidth
          label="Bedrooms"
          variant="outlined"
          margin="normal"
          type="number"
          placeholder="1"
          name="bedrooms"
          value={bedrooms || ""}
          onChange={(e) =>
            form.setValues({ ...form.values, bedrooms: e.target.value })
          }
          required
        />
        <TextField
          fullWidth
          label="Parkings"
          variant="outlined"
          margin="normal"
          type="number"
          placeholder="1"
          name="parkings"
          value={parkings || ""}
          onChange={(e) =>
            form.setValues({ ...form.values, parkings: e.target.value })
          }
          required
        />
        <TextField
          fullWidth
          label="Bathrooms"
          variant="outlined"
          margin="normal"
          type="number"
          placeholder="1"
          name="bathrooms"
          value={bathrooms || ""}
          onChange={(e) =>
            form.setValues({ ...form.values, bathrooms: e.target.value })
          }
          inputProps={{ min: 0 }}
          required
        />
        <div style={{ textAlign: "center", marginTop: "20rem", position: 'relative' }}>
                        <Button onClick={prevStep} variant="contained" color="primary" style={{ position: 'absolute', bottom: 0, left: 0 }} >Back</Button>
                        <Button type="submit" disabled={isLoading} variant="contained" color="success" style={{ position: 'absolute', bottom: 0, right: 0 }} >{isLoading ? "Submitting" : "Add Property"}</Button>
                    </div>
      </form>
    </Container>
  );
};

export default Facilities;
