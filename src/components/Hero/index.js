import React from "react";
import "./style.css";
const Hero = () => {
    return (
        <div className="hero">
            <h1 className="hero-text">
                <span style={{ "--delay": "0s" }} className="hypeyour">
                    HYPE YOUR
                </span>
                <span style={{ "--delay": "3.333s" }} className="street">
                    STREET
                </span>
                <span style={{ "--delay": "6.666s" }} className="style">
                    STYLE
                </span>
            </h1>
            <div className="scroll-down">
                <span>SCROLL DOWN</span>
                <svg
                    className="down-arrow"
                    viewBox="0 0 16 132"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M7.29289 131.707C7.68341 132.098 8.31658 132.098 8.7071 131.707L15.0711 125.343C15.4616 124.953 15.4616 124.319 15.0711 123.929C14.6805 123.538 14.0474 123.538 13.6568 123.929L7.99999 129.586L2.34314 123.929C1.95262 123.538 1.31945 123.538 0.928927 123.929C0.538402 124.319 0.538402 124.953 0.928927 125.343L7.29289 131.707ZM7 -4.37114e-08L6.99999 131L8.99999 131L9 4.37114e-08L7 -4.37114e-08Z"></path>
                </svg>
            </div>
        </div>
    );
};

export { Hero };
