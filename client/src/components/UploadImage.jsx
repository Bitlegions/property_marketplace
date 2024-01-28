import { Button } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineCloudUpload } from "react-icons/ai";

const UploadImage = ({ propertyDetails, setPropertyDetails, nextStep, prevStep }) => {
    const [imageURL, setImageURL] = useState(propertyDetails.image);
    const cloudinaryRef = useRef();
    const widgetRef = useRef();

    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget(
            {
                cloudName: "dte41cn1m",
                uploadPreset: "sc7gpdkp",
                maxFiles: 1,
            },
            (err, result) => {
                if (result.event === "success") {
                    setImageURL(result.info.secure_url);
                }
            }
        );
    }, []);

    const handleNext = () => {
        setPropertyDetails((prev) => ({ ...prev, image: imageURL }));
        nextStep();
    };


    return (
        <div className="flexColCenter " style={{ marginTop: '3rem', gap: '2rem' }}>
            {!imageURL ? (
                <div
                    className="flexColCenter"
                    style={{
                        width: '100%',
                        height: '25rem',
                        border: '2px dashed grey',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={() => widgetRef.current?.open()}
                >
                    <AiOutlineCloudUpload size={50} color="grey" />
                    <span>Upload Image</span>
                </div>
            ) : (
                <div
                    className="uploadedImage"
                    style={{
                        width: '80%',
                        height: '25rem',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 'auto',
                    }}
                    onClick={() => widgetRef.current?.open()}
                >
                    <img
                        src={imageURL}
                        alt=""
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            )}



            <div style={{ textAlign: "center", marginTop: "10rem", position: 'relative' }}>
                <Button onClick={prevStep} variant="contained" color="primary" style={{ position: 'absolute', bottom: 0, left: 0 }} >Back</Button>
                <Button onClick={handleNext} disabled={!imageURL} variant="contained" color="primary" style={{ position: 'absolute', bottom: 0, right: 0 }} >Next</Button>
            </div>
        </div>
    )
}

export default UploadImage