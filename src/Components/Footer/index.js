import React from "react";
import "./style.css";
import { Form, Col } from "react-bootstrap";
import logo from "../../Images/c-logo.png";

function Footer() {
  return (
    <footer className="footer-align this-block" id="contact">
      <div className="container" id="footer-logo">
        <a href="index.html">
          <img src={logo} alt="website-logo" width="70" height="70"></img>
        </a>
      </div>

      <div id="contact-section">
        <div>
          <Form>
            <h3 className="heading-style">LET'S CHAT</h3>

            <div className="contact-text">
              <p>
                Use the contact form below or email{" "}
                <span>mcroque89@gmail.com</span>.
              </p>
            </div>

            <Form.Row className="form-row">
              <Col className="required">
                <Form.Control id="u-name" placeholder="Your Name*" />
              </Col>
              <Col className="required">
                <Form.Control id="u-email" placeholder="Your Email*" />
              </Col>
            </Form.Row>

            <Form.Row>
              <Col className="required">
                <Form.Control id="u-phone" placeholder="Your Phone" />
              </Col>
              <Col className="required">
                <Form.Control id="u-web" placeholder="Your Website" />
              </Col>
            </Form.Row>

            <Form.Row>
              <Col className="required">
                <Form.Control
                  as="textarea"
                  id="u-msg"
                  placeholder="How can I help you? Please include details about your project."
                />
              </Col>
            </Form.Row>

            <Form.Row>
              <button
                className="btn btn-light"
                id="submitBtn"
                type="button"
                data-toggle="modal"
                data-target="#thankYou"
              >
                Submit
              </button>
              <div id="stop-submit"></div>
            </Form.Row>
          </Form>

          {/* The Modal */}
          <div className="modal fade" id="thankYou">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                {/* Modal Header */}
                <div className="modal-header">
                  <h4 className="modal-title">Thank You!</h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                {/* Modal body */}
                <div className="modal-body">
                  I will get back to you shortly.
                </div>

                {/* Modal footer */}
                <div className="modal-footer">
                  <button
                    type="button"
                    id="closeBtn"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer-text">
        <p>&copy; MCR. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
