import { Paper, Typography } from "@mui/material";
import { Button, Col, Form, Modal, Row, Select } from "antd";
import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { colors } from "../../Theme/colors";

const { Option } = Select;
const CourseOfferDetails = () => {
    const [form2Details, setForm2Details] = useState([
        { section: "" },
        { course: "" },
    ]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmit2 = (e) => {
        setForm2Details([{ semester: e.semester }, { section: e.section }]);
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
                <Form onFinish={handleSubmit2} layout="vertical">
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item
                                label="Semester"
                                name="semester"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Select a Semester!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Select Semester"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Option value="1">1</Option>
                                    <Option value="2">2</Option>
                                    <Option value="3">3</Option>
                                    <Option value="4">4</Option>
                                    <Option value="5">5</Option>
                                    <Option value="6">6</Option>
                                    <Option value="7">7</Option>
                                    <Option value="8">8</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item label="Section" name="section">
                                <Select
                                    defaultValue="Select Section"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Select.Option value="None">
                                        None
                                    </Select.Option>
                                    <Select.Option value="A">A</Select.Option>
                                    <Select.Option value="B">B</Select.Option>
                                    <Select.Option value="C">C</Select.Option>
                                    <Select.Option value="D">D</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={8}>
                            <Form.Item>
                                <Link
                                    to="/coursedetails2
                                  "
                                    style={{
                                        padding: "6px 10px",
                                        borderRadius: "2px",
                                        margin: "10px auto 0px auto",
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    }}
                                >
                                    Set Semester
                                </Link>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Modal>
            <Row>
                <Col span={24}>
                    <Paper
                        elevation={20}
                        style={{
                            padding: "20px",
                            margin: "40px 20px 10px 20px",
                            background: " rgba( 255, 255, 255, 0.25 )",
                            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                            borderRadius: "10px",
                        }}
                    >
                        <Card
                            style={{
                                padding: "20px",
                                margin: "20px 0px",
                            }}
                        >
                            <Card.Body>
                                <Card.Title style={{ color: colors.purple }}>
                                    Semester Details
                                </Card.Title>
                                <Card.Subtitle className="mb-2 ">
                                    <span style={{ color: colors.purple }}>
                                        Program:
                                    </span>
                                    {""} M.Sc
                                </Card.Subtitle>
                                <Typography>
                                    <span style={{ color: colors.purple }}>
                                        Session:
                                    </span>{" "}
                                    Spring
                                </Typography>
                                <Typography>
                                    <span style={{ color: colors.purple }}>
                                        Year:
                                    </span>{" "}
                                    2022
                                </Typography>
                                <Typography>
                                    <span style={{ color: colors.purple }}>
                                        Starting Date:
                                    </span>{" "}
                                    27th May, 2022
                                </Typography>
                                <Typography>
                                    <span style={{ color: colors.purple }}>
                                        Ending Date:
                                    </span>{" "}
                                    27th May, 2022
                                </Typography>
                            </Card.Body>
                        </Card>
                        <Col span={12} offset={10}>
                            <Button
                                htmlType="submit"
                                onClick={() => setIsModalVisible(true)}
                                style={{
                                    backgroundColor: colors.purple,
                                    color: colors.white,
                                }}
                            >
                                Set Semester
                            </Button>
                        </Col>
                    </Paper>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default CourseOfferDetails;
