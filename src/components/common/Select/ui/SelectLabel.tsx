import { useSelectState } from '../modules/SelectStateContext';

const SelectLabel = () => {
  const { label } = useSelectState();

  return <label className='label-md-bold'>{label}</label>;
};

export default SelectLabel;
