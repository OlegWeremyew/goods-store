import React from "react";
import { NavLink } from "react-router-dom";
import styles from "@/assets/styles/Sidebar.module.css";
import {ROUTES} from "@/utils/routes";

export const Sidebar = () => {

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ""}`
                }
                to={`${ROUTES.CATEGORY}/oleg`}
              >
                test
              </NavLink>
            </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="/help" target="_blank" className={styles.link}>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className={styles.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  );
};

