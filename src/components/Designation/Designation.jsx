import React, { useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import { TbReload } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Pagination } from 'rsuite';

const Designation = () => {
    const [formData, setFormData] = useState({
        location: "",
        designationName: "",
        status: "",
        isClinical: "",
    });
    const locData = [
        { sno: 1, location: "Rohini", designationName: "Doctor", status: "Active", isClinical: true },
        { sno: 2, location: "Niti Bagh", designationName: "Nurse", status: "Inactive", isClinical: true },
        { sno: 3, location: "Rohini", designationName: "Technician", status: "Active", isClinical: false },
        { sno: 4, location: "Niti Bagh", designationName: "Administrator", status: "Active", isClinical: false },
        { sno: 5, location: "Rohini", designationName: "Doctor", status: "Inactive", isClinical: true },
        { sno: 6, location: "Niti Bagh", designationName: "Receptionist", status: "Active", isClinical: false },
        { sno: 7, location: "Rohini", designationName: "Pharmacist", status: "Inactive", isClinical: true },
        { sno: 8, location: "Niti Bagh", designationName: "Lab Assistant", status: "Active", isClinical: true },
        { sno: 9, location: "Rohini", designationName: "Manager", status: "Active", isClinical: false },
        { sno: 10, location: "Niti Bagh", designationName: "Therapist", status: "Inactive", isClinical: true },
        { sno: 11, location: "Rohini", designationName: "Surgeon", status: "Active", isClinical: true },
        { sno: 12, location: "Niti Bagh", designationName: "Radiologist", status: "Inactive", isClinical: true },
        { sno: 13, location: "Rohini", designationName: "ITSupport", status: "Active", isClinical: false },
        { sno: 14, location: "Niti Bagh", designationName: "Accountant", status: "Inactive", isClinical: false },
        { sno: 15, location: "Rohini", designationName: "Dentist", status: "Active", isClinical: true },
        { sno: 16, location: "Niti Bagh", designationName: "DataAnalyst", status: "Active", isClinical: false },
        { sno: 17, location: "Rohini", designationName: "HRManager", status: "Inactive", isClinical: false },
        { sno: 18, location: "Niti Bagh", designationName: "Cleaner", status: "Active", isClinical: false },
        { sno: 19, location: "Rohini", designationName: "SecurityGuard", status: "Inactive", isClinical: false },
        { sno: 20, location: "Niti Bagh", designationName: "Physiotherapist", status: "Active", isClinical: true },
        { sno: 21, location: "Rohini", designationName: "Doctor", status: "Active", isClinical: true },
        { sno: 22, location: "Niti Bagh", designationName: "Nurse", status: "Inactive", isClinical: true }
    ];
    
    const [activePage, setActivePage] = useState(1); // Current active page
    const rowsPerPage = 10;
    const [locationData, setLocationData] = useState(locData);

    const paginatedData = locationData.slice(
        (activePage - 1) * rowsPerPage,
        activePage * rowsPerPage
    );

    const handleSearch = () => {
        const filteredLocations = locData.filter((item) => {
            return (
                (formData.location.trim() === "" || item.location.toLowerCase().includes(formData.location.trim().toLowerCase())) &&
                (formData.designationName.trim() === "" || item.designationName.toLowerCase().includes(formData.designationName.trim().toLowerCase())) &&
                (formData.status === "" || item.status.toLowerCase() === formData.status.toLowerCase()) &&
                (formData.isClinical === "" || item.isClinical === formData.isClinical)
            );
        });
        setLocationData(filteredLocations);
    };

    const handleFormReset = () => {
        setFormData({
            location: "",
            designationName: "",
            status: "",
            isClinical: "",
        });
        setLocationData(locData);
    };

    const handleChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    console.log(formData)
    return (
        <div className="mx-3">
            {/* heading */}
            <div className="breadcrumb-header mb-3 ms-1 me-1 gap-1 mt-4 justify-content-start align-items-center d-flex">
                <h2 className="fs-4">Designation</h2>
                <span className="ms-2 me-2 mb-2 text-secondary opacity-75">|</span>
                <Link className="custom-link text-decoration-none mb-1" to="/designation-add">
                    Add New
                </Link>
            </div>

            {/* location form */}
            <div className="container-fluid mt-1 rounded shadow bg-white">
                <div className="row g-2 py-2 mb-2">
                    <div className="d-flex mb-2 flex-wrap align-items-center w-100">
                        <div className="col-12 col-sm-auto me-3 mb-2">
                            <label className="form-label">Location</label>
                            <select
                                className="form-select"
                                value={formData.location}
                                onChange={(e) => handleChange("location", e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="rohini">Rohini</option>
                                <option value="niti bagh">Niti Bagh</option>
                            </select>
                        </div>
                        <div className="col-12 col-sm-auto me-3 mb-2">
                            <label className="form-label">Designation Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.designationName}
                                onChange={(e) => handleChange("designationName", e.target.value)}
                                placeholder="Designation Name"
                            />
                        </div>
                        <div className="col-12 col-sm-auto me-3 mb-2">
                            <label className="form-label">Status</label>
                            <select
                                className="form-select"
                                value={formData.status}
                                onChange={(e) => handleChange("status", e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        

                        <div className="col-12 col-sm-auto mt-4 mb-2 d-flex">
                            <button className="btn btn-primary me-1" onClick={handleSearch}>
                                <IoMdSearch />
                            </button>
                            <button className="btn btn-danger" onClick={handleFormReset}>
                                <TbReload />
                            </button>
                        </div>
                    </div>
                        <div className="col-12 d-flex col-sm-auto me-3 mb-2">
                            <label className="form-label">Is Clinical</label>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={formData.isClinical === true}
                                onChange={(e) => handleChange("isClinical", e.target.checked ? true : false)}
                            />
                        </div>
                </div>
            </div>


            {/* list of location */}
            <div className="bg-white mt-4 shadow-lg rounded">
                <h3 className="table-header p-3 fs-5">List of Designations</h3>
                <div className="table-responsive">
                    <table className="table-responsive w-100">
                        <thead className="thead" style={{ backgroundColor: '#f3f2f7' }}>
                            <tr>
                                <th scope="col" className="p-3 col-1 ">S.No</th>
                                <th scope="col" className="col-2 ">Location</th>
                                <th scope="col" className="col-2">Designation Name</th>
                                <th scope="col" className="col-1">Status</th>
                                <th scope="col" className="col-1">Action</th>
                            </tr>

                        </thead>
                        <tbody>
                            {paginatedData.length === 0 ? (
                                <tr>
                                    <td colSpan="8" style={{ textAlign: "center", padding: '1vw' }}>No record found</td>
                                </tr>
                            ) : (
                                paginatedData.map((location, index) => (
                                    <tr
                                        key={index}
                                        className={`p-2 list-patient-row ${index % 2 === 0 ? "odd-row" : "even-row"
                                            }`}
                                        style={{
                                            backgroundColor: index % 2 === 0 ? "#c5e8ee" : "#cbf6ff",
                                        }}

                                    >
                                        <td className="p-3">{location.sno}</td>
                                        <td>{location.location}</td>
                                        <td>{location.designationName}</td>
                                        <td>{location.status}</td>
                                        <td>
                                            <Link className="custom-link m-1">
                                                <button className='btn btn-primary'>
                                                    <FaEye /></button>
                                            </Link>
                                            <Link className="custom-link">
                                                <button className='btn btn-danger'> <FaEdit /></button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 d-flex justify-content-center">
                    <Pagination
                        prev
                        last
                        next
                        first
                        size="md"
                        ellipsis
                        total={locationData.length}
                        limit={rowsPerPage}
                        activePage={activePage}
                        onChangePage={setActivePage}
                        className="rs-pagination"
                    />
                </div>
            </div>
        </div>
    );
};


 
export default Designation
