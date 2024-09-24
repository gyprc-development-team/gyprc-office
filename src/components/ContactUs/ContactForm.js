import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    services: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }

    // Contact Number validation
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required.";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be exactly 10 digits.";
    }

    // Services validation
    if (!formData.services.trim()) {
      newErrors.services = "Please select a service.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      // Handle form submission here
      console.log(formData);
      // You can also proceed with the form submission here if needed
      e.target.submit();
    }
  };

  return (
    <>
      <form className="fms" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
        <input type="hidden" name="apikey" value="9282368f-3135-4ac2-a189-1d48c6a9c40b" />

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
          <div className="mb-2">
            <label htmlFor="firstName" className="block text-white font-medium text-base">First Name *</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none placeholder-white"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-white font-medium text-base">Last Name *</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-white font-medium text-base">Business Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="contactNumber" className="block text-white font-medium text-base">Contact Number *</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="services" className="block text-white font-medium text-base">Services Looking for *</label>
            <select
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 text-white bg-black bg-opacity-5 rounded-md focus:outline-none"
            >
              <option className="text-white" value="">Select</option>
              <option className="bg-black text-white" value="BitBeeMedia">Digital Marketing</option>
              <option className="bg-black text-white" value="BitBeeMedia">My Banana Product</option>
              <option className="bg-black text-white" value="EquipMedy">HealthCare</option>
              <option className="bg-black text-white" value="Tingle Taste">TingleTaste</option>
              <option className="bg-black text-white" value="TeacherCool">Educational Services</option>
            </select>
            {errors.services && (
              <p className="text-red-500 text-xs mt-1">{errors.services}</p>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="companyName" className="block text-white font-medium text-base">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="message" className="block text-white font-medium text-base">Message</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
          ></textarea>
        </div>
        <input type="hidden" name="from_name" value="Notification from Gyprc Web" />
        <input type="hidden" name="redirect" value="https://gyprc.com/thanks" />

        <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-400">Submit</button>
      </form>
    </>
  );
};

export default ContactForm;
