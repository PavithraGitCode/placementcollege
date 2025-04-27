import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './index.css';

const StudentForm = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    emailId: "",
    contactNumber: "",
    address: "",
    degreeName: "",
    placedCompanyName: "",
    role: "",
    placementDate: "",
    salaryInMonth: 1,
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddStudent(formData);
    alert("students Added Successfully");

    navigate('/admin/studentslist');

    setFormData({
      firstName: "",
      emailId: "",
      contactNumber: "",
      address: "",
      degreeName: "",
      placedCompanyName: "",
      role: "",
      placementDate: "",
      salaryInMonth: 1,
    });
  };

  return (
    <div className="form-container">
      <form id="orderForm" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div>
            <label htmlFor="firstName">Student's Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required // Corrected required attribute
            />
          </div>
          <div>
            <label htmlFor="emailId">Email ID:</label>
            <input
              id="emailId"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="degreeName">Degree Name:</label>
            <input
              type="text"
              id="degreeName"
              name="degreeName"
              value={formData.degreeName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="placedCompanyName">Placed Company Name:</label>
            <input
              type="text"
              id="placedCompanyName"
              name="placedCompanyName"
              value={formData.placedCompanyName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="placementDate">Placement Date:</label>
            <input
              type="text" // Consider using a date picker for better UX
              id="placementDate"
              name="placementDate"
              value={formData.placementDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="salaryInMonth">Salary in Month:</label>
            <input
              type="number"
              id="salaryInMonth"
              name="salaryInMonth"
              value={formData.salaryInMonth}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;