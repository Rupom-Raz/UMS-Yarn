import { Button, Checkbox, Col, Form, Modal, Row, Select } from "antd";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import { colors } from "../../Theme/colors";
const { Option } = Select;
const CourseOfferDetails3 = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <React.Fragment>
            {/* Modal Here */}
            <Modal
                onCancel={handleCancel}
                maskClosable={false}
                title="Course Offers"
                visible={isModalVisible}
                width="fullwidth"
                footer={[]}
            >
                <Form layout="vertical">
                    <Row gutter={30}>
                        <Col span={24}>
                            <Form.Item
                                label="Courses"
                                name="course"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Select a Course!",
                                    },
                                ]}
                            >
                                <Row>
                                    <Col span={24}>
                                        <Checkbox value="Introduction to Computer">
                                            Introduction to Computer
                                        </Checkbox>
                                    </Col>
                                    <Col span={24}>
                                        <Checkbox value="Algorithm and Complexity">
                                            Algorithm and Complexity
                                        </Checkbox>
                                    </Col>
                                </Row>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item>
                                <Link
                                    to="/coursedetails4"
                                    style={{
                                        padding: "6px 10px",
                                        borderRadius: "2px",
                                        margin: "10px auto 0px auto",
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    }}
                                >
                                    Set the Course
                                </Link>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
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
                                <td>8</td>
                                <td>A</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Col span={12} offset={10}>
                        <Button
                            onClick={() => setIsModalVisible(true)}
                            htmlType="submit"
                            style={{
                                backgroundColor: colors.purple,
                                color: colors.white,
                            }}
                        >
                            Set Courses
                        </Button>
                    </Col>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CourseOfferDetails3;
