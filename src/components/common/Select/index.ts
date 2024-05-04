import SelectInput from './ui/SelectInput';
import SelectLabel from './ui/SelectLabel';
import SelectMain from './ui/SelectMain';
import SelectSubText from './ui/SelectSubText';

export const Select = Object.assign(SelectMain, {
  Label: SelectLabel,
  Input: SelectInput,
  Text: SelectSubText,
});
