import axios from 'axios';
import { FocusEvent, KeyboardEvent, useRef, useState } from 'react';
import { useEffect } from 'react';

const Main = () => {
  const didMount = useRef(false);

  const [sourceValue, setSourceValue] = useState<string>('');
  const [targetValue, setTargetValue] = useState<string>('');

  useEffect(() => {
    const getTranslatedValue = async () => {
      const { data } = await axios.get<string>(`http://localhost:1029/translate/papago?text=${sourceValue}&source=en&target=ko`);
      setTargetValue(data);
    };

    // first render skip
    if (didMount.current) {
      getTranslatedValue();
    } else {
      didMount.current = true;
    }
  }, [sourceValue]);


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
      <input
        type="text"
        onBlur={handleFoucsOut}
        onKeyUp={handlePressEnter} />
      <div>{targetValue}</div>
    </>
  );
}

export default Main;