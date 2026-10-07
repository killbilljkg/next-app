import { Fragment } from 'react';
import styles from './FeatureComparison.module.css';
import { productColumns, comparisonSections } from './comparisonData';

export default function FeatureComparison() {
  return (
    // <div className="swcontainer">
    <section className={styles.wrapper}>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          {/* Header */}
          <thead>
            <tr>
              <th className={styles.attributeCol}>Attribute</th>
              {productColumns.map((product) => (
                <th key={product.key}>{product.label}</th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {comparisonSections.map((section) => (
              <Fragment key={section.title}>
                {/* Section row */}
                <tr className={styles.sectionRow}>
                  <td colSpan={productColumns.length + 1}>
                    {section.title}
                  </td>
                </tr>

                {/* Feature rows */}
                {section.features.map((feature) => (
                  <tr key={feature.name}>
                    <td className={styles.featureName}>
                      {feature.name}
                    </td>

                    {productColumns.map((product) => (
                      <td key={product.key} className={styles.iconCell}>
                        {feature.availability[product.key] ? '✓' : '✕'}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    // </div>
  );
}
