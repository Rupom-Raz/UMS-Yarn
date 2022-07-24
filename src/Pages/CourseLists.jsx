import { Button } from "@mui/material";
import * as React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import AddCourseModal from "../components/Modal/AddCourseModal";
import { colors } from "../Theme/colors";

const CourseLists = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <AddCourseModal handleClose={handleClose} open={open} />
            <Card className="courseCard mt-5">
                <Card.Body>
                    <div className="container-fluid">
                        <div className="row justify-content-between my-3">
                            <div className="col-sm-6 col-md-4">
                                <Button
                                    onClick={handleOpen}
                                    variant="outlined"
                                    style={{
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    }}
                                >
                                    Add Course
                                </Button>
                            </div>

                            <div className="col-sm-6 col-md-4 searchBox">
                                <h5
                                    className="text-center"
                                    style={{ color: colors.gray }}
                                >
                                    List of Courses
                                </h5>
                                <form action="">
                                    <div className="form-group ml-3">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Search courses"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className=" col-12">
                                <Table striped="columns">
                                    <thead style={{ color: colors.gray }}>
                                        <tr>
                                            <th>Course Title</th>
                                            <th>Course Code</th>
                                            <th>Credit</th>
                                            <th>Hours Per Week</th>
                                            <th>Program</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tableRow">
                                        <tr>
                                            <td>Introduction to Computer</td>
                                            <td>CSE-1100</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>B.Sc</td>
                                        </tr>
                                        <tr>
                                            <td>Algorithm and Complexity</td>
                                            <td>CSE-1200</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>M.Sc</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default CourseLists;
