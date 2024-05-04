import { useSelectState } from '../modules/SelectStateContext';

const SelectSubText = () => {
  const { subText } = useSelectState();

  return <p className='text-text-sub label-sm'>{subText}</p>;
};

export default SelectSubText;
