import { useState } from 'react';
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import {
  Container,
  Form,
  Fields,
  Header,
  TransactionsType,
  Title,
} from './styles';
export const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  function handleTransactionsTypeSelect(type: 'positive' | 'negative') {
    setTransactionType(type);
  }
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder='Nome' />
          <Input placeholder='Valor' />
          <TransactionsType>
            <TransactionTypeButton
              type='up'
              title='Income'
              isActive={transactionType === 'positive'}
              onPress={() => handleTransactionsTypeSelect('positive')}
            />
            <TransactionTypeButton
              type='down'
              isActive={transactionType === 'negative'}
              title='Outcome'
              onPress={() => handleTransactionsTypeSelect('negative')}
            />
          </TransactionsType>
        </Fields>

        <Button title='Enviar' />
      </Form>
    </Container>
  );
};
