import React from "react";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.ul}>
    {friends.map((friend) => (
      <li key={friend.id} className={styles.li}>
        <span
          className={friend.isOnline ? styles.spanActive : styles.spanOffline}>
          {friend.isOnline}
        </span>
        <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
        <p className={styles.p}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

export default FriendList;
