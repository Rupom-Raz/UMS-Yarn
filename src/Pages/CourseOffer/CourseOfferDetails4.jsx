import { Button, Col, Row } from "antd";
import React from "react";
import { useAlert } from "react-alert";
import Table from "react-bootstrap/Table";
import { colors } from "../../Theme/colors";

const CourseOfferDetails4 = () => {
    const Alert = useAlert();
    return (
        <React.Fragment>
            <Row>
                <Col span={24}>
                    <h5
                        style={{
                            color: colors.purple,
                            textAlign: "center",
                        }}
                    >
                        Course Details
                    </h5>

                    <Table hover striped bordered>
                        <thead>
                            <tr
                                style={{
                                    color: colors.purple,
                                    textAlign: "center",
                                }}
                            >
                                <th>Program</th>
                                <th>Session</th>
                                <th>Year</th>
                                <th>Starting Date</th>
                                <th>Ending Date</th>
                                <th>Semester</th>
                                <th>Section</th>
                                <th>Course</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                style={{
                                    textAlign: "center",
                                    backgroundColor: colors.light,
                                }}
                            >
                                <td>M.Sc</td>
                                <td>Spring</td>
                                <td>2022</td>
                                <td>27th July 2022</td>
                                <td>05th August 2022</td>
                                <td>3</td>
                                <td>A</td>
                                <td>Introduction to Computer</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

                <Col span={12} offset={10}>
                    <Button
                        onClick={() =>
                            Alert.success("Semester Published Successfully")
                        }
                        style={{
                            backgroundColor: colors.purple,
                            color: colors.white,
                        }}
                    >
                        Publish Semester
                    </Button>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CourseOfferDetails4;
