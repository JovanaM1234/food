import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.item}>
        <div className={styles.card}>
          
          <div className={styles.item2}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
         </div>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Juicy street 
            <br /> NewYork, 85022
            <br /> (602) 867-1022
          </p>
          <p className={styles.text}>
            Juicy corner
            <br /> NewYork, 85022
            <br /> (602) 867-1023
          </p>
         
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
