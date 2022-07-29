import { useState } from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import uuid from 'react-native-uuid';

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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

interface FormData {
  name: string;
  amount: string;
}
const dataKey = '@gofinances:transactions';
const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  amount: Yup.number()
    .typeError('Informe um numero valido')
    .positive('O valor não pode ser negativo')
    .required('O valor é obrigatório'),
});

export const Register = () => {
  const navigation = useNavigation();
  const [transactionType, setTransactionType] = useState('');
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });
  function handleTransactionsTypeSelect(type: 'positive' | 'negative') {
    setTransactionType(type);
  }

  const handleRegister = async (form: FormData) => {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação');
    }
    if (category && category.key === 'category') {
      console.log('CATEGORY', category);
      return Alert.alert('Selecione a categori!a');
    }
    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];
      const dataFormatted = [...currentData, newTransaction];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'Categoria',
      });

      navigation.navigate('Listagem');
    } catch (error) {
      console.log('ERRO', error);
      Alert.alert('Erro ao salvar o item');
    }
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              autoCapitalize='characters'
              autoCorrect={false}
              control={control}
              name='name'
              placeholder='Nome'
              error={errors.name && errors.name.message}
            />
            <InputForm
              error={errors.amount && errors.amount.message}
              keyboardType='numeric'
              control={control}
              name='amount'
              placeholder='Valor'
            />
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
              onChange={(item) => setCategory(item!)}
              title='Valor'
            />
          </Fields>

          <Button onPress={handleSubmit(handleRegister)} title='Enviar' />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
};
