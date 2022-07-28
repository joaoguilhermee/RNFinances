import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';

import { Container, Form, Fields, Header, Title } from './styles';
export const Register = () => (
  <Container>
    <Header>
      <Title>Cadastro</Title>
    </Header>
    <Form>
      <Fields>
        <Input placeholder='Nome' />
        <Input placeholder='Valor' />
      </Fields>

      <Button title='Enviar' />
    </Form>
  </Container>
);
