import React from "react";
import { useLocation } from "react-router-dom";

const CourseOfferDetails = () => {
    const location = useLocation();
    const { data } = location.state;

    return (
        <React.Fragment>
            {data?.map((val) => {
                return <p>{val.program}</p>;
            })}
        </React.Fragment>
    );
};

export default CourseOfferDetails;
