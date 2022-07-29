import { Container, Label, Icon } from './styles';
interface SelectProps {
  title: string;
}
export const Select = ({ title }: SelectProps) => {
  return (
    <Container>
      <Label>{title}</Label>
      <Icon name='chevron-down' />
    </Container>
  );
};
