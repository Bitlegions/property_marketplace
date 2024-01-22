import React from "react";
import { useForm } from "@mantine/form";
import { Button, MenuItem, Select as MuiSelect, TextField } from "@mui/material";
import useCountries from "../hooks/useCounties";
import Map from "./Map";

const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep }) => {
    const { getAll } = useCountries();

    const form = useForm({
        initialValues: {
            country: propertyDetails?.country,
            city: propertyDetails?.city,
            address: propertyDetails?.address,
        },
        validate: {
            country: (value) => validateString(value),
            city: (value) => validateString(value),
            address: (value) => validateString(value),
        },
    });

    const { country, city, address } = form.values;
    const validateString = (value) => {
        return value?.length < 3 || value === null ? "Must have at least 3 characters" : null;
    };

    const handleSubmit = () => {
        const { hasErrors } = form.validate();
        if (!hasErrors) {
            setPropertyDetails((prev) => ({ ...prev, city, address, country }));
            nextStep();
        }
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }}
        >
            <div
                className="flexCenter"
                style={{
                    justifyContent: "space-between",
                    gap: "3rem",
                    marginTop: "3rem",
                    flexDirection: "row",
                    display: 'flex',
                }}
            >
                {/* left side */}
                <div className="flexColStart" style={{ flex: 1, gap: "3rem" }}>
                    <MuiSelect
                        fullWidth
                        displayEmpty
                        label="Country"
                        variant="outlined"
                        value={country || ""}
                        onChange={(e) => form.setValues({ ...form.values, country: e.target.value })}
                    >
                        <MenuItem value="" disabled>
                            Select Country
                        </MenuItem>
                        {getAll().map((countryOption) => (
                            <MenuItem key={countryOption.value} value={countryOption.value}>
                                {countryOption.label}
                            </MenuItem>
                        ))}
                    </MuiSelect>

                    <TextField
                        fullWidth
                        label="City"
                        variant="outlined"
                        value={city || ""}
                        onChange={(e) => form.setValues({ ...form.values, city: e.target.value })}
                    />

                    <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        value={address || ""}
                        onChange={(e) => form.setValues({ ...form.values, address: e.target.value })}
                    />
                </div>

                {/* right side */}
                <div className="flexColStart map" style={{ flex: 1, width: '60%', height: '100%', paddingBottom: '70px' }}>
                    <Map address={address} city={city} country={country} />
                </div>

                {/* <div className="flexColStart" style={{ flex: 1 }}>
                    <Map address={address} city={city} country={country} />
                </div> */}

            </div>
            <div style={{ textAlign: "center", marginTop: "1rem" }}>
                <Button type="submit" variant="contained" color="primary">
                    Next Step
                </Button>
            </div>
        </form>
    );
};

export default AddLocation;
