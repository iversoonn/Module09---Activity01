import React, { useRef } from "react";

const UncontrolledInput = () => {
    const phoneRef = useRef(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Phone number is: ${phoneRef.current.value}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Phone Number:
                <input
                    type="text"
                    ref={phoneRef} 
                    placeholder="Enter your phone number"
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UncontrolledInput;
