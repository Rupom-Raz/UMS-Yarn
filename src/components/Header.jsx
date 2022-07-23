import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">UMS</Link>
            </div>
            <ul>
                <>
                    <li>
                        <Link to="/semester">Semester</Link>
                    </li>
                    <li>
                        <Link to="/courselist">Add Course</Link>
                    </li>
                    <li>
                        <Link to="/curriculam">Add Curriculam</Link>
                    </li>
                    <li>
                        <Link to="/tutionfee">TuitionFee</Link>
                    </li>
                    <li>
                        <Link to="/program">Programs</Link>
                    </li>
                    <li>
                        <Link to="/courseoffer">CourseOffer</Link>
                    </li>
                </>
            </ul>
        </header>
    );
};

export default Header;
