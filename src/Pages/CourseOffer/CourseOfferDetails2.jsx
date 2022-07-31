import { Paper } from "@mui/material";
import { Col, Row } from "antd";
import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { colors } from "../../Theme/colors";

const CourseOfferDetails2 = () => {
    return (
        <React.Fragment>
            <Row>
                <Col span={24}>
                    <Paper
                        style={{
                            padding: "20px",
                            margin: "40px 20px 10px 20px",
                            background: " rgba( 255, 255, 255, 0.25 )",
                            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                            borderRadius: "5px",
                        }}
                    >
                        <h5
                            style={{
                                color: colors.purple,
                                textAlign: "center",
                            }}
                        >
                            Course Details
                        </h5>
                        <Table bordered hover striped>
                            <thead>
                                <tr
                                    style={{
                                        color: colors.purple,
                                        textAlign: "center",
                                    }}
                                >
                                    <th>Semester</th>
                                    <th>Section</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    style={{
                                        textAlign: "center",
                                        backgroundColor: colors.light,
                                    }}
                                >
                                    <td>3</td>
                                    <td>A</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Col span={12} offset={10}>
                            <Link
                                to="/coursedetails3"
                                style={{
                                    padding: "6px 10px",
                                    borderRadius: "2px",
                                    margin: "10px auto 0px auto",
                                    backgroundColor: colors.purple,
                                    color: colors.white,
                                }}
                            >
                                See Details
                            </Link>
                        </Col>
                    </Paper>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CourseOfferDetails2;
