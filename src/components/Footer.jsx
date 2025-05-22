import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />


          <div className="flex gap-2 flex-col items-center md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <h1 className="text-white pt-3 font-bold">
                <span className="text-pink-600 md:text-7xl">R</span>a<span className="text-blue-300">m</span>
              </h1>
            </div>




            <div className="social-icon flex justify-center  sm:justify-end gap-4 mb-2 ">
              <a href="https://www.linkedin.com/in/ram-kanto-dey-722b07306/" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://www.facebook.com/ram.apo.2023" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/ramkanto_dey/" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>

          </div>
          <p className="text-center md:hidden">
            &copy; {new Date().getFullYear()} Ramkanto Dey. All Rights Reserved.
          </p>
          <p className="text-right hidden md:block">
            &copy; {new Date().getFullYear()} Ramkanto Dey. All Rights Reserved.
          </p>


        </Row>
      </Container>
    </footer>
  )
}
