import React, { useState } from 'react';
import { nameValidation } from '../Validation/Validation';


// import { validateDesignationName } from '../../Validation/Validation';

const DesignationForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    designationName: "",
    status: "", 
    isClinical: false,
  });

  // Handle change and sanitize data
  const handleChange = (field, value) => {
    let sanitizedValue = value;

    if (field === "designationName") {
      sanitizedValue = nameValidation(value);  // Apply custom validation for designation name
    }

    setFormData(prevData => ({
      ...prevData,
      [field]: sanitizedValue,
    }));
  };

  // Handle form submission (you can customize this function)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form Submitted", formData);
  };

  return (
    <div>
      <div className="breadcrumb-header mb-3 ms-1 me-1 gap-1 mt-4 justify-content-start align-items-center d-flex">
        <h2 className="fs-4 mx-3">Add Designation</h2>
      </div>
      <div className="bg-white py-3 shadow-lg rounded mx-3 gy-3 py-2">
        <div className="container-fluid">
          <form onSubmit={handleSubmit}> {/* Wrapping the form in a <form> element */}
            <div className="row gx-2 gy-3">
              {/* Location */}
              <div className="col-md">
                <label htmlFor="Location" className="form-label required">
                  Location
                </label>
                <select
                  className="form-select"
                  id="Location"
                  name="Location"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  required
                >
                  <option value="">Select</option>
                  <option value="rohini">Rohini</option>
                  <option value="nitibagh">Niti Bagh</option>
                </select>
              </div>

              {/* Designation Name */}
              <div className="col-md">
                <label htmlFor="designationName" className="form-label required">
                  Designation Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="designationName"
                  name="designationName"
                  value={formData.designationName}
                  onChange={(e) => handleChange("designationName", e.target.value)}
                  placeholder="Designation Name"
                  required
                />
              </div>

              {/* Status */}
              <div className="col-md">
                <label htmlFor="status" className="form-label required">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  className="form-select"
                  value={formData.status}
                  onChange={(e) => handleChange("status", e.target.value)}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Clinical */}
            <div className="col-12 d-block col-sm-auto me-3 mb-2" style={{display: 'block'}}>
              <label className="form-label">Is Clinical</label>
              <input
                type="checkbox"
                className="form-check-input"
                checked={formData.isClinical}
                onChange={(e) => handleChange("isClinical", e.target.checked)}
              />
            </div>

            {/* Save Button */}
            <button type="submit" className="btn btn-primary me-1">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DesignationForm;
