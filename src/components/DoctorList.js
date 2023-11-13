import React from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorList.css"; // Import the CSS file

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card m-2"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
      >
        <div className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Field : </b> {doctor.specialization}
          </p>
          <p>
            <b>Years of expertize : </b> {doctor.experience}
          </p>
          <p>
            <b>Fees : </b> {doctor.feesPerCunsaltation}
          </p>
          <p>
            <b>Timings : </b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorList;
