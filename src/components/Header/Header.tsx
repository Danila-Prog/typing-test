import { FiType } from "react-icons/fi";

import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <FiType size={60}/>
        <h1>Typing Test</h1>
      </div>
    </header>
  );
};

