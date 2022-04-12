import { useContext } from 'react';
import { InputContext } from '../App';

function InputField() {
  const { inputValue, setinputValue } = useContext(InputContext);

  const handleOnChange = (e) =>
    setinputValue({ ...inputValue, url: e.target.value });

  //   console.log('inputValue', inputValue);

  return (
    <div>
      <label className='font-semibold text-md'>Your url</label>
      <input
        type='url'
        className='w-full border-2 py-1 px-3 text-gray-700 rounded-sm'
        placeholder='https://elmigrante.com.co'
        value={inputValue.url}
        onChange={handleOnChange}
      />
    </div>
  );
}

export default InputField;
