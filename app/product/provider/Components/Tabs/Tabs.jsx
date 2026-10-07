'use client';

import { useState } from 'react';
import styles from './Tabs.module.css';
import { clinicianAccordionData, hospitalAccordionData } from '../Accordion/constants';
import Accordion from '../Accordion/Accordion';
import FeatureComparison from '../../FeatureComparison/FeatureComparison';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('clinician');

  return (
    <div className={styles.wrapper}>
        <div className="swcontainer">
      <div className={styles.tabsHeader}>
        <button
          onClick={() => setActiveTab('clinician')}
          className={`${styles.button} ${activeTab === 'clinician' ? styles.active : ''}`}
        >
          Clinician Products
        </button>

        <button
          onClick={() => setActiveTab('hospital')}
          className={`${styles.button} ${activeTab === 'hospital' ? styles.active : ''}`}
        >
          Hospital Products
        </button>
      </div>

      {/* Tabs Content */}
      <div className={styles.content}>
        {activeTab === 'clinician' && (
            <>
              <Accordion items={clinicianAccordionData} />
              <FeatureComparison />
            </>
          )}
        {activeTab === 'hospital' && (
            <Accordion items={hospitalAccordionData} />
          )}
      </div>
      </div>
    </div>
  );
}
