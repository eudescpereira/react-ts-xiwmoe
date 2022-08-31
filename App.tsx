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
      <table>
        <tr>
          <th>Word</th>
          <th>Vowels</th>
          <th>Consonants</th>
        </tr>
        {texts.map((aText, index) => (
          <tr key={index}>
            <td>{aText}</td>
            <td>{getVowels(aText)}</td>
            <td>{getConsonants(aText)}</td>
          </tr>
        ))}
      </table>
      {/*<CounterRegex title="Vowels" text={text} regex={regexVowels} />
      <CounterRegex title="Consonants" text={text} regex={regexConsonants} />*/}
    </div>
  );
}
