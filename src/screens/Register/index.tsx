import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Forms/Button';
import { InputForm } from '../../components/Forms/InputForm';
import { Select, ItemSelectProps } from '../../components/Forms/Select';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { categories } from '../../data/categories';
import {
  Container,
  Form,
  Fields,
  Header,
  TransactionsType,
  Title,
} from './styles';

interface FormData {
  name: string;
  amount: string;
}

export const Register = () => {
  const [transactionType, setTransactionType] = useState('');
  const [category, setCategory] = useState(null as ItemSelectProps);
  function handleTransactionsTypeSelect(type: 'positive' | 'negative') {
    setTransactionType(type);
  }

  const handleRegister = (form: FormData) => {
    console.log('FORM', form);
  };
  const { control, handleSubmit } = useForm();
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <InputForm control={control} name='name' placeholder='Nome' />
          <InputForm control={control} name='amount' placeholder='Valor' />
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

          <Select
            value={category}
            options={categories}
            onChange={(item: ItemSelectProps) => setCategory(item)}
            title='Valor'
          />
        </Fields>

        <Button onPress={handleSubmit(handleRegister)} title='Enviar' />
      </Form>
    </Container>
  );
};
