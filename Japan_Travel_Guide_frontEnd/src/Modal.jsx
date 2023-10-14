import { useRef } from "react";
import { useState } from "react";
import "./Event.css";


function Modal(){
    const [name, setName] = useState("user");
    const [nameInput, setNameInput] = useState();
    const [showDialog,setShowDialog] = useState(false);
    const modalRef = useRef();
    const [nameError, setNameError] = useState("");

    function checkName(){
        if (!nameInput || nameInput === "user" ){
          setNameError("Please input your name.");
        } else {
          setNameError("");
          setName(nameInput);
          setShowDialog(false);
          setNameInput();
        }
      }
      
    return(
        <div className="title-modal">
        <p className="title-modal-greet">Hello {name} these are our recent events </p>
        <button className="title-modal-button" onClick={(e)=>{setShowDialog(true);e.preventDefault()}} aria-label="click to input your name">Set Name</button>
        { showDialog && <dialog className="title-modal-modal" open ref={modalRef}>
            <form className="title-modal-form">
                <label htmlFor="name" className="title-modal-form-label"> Name:</label>
                <input className="title-modal-form-input" id="name" onChange={(e)=>{setNameInput(e.target.value); setNameError("")}}></input>
                <span className="title-modal-form-error">{nameError}</span>
                <button className="title-modal-form-submit" type="submit" onClick={(e)=>{e.preventDefault();checkName()}}>submit</button>
            </form>
        </dialog>}
        </div>
    )
}

export default Modal;