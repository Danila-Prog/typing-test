import style from './Modal.module.scss'
import { TModal } from '../../types/types';


const ModalWindow = ( {children, title}: TModal ) => {
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

export default ModalWindow;
