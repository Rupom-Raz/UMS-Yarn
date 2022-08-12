import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AddCurriculam from "./Pages/AddCurriculam";
import AddTutionFee from "./Pages/AddTutionFee";
import CourseLists from "./Pages/CourseLists";
import CourseOffer from "./Pages/CourseOffer/CourseOffer";
import CourseOfferDetails1 from "./Pages/CourseOffer/CourseOfferDetails1";
import CourseOfferDetails2 from "./Pages/CourseOffer/CourseOfferDetails2";
import CourseOfferDetails3 from "./Pages/CourseOffer/CourseOfferDetails3";
import CourseOfferDetails4 from "./Pages/CourseOffer/CourseOfferDetails4";
import CourseView from "./Pages/CourseView/CourseView";
import CourseViewDetails from "./Pages/CourseView/CourseViewDetails";
import Programs from "./Pages/Programs";
import Semester from "./Pages/Semester";

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/semester" element={<Semester />} />
                    <Route path="/courselist" element={<CourseLists />} />
                    <Route path="/curriculam" element={<AddCurriculam />} />
                    <Route path="/tutionfee" element={<AddTutionFee />} />
                    <Route path="/program" element={<Programs />} />
                    <Route path="/courseoffer" element={<CourseOffer />} />
                    <Route
                        path="/coursedetails1"
                        element={<CourseOfferDetails1 />}
                    />
                    <Route path="/courseview" element={<CourseView />} />
                    <Route
                        path="/courseviewdetails"
                        element={<CourseViewDetails />}
                    />
                    <Route
                        path="/coursedetails2"
                        element={<CourseOfferDetails2 />}
                    />
                    <Route
                        path="/coursedetails3"
                        element={<CourseOfferDetails3 />}
                    />
                    <Route
                        path="/coursedetails4"
                        element={<CourseOfferDetails4 />}
                    />
                </Routes>
            </Router>
        </>
    );
};

export default App;
