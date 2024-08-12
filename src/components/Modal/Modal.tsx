import style from './Modal.module.scss'
import { TModal } from '../../types/types';

//Модальное окно
export const ModalWindow = ( {children, title}: TModal ) => {
  return (
    <div className={style.modalWindowBlackout}>
      <div className={style.modalWindow}>
        <h2 className={style.modalInfo}>
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

