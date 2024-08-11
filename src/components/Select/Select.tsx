import style from './Select.module.scss'
import { ISelect } from '../../types/types';

const Select = ( {defaultValue, options, ...props}: ISelect ) => {
  return (
    <select 
      className={style.select}
      defaultValue={defaultValue}
      {...props}
    >
      {
        options.map(option => {
          return (
            <option 
              key={option.value} 
              value={option.value} 
            >
              {option.name}
            </option>
          );
        })
      }
    </select>
  );
};

export default Select;
