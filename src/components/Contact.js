import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const formIntialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  // hooks
  const [formDetails, setFormDetails] = useState(formIntialDetails); // form data prototype
  const [buttonText, setButtonText] = useState("Send"); // button state management
  const [statusMsg, setStatusMsg] = useState({}); // statusMessage after api call

  const onFormUpdate = (category, value) => {
    setFormDetails({
      // updataing the state (formDetails)
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // after clicked the button i need to chang my buttontext using setButtonText function
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "Application/json;charset=utf-8" },
      body: JSON.stringify(formDetails),
    });

    setButtonText("Send"); // after after call update to previoust state
    let result = await response.json();

    setFormDetails(formIntialDetails); // update to intial state

    if (result.code === 200) {
      setStatusMsg({ success: true, message: "Message send successfully" });
    } else {
      setStatusMsg({
        success: false,
        message: "Something went wrong? please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}></Col>
          <Col size={12} md={6}>
            <h2>Get In Touch</h2>

            {/* ***************************** FORM SECTION ********************************/}
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col size={12} sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit" onClick={handleSubmit}>
                    <span>{buttonText}</span>
                  </button>
                </Col>

                {/* ***************************** STATUS MESSAGE SECTION ********************************/}

                {statusMsg.message && (
                  <Col>
                    <p
                      className={
                        statusMsg.success === false ? "danger" : "success"
                      }
                    >
                      {statusMsg.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
