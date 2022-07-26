import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import React, { useState } from "react";

import { colors } from "../Theme/colors";

const { Option } = Select;

const CourseOffer = () => {
    const [semesters, setSemesters] = useState([
        { semester: 1 },
        { semester: 2 },
        { semester: 3 },
        { semester: 4 },
        { semester: 5 },
        { semester: 6 },
        { semester: 7 },
        { semester: 8 },
    ]);
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
    const [inItSemester, setinItSemester] = useState([]);
    const [semesterNo, setSemesterNo] = useState([]);
    const [section, setSection] = useState([{ value: "" }]);
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

    const handleSubmit1 = (e) => {
        const semesterValue = e.semester;
        handleNext();
        let Data = [];
        for (let i = 1; i <= semesterValue; i++) {
            Data.push({ Semester: i });
        }
        setinItSemester(Data);
    };
    const handleSubmit2 = (e) => {
        handleNext();
        console.log(`Form values ${Object.values(e)}`);
    };
    const handleSubmit3 = (e) => {
        handleNext();
        console.log(`Form values ${Object.values(e)}`);
    };

    const SecondForm = () => {
        return (
            <React.Fragment>
                <Form onFinish={handleSubmit2}>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item label="Semester" />
                            {inItSemester?.map((val) => {
                                return (
                                    <Form.Item>
                                        <Input value={val.Semester} />
                                    </Form.Item>
                                );
                            })}
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Section" />
                            <Form.Item>
                                <Select
                                    name="section"
                                    defaultValue="Select Section"
                                    style={{
                                        width: "100%",
                                    }}
                                    onChange={(e) => setSection(e)}
                                >
                                    <Option value="Select Section">
                                        Select Section
                                    </Option>
                                    <Option value={`${semesterNo}(A)`}>
                                        {`${semesterNo}`}(A)
                                    </Option>
                                    <Option value={`${semesterNo}(B)`}>
                                        {`${semesterNo}`}(B)
                                    </Option>
                                    <Option value={`${semesterNo}(C)`}>
                                        {`${semesterNo}`}(C)
                                    </Option>
                                    <Option value={`${semesterNo}(D)`}>
                                        {`${semesterNo}`}(D)
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
                <Form onFinish={handleSubmit3}>
                    <Row gutter={30}>
                        <Col span={12}>
                            <Form.Item label="Semester and Section" />
                            <Form.Item>
                                <Input value={section} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item>
                                <Form.Item label="Select Course" />
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
                    <Form onFinish={handleSubmit1}>
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
                                        onChange={(e) => setSemesterNo(e)}
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
