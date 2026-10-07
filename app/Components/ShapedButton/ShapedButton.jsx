// import styles from "./ShapedButton.module.css";

// const ShapedButton = () => {
//   return (
//     <div className={styles.mainButton}>
//       <a href="#" className={styles.buttonLink}>
//         <span className={styles.textWrap}>
//           DISCOVER OUR PLATFORM 
//           <div className={styles.leftSvg}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="18"
//               height="48"
//               fill="none"
//               viewBox="0 0 18 48"
//             >
//               <path
//                 fill="#2acfdaff"
//                 d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z"
//               />
//             </svg>
//           </div>
//         </span>

//         {/* ICON PART */}
//         <i className={styles.iconWrap}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="51"
//             height="48"
//             fill="none"
//             viewBox="0 0 51 48"
//           >
//             <path
//               fill="yellow"
//               d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z"
//             />
//           </svg>
//         </i>
//       </a>
//     </div>
//   );
// };

// export default ShapedButton;


import styles from "./ShapedButton.module.css";

const ShapedButton = ({ label, onClick, type = "button" }) => {
  return (
    <div className={styles.mainButton}>
      <button
        type={type}
        onClick={onClick}
        className={styles.buttonLink}
      >
        <span className={styles.textWrap}>
          {label}

          <div className={styles.leftSvg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="48"
              fill="none"
              viewBox="0 0 18 48"
            >
              <path
                fill="#008584"
                d="M0 0h5.63c7.808 0 13.536 7.337 11.642 14.91l-6.09 24.359A11.527 11.527 0 0 1 0 48V0Z"
              />
            </svg>
          </div>
        </span>

        {/* ICON PART */}
        <i className={styles.iconWrap}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="51"
            height="48"
            fill="none"
            viewBox="0 0 51 48"
          >
            <path
              fill="#a7e26e"
              d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z"
            />
          </svg>
        </i>
      </button>
    </div>
  );
};

export default ShapedButton;





