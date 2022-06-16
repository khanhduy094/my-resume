import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import GetAppIcon from '@mui/icons-material/GetApp';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar
} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import "./style.scss";

function Header(props) {
  const pathName = props?.location?.pathname;
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="header">
      {/* Home Link */}
      <Nav.Link as={NavLink} to="/" className="p-0">
        <Navbar.Brand className="header_home">
          <HomeRoundedIcon />
        </Navbar.Brand>
      </Nav.Link>

      <NavbarToggle />

      <NavbarCollapse>
        <Nav className="header_left">
            
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/resume"
            className={pathName === "/resume" ? "header_link_active" : "header_link"}
          >
            RESUME
          </Nav.Link>

           {/* Portfolio Link */}
           <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={pathName === "/portfolio" ? "header_link_active" : "header_link"}
          >
            PORTFOLIO
          </Nav.Link>

          {/* Contact Link */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={pathName === "/contact" ? "header_link_active" : "header_link"}
          >
            CONTACT
          </Nav.Link>
        </Nav>

        <div className="header_right">
            {Object.keys(resumeData.socials).map((key,index) => (
                <a key={index} href={resumeData.socials[key].link} rel="noreferrer" target="_blank">{resumeData.socials[key].icon}</a>
            ))}
            <CustomButton text="MY CV" icon={<GetAppIcon />} link={"https://www.topcv.vn/xem-cv/e364fffb21ce52ceb20468d275a53dee?utm_source=link_i_topcv&utm_campaign=link_i_topcv&utm_medium=link_i_topcv"}/>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}

export default withRouter(Header);
