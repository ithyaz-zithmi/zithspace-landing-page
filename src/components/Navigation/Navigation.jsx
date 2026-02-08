



import React from 'react';
import styles from './Navigation.module.css';
import logoImage from "../../assets/logo.svg";

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


























