// 'use client'
// import React, { useState } from 'react';
// import 'react-phone-input-2/lib/style.css';
// import PhoneInput from 'react-phone-input-2';
// import './contactUsFormCSS.css';

// const ContactUsForm: React.FC = () => {
//   const [phoneNumber, setPhoneNumber] = useState<string>('');
//   const [valid, setValid] = useState<boolean>(true);

//   const handleChange = (value: string) => {
//     setPhoneNumber(value);
//     setValid(validatePhoneNumber(value));
//   };

//   const validatePhoneNumber = (phoneNumber: string): boolean => {
//     const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
//     return phoneNumberPattern.test(phoneNumber);
//   };

//   return (
//     <>
//       <form action="" method="" className="contactUsForm w-full">
//         <fieldset className="fieldGroup">
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="user_name" placeholder="Full Name" />

//           <label htmlFor="mail">Email:</label>
//           <input type="email" id="mail" name="user_email" placeholder="Email Address" />

//           <label>
//             Phone Number:
//             <PhoneInput
//               country={'ae'}
//               className="phoneNumber"
//               value={phoneNumber}
//               onChange={handleChange}
//               inputProps={{
//                 required: true,
//               }}
//             />
//           </label>
//           {!valid && <p>Please enter a valid phone number.</p>}
//         </fieldset>

//         <fieldset className="fieldGroup">
//           <label htmlFor="enquiry_for">Enquiry For:</label>
//           <select id="enquiry_for" name="enquiry_for" className="enquiryFor">
//             <optgroup label="Products">
//               <option value="MPay">MPay</option>
//               <option value="MTouch">MTouch</option>
//             </optgroup>
//             <optgroup label="Services">
//               <option value="Mercury 360">Mercury 360</option>
//               <option value="Mercury Hub">Mercury Hub</option>
//             </optgroup>
//             <optgroup label="Others">
//               <option value="Others">Others</option>
//             </optgroup>
//           </select>
//         </fieldset>

//         {/* Additional fields are commented out for brevity */}

//         <fieldset className="fieldGroup">
//           <label htmlFor="enquiry_description">Describe your enquiry or question</label>
//           <textarea id="enquiry_description" name="enquiry_description" placeholder="Tell us what you need."></textarea>
//         </fieldset>

//         <button className='w-full bg-black p-4 rounded-md text-white' type="submit">Send</button>
//       </form>
//     </>
//   );
// };

// export default ContactUsForm;


'use client';
import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import './contactUsFormCSS.css';

const ContactUsForm: React.FC = () => {
  const [name, setName] = useState<string>('Karan');
  const [email, setEmail] = useState<string>('checkoutkaran@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState<string>('9970331516');
  const [valid, setValid] = useState<boolean>(true);
  const [enquiryFor, setEnquiryFor] = useState<string>('MPay');
  const [enquiryDescription, setEnquiryDescription] = useState<string>('Need MPay');

  const handleChange = (value: string) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleEnquiryForChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEnquiryFor(event.target.value);
  };

  const handleEnquiryDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnquiryDescription(event.target.value);
  };

  return (
    <>
      <form action="" method="" className="contactUsForm w-full">
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
          <label htmlFor="enquiry_for">Enquiry For:</label>
          <select id="enquiry_for" name="enquiry_for" className="enquiryFor" value={enquiryFor} onChange={handleEnquiryForChange}>
            <optgroup label="Products">
              <option value="MPay">MPay</option>
              <option value="MTouch">MTouch</option>
            </optgroup>
            <optgroup label="Services">
              <option value="Mercury 360">Mercury 360</option>
              <option value="Mercury Hub">Mercury Hub</option>
            </optgroup>
            <optgroup label="Others">
              <option value="Others">Others</option>
            </optgroup>
          </select>
        </fieldset>

        <fieldset className="fieldGroup">
          <label htmlFor="enquiry_description">Describe your enquiry or question</label>
          <textarea
            id="enquiry_description"
            name="enquiry_description"
            value={enquiryDescription}
            onChange={handleEnquiryDescriptionChange}
            placeholder="Tell us what you need."
          ></textarea>
        </fieldset>

        <button className="w-full bg-black p-4 rounded-md text-white" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactUsForm;
