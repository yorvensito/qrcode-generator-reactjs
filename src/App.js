import { createContext, useState } from 'react';
import InputForm from './components/InputForm';
import QrCode from './components/QrCode';
import axios from 'axios';

export const InputContext = createContext();

function App() {
  const [inputValue, setinputValue] = useState({
    url: '',
    color: '',
  });

  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getQrCode = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        'https://qrcode-tiger.com/api/qr/static',
        bodyParameters,
        config
      );

      setResponse(res.data.url);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    inputValue,
    setinputValue,
    getQrCode,
    response,
    loading,
    error,
  };

  const config = {
    headers: {
      Authorization: 'Bearer 25b6fe10-ba12-11ec-bc3d-5db5adb0ff39',
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Headers':
      //   'Origin, X-Requested-With, Content-Type, Accept',
    },
  };

  const bodyParameters = {
    colorDark: inputValue.color,
    qrCategory: 'url',
    text: inputValue.url,
  };

  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 px2'>
      <div className='container mx-auto max-w-4xl bg-white rounded-md shadow'>
        <div className='md:grid md:grid-cols-3'>
          <InputContext.Provider value={value}>
            <InputForm />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
