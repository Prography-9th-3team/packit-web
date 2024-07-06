import { useTextfieldState } from '../module/TextfieldStateContext';

const TextfieldInput = () => {
  const { placeholder, value, onChange, isDisabled, name } = useTextfieldState();

  return (
    <input
      className='w-full h-full placeholder:text-text-sub placeholder:label-md text-text label-lg outline-none bg-transparent'
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={isDisabled}
    />
  );
};

export default TextfieldInput;
