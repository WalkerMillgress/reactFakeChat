import { useState } from "react";

const ChatInput = (props) => {

    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const inputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
          }
          setEnteredValue(event.target.value);
    } 

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
          setIsValid(false);
          return;
        }
        props.fun(enteredValue);
      };
    

    return (
        <form onSubmit={formSubmitHandler}>
            <textarea onChange={inputChangeHandler}></textarea>
            <button>Submit</button>
        </form>
    )
};

export default ChatInput;