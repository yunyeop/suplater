import Select, { OptionTypeBase, ValueType } from 'react-select';

interface ReactSelectOptionsType {
  value: string,
  label: string,
};

const options: ReactSelectOptionsType[] = [
  {value: 'ko', label: '한국어'},
  {value: 'en', label: '영어'},
];

interface LanguageSelectBoxProps {
  onChange: (value: ValueType<OptionTypeBase, boolean>) => void;
}

const LanguageSelectBox = ({ onChange }: LanguageSelectBoxProps) => {
  return (
    <Select
      options={options}
      onChange={onChange} />
  );
}

export default LanguageSelectBox;