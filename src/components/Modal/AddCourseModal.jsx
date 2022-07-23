import { Cancel } from "@mui/icons-material";
import {
    Box,
    Button,
    Grid,
    MenuItem,
    Modal,
    Select,
    Typography,
} from "@mui/material";
import { ErrorMessage, Form, Formik, useField } from "formik";
import * as React from "react";
import { useAlert } from "react-alert";
import * as Yup from "yup";
import { colors } from "../../Theme/colors";

import TextInput from "../TextInput";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 500,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};
const validationSchema = Yup.object().shape({
    courseTitle: Yup.string().required("Course title is required"),
    courseCode: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Course code is required"),
    courseHours: Yup.number()
        .max(3, "No longer than 3 hours")
        .min(2, "Must be longer than 2 hours")
        .required("Course hours is required"),
    credit: Yup.number()
        .max(3, "No longer than 3 credits")
        .min(1, "Must be longer than 1 credit")
        .required("Course credit is required"),

    program: Yup.string()
        .required("Program is required")
        .oneOf(["B.Sc", "M.Sc"])
        .label("Selected Program"),
});

const initialValues = {
    courseTitle: "",
    courseCode: "",
    courseHours: "",
    credit: "",
    program: "Select Program",
};

const SelectField = ({ value, onChange, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <React.Fragment>
            <div className="mb-1">
                {meta.error && meta.touched ? (
                    <Select
                        {...field}
                        {...props}
                        error
                        name="program"
                        fullWidth
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        <MenuItem value="Select Program">
                            Select Program
                        </MenuItem>
                        <MenuItem value="B.Sc">B.Sc</MenuItem>
                        <MenuItem value="M.Sc">M.Sc</MenuItem>
                    </Select>
                ) : (
                    <Select
                        {...field}
                        {...props}
                        name="program"
                        fullWidth
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        <MenuItem value="Select Program">
                            Select Program
                        </MenuItem>
                        <MenuItem value="B.Sc">B.Sc</MenuItem>
                        <MenuItem value="M.Sc">M.Sc</MenuItem>
                    </Select>
                )}
                <ErrorMessage
                    component="div"
                    name={field.name}
                    className="error"
                />
            </div>
        </React.Fragment>
    );
};

const AddCourseModal = ({ handleClose, open }) => {
    const alert = useAlert();
    const [formValues, setFormValues] = React.useState(null);
    const onSubmit = (values, submitProps) => {
        if (!values) {
            alert.error("Please Add Course First");
        } else {
            alert.success("Course Added Successfully");
            handleClose();
        }
        console.log("Form Data", values);
        console.log("Submit props", submitProps);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    };

    return (
        <>
            <Formik
                initialValues={formValues || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {(formik) => (
                    <Form>
                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} component="form">
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography
                                            id="modal-modal-title"
                                            variant="h6"
                                            component="h2"
                                        >
                                            Add Courses
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Cancel
                                            onClick={() => {
                                                handleClose();
                                                formik.resetForm();
                                            }}
                                            style={{
                                                color: colors.purple,
                                                cursor: "pointer",
                                                marginTop: "-50px",
                                                marginRight: "-20px",
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                <TextInput
                                    value={formik.values.courseTitle}
                                    onChange={formik.handleChange}
                                    name="courseTitle"
                                    label="Course Title"
                                    type="text"
                                />

                                <TextInput
                                    value={formik.values.courseCode}
                                    onChange={formik.handleChange}
                                    name="courseCode"
                                    label="Course Code"
                                    type="text"
                                />
                                <TextInput
                                    value={formik.values.credit}
                                    onChange={formik.handleChange}
                                    name="credit"
                                    label="Course Credit"
                                    type="number"
                                />
                                <TextInput
                                    value={formik.values.courseHours}
                                    onChange={formik.handleChange}
                                    name="courseHours"
                                    label="Course Hours"
                                    type="number"
                                />

                                <SelectField
                                    name="program"
                                    label="Select Programs"
                                    value={formik.values.program}
                                    onChange={formik.handleChange}
                                />
                                <Button
                                    type="submit"
                                    disabled={
                                        !formik.isValid || formik.isSubmitting
                                    }
                                    variant="outlined"
                                    style={{
                                        margin: "10px 0px",
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    }}
                                >
                                    Save
                                </Button>
                            </Box>
                        </Modal>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default AddCourseModal;
