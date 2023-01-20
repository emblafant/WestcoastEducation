import { useCallback, useRef, useState } from "react";

import SubmitMessage from "./SubmitMessage";
import classes from "./Modal.module.css";

const InquiryFrom = ({ setDisplayForm }) => {
  const [displaySubmitMessage, setDisplaySubmitMessage] = useState(false);

  const emailInputRef = useRef();

  const uniqueId = () => {
    const dateString = Date.now().toString(36);
    const randomness = Math.random().toString(36).substr(2);
    return dateString + randomness;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setDisplaySubmitMessage(true);

    const inquiry = {
      id: uniqueId(),
      email: emailInputRef.current.value,
    };

    await fetch("http://localhost:3010/inquiries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inquiry),
    });
  };

  const onCloseHandler = useCallback(() => {
    setDisplaySubmitMessage(false);
    setDisplayForm(false);
  }, [setDisplaySubmitMessage, setDisplayForm]);

  return (
    <div className={classes.modal}>
      {!displaySubmitMessage && (
        <>
          <header className="small-title">
            <h2>Send a Inquiry</h2>
          </header>
          <main>
            <form onSubmit={onSubmitHandler}>
              <label htmlFor="emailInput">Email</label>
              <input
                type="email"
                name="emailInput"
                id="emailInput"
                ref={emailInputRef}
                required
              ></input>
              <button className="btn">Send Inquiry</button>
            </form>
          </main>
        </>
      )}
      {displaySubmitMessage && (
        <SubmitMessage message="Your inquiry has been sent!" />
      )}
      <footer>
        <button
          className={`btn ${displaySubmitMessage ? "big-btn" : "close-btn"}`}
          onClick={() => {
            onCloseHandler();
          }}
        >
          Close
        </button>
      </footer>
    </div>
  );
};

export default InquiryFrom;
