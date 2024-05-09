import SelectHelpText from './ui/SelectHelpText';
import SelectInput from './ui/SelectInput';
import SelectInputWrapper from './ui/SelectInputWrapper';
import SelectLabel from './ui/SelectLabel';
import SelectMain from './ui/SelectMain';

export const Select = Object.assign(SelectMain, {
  Label: SelectLabel,
  InputWrapper: SelectInputWrapper,
  Input: SelectInput,
  Text: SelectHelpText,
});
