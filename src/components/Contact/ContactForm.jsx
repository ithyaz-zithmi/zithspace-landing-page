// import React from 'react';
// import { Icon } from '@iconify/react';
// import styles from './ContactForm.module.css';

// const ContactForm = () => {
//   return (
//     <div className={styles.floatingContainer}>
//       <h2 className={styles.badge}>Get in Touch</h2>
      
//       <div className={styles.contactCard}>
//         {/* Left Section: Info */}
//         <div className={styles.infoSection}>
//           <h1 className={styles.mainTitle}>
//             Let’s Talk with <span className={styles.blueText}>Zithtech</span>
//           </h1>
//           <p className={styles.subText}>
//             Start a conversation with Zithtech and explore how we can turn your ideas into scalable digital solutions.
//           </p>
          
//           <div className={styles.contactDetails}>
//             <div className={styles.detailLink}>
//               <Icon icon="mdi:email-outline" className={styles.icon} />
//               <span>hello@zithtech.com</span>
//             </div>
//             <div className={styles.detailLink}>
//               <Icon icon="mdi:phone-outline" className={styles.icon} />
//               <span>95647 00000</span>
//             </div>
//           </div>

//           <div className={styles.joinUsSection}>
//             <h3 className={styles.joinTitle}>Join Us</h3>
//             <div className={styles.socialRow}>
//               <span><Icon icon="mdi:linkedin" color="#0077B5" /> LinkedIn</span>
//               <span><Icon icon="mdi:instagram" color="#E4405F" /> Instagram</span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section: Form */}
//         <div className={styles.formSection}>
//           <form className={styles.gridForm}>
//             <div className={styles.inputBox}>
//               <label>Company name</label>
//               <input type="text" placeholder="Enter your Company name" />
//             </div>
//             <div className={styles.inputBox}>
//               <label>Phone number</label>
//               <input type="text" placeholder="Enter your Phone number" />
//             </div>
//             <div className={styles.inputBox}>
//               <label>Company Email</label>
//               <input type="email" placeholder="Enter your Company Email" />
//             </div>
//             <div className={styles.inputBox}>
//               <label>Industry</label>
//               <input type="text" placeholder="Enter your Industry" />
//             </div>
//             <div className={`${styles.inputBox} ${styles.fullWidth}`}>
//               <label>Subject</label>
//               <textarea placeholder="Enter Subject" rows="3"></textarea>
//             </div>
//             <div className={styles.btnWrapper}>
//                <button type="submit" className={styles.sendBtn}>Send Message</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;




import React from 'react';
import { Icon } from '@iconify/react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div id="contact" className={styles.floatingContainer}> {/* ADD id="contact" HERE */}
      <h2 className={styles.badge}>Get in Touch</h2>
      
      <div className={styles.contactCard}>
        {/* Left Section: Info */}
        <div className={styles.infoSection}>
          <h1 className={styles.mainTitle}>
            Let's Talk with <span className={styles.blueText}>Zithtech</span>
          </h1>
          <p className={styles.subText}>
            Start a conversation with Zithtech and explore how we can turn your ideas into scalable digital solutions.
          </p>
          
          <div className={styles.contactDetails}>
            <div className={styles.detailLink}>
              <Icon icon="mdi:email-outline" className={styles.icon} />
              <span>hello@zithtech.com</span>
            </div>
            <div className={styles.detailLink}>
              <Icon icon="mdi:phone-outline" className={styles.icon} />
              <span>88387 82347</span>
            </div>
          </div>

          <div className={styles.joinUsSection}>
            <h3 className={styles.joinTitle}>Join Us</h3>
            <div className={styles.socialRow}>
              <span><Icon icon="mdi:linkedin" color="#0077B5" /> LinkedIn</span>
              <span><Icon icon="mdi:instagram" color="#E4405F" /> Instagram</span>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className={styles.formSection}>
          <form className={styles.gridForm}>
            <div className={styles.inputBox}>
              <label>Company name</label>
              <input type="text" placeholder="Enter your Company name" />
            </div>
            <div className={styles.inputBox}>
              <label>Phone number</label>
              <input type="text" placeholder="Enter your Phone number" />
            </div>
            <div className={styles.inputBox}>
              <label>Company Email</label>
              <input type="email" placeholder="Enter your Company Email" />
            </div>
            <div className={styles.inputBox}>
              <label>Industry</label>
              <input type="text" placeholder="Enter your Industry" />
            </div>
            <div className={`${styles.inputBox} ${styles.fullWidth}`}>
              <label>Subject</label>
              <textarea placeholder="Enter Subject" rows="3"></textarea>
            </div>
            <div className={styles.btnWrapper}>
               <button type="submit" className={styles.sendBtn}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;