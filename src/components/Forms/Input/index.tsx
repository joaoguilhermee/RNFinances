import { TextInputProps } from 'react-native';
import { Container } from './styles';

type InputProps = TextInputProps;
export const Input = ({ ...props }: InputProps) => {
  return <Container {...props} />;
};
