'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './contactUsFormCSS.css';
import axios from "axios";

const CareersForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [valid, setValid] = useState<boolean>(true);
  const [coverLetter, setCoverLetter] = useState<string>('');
  const [cvFile, setCVFile] = useState('');

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCoverLetterChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCoverLetter(event.target.value);
  };

  const handleCVFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCVFile(event.target.files[0]);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    let formData = new FormData()
    formData.append("name",name);
    formData.append("email",email);
    formData.append("phone",phoneNumber);
    formData.append("coverletter",coverLetter);
    formData.append("file",cvFile);



    /*const response = fetch('http://localhost:3001/',{
      method:'POST',
      headers: {'content-type':'multipart/form-data'},
      body: formData
    })*/
    const res = await axios.post(`http://localhost:3000/api/career-form-api`,formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    if(res.status === 201){
      alert('Success! Your information is received by Mercury-Pay')
      location.reload();
    }else{
      alert('Sad, the request did not processed' );
      location.reload();
    }
  };

  return (
    <>
      <form className="contactUsForm w-full" onSubmit={handleSubmit}>
        <fieldset className="fieldGroup">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="user_name" value={name} onChange={handleNameChange} placeholder="Full Name" />

          <label htmlFor="mail">Email:</label>
          <input type="email" id="mail" name="user_email" value={email} onChange={handleEmailChange} placeholder="Email Address" />

          <label>
            Phone Number:
            <PhoneInput
              country={'ae'}
              className="phoneNumber"
              value={phoneNumber}
              onChange={handleChange}
              inputProps={{
                required: true,
              }}
            />
          </label>
          {!valid && <p>Please enter a valid phone number.</p>}
        </fieldset>

        <fieldset className="fieldGroup">
          <label htmlFor="cv">Cover Letter:</label>
          <textarea id="cv" name="cv" value={coverLetter} onChange={handleCoverLetterChange} placeholder="Share your expertise in brief"></textarea>
        </fieldset>

        <fieldset className="fieldGroup">
          <label htmlFor="file-upload">Attach Your CV:</label>
          <input
            className="fileUpload"
            id="file-upload"
            name="attachment"
            type="file"
            accept="application/pdf"
            data-parsley-excluded="true"
            onChange={handleCVFileChange}
          />
        </fieldset>

        <button className='w-full bg-black p-4 rounded-md text-white' type="submit">Send</button>
      </form>
    </>
  );
};

export default CareersForm;
