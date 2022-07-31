import { Paper, Typography } from "@mui/material";
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

    const [course, setCourse] = useState([
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3344c",
            },
            CourseCode: "CSE-1101",
            CourseTitle: "Introduction to Computing",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3344d",
            },
            CourseCode: "CSE-1102",
            CourseTitle: "Introduction to Computing Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3344e",
            },
            CourseCode: "CSE-1151",
            CourseTitle: "Discrete Mathematics",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3344f",
            },
            CourseCode: "GED-1262",
            CourseTitle: "Computer Aided Engineering Drawing",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33450",
            },
            CourseCode: "MAT-1151",
            CourseTitle: "Calculus and Linear Algebra",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33451",
            },
            CourseCode: "GED-1131",
            CourseTitle: "Basic English",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33452",
            },
            CourseCode: "GED-1145",
            CourseTitle: "Bangladesh Studies ",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33453",
            },
            CourseCode: "GED-1122",
            CourseTitle: "Basic Computer Applications",
            Credit: "2",
            Hours: "4",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33454",
            },
            CourseCode: "CSE-1211",
            CourseTitle: "Structured Programming",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33455",
            },
            CourseCode: "CSE-1212",
            CourseTitle: "Structured Programming Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33456",
            },
            CourseCode: "MAT-1251",
            CourseTitle:
                "Differential Equation, Laplace Transform and Fourier Analysis",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33457",
            },
            CourseCode: "GED-1171",
            CourseTitle: "Physics: Heat, Light and Sound",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33458",
            },
            CourseCode: "PHY-1272",
            CourseTitle: "Physics Laboratory",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33459",
            },
            CourseCode: "EEE-1221",
            CourseTitle: "Electrical Circuits",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3345a",
            },
            CourseCode: "EEE-1222",
            CourseTitle: "Electrical Circuits Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3345b",
            },
            CourseCode: "GED-1231",
            CourseTitle: "Functional English",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3345c",
            },
            CourseCode: "GED-1291",
            CourseTitle: "Introduction to Sociology",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3345d",
            },
            CourseCode: "CSE-2111",
            CourseTitle: "Data Structures",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3345e",
            },
            CourseCode: "CSE-2112",
            CourseTitle: "Data Structures Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3345f",
            },
            CourseCode: "EEE-2121",
            CourseTitle: "Electronic Devices and Circuits",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33460",
            },
            CourseCode: "EEE-2122",
            CourseTitle: "Electronic Devices and Circuits Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33461",
            },
            CourseCode: "MAT-2151",
            CourseTitle: "Coordinate Geometry & Vector Analysis",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33462",
            },
            CourseCode: "GED-2181",
            CourseTitle: "Introduction to Economics",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33463",
            },
            CourseCode: "GED-2192",
            CourseTitle: "Statistics ",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33464",
            },
            CourseCode: "GED-1161",
            CourseTitle: "Chemistry",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33465",
            },
            CourseCode: "PHY-2171",
            CourseTitle: "Electromagnetism and Modern Physics",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33466",
            },
            CourseCode: "CSE-2211",
            CourseTitle: "Computer Algorithms and Complexity",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33467",
            },
            CourseCode: "CSE-2212",
            CourseTitle: "Computer Algorithms and Complexity Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33468",
            },
            CourseCode: "CSE-2201",
            CourseTitle: "Theory of Computation",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33469",
            },
            CourseCode: "CSE-2231",
            CourseTitle: "Data Communications",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3346a",
            },
            CourseCode: "CSE-2221",
            CourseTitle: "Digital Logic Design",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3346b",
            },
            CourseCode: "CSE-2222",
            CourseTitle: "Digital Logic Design Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3346c",
            },
            CourseCode: "GED-3211",
            CourseTitle: "Smart Village Studies",
            Credit: "3",
            Hours: "2+1",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3346d",
            },
            CourseCode: "GED-4251",
            CourseTitle: "Professional Practices and Ethics",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3346e",
            },
            CourseCode: "MAT-2251 ",
            CourseTitle: "Complex Variable and Probability",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3346f",
            },
            CourseCode: "CSE-3111",
            CourseTitle: "Object Oriented Programming",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33470",
            },
            CourseCode: "CSE-3112",
            CourseTitle: "Object Oriented Programming Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33471",
            },
            CourseCode: "CSE-3121",
            CourseTitle: "Computer Architecture and Design",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33472",
            },
            CourseCode: "CSE-3113",
            CourseTitle: "Database Management System",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33473",
            },
            CourseCode: "CSE-3114",
            CourseTitle: "Database Management System Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33474",
            },
            CourseCode: "CSE-3115",
            CourseTitle: "Numerical Methods",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33475",
            },
            CourseCode: "CSE-3116",
            CourseTitle: "Numerical Methods Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33476",
            },
            CourseCode: "GED-1291",
            CourseTitle: "Principles of Accounting",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33477",
            },
            CourseCode: "GED-1261",
            CourseTitle: "Sustainable Development",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33478",
            },
            CourseCode: "CSE-3212",
            CourseTitle: "Smartphone Application Development",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33479",
            },
            CourseCode: "CSE-3213",
            CourseTitle: "Software Engineering ",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3347a",
            },
            CourseCode: "CSE-3214",
            CourseTitle: "Software Engineering Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3347b",
            },
            CourseCode: "CSE-3231",
            CourseTitle: "Computer Networks",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3347c",
            },
            CourseCode: "CSE-3232",
            CourseTitle: "Computer Networks Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3347d",
            },
            CourseCode: "CSE-3240",
            CourseTitle: "Project I",
            Credit: "2",
            Hours: "4",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3347e",
            },
            CourseCode: "CSE-3201",
            CourseTitle:
                "Microprocessor, Assembly Language and Computer Interfacing",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3347f",
            },
            CourseCode: "CSE-3202",
            CourseTitle:
                "Microprocessor, Assembly Language and Computer Interfacing Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33480",
            },
            CourseCode: "GED-1116",
            CourseTitle: "Introduction to Management",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33481",
            },
            CourseCode: "GED-2203",
            CourseTitle: "Accounting Applications",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33482",
            },
            CourseCode: "CSE-4111",
            CourseTitle: "Artificial Intelligence",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33483",
            },
            CourseCode: "CSE-4112",
            CourseTitle: "Artificial Intelligence Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33484",
            },
            CourseCode: "CSE-4113",
            CourseTitle: "Compiler Design and Construction",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33485",
            },
            CourseCode: "CSE-4114",
            CourseTitle: "Compiler Design and Construction Sessional",
            Credit: "1",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33486",
            },
            CourseCode: "CSE-4116",
            CourseTitle: "Web Technologies ",
            Credit: "2",
            Hours: "4",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33487",
            },
            CourseCode: "CSE ****",
            CourseTitle: "Elective I",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33488",
            },
            CourseCode: "CSE ****",
            CourseTitle: "Elective II ",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33489",
            },
            CourseCode: "CSE-4140",
            CourseTitle: "Project/Thesis II Part – 1",
            Credit: "2",
            Hours: "4",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3348a",
            },
            CourseCode: "GED-3213",
            CourseTitle: "Research Methodology",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3348b",
            },
            CourseCode: "CSE-4203",
            CourseTitle: "Management Information System",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3348c",
            },
            CourseCode: "CSE-4211",
            CourseTitle: "Operating System",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3348d",
            },
            CourseCode: "CSE-4212",
            CourseTitle: "Operating System Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3348e",
            },
            CourseCode: "CSE ****",
            CourseTitle: "Elective III ",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3348f",
            },
            CourseCode: "CSE ****",
            CourseTitle: "Elective III Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33490",
            },
            CourseCode: "CSE ****",
            CourseTitle: "Elective IV ",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33491",
            },
            CourseCode: "CSE ****",
            CourseTitle: "Elective IV Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33492",
            },
            CourseCode: "CSE-4240",
            CourseTitle: "Project/Thesis II Part -2",
            Credit: "4",
            Hours: "8",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33493",
            },
            CourseCode: "CSE-4261",
            CourseTitle: "Computer Graphics",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33494",
            },
            CourseCode: "CSE-4262",
            CourseTitle: "Computer Graphics Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33495",
            },
            CourseCode: "CSE-4263",
            CourseTitle: "Bio Informatics",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33496",
            },
            CourseCode: "CSE-4264",
            CourseTitle: "Bio Informatics Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33497",
            },
            CourseCode: "CSE-4265",
            CourseTitle: "Digital Signal Processing",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33498",
            },
            CourseCode: "CSE-4266",
            CourseTitle: "Digital Signal Processing Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b33499",
            },
            CourseCode: "CSE-4267",
            CourseTitle: "Machine Learning",
            Credit: "2",
            Hours: "2",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3349a",
            },
            CourseCode: "CSE-4268",
            CourseTitle: "Machine Learning Sessional",
            Credit: "1.5",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3349b",
            },
            CourseCode: "CSE-4161",
            CourseTitle: "Computer and Cyber Security",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3349c",
            },
            CourseCode: "CSE-4133",
            CourseTitle: "Cellular Mobile and Satellite Communication ",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3349d",
            },
            CourseCode: "CSE-4135",
            CourseTitle: "Cloud Computing",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3349e",
            },
            CourseCode: "CSE-4163",
            CourseTitle: "Internet of Things",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b3349f",
            },
            CourseCode: "CSE-4165",
            CourseTitle: "Neural Network and Fuzzy Logic",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
        {
            _id: {
                $oid: "62d972b66b9a0c8c59b334a0",
            },
            CourseCode: "CSE-4167",
            CourseTitle: "Human Computer Interaction",
            Credit: "3",
            Hours: "3",
            Faculty: "Modern Science",
            FacultyCode: "12",
            Department: "Computer Science and Engineering",
            DepartmentCode: "1210",
            Program: "B.Sc (Honours) in Computer Science and Engineering",
            ProgramCode: "12101",
        },
    ]);

    const [step, setStep] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCancel = () => {
        setIsModalVisible(false);
        setStep(1);

        setShowCard1(false);
    };
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
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
    const handleSubmit2 = (e) => {
        setForm1Details([
            ...from1Details,
            { semester: e.semester },
            { section: e.section },
        ]);
        setShowCard1(false);
    };
    const handleSubmit3 = (e) => {
        setForm1Details([...from1Details, { course: e.course }]);
        setShowCard1(true);
    };

    const SecondForm = () => {
        return (
            <React.Fragment>
                <Form onFinish={handleSubmit2}>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item label="Semester" />

                            <Form.Item
                                name="semester"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Select a Semester!",
                                    },
                                ]}
                            >
                                <Select defaultValue={"Select a Semester"}>
                                    <Select.Option value="1">1</Select.Option>
                                    <Select.Option value="2">2</Select.Option>
                                    <Select.Option value="3">3</Select.Option>
                                    <Select.Option value="4">4</Select.Option>
                                    <Select.Option value="5">5</Select.Option>
                                    <Select.Option value="6">6</Select.Option>
                                    <Select.Option value="7">7</Select.Option>
                                    <Select.Option value="8">8</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Section" />

                            <>
                                <Form.Item name="section">
                                    <Select
                                        defaultValue="Select Section"
                                        style={{
                                            width: "100%",
                                        }}
                                    >
                                        <Select.Option value="None">
                                            None
                                        </Select.Option>
                                        <Select.Option value="A">
                                            A
                                        </Select.Option>
                                        <Select.Option value="B">
                                            B
                                        </Select.Option>
                                        <Select.Option value="C">
                                            C
                                        </Select.Option>
                                        <Select.Option value="D">
                                            D
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                            </>
                        </Col>

                        <Button
                            onClick={() => setIsModalVisible(false)}
                            htmlType="submit"
                            style={{
                                marginLeft: "13px",
                                backgroundColor: colors.purple,
                                color: colors.white,
                            }}
                        >
                            Set Semester
                        </Button>
                    </Row>
                </Form>
            </React.Fragment>
        );
    };
    const ThirdForm = () => {
        return (
            <React.Fragment>
                <Form onFinish={handleSubmit3}>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item label="Select Course" />

                            <Form.Item
                                name="course"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please Select a Course!",
                                    },
                                ]}
                            >
                                <Select defaultValue="Select Course">
                                    {course &&
                                        course.map((val) => {
                                            return (
                                                <Select.Option
                                                    key={val.CourseTitle}
                                                >
                                                    {val.CourseTitle}
                                                </Select.Option>
                                            );
                                        })}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={12}>
                            {showCard1 && (
                                <Paper
                                    elevation={20}
                                    style={{
                                        padding: "20px",
                                        marginTop: "-10px",
                                        marginBottom: "10px",
                                        background:
                                            " rgba( 255, 255, 255, 0.25 )",
                                        boxShadow:
                                            " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <Typography
                                        style={{
                                            color: colors.purple,
                                            textAlign: "center",
                                        }}
                                    >
                                        Course Details
                                    </Typography>
                                    {from1Details?.map((val) => {
                                        return (
                                            <>
                                                <Typography key={val.program}>
                                                    {val.program}
                                                </Typography>
                                                <Typography key={val.session}>
                                                    {val.session}
                                                </Typography>
                                                <Typography key={val.year}>
                                                    {val.year}
                                                </Typography>
                                                <Typography key={val.startDate}>
                                                    {val.startDate}
                                                </Typography>
                                                <Typography key={val.endDate}>
                                                    {val.endDate}
                                                </Typography>
                                                <Typography key={val.semester}>
                                                    {val.semester}
                                                </Typography>
                                                <Typography key={val.section}>
                                                    {val.section}
                                                </Typography>
                                                <Typography key={val.course}>
                                                    {val.course}
                                                </Typography>
                                            </>
                                        );
                                    })}
                                </Paper>
                            )}
                        </Col>
                    </Row>
                    {!showCard1 && (
                        <Button
                            htmlType="submit"
                            style={{
                                backgroundColor: colors.purple,
                                color: colors.white,
                            }}
                        >
                            Set Course
                        </Button>
                    )}

                    <Row gutter={30}>
                        {showCard1 && (
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
                                        Publish the Course
                                    </Button>
                                </Form.Item>
                            </Col>
                        )}
                    </Row>
                </Form>
            </React.Fragment>
        );
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
                                    defaultValue="Programs"
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
                                label="Date"
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
                            <Form.Item label="Date" name="endDate" {...config}>
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
                                        onClick={() => setStep(2)}
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
