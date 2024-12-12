import React, { useState } from 'react';
import { FaEdit, FaEye } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import { TbReload } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Pagination } from 'rsuite';

const Location = () => {
    const [formData, setFormData] = useState({
        locationType: "",
        locationName: "",
        shortName: "",
        status: "",
    });
    const locData = [
        { sno: 1, locationType: "Location 1", locationName: "Rohini", shortName: "ROH", status: "Active" },
        { sno: 2, locationType: "Location 2", locationName: "Niti Bagh", shortName: "NB", status: "Inactive" },
        { sno: 3, locationType: "Location 3", locationName: "Rohini West", shortName: "RW", status: "Active" },
        { sno: 4, locationType: "Location 1", locationName: "Niti Bagh", shortName: "NB", status: "Inactive" },
        { sno: 5, locationType: "Location 2", locationName: "Rohini", shortName: "ROH", status: "Active" },
        { sno: 6, locationType: "Location 3", locationName: "Niti Bagh", shortName: "NB", status: "Inactive" },
        { sno: 7, locationType: "Location 1", locationName: "Rohini West", shortName: "RW", status: "Active" },
        { sno: 8, locationType: "Location 2", locationName: "Niti Bagh", shortName: "NB", status: "Inactive" },
        { sno: 9, locationType: "Location 3", locationName: "Rohini", shortName: "ROH", status: "Active" },
        { sno: 10, locationType: "Location 1", locationName: "Niti Bagh", shortName: "NB", status: "Inactive" },
        { sno: 11, locationType: "Location 2", locationName: "Rohini West", shortName: "RW", status: "Active" },
        { sno: 12, locationType: "Location 2", locationName: "Niti Bagh", shortName: "NB", status: "Inactive" },
        { sno: 13, locationType: "Location 3", locationName: "Rohini", shortName: "ROH", status: "Active" },
        { sno: 14, locationType: "Location 1", locationName: "Niti Bagh", shortName: "NB", status: "Inactive" },
        { sno: 15, locationType: "Location 2", locationName: "Rohini West", shortName: "RW", status: "Active" },
        { sno: 16, locationType: "Location 1", locationName: "Rohini", shortName: "ROH", status: "Active" },
        { sno: 17, locationType: "Location 2", locationName: "Niti Bagh", shortName: "NB", status: "Inactive" },
        { sno: 18, locationType: "Location 3", locationName: "Rohini West", shortName: "RW", status: "Active" },
        { sno: 19, locationType: "Location 1", locationName: "Niti Bagh", shortName: "NB", status: "Inactive" },
      ];
      

    const [activePage, setActivePage] = useState(1); // Current active page
    const rowsPerPage = 10;
    const [locationData, setLocationData] = useState(locData);

    const paginatedData = locationData.slice(
        (activePage - 1) * rowsPerPage,
        activePage * rowsPerPage
    );

    const handleSearch = () => {
        const filteredLocations = locationData.filter((location) => {
            return (
                (formData.locationType === "" || location.locationType === formData.locationType) &&
                (formData.locationName.trim() === "" || location.locationName.toLowerCase().includes(formData.locationName.trim().toLowerCase())) &&
                (formData.shortName.trim() === "" || location.shortName.toLowerCase().includes(formData.shortName.trim().toLowerCase())) &&
                (formData.status === "" || location.status.toLowerCase() === formData.status.toLowerCase())
            );
        });
        setLocationData(filteredLocations);
    };

    const handleFormReset = () => {
        setFormData({
            locationType: "",
            locationName: "",
            shortName: "",
            status: "",
        });
        setLocationData(locData);
    };

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    return (
        <div className="mx-3">
            {/* heading */}
            <div className="breadcrumb-header mb-3 ms-1 me-1 gap-1 mt-4 justify-content-start align-items-center d-flex">
                <h2 className="fs-4">Service</h2>
                <span className="ms-2 me-2 mb-2 text-secondary opacity-75">|</span>
                <Link className="custom-link text-decoration-none mb-1" to="/services">
                    Add New
                </Link>
            </div>

            {/* location form */}
            <div className="container-fluid rounded shadow bg-white">
                <div className="row g-2 py-2 mb-2">
                    <div className="d-flex mb-2 flex-wrap align-items-center">
                        <div className="me-3">
                            <label className="form-label">Location Type</label>
                            <select
                                className="form-select"
                                value={formData.locationType}
                                onChange={(e) => handleChange("locationType", e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Location 1">Location 1</option>
                                <option value="Location 2">Location 2</option>
                                <option value="Location 3">Location 3</option>
                            </select>
                        </div>
                        <div className="me-3">
                            <label className="form-label">Location Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.locationName}
                                onChange={(e) => handleChange("locationName", e.target.value)}
                                placeholder="Location Name"
                            />
                        </div>
                        <div className="me-3">
                            <label className="form-label">Short Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.shortName}
                                onChange={(e) => handleChange("shortName", e.target.value)}
                                placeholder="Short Name"
                            />
                        </div>
                        <div className="me-3">
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
                        <div>
                            <button className="btn btn-primary mt-4 me-1" onClick={handleSearch}>
                                <IoMdSearch />
                            </button>
                            <button className="btn mt-4  btn-danger" onClick={handleFormReset}>
                                <TbReload />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* list of location */}
            <div className="bg-white mt-4 shadow-lg rounded">
                <h3 className="table-header p-3 fs-5">List of Services</h3>
                <div className="table-responsive">
                    <table className="table-responsive w-100">
                        <thead className="thead" style={{ backgroundColor: '#f3f2f7' }}>
                            <tr>
                            <th scope="col" className="p-3 col-12 col-sm-1">S.No</th>
                                <th scope="col" className="col-12 col-sm-2">Location Type</th>
                                <th scope="col" className="col-12 col-sm-2">Location Name</th>
                                <th scope="col" className="col-12 col-sm-2">Short Name</th>
                                <th scope="col" className="col-12 col-sm-1">Status</th>
                                <th scope="col" className="col-lg-1  col-sm-2">Action</th>
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
                                        <td>{location.locationType}</td>
                                        <td>{location.locationName}</td>
                                        <td>{location.shortName}</td>
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

export default Location;
