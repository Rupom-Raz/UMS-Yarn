import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import React, { useState } from "react";

import { colors } from "../Theme/colors";

const { Option } = Select;

const CourseOffer = () => {
    const [semesters, setSemesters] = useState([
        { semester: "1" },
        { semester: "2" },
        { semester: "3" },
        { semester: "4" },
        { semester: "5" },
        { semester: "6" },
        { semester: "7" },
        { semester: "8" },
    ]);
    const [semesterNo, setSemesterNo] = useState([{ value: "" }]);
    const [step, setStep] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleNext = () => {
        setStep((prev) => prev + 1);
    };
    const handleBack = () => {
        setStep((prev) => prev - 1);
    };
    // const handleChange = (e) => {
    //     console.log(e);
    //     setSemesterNo({ value: e });
    //     console.log(` semester no is ${semesterNo}`);
    // };

    const onFinish = (e) => {
        handleNext();
        console.log(`Form values ${JSON.stringify(e)}`);
    };

    const SecondForm = () => {
        return (
            <React.Fragment>
                <Form onFinish={onFinish}>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item label="Semester" />
                            {semesterNo.value && (
                                <Form.Item>
                                    <Input value={semesterNo.value} />
                                </Form.Item>
                            )}
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Section" />
                            <Form.Item>
                                <Select
                                    defaultValue="Select Semester and Section"
                                    style={{
                                        width: "100%",
                                    }}
                                >
                                    <Option value="Select Semester and Section">
                                        Select Section
                                    </Option>
                                    <Option value={`${semesterNo.value}(A)`}>
                                        {`${semesterNo.value}`}(A)
                                    </Option>
                                    <Option value={`${semesterNo.value}(B)`}>
                                        {`${semesterNo.value}`}(B)
                                    </Option>
                                    <Option value={`${semesterNo.value}(C)`}>
                                        {`${semesterNo.value}`}(C)
                                    </Option>
                                    <Option value={`${semesterNo.value}(D)`}>
                                        {`${semesterNo.value}`}(D)
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={30}>
                        <Col>
                            <Form.Item>
                                <Button
                                    onClick={handleBack}
                                    style={{
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                        marginRight: "10px",
                                    }}
                                >
                                    Back
                                </Button>
                                <Button
                                    htmlType="submit"
                                    style={{
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    }}
                                >
                                    Continue
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        );
    };
    const ThirdForm = () => {
        return (
            <React.Fragment>
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
                        <Col>
                            <Form.Item>
                                <Button
                                    onClick={handleBack}
                                    style={{
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                        marginRight: "10px",
                                    }}
                                >
                                    Back
                                </Button>
                                <Button
                                    style={{
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    }}
                                >
                                    Set the Course
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </React.Fragment>
        );
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
                bodyStyle={{ height: "100vh" }}
                style={{
                    top: 0,
                }}
                onCancel={handleCancel}
                maskClosable={false}
                title="Course Offers"
                visible={isModalVisible}
                width="fullwidth"
                footer={[]}
            >
                {step === 1 ? (
                    <Form onFinish={onFinish}>
                        <Row gutter={30}>
                            <Col span={12}>
                                <Form.Item
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
                                        <Option value="B.Sc ">B.Sc</Option>
                                        <Option value="M.Sc">M.Sc</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    name="year"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please Select a Year!",
                                        },
                                    ]}
                                >
                                    <Select
                                        defaultValue="Select Year"
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
                            <Col span={12}>
                                <Form.Item
                                    name="semester"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please Select a Semester!",
                                        },
                                    ]}
                                >
                                    <Select
                                        defaultValue="Select Semester"
                                        style={{
                                            width: "100%",
                                        }}
                                        onChange={(e) =>
                                            setSemesterNo({ value: e })
                                        }
                                    >
                                        {semesters.map((val) => {
                                            return (
                                                <Select.Option
                                                    value={val.semester}
                                                    key={val.semester}
                                                >
                                                    {val.semester}
                                                </Select.Option>
                                            );
                                        })}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
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
                            <Col>
                                <Form.Item>
                                    <Button
                                        htmlType="submit"
                                        style={{
                                            backgroundColor: colors.purple,
                                            color: colors.white,
                                        }}
                                    >
                                        Continue
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                ) : null}

                {step === 2 ? <SecondForm /> : null}
                {step === 3 ? <ThirdForm /> : null}
            </Modal>
        </React.Fragment>
    );
};

export default CourseOffer;
