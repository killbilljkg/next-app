import React from "react";
import Image from "next/image";
import styles from "./IconBox.module.css";

function IconBox({ icon, description, bgColor  }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrap} style={{ ["--icon-bg"]: bgColor }}>
        <Image
          src={icon}
          alt=""
          width={32}
          height={32}
          className={styles.icon}
        />
      </div>

      <p className={styles.description}>
        {description}
      </p>
    </div>
  );
}

export default IconBox;
