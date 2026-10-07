import React from "react";
import styles from "./ProductOverview.module.css";
import Image from "next/image";
import Img from "@/public/TrueClaimDashboard.webp"

function ProductOverview() {
  return (
    <section className={styles.overviewSection}>
      <div className="swcontainer">
        <div className={styles.overviewGrid}>

          <div className={styles.leftImg}>
            <Image
                src={Img}
                alt="Product overview"
                fill
                priority
                className={styles.image}
            />
          </div>

          <div className={styles.rightText}>
            <h2 className={styles.title}>Product Overview</h2>

            <p className={styles.subtitle}>
              <span>TrueClaim:</span> Intelligent Claim & Fraud Management for
              Modern Healthcare
            </p>

            <div className={styles.bodyText}>
              <p>
                Healthcare payers operate in an environment where high-volume
                claims, variable documentation, data fragmentation, and
                fraudulent patterns increase both financial and operational
                risk.
              </p>

              <p>
                TrueClaim brings clarity back into the system.
              </p>

              <p>
                Built using ARCA’s ethical, research-driven AI framework,
                TrueClaim automates the claims journey from intake to
                verification — detecting anomalies, highlighting deviations,
                and ensuring that every claim is backed by transparent,
                validated data.
              </p>

              <p>
                It connects seamlessly with provider systems and payer
                workflows, giving insurers a unified view of medical,
                operational, and behavioral signals needed for responsible
                decision-making.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductOverview;
