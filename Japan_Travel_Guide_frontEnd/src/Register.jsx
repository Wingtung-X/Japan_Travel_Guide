import { useRef } from "react";
import { useState } from "react";
import "./Register.css";

function Register({ setPage }) {

    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const [ eventSelect, setEventSelect] = useState("");

    const [responseMessage, setResponseMessage] = useState("");




    const modalRef = useRef();
    const [showDialog, setShowDialog] = useState(false);
    const [value, setValue] = useState(false);




    function checkInput() {
        let isValid = true;
        if (!name) {
            setNameError("Please input a name!");
            isValid = false;
        } if (!email) {
            setEmailError("Please input an email!");
            isValid = false;
        } if (!email.includes("@")) {
            setEmailError("Email address must include '@'");
            isValid = false;
        } if (confirm !== email) {
            setConfirmError("This box must match the email address above!");
            isValid = false;
        }
        if (confirm !== email) {
            setConfirmError("This box must match the email address above!");
            isValid = false;
        }
        return isValid;

    }

    // function onSubmit(e) {
    //     if (checkInput()) {
    //         setShowDialog(true);
    //     }

    // }

    function onSubmit(e){
        e.preventDefault();

        if(checkInput()){
            const data = {
                name: name,
                email: email,
                event: eventSelect
            };
            try {
                fetch('http://localhost:8080/api/register', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                })
                  .then(response => {
                    if (response.ok) {
                        // throw new Error('Network response was not ok');
                      return response.json();
                    }
                    throw new Error('Network response was not ok');
                  })
                  .then(data => {
                    console.log('Success:', data);
                    setShowDialog(true);
                    setResponseMessage(data.message);
                  })
                  .catch(error => {
                    console.error('Error:', error);
                    setShowDialog(true);
                    setResponseMessage("Error");
                  });
              } catch (error) {
                console.error('Network error:', error);
                setShowDialog(true);
                setResponseMessage("Network error");
              }
        }
    }



    return (
        <div className="register">
            <h2 className="register-title">Register</h2>
            <p id="reminder">* indicates a required field</p>
            {showDialog && (
                <dialog className="modal" open ref={modalRef}>
                    <p className="modal-p">{responseMessage}</p>
                    <button className="modal-button" onClick={() => { setShowDialog(false); setPage("Event") }}>Close</button>
                </dialog>
            )}
            <div className="register-form">
                <form className="form">
                    <div className="form-element form-name">
                        <label htmlFor="name" className="form-label form-name-label">* Name: </label>
                        <input name="name" id='name' className="form-input form-name-imput" type="text" value={name} onChange={(e) => { setName(e.target.value); setNameError(""); }} /*onBlur={checkInput} */ />
                        {nameError && <span className="form-error form-name-error">{nameError}</span>}
                    </div>
                    <div className="form-element form-email">
                        <label htmlFor="email" className="form-label form-email-label">* E-mail: </label>
                        <input name="email" id='email' className="form-input form-email-input" type="text" value={email} onChange={(e) => { setEmail(e.target.value); setEmailError("") }} /*onBlur={checkInput} */ />
                        {emailError && <span className="form-error form-email-error">{emailError}</span>}
                    </div>
                    <div className="form-element form-confirm">
                        <label htmlFor="confirm" className="form-label form-confirm-label">* Confirm E-mail: </label>
                        <input name="confirm" id='confirm' className="form-input form-confirm-input" type="text" value={confirm} onChange={(e) => { setConfirm(e.target.value); setConfirmError("") }} /*onBlur={checkInput} */ />
                        {confirmError && <span className="form-error form-confirm-error">{confirmError}</span>}
                    </div>
                    <div className="form-element form-select">
                        <label htmlFor="select" className="form-label form-select-label" >Event: </label>
                        <select name="eventSelect" id="select" value = {value} onChange={(e) => { setValue(e.target.value); setEventSelect(e.target.value); e.target.value === "Other" ? setValue(true) : setValue(false) }} className="form-select-select">
                            <option value="">Please select a event</option>
                            <option value="DiscoverTokyo">Discovering Tokyo's Hidden Gems</option>
                            <option value="OsakaFodie">Osaka Foodie Adventure</option>
                            <option value="TraditionalTea">Traditional Tea Ceremony Experience</option>
                            <option value="Other">Other</option>
                        </select>
                        {value && (<input className="form-select-input" name="select"></input>)}

                    </div>
                    <button className="form-submit-button" aria-label="click to submit the form" type='submit' onClick={(e) => {
                        e.preventDefault();
                        onSubmit(e);
                    }}>submit</button>
                </form>
            </div>
            <button onClick={(e) => { e.preventDefault(); setPage("Event") }} className="back-button" aria-label="click to back to event page">back to event</button>
        </div>
    )
}

export default Register;