import React, { useState } from 'react'
import Axios from 'axios'
import './testuploadimg.css'

const Testuploadimg = () => {
  Axios.defaults.withCredentials = true;
  const [imageFile, setImageFile] = useState('');
  const [uploadedImage, setUploadedImage] = useState(''); // State for the uploaded image


  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageFile(reader.result);
      console.log('Image File:', reader.result); // ตรวจสอบว่า imageFile ถูกตั้งค่าหรือไม่
    };
  };

  const hadleSubmitFile = (e) => {
    e.preventDefault();
    // if (!previewSource) return;
    if (!imageFile) return;

    // ลองแสดงผลรูปภาพทันทีหลังจาก submit เพื่อทดสอบ
    setUploadedImage(imageFile);

    Axios.put(`api url`, { data: imageFile })
      .then((response) => {
        console.log('Upload Response:', response);
      })
      .catch((error) => {
        console.error('Error uploading the image:', error);
      });
  };

  return (
    <div className='marketplace-container'>
      <form onSubmit={hadleSubmitFile}>
        <input
          type="file"
          onChange={handleFileInputChange}
        />
        <button type="submit">submit</button>
      </form>

      {/* Display the uploaded image */}
      {/* {uploadedImage && (
        <div className='image-preview'>
          <h3>Uploaded Image:</h3>
          <img src={uploadedImage} alt="Uploaded preview" />
        </div>
      )} */}
    </div>
  );
};

export default Testuploadimg