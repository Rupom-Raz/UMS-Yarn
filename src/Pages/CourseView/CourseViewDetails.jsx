import React from "react";
import Card from "react-bootstrap/Card";
const CourseViewDetails = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Card className="card p-3 ">
                            <Card.Body>
                                <Card.Title>Principle of Economics</Card.Title>
                                <p className="cardSub">
                                    Course Code : PHY-3000
                                </p>
                                <div className="cardBottom d-flex justify-content-start">
                                    <div className="courses">
                                        <p>Credit</p>
                                        <p>3</p>
                                    </div>
                                    <div className="credit">
                                        <p>Section</p>
                                        <p>B</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card className="card p-3 ">
                            <Card.Body>
                                <Card.Title>
                                    Algorithm and Data Structure
                                </Card.Title>
                                <p className="cardSub">
                                    Course Code : CSE-4000
                                </p>
                                <div className="cardBottom d-flex justify-content-start">
                                    <div className="courses">
                                        <p>Credit</p>
                                        <p>3</p>
                                    </div>
                                    <div className="credit">
                                        <p>Section</p>
                                        <p>A</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CourseViewDetails;
