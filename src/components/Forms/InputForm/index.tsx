import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Input } from '../Input';
import { Container, Error } from './styles';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error?: string;
}
export const InputForm = ({
  control,
  name,
  error,
  ...props
}: InputFormProps) => {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...props} />
        )}
      ></Controller>
      {error && <Error>{error}</Error>}
    </Container>
  );
};
