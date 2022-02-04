import React, { useRef } from 'react';

const Start = ({ setUsername }) => {
    const inputRef = useRef();

    const handleClick = () =>{
        inputRef.current.value && setUsername(inputRef.current.value);
    };

    return (
        <div className="container">
            <div className="start">
                <input 
                    className="startInput"
                    placeholder="Enter your name..."
                    ref={inputRef}
                />
                <button className="startButton" onClick={handleClick}>
                    Start
                </button>
            </div>
        </div>
    );
};

export default Start;
