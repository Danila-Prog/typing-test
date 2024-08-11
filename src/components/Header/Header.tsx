import { FunctionComponent } from 'react';
import { FiType } from "react-icons/fi";

import style from './Header.module.scss';

const Header:FunctionComponent = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <FiType size={60}/>
        <h1 className='large-header'>Typing Test</h1>
      </div>
    </header>
  );
};

export default Header;
