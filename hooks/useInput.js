import { useRef, useState, useCallback } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState('53,045,000');
  const [inputKey, setInputKey] = useState();
  const inputRef = useRef(null);

  const keyDownInput = useCallback((e) => {
    setInputKey(e.key);
  }, []);

  const changeInput = useCallback(
    (e) => {
      // incomplete
      // logic 수정 필요
      if (
        !!Number(inputKey) ||
        inputKey === 'Backspace' ||
        inputKey === 'Delete' ||
        inputKey === '0'
      ) {
        const string = e.target.value.replace(/,/g, '');
        const number = Number(string);

        if (number < 100000000000) {
          setInputValue(number.toLocaleString('ko-KR'));
        }
      }

      if (inputKey === '.' && e.target.value.match(/\./g).length === 1) {
        if (inputRef.current.selectionStart !== 1) {
          const string = e.target.value
            .slice(0, inputRef.current.selectionStart)
            .replace(/[,\.]/g, '');
          if (string.length <= 2) {
            setInputValue(
              Number(e.target.value.replace(/[,]/g, '')).toFixed(2)
            );
          } else {
            setInputValue(Number(string).toLocaleString('ko-KR'));
          }
        } else {
          const string = 0 + e.target.value.replace(/,/g, '');
          setInputValue(Number(string).toLocaleString('ko-KR'));
        }
      }
    },
    [inputKey]
  );

  return { inputValue, inputRef, keyDownInput, changeInput };
};

export default useInput;
