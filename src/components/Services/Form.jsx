import React, { useState } from "react";
import { InputPicker } from "rsuite";
// import "./Form.css";
const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));

const Form = () => {
  const [formData, setFormData] = useState({
    Location: "",
    RevenueSystem: "",
    GroupName: "",
    GroupshortName: "",
    Description: "",
    Status: "Active", // Default
    GroupHead: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePickerChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      GroupHead: value,
    }));
  };

  return (
    <div>
    <div className="breadcrumb-header mb-3 ms-1 me-1 gap-1 mt-4 justify-content-start align-items-center d-flex">
      <h2 className="fs-4 mx-3">Service</h2>
    </div>
    <div className="bg-white py-3 shadow-lg rounded mx-3 gy-3 py-2">
      <div className="container-fluid">
        <div className="">
          <div className="row gx-2 gy-3">
            {/* Location */}
            <div className="col-md">
              <label htmlFor="Location" className="form-label">
                Location
              </label>
              <select
                className="form-select"
                id="Location"
                name="Location"
                value={formData.Location}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Referred">Referred</option>
                <option value="Direct">Direct</option>
              </select>
            </div>
            {/* Revenue System */}
            <div className="col-md">
              <label htmlFor="RevenueSystem" className="form-label">
                Revenue System
              </label>
              <select
                className="form-select"
                id="RevenueSystem"
                name="RevenueSystem"
                value={formData.RevenueSystem}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                <option value="Referred">Referred</option>
                <option value="Direct">Direct</option>
              </select>
            </div>
            {/* Group Name */}
            <div className="col-md">
              <label htmlFor="GroupName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="GroupName"
                name="GroupName"
                value={formData.GroupName}
                onChange={handleChange}
                placeholder=" Name"
              />
            </div>
            {/* Group short Name */}
            <div className="col-md">
              <label htmlFor="GroupshortName" className="form-label">
                Short Name
              </label>
              <input
                type="text"
                className="form-control"
                id="GroupshortName"
                name="GroupshortName"
                value={formData.GroupshortName}
                onChange={handleChange}
                placeholder="Short Name"
              />
            </div>
            {/* Description */}
            <div className="col-md">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="Description"
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                placeholder="Description"
              />
            </div>
            {/* Group Head */}
            <div className="col-md">
              <label htmlFor="GroupHead" className="form-label">
                Group Head
              </label>
              <InputPicker
                size="lg"
                placeholder="Select "
                data={data}
                value={formData.GroupHead}
                onChange={handlePickerChange}
                style={{ width: "100%" }}
              />
            </div>
            {/* Status */}
            <div className="col-md">
              <label htmlFor="Status" className="form-label">
                Status
              </label>
              <select
                id="Status"
                name="Status"
                className="form-select"
                value={formData.Status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Cash">Cash</option>
                <option value="Insurance">Insurance</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
