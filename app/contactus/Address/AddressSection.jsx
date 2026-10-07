import styles from "./AddressSection.module.css";

export default function AddressSection() {
  return (
    <section className={styles.section}>
      {/* Top Split */}
      <div className={styles.top}>
        <div className={styles.blockLeft}>
          <h2 className={styles.heading}>Additional Support</h2>

          <p className={styles.text}>
            For product-related assistance, demos, or technical escalation,
            contact our support team.
          </p>

          <div className={styles.meta}>
            <span className={styles.label}>SUPPORT EMAIL:</span>
            <a href="mailto:corporate@arcaai.com" className={styles.link}>
              corporate@arcaai.com
            </a>
          </div>
        </div>

        <div className={styles.blockRight}>
          <h2 className={styles.heading}>Head Office</h2>

          <div className={styles.address}>
            <p>ARCA AI</p>
            <p>148/1/144/7 Doddanekkundi Industrial Area, NOVEL OFFICE WORKHUB, 3RD FLOOR AND TERRACE, DODDANEKKUNDI INDUSTRIAL AREA</p>
            <p><strong>BANGALORE - 560048, India</strong></p>
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className={styles.bottom}>
        <p>
          At ARCA AI, we believe meaningful progress in healthcare begins with a conversation.
        </p>

        <p className={styles.bold}>
          We look forward to speaking with you and supporting your mission to deliver
          compassionate, precise, and proactive care.
        </p>
      </div>
    </section>
  );
}
