import React from "react";
// import Link from "next/link";
import styles from "../../styles/BookCircle.module.css";

const BookCircle = () => {
  const textPathRadius = 85;
  const text = "Buy My New Book - T Shirt Swim Club - "
  const circleCenter = 150;
  const backgroundCircleRadius = 95;
  const textPathD = `
    M ${circleCenter}, ${circleCenter}
    m -${textPathRadius}, 0
    a ${textPathRadius},${textPathRadius} 0 1,0 ${textPathRadius * 2},0
    a ${textPathRadius},${textPathRadius} 0 1,0 -${textPathRadius * 2},0
  `;
  return (
    <div className={`${styles.circleWrapper} fadeIn`}>
      <div className={styles.circleText}>
        <a target="_blank" href="https://bookshop.org/p/books/t-shirt-swim-club-the-struggle-stretch-marks-and-solitude-of-being-fat-in-a-world-made-for-thin-people-ian-karmel/20601105?ean=9780593580929" rel="noopener noreferrer">
          <svg width="250" height="250" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx={circleCenter}
              cy={circleCenter}
              r={backgroundCircleRadius}
              fill="#c9b36e"
              />
            <path id="circleTextPath" d={textPathD} fill="none" stroke="transparent" />
            <text fill="black" style={{ fontSize: '16px', letterSpacing: '0.35rem' }}>
              <textPath xlinkHref="#circleTextPath" startOffset="50%" textAnchor="middle">
                {text}
              </textPath>
            </text>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BookCircle;
