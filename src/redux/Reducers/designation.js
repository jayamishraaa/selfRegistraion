import _ from "lodash";
import * as types from "../Actions/designation";

const initialState = {
    designationdata: [{ sno: 1, location: "Rohini", designationName: "Doctor", status: "Active", isClinical: true },
    { sno: 2, location: "Niti Bagh", designationName: "Nurse", status: "Inactive", isClinical: true },
    { sno: 3, location: "Rohini", designationName: "Technician", status: "Active", isClinical: false }],
};

export default function setDesignationData(state = initialState, actions) {
    switch (actions.type) {
        case types.SET_DESIGNATION_DATA:
            return {
                ...state,
                designationdata: actions.payload,
            };

        default:
            return {
                ...state,
            };
    }
}
