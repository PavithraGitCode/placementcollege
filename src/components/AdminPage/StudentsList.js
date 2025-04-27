import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const StudentsList = ({ students }) => {
    const navigate=useNavigate()
  return (
    <section className="table-adj">
      <div className="subhrdr">
        <p className="place-text">Placement Students Details</p>
        <div className='button' onClick={() => navigate('/admin/studentsform')}>
            <button>
              New Student <i className='fa fa-long-arrow-alt-right'></i>
            </button>
          </div>
      </div>
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Address</th>
              <th>Degree</th>
              <th>Company</th>
              <th>Role</th>
              <th>Placement Date</th>
              <th>Salary</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">
        <table cellPadding="0" cellSpacing="0" border="0">
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.emailId}</td>
                <td>{student.contactNumber}</td>
                <td>{student.address}</td>
                <td>{student.degreeName}</td>
                <td>{student.placedCompanyName}</td>
                <td>{student.role}</td>
                <td>{student.placementDate}</td>
                <td>{student.salaryInMonth}</td>
              </tr>
            ))}
            {students.length === 0 && (
              <tr>
                <td colSpan="10">No students added yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StudentsList;