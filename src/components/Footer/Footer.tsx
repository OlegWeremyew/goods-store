import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

import styles from "@/assets/styles/Footer.module.css";
import {ROUTES} from "@/utils/routes";

import LOGO from "@/assets/images/logo.svg";
import {scrollToTopPage} from "@/utils/scrollToTopPage";

export const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation();

  const handleClick = (): void => {
    if (location.pathname === '/') {
      scrollToTopPage()
      return
    }

    navigate(ROUTES.HOME)
  }

  return (
    <section className={styles.footer}>
      <div className={styles.logo} onClick={handleClick}>
        <img src={LOGO} alt="Stuff"/>
      </div>

      <div className={styles.rights}>
        Developed by{" "}
        <a href="https://youtube.com/Tomkovich" target="_blank" rel="noreferrer">
          Veremyev
        </a>
      </div>

      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`/sprite.svg#instagram`}/>
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`/sprite.svg#facebook`}/>
          </svg>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`/sprite.svg#youtube`}/>
          </svg>
        </a>
      </div>
    </section>
  )
}

