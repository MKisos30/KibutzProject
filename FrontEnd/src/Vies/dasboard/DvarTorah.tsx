import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../UI/Form/Form';

export interface DvarTorahInfo {
  title: string;
  dvarTorahText: string;
}

const DvarTorah = () => {
  const [text, setText] = useState<DvarTorahInfo>({
    title: '',
    dvarTorahText: '',
  });
  const [message, setMessage] = useState('');
  const [dvarToraEditPop, setdvarToraEditPop] = useState<boolean>(false);
  const [dvarToraId, setDvarToraId] = useState<string>('');

  const getDvarTora = async () => {
    const { data } = await axios.get(
      'http://localhost:8787/deshboard/getDvarTorah'
    );

    if (data.continue) {
      setDvarToraId(data.dvarTora[0]._id);
      return setText({
        title: data.dvarTora[0].title,
        dvarTorahText: data.dvarTora[0].dvarTorahText,
      });
    }

    if (!data.continue) return setMessage(data.message);
  };

  useEffect(() => {
    getDvarTora();
  }, []);

  const postDvarTora = async (ev: any) => {
    ev.preventDefault();

    const token = localStorage.getItem('token');
    const title = ev.target.elements.title.value;
    const dvarTorahText = ev.target.elements.dvarTorahText.value;
    const { data } = await axios.post(
      `http://localhost:8787/deshboard/dvarTorah?token=${token}`,
      { title, dvarTorahText }
    );

    if (data.continue) return setText({ title, dvarTorahText });
    if (!data.continue) return setMessage(data.message);
  };

  const hendleUpdateDvarTora = async (ev: any) => {
    ev.preventDefault();

    const token = localStorage.getItem('token');
    const title = ev.target.elements.updateTitle.value;
    const dvarTorahText = ev.target.elements.updateDvarTorahText.value;
    const { data } = await axios.patch(
      `http://localhost:8787/deshboard/updateDvarTora?token=${token}`,
      { id: dvarToraId, title, dvarTorahText }
    );
    setMessage(data.message)
    if (data.continue) return setText({ title, dvarTorahText })
  };

  return (
    <div>
      <h2>DvarTorah</h2>
      {message.length>0? <h2>{message}</h2>:null}
      <Form subFuntion={postDvarTora}>
        <input type="text" name="title" placeholder="כותרת" />
        <textarea
          rows="10"
          cols="50"
          placeholder="הכנס טקסט..."
          name="dvarTorahText"
        >
        </textarea>
      </Form>
      <h2>{text.title}</h2>
      <p>{text.dvarTorahText}</p>
      <button onClick={() => setdvarToraEditPop(!dvarToraEditPop)}>
        {dvarToraEditPop ? 'X' : 'ערוך'}
      </button>
      {dvarToraEditPop && (
        <div>
          <form onSubmit={hendleUpdateDvarTora}>
            <input
              type="text"
              name="updateTitle"
              placeholder="כותרת"
              defaultValue={text.title}
            />
            <textarea
              rows="10"
              cols="50"
              placeholder="הכנס טקסט..."
              name="updateDvarTorahText"
              defaultValue={text.dvarTorahText}
            ></textarea>
            <button type="submit"> עדכן</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DvarTorah;
