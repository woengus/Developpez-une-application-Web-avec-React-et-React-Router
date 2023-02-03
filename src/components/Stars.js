import React from "react";

const Stars = ({ rating }) => {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((num) => {
        if (num <= rating) {
          return (
            <span className="red-star" key={num}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                  fill="#FF6060"
                />
              </svg>
            </span>
          );
        } else {
          return (
            <span className="gray-star" key={num}>
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                  fill="#E3E3E3"
                />
              </svg>
            </span>
          );
        }
      })}
    </div>
  );
};

export default Stars;
