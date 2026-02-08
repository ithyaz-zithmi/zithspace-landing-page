



import React from 'react';
import styles from './Navigation.module.css';
import logoImage from "../../assets/logo.png";

const Navigation = () => {
  const menuItems = ['Home', 'About', 'Service', 'Product', 'Process', 'Contact'];
  
  const scrollToContact = () => {
    // Try multiple selectors to be safe
    const contactElement = document.getElementById('contact') || 
                           document.querySelector('.floatingContainer');
    
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn('Contact section not found. Scrolling to bottom.');
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <nav className={styles.navigation}>
      <div className={styles.logoContainer}>
        <img src={logoImage} alt="ZithSpace Logo" className={styles.logoImage} />
      </div>
      <ul className={styles.navList}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            <a href={`#${item.toLowerCase()}`} className={styles.navLink}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button 
        className={styles.contactBtn} 
        onClick={scrollToContact}
      >
        Get in Touch
      </button>
    </nav>
  );
};

export default Navigation;






// .navigation {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 1rem 2rem; 
//   background: rgba(255, 255, 255, 0.95);
//   backdrop-filter: blur(10px);
//   position: fixed;
//   top: 20px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 90%;
//   max-width: 1200px;
//   z-index: 1000;
//   box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
//   border-radius: 40px; 
// }


//  /* .navigation {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.95rem 2rem; 
//   background: rgba(255, 255, 255, 0.95);
//   backdrop-filter: blur(10px);
//   position: fixed;
//   top: 15px; 
//   left: 50%;
//   transform: translateX(-50%);
//   width: 90%;
//   max-width: 1200px;
//   z-index: 1000;
//   box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
//   border-radius: 35px;
//   height: 60px; 
// }  */

// .logoContainer {
//   background: black;
//   border-radius: 50%;
//   padding: 10px; /* Adjust padding */
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-width: 50px; /* Minimum size for the circle */
//   min-height: 50px;
// }

// .logoImage {
//   height: 30px; /* Adjust logo size */
//   width: auto;
//   object-fit: contain;
// }

// .navList {
//   display: flex;
//   list-style: none;
//   gap: 2.5rem;
//   margin: 0;
//   padding: 0;
//   position: absolute; /* Position absolutely to center */
//   left: 50%;
//   transform: translateX(-50%);
// }

// .navItem {
//   position: relative;
// }

// .navLink {
//   text-decoration: none;
//   color: #4b5563;
//   font-weight: 500;
//   font-size: 1rem;
//   padding: 0.5rem 0;
//   transition: color 0.3s ease;
//   position: relative;
// }

// .navLink:hover {
//   color: #2563eb;
// }

// /* Remove underline effect */
// .navLink::after {
//   display: none;
// }

// .contactBtn {
//   background: #2563eb;
//   color: white;
//   border: none;
//   padding: 0.75rem 1.75rem;
//   border-radius: 25px;
//   font-weight: 600;
//   font-size: 0.95rem;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   margin-left: auto; /* Pushes button to the right */
// }

// .contactBtn:hover {
//   background: #1d4ed8;
//   transform: translateY(-2px);
//   box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
// }

// /* Responsive Design */
// @media (max-width: 768px) {
//   .navigation {
//     flex-direction: column;
//     gap: 1rem;
//     padding: 1rem;
//     border-radius: 20px;
//     top: 10px;
//     width: 95%;
//   }
  
//   .navList {
//     position: relative; /* Reset for mobile */
//     left: 0;
//     transform: none;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 1rem;
//   }
  
//   .contactBtn {
//     margin-left: 0;
//     margin-top: 0.5rem;
//   }
// }





















