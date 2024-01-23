import React from 'react'
import { useForm } from "@mantine/form";
import { Box, Button, Container, TextField } from "@mui/material";

const BasicDetails = ({ prevStep, nextStep, propertyDetails, setPropertyDetails }) => {

    const form = useForm({
        initialValues: {
            title: propertyDetails.title,
            description: propertyDetails.description,
            price: propertyDetails.price,
        },
        validate: {
            title: (value) => validateString(value),
            description: (value) => validateString(value),
            price: (value) => value < 1000 ? "Must be greater than 999 dollars" : null,
        },
    });
    const { title, description, price } = form.values
    const validateString = (value) => {
        return value?.length < 3 || value === null ? "Must have at least 3 characters" : null;
    };


    const handleSubmit = () => {
        const { hasErrors } = form.validate()
        if (!hasErrors) {
            setPropertyDetails((prev) => ({ ...prev, title, description, price }))
            nextStep()
        }
    }

    return (
        <Container maxWidth="sm">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <TextField
                    fullWidth
                    label="Title"
                    variant="outlined"
                    margin="normal"
                    placeholder="Property Name"
                    name="title"
                    value={title || ""}
                    onChange={(e) => form.setValues({ ...form.values, title: e.target.value })}
                    required
                />
                <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    margin="normal"
                    placeholder="Description"
                    minRows={4}
                    name="description"
                    value={description || ""}
                    onChange={(e) => form.setValues({ ...form.values, description: e.target.value })}
                    // style={{ width: "100%", padding: "10px", marginTop: "16px", border: "1px solid #ced4da", borderRadius: "4px" }}
                    required
                />
                <TextField
                    fullWidth
                    label="Price"
                    variant="outlined"
                    margin="normal"
                    type="number"
                    placeholder="1000"
                    name="price"
                    value={price || ""}
                    // onChange={(e) => form.setValues({ ...form.values, price: e.target.value })}
                    onChange={(e) => form.setValues({ ...form.values, price: parseInt(e.target.value, 10) })}
                    inputProps={{ min: 0 }}
                    required
                />
                <Box display="flex" justifyContent="space-between" marginTop="20px">
                    <Button variant="contained" color="primary" onClick={prevStep}>
                        Back
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Next 
                    </Button>
                </Box>

            </form>
        </Container>
    )
}

export default BasicDetails