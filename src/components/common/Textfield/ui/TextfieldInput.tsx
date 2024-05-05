import { useTextfieldState } from '../module/TextfieldStateContext';

const TextfieldInput = () => {
  const { placeholder, value, onChange } = useTextfieldState();

  return (
    <input
      className='w-full h-full placeholder:text-text-sub placeholder:label-md text-text label-lg'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextfieldInput;
