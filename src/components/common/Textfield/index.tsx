import TextfieldHelptext from './ui/TextfieldHelptext';
import TextfieldInput from './ui/TextfieldInput';
import TextfieldInputWrapper from './ui/TextfieldInputWrapper';
import TextfieldLabel from './ui/TextfieldLabel';
import TextfieldMain from './ui/TextfieldMain';

export const Textfield = Object.assign(TextfieldMain, {
  Label: TextfieldLabel,
  HelpText: TextfieldHelptext,
  InputWrapper: TextfieldInputWrapper,
  Input: TextfieldInput,
});
