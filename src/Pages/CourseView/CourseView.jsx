import CancelIcon from "@mui/icons-material/Cancel";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { colors } from "../../Theme/colors";
const CourseView = () => {
    const [data, setDate] = useState([
        {
            id: 1,
            courseTitle: "Principle of Economics",
            courseCode: "ECO-2022",
            credit: "3",
        },
        {
            id: 2,
            courseTitle: "General Physics",
            courseCode: "PHY-2022",
            credit: "2",
        },
    ]);

    const handleDelete = (id) => {
        const filteredCourse = data.filter((course) => course.id !== id);
        setDate(filteredCourse);
    };
    return (
        <React.Fragment>
            <Card className="courseCard mt-2">
                <Card.Body>
                    <div className="container-fluid">
                        <div className="row ">
                            <div className="col-12">
                                <Table striped bordered hover>
                                    <thead style={{ color: colors.gray }}>
                                        <tr>
                                            <th>Course Title</th>
                                            <th>Course Code</th>
                                            <th>Credit</th>
                                            <th>Section</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tableRow">
                                        {data.map((item) => (
                                            <tr key={item.id}>
                                                <>
                                                    <td>
                                                        {item.courseTitle}
                                                        <CancelIcon
                                                            onClick={() =>
                                                                handleDelete(
                                                                    item.id
                                                                )
                                                            }
                                                            style={{
                                                                fontSize:
                                                                    "18px",
                                                                color: "red",
                                                                marginLeft:
                                                                    "10px",
                                                                cursor: "pointer",
                                                            }}
                                                        />
                                                    </td>

                                                    <td>{item.courseCode}</td>
                                                    <td>{item.credit}</td>
                                                    <td>
                                                        <select className="form-select">
                                                            <option value="">
                                                                Select Section
                                                            </option>
                                                            <option value="A">
                                                                A
                                                            </option>
                                                            <option value="B">
                                                                B
                                                            </option>
                                                            <option value="C">
                                                                C
                                                            </option>
                                                        </select>
                                                    </td>
                                                </>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <div className="col-12 d-flex justify-content-center mb-2">
                                    <Link
                                        to="/courseviewdetails"
                                        style={{
                                            padding: "7px 10px",
                                            borderRadius: "3px",
                                            backgroundColor: colors.purple,
                                            color: colors.white,
                                        }}
                                    >
                                        See details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </React.Fragment>
    );
};

export default CourseView;
