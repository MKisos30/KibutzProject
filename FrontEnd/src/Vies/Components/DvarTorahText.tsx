import { useEffect, useState } from 'react';
import axios from 'axios';
import { DvarTorahInfo } from '../dasboard/DvarTorah';


const DvarTorahText = () => {
  
  const [text, setText] = useState<DvarTorahInfo>({
    title: '',
    dvarTorahText: '',
  });

  const [message, setMessage] = useState('');

  const getDvarTora = async () => {
    const { data } = await axios.get(
      'http://localhost:8787/deshboard/getDvarTorah'
    );
    console.log(data);

    if (data.continue)
      return setText({
        title: data.dvarTora[0].title,
        dvarTorahText: data.dvarTora[0].dvarTorahText,
      });
    if (!data.continue) return setMessage(data.message);
  };

  useEffect(() => {
    getDvarTora();
  }, []);

  return (
    <div className="dvarTorahDiv">
      <h3 className="dvarTorahDiv__line">כותרת: {text.title}</h3>
      <p className="dvarTorahDiv__text">{text.dvarTorahText}</p>
    </div>
  );
};

export default DvarTorahText;
