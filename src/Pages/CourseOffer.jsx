import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import { Button, Col, Form, Modal, Row, Select } from "antd";
import React, { useState } from "react";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { colors } from "../Theme/colors";

const { Option } = Select;

const CourseOffer = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
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
                Course Offer
            </Button>
            <Modal
                onCancel={handleCancel}
                maskClosable={false}
                title="Course Offers"
                visible={isModalVisible}
                width="fullwidth"
                footer={[]}
            >
                <Form>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item>
                                <Select
                                    defaultValue="Select Semester and Section"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Option value="Select Semester and Section">
                                        Select Semester and Section
                                    </Option>
                                    <Option value="1(A)">1(A)</Option>
                                    <Option value="1(B)">1(B)</Option>
                                    <Option value="2(A)">2(A)</Option>
                                    <Option value="2(B)">2(B)</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item>
                                <Select
                                    defaultValue="Select Year"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Option value="Select Year">
                                        Select Year
                                    </Option>
                                    <Option value="2015">2015</Option>
                                    <Option value="2016">2016</Option>
                                    <Option value="2017">2017</Option>
                                    <Option value="2018">2018</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item>
                                <Select
                                    defaultValue="Select Batch"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Option value="Select Batch">
                                        Select Batch
                                    </Option>
                                    <Option value="47">47</Option>
                                    <Option value="48">48</Option>
                                    <Option value="49">49</Option>
                                    <Option value="50">50</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item>
                                <Select
                                    defaultValue="Select Programs"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Option value="Select Programs">
                                        Select Programs
                                    </Option>
                                    <Option value="B.Sc ">B.Sc</Option>
                                    <Option value="M.Sc">M.Sc</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>

                <MobileStepper
                    variant="text"
                    steps={3}
                    position="static"
                    activeStep={activeStep}
                    sx={{ flexGrow: 1 }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === 2}
                        >
                            Next
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={handleBack}
                            disabled={activeStep === 0}
                        >
                            {theme.direction === "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Modal>
        </React.Fragment>
    );
};

export default CourseOffer;
