import { Paper } from "@mui/material";
import { Button, Col, DatePicker, Form, Modal, Row, Select } from "antd";
import moment from "moment";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import { colors } from "../../Theme/colors";

const { Option } = Select;

const CourseOffer = () => {
    const [from1Details, setForm1Details] = useState([
        { program: "" },
        { session: "" },
        { year: "" },
        { startDate: "" },
        { endDate: "" },
        { semester: "" },
        { section: "" },
        { course: "" },
    ]);

    const [showCard1, setShowCard1] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCancel = () => {
        setIsModalVisible(false);
        setShowCard1(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleSubmit1 = (e) => {
        setIsModalVisible(false);
        const startDate = new Date(e.startDate).toLocaleDateString();
        const endDate = new Date(e.endDate).toLocaleDateString();
        setForm1Details([
            { program: e.program },
            { session: e.session },
            { year: e.year },
            { startDate: startDate },
            { endDate: endDate },
        ]);
        setShowCard1(true);
    };

    //Disable Current Date and Current Previous
    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < moment().endOf("day");
    };
    const config = {
        rules: [
            {
                type: "object",
                required: true,
                message: "Please select time!",
            },
        ],
    };

    return (
        <React.Fragment>
            <Button
                style={{
                    backgroundColor: colors.purple,
                    color: colors.white,
                }}
                onClick={showModal}
            >
                Start a Semester
            </Button>

            {showCard1 && (
                <Row>
                    <Col span={24}>
                        <Paper
                            style={{
                                padding: "20px",
                                margin: "40px 20px 10px 20px",
                                background: " rgba( 255, 255, 255, 0.25 )",
                                boxShadow:
                                    "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
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
                                        <td>05ht August 2022</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Link
                                to="/coursedetails1"
                                state={{
                                    from1Details,
                                }}
                                style={{
                                    padding: "6px 20px",
                                    borderRadius: "2px",
                                    margin: "10px auto 0px auto",
                                    backgroundColor: colors.purple,
                                    color: colors.white,
                                }}
                            >
                                See Details
                            </Link>
                        </Paper>
                    </Col>
                </Row>
            )}
            <Modal
                onCancel={handleCancel}
                maskClosable={false}
                title="Course Offers"
                visible={isModalVisible}
                width="fullwidth"
                footer={[]}
            >
                <Form onFinish={handleSubmit1} layout="vertical">
                    <Row gutter={30}>
                        <Col span={8}>
                            <Form.Item
                                label="Program"
                                name="program"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Select a Program!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Select Programs"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Option value="B.Sc">B.Sc</Option>
                                    <Option value="M.Sc">M.Sc</Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col span={8}>
                            <Form.Item
                                label="Session"
                                name="session"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Select a Session!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Select Session"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Select.Option value="Summer">
                                        Summer
                                    </Select.Option>
                                    <Select.Option value="Spring">
                                        Spring
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Year"
                                name="year"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Select a Year!",
                                    },
                                ]}
                            >
                                <Select
                                    defaultValue="Year"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Select.Option value="2015">
                                        2015
                                    </Select.Option>
                                    <Select.Option value="2016">
                                        2016
                                    </Select.Option>
                                    <Select.Option value="2017">
                                        2017
                                    </Select.Option>
                                    <Select.Option value="2018">
                                        2018
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col span={8}>
                            <Form.Item
                                label="Starting Date"
                                name="startDate"
                                {...config}
                            >
                                <DatePicker
                                    disabledDate={disabledDate}
                                    style={{ width: "100%" }}
                                    format={"DD-MM-YYYY"}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                label="Ending Date"
                                name="endDate"
                                {...config}
                            >
                                <DatePicker
                                    disabledDate={disabledDate}
                                    style={{ width: "100%" }}
                                    format={"DD-MM-YYYY"}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <Form.Item>
                                <Button
                                    htmlType="submit"
                                    style={{
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    }}
                                >
                                    Set Semester
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={30}>
                        <Col>
                            {showCard1 && (
                                <Form.Item>
                                    <Button
                                        style={{
                                            backgroundColor: colors.purple,
                                            color: colors.white,
                                        }}
                                    >
                                        Continue
                                    </Button>
                                </Form.Item>
                            )}
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </React.Fragment>
    );
};

export default CourseOffer;
