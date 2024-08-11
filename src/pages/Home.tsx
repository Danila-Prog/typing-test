import { useAppDispatch } from '../hooks/useRedux';
import { setIsTestStarted, setSentences } from '../redux/reducer/test.slice';

import Header from '../components/Header/Header';
import Test from '../components/Test/Test';
import ModalWindow from '../components/Modal/Modal';
import Select from '../components/Select/Select';
import { useVariableSelector } from '../hooks/useVariableSelector';

export const Home = () => {
  const dispatch = useAppDispatch();
  const {isTestStarted, sentences} = useVariableSelector()

  const sentencesOptions = [
    {value: '1', name: '1'},
    {value: '2', name: '2'},
    {value: '3', name: '3'},
    {value: '4', name: '4'},
    {value: '5', name: '5'},
  ];

  const testStateToggler = () => dispatch(setIsTestStarted(true));
  const changeSentences = (value: string) => dispatch(setSentences(value));

  return (
    <>
      <Header />
      <main className='container main'>
        {
          isTestStarted 
            ? <Test /> 
            : <ModalWindow title='Take a typing test'>
                <label  htmlFor='select-senteces'>
                  Choose number of sentences
                </label>
                <Select 
                  id='select-senteces'
                  defaultValue={sentences} 
                  options={sentencesOptions} 
                  onChange={(event) => changeSentences(event.target.value)}
                />
                <button onClick={testStateToggler}>Start</button>
              </ModalWindow>
        }
      </main>
    </>
  );
};

