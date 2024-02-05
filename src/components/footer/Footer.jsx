import styles from "./footer.module.css";

export default function Post(){
    return(
      <div className={styles.container}>
        <div className={styles.logo}>lamadev</div>
        <div className={styles.text}>
          Lama creative thoughts agency @ All rights reserved.
        </div>
      </div>
    )
  }
