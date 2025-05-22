import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import { toast } from "react-toastify";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Submit');

  useEffect(() => {
    if (status === 'success') {
      clearFields();
      setButtonText('Subscribed');
    }
  }, [status]);

  const isMobile = window.innerWidth < 768; // md breakpoint

  const handleSubmit = (e) => {
    e.preventDefault();

    // যদি মোবাইল না হয় তাহলে ইমেইল চেক করবো
    if (!isMobile) {
      if (!email || email.indexOf("@") === -1) {
        toast.error("❌ Please enter a valid email address!");
        return;
      }

      onValidated({ EMAIL: email });
      toast.success("✅ Thanks for subscribing!");
      setButtonText('Subscribed');
      window.open("https://www.youtube.com/@ramkantodey1181", "_blank");
    } else {
      // মোবাইল হলে শুধু YouTube-এ পাঠাও, ইমেইল না দিলেও
      toast.success("✅ Thanks for visiting!");
      window.open("https://www.youtube.com/@ramkantodey1181", "_blank");
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3 className="hidden md:block">
              Subscribe to our Newsletter<br />& Never miss latest updates
            </h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>

          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="hidden md:block"
                />
                <button
                  className="text-white px-4 py-2 rounded shadow bg-blue-600"
                  type="submit"
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
