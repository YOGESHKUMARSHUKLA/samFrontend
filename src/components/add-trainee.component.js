import React, { Component } from "react";
import TraineeDataService from "../services/trainee.service";

export default class AddTrainee extends Component {
  constructor(props) {
    super(props);
    // this.onChangeTitle = this.onChangeTitle.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.onChangeSalutation = this.onChangeSalutation.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeMiddleName = this.onChangeMiddleName.bind(this);

    this.onChangeSurName = this.onChangeSurName.bind(this);
    this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);

    this.onChangeMaritalStatus = this.onChangeMaritalStatus.bind(this);
    this.onChangeCasteCategory = this.onChangeCasteCategory.bind(this);

    this.state = {
      traineeid: null,
      salutation: "",
      firstName: "",
      middleName: "",
      surName: "",
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
      casteCategory: "",

      submitted: false,
    };
  }

  onChangeSalutation(e) {
    this.setState({
      salutation: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }
  onChangeMiddleName(e) {
    this.setState({
      middleName: e.target.value,
    });
  }
  onChangeSurName(e) {
    this.setState({
      surName: e.target.value,
    });
  }
  onChangeDateOfBirth(e) {
    this.setState({
      dateOfBirth: e.target.value,
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeMaritalStatus(e) {
    this.setState({
      maritalStatus: e.target.value,
    });
  }
  onChangeCasteCategory(e) {
    this.setState({
      casteCategory: e.target.value,
    });
  }

  saveTutorial() {
    var data = {
      salutation: this.state.salutation,
      firstName: this.state.firstName,
      middleName: this.state.middleName,
      surName: this.state.surName,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
      maritalStatus: this.state.maritalStatus,
      casteCategory: this.state.casteCategory,
    };

    TraineeDataService.create(data)
      .then((response) => {
        this.setState({
          traineeid: response.data.traineeid,
          salutation: response.data.salutation,
          firstName: response.data.firstName,
          middleName: response.data.middleName,
          surName: response.data.surName,
          dateOfBirth: response.data.dateOfBirth,
          gender: response.data.gender,
          maritalStatus: response.data.maritalStatus,
          casteCategory: response.data.casteCategory,

          submitted: true,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      traineeid: null,
      salutation: "",
      firstName: "",
      middleName: "",
      surName: "",
      dateOfBirth: "",
      gender: "",
      maritalStatus: "",
      casteCategory: "",

      submitted: false,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4 style={{ color: "white" }}>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div className="form-container">
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="salutation" style={{ color: "white" }}>
                    Salutation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="salutation"
                    required
                    value={this.state.salutation}
                    onChange={this.onChangeSalutation}
                    name="salutation"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="firstName" style={{ color: "white" }}>
                    FirstName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                    value={this.state.firstName}
                    onChange={this.onChangeFirstName}
                    name="firstName"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="middleName" style={{ color: "white" }}>
                    MiddleName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="middleName"
                    required
                    value={this.state.middleName}
                    onChange={this.onChangeMiddleName}
                    name="middleName"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="surName" style={{ color: "white" }}>
                    SurName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="surName"
                    required
                    value={this.state.surName}
                    onChange={this.onChangeSurName}
                    name="surName"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="dateOfBirth" style={{ color: "white" }}>
                    DateOfBirth
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="dateOfBirth"
                    required
                    value={this.state.dateOfBirth}
                    onChange={this.onChangeDateOfBirth}
                    name="dateOfBirth"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="gender" style={{ color: "white" }}>
                    Gender
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="gender"
                    required
                    value={this.state.gender}
                    onChange={this.onChangeGender}
                    name="gender"
                  />
                </div>
              </div>
              <div className="form-column">
                <div className="form-group">
                  <label htmlFor="maritalStatus" style={{ color: "white" }}>
                    MaritalStatus
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="maritalStatus"
                    required
                    value={this.state.maritalStatus}
                    onChange={this.onChangeMaritalStatus}
                    name="maritalStatus"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="casteCategory" style={{ color: "white" }}>
                    CasteCategory
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="casteCategory"
                    required
                    value={this.state.casteCategory}
                    onChange={this.onChangeCasteCategory}
                    name="casteCategory"
                  />
                </div>
              </div>

              <button onClick={this.saveTutorial} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
