import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ title = {}, stats }) => (
  <section className={styles.section}>
    {title.length && <h2 className={styles.h2}>{title}</h2>}

    <ul className={styles.ul}>
      {stats.map(({ id, label, percentage }) => (
        <li className={styles.li} key={id}>
          <span className={styles.spanLabel}>{label} </span>
          <span className={styles.spanPercentage}>{percentage}</span>
        </li>
      ))}
      {/* <li class="item">
        <span class="label">{stats.label}</span>
        <span class="percentage">{stats.percentage}</span>
      </li>
      <li class="item">
        <span class="label">.mp3</span>
        <span class="percentage">14%</span>
      </li>
      <li class="item">
        <span class="label">.pdf</span>
        <span class="percentage">41%</span>
      </li>
      <li class="item">
        <span class="label">.mp4</span>
        <span class="percentage">12%</span>
      </li> */}
    </ul>
  </section>
);

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
