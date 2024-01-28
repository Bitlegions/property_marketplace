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
                <div className="flexColStart" style={{ flex: 1, gap: "3rem", paddingTop: '20px' }}>
                    <MuiSelect
                        fullWidth
                        displayEmpty
                        label="Country"
                        variant="outlined"
                        value={country || ""}
                        onChange={(e) => form.setValues({ ...form.values, country: e.target.value })}
                        style={{ margin: '5px 0' }}
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
                        style={{ margin: '5px 0' }}
                    />

                    <TextField
                        fullWidth
                        label="Address"
                        variant="outlined"
                        value={address || ""}
                        onChange={(e) => form.setValues({ ...form.values, address: e.target.value })}
                        style={{ margin: '5px 0' }}
                    />
                </div>

                {/* right side */}
                <div className="flexColStart map" style={{ flex: 1, width: '60%', height: '50',overflow: 'visible',  paddingBottom: '10px' }}>
                    <Map address={address} city={city} country={country} />
                </div>

                {/* <div className="flexColStart" style={{ flex: 1 }}>
                    <Map address={address} city={city} country={country} />
                </div> */}

            </div>
            <div style={{ textAlign: "center", marginTop: "4rem", position: 'relative' }}>
                <Button type="submit" variant="contained" color="primary" style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    Next
                </Button>
            </div>
        </form>
    );
};

export default AddLocation;
