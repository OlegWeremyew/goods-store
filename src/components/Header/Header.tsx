import {ChangeEvent, useState} from 'react';
import styles from '@/assets/styles/Header.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "@/utils/routes";
import LOGO from '@/assets/images/logo.svg'
import AVATAR from '@/assets/images/avatar.jpg'

type SetValuesType = {
  name: string,
  avatar: string
}

export const Header = () => {

  const [values, setValues] = useState<SetValuesType>({name: "Guest", avatar: AVATAR});
  const [searchValue, setSearchValue] = useState<string>("");

  const handleClick = (): void => {
  }

  const handleSearch = ({target: {value}}: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Stuff"/>
        </Link>
      </div>


      <div className={styles.info}>
        <div className={styles.user} onClick={handleClick}>
          <div
            className={styles.avatar}
            style={{backgroundImage: `url(${values.avatar})`}}
          />
          <div className={styles.username}>{values.name}</div>
        </div>
      </div>

      <form className={styles.form}>
        <div className={styles.icon}>
          <svg className="icon">
            <use xlinkHref={`/sprite.svg#search`}/>
          </svg>
        </div>
        <div className={styles.input}>
          <input
            type="search"
            name="search"
            placeholder="Search for anyting..."
            autoComplete="off"
            onChange={handleSearch}
            value={searchValue}
          />
        </div>

        {true && <div className={styles.box}>       </div>}
      </form>

      <div className={styles.account}>
        <Link to={ROUTES.HOME} className={styles.favourites}>
          <svg className={styles["icon-fav"]}>
            <use xlinkHref={`/sprite.svg#heart`}/>
          </svg>
        </Link>

        <Link to={ROUTES.CART} className={styles.cart}>
          <svg className={styles["icon-cart"]}>
            <use xlinkHref={`/sprite.svg#bag`}/>
          </svg>
          {true && (
            <span className={styles.count}>2</span>
          )}
        </Link>
      </div>
    </header>
  );
};
