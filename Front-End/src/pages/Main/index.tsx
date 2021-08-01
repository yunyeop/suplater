import axios from 'axios';
import { FocusEvent, KeyboardEvent, useRef, useState } from 'react';
import { useEffect } from 'react';
import { OptionTypeBase, ValueType } from 'react-select';
import LanguageSelectBox from '../../components/LanguageSelectBox';
import { Lang } from '../../types/language';

const Main = () => {
  const didMount = useRef(false);

  const [sourceValue, setSourceValue] = useState<string>('');
  const [sourceLang, setSourceLang] = useState<Lang>('ko');
  const [targetValue, setTargetValue] = useState<string>('');
  const [targetLang, setTargetLang] = useState<Lang>('en');

  useEffect(() => {
    const getTranslatedValue = async () => {
      const { data } = await axios.get<string>(`http://localhost:1029/translate/papago`, {
        params: {
          text: sourceValue,
          source: sourceLang,
          target: targetLang,
        }
      });
      setTargetValue(data);
    };

    // first render skip
    if (didMount.current) {
      getTranslatedValue();
    } else {
      didMount.current = true;
    }
  }, [sourceValue]);

  const handleSourceLangChange = ({ value }: any) => {
    setSourceLang(value);
  }


  const handleFoucsOut = (e: FocusEvent<HTMLInputElement>) => {
    const sourceValue = e.target.value;

    if (sourceValue.length > 0) {
      setSourceValue(sourceValue);
    }
  }

  const handlePressEnter = ({ code, currentTarget }: KeyboardEvent<HTMLInputElement>) => {
    // if pressed Enter
    if (code === 'Enter') {
      setSourceValue(currentTarget.value);
      currentTarget.blur();
    }
  }

  return (
    <>
      <div>
        input your text
      </div>
      <div>
        sourceLang: { sourceLang }
      </div>
      <div>
        targetLang: { targetLang }
      </div>
      <LanguageSelectBox
        onChange={handleSourceLangChange} />
      <input
        type="text"
        onBlur={handleFoucsOut}
        onKeyUp={handlePressEnter} />
      <div>{targetValue}</div>
    </>
  );
}

export default Main;