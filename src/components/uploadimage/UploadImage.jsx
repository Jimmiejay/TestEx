import React, { useCallback, useState } from 'react'
import Axios from 'axios'
import './uploadimage.css'
import { useDropzone } from 'react-dropzone';

const UploadImage = () => {
    Axios.defaults.withCredentials = true;
    const [imageFile, setImageFile] = useState('');

    const onDrop = useCallback((acceptedFiles) => {
        handleFileInputChange(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accepts: "image/*",
        multiple: false,
    });

    const handleFileInputChange = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
             setImageFile(reader.result);
        };
    };


    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!imageFile) return;
        Axios.put(`api url`, { data: imageFile});
    }

    return (

        <div className='uploadimg-container'>
            <div className="upload" >
                <div
                    {...getRootProps()}
                    className={`dropzone ${isDragActive ? "active" : null}`}
                >
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </div>

                <form onSubmit={handleSubmitFile}>
                    <button type="submit">
                        submit
                    </button>
                </form >
            </div >
        </div>
    );
};

export default UploadImage