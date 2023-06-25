import React, { useState, useEffect } from "react";
// import axios from 'axios';
import { saveAs } from "file-saver";
// import { jsPDF } from "jspdf";
import TraineeDataService from "../services/trainee.service";
import jsPDF from "jspdf";
import "jspdf-autotable";
import AddTrainees from "./add-trainee.component";

const Trainee = () => {
  const [trainees, setTrainees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = TraineeDataService.getAll();
      //   const response = await axios.get('api/trainees');
      // console.log((await response).data);
      setTrainees((await response).data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    const tableData = [];

    trainees.forEach((trainee, index) => {
      const rowData = [
        trainee.traineeid,
        trainee.salutation,
        `${trainee.firstName} ${trainee.middleName} ${trainee.surName}`,
        trainee.dateOfBirth,
        trainee.gender,
        trainee.maritalStatus,
        trainee.casteCategory,
      ];
      tableData.push(rowData);
    });

    doc.autoTable({
      head: [
        [
          "#",
          "Salutation",
          "Full Name",
          "Date of Birth",
          "Gender",
          "Marital Status",
          "Caste Category",
        ],
      ],
      body: tableData,
    });

    doc.save("trainees.pdf");
  };
  const [showAddTraineeGrid, setShowAddTraineeGrid] = useState(false);

  const addTrainee = () => {
    setShowAddTraineeGrid(!showAddTraineeGrid);
  };
  

  return (
    <div className="container">
      
      <button onClick={addTrainee} style={{ backgroundColor: "#a02424" }} >{showAddTraineeGrid ?   'Hide Add Trainee': 'Add Trainee'}</button>
      {showAddTraineeGrid && <AddTrainees />}
      <button onClick={handleDownload} style={{ backgroundColor: "#a02424" }} >Download as PDF</button>
      <div className="grid-container">
        <table className="trainee-table">
          <thead>
            <tr>
              <th style={{ color: "white" }}>#</th>
              <th style={{ color: "white" }}>Salutation</th>
              <th style={{ color: "white" }}>Full Name</th>
              <th style={{ color: "white" }}>Date of Birth</th>
              <th style={{ color: "white" }}>Gender</th>
              <th style={{ color: "white" }}>Marital Status</th>
              <th style={{ color: "white" }}>Caste Category</th>
            </tr>
          </thead>
          <tbody>
            {trainees &&
              trainees.map((trainee, index) => (
                <tr key={index}>
                  <td style={{ color: "white" }}>{trainee.traineeid}</td>
                  <td style={{ color: "white" }}>{trainee.salutation}</td>
                  <td
                    style={{ color: "white" }}
                  >{`${trainee.firstName} ${trainee.middleName} ${trainee.surName}`}</td>
                  <td style={{ color: "white" }}>{trainee.dateOfBirth}</td>
                  <td style={{ color: "white" }}>{trainee.gender}</td>
                  <td style={{ color: "white" }}>{trainee.maritalStatus}</td>
                  <td style={{ color: "white" }}>{trainee.casteCategory}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trainee;
