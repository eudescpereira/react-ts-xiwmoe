import * as React from 'react';
import { useState } from 'react';
//import { CounterRegex } from './CounterRegex.js';
import './style.css';

function getVowels(str) {
  var m = str.match(/[aãáàâeèéêiíoôõóuú]/gi);
  return m === null ? 0 : m.length;
}
function getConsonants(str) {
  var m = str.match(/[bcçdfghjklmnpqrstvwxsyz]/gi);
  return m === null ? 0 : m.length;
}

export default function App() {
  const [texts, setTexts] = useState([]);
  const [text, setText] = useState('');
  const handleChangeText = (evt) => {
    setText(evt.target.value);
  };
  const handleClickBtInput = () => {
    let textTrim = text.trim();
    if (textTrim) {
      setTexts([...texts, textTrim]);
    }
  };
  //const regexVowels = /[aãáàâeèéêiíoôõóuú]/gi;
  //const regexConsonants = /[bcçdfghjklmnpqrstvwxsyz]/gi;
  return (
    <div className="App">
      <h2>Vowels and Consonants</h2>
      <p>
        <label htmlFor="text">Enter a word: </label>
        <input
          id="text"
          type="text"
          value={text}
          onChange={handleChangeText}
        />{' '}
        <button onClick={handleClickBtInput}>Input</button>
      </p>
      {texts.length > 0 && (
        <table style={{ border: 'solid 1px black', width: '100%' }}>
          <thead>
            <tr key={text}>
              <th>Word</th>
              <th>Vowels</th>
              <th>Consonants</th>
            </tr>
          </thead>
          {texts.map((aText, index) => (
            <tbody style={{ border: 'solid 1px black', width: '100%' }}>
              <tr key={index}>
                <td style={{ border: '1px black', width: '100%' }}>{aText}</td>
                <td style={{ border: '1px black', width: '100%' }}>
                  {getVowels(aText)}
                </td>
                <td style={{ border: '1px black', width: '100%' }}>
                  {getConsonants(aText)}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
      {/*<CounterRegex title="Vowels" text={text} regex={regexVowels} />
      <CounterRegex title="Consonants" text={text} regex={regexConsonants} />*/}
    </div>
  );
}
