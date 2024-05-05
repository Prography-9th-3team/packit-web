import { useTextfieldState } from '../module/TextfieldStateContext';

const TextfieldInput = () => {
  const { placeholder, value, onChange, disabled } = useTextfieldState();

  return (
    <input
      className='w-full h-full placeholder:text-text-sub placeholder:label-md text-text label-lg outline-none bg-transparent'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default TextfieldInput;
