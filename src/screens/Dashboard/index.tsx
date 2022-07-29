import { useState, useEffect, useCallback } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { HightLightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserInfo,
  User,
  UserGreeting,
  Photo,
  UserName,
  UserWrapper,
  LogoutButton,
  Icon,
  HightLightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';
import { useFocusEffect } from '@react-navigation/native';

export interface TransactionItemProps extends TransactionCardProps {
  key: string;
}

const dataKey = '@gofinances:transactions';
export const Dashboard = () => {
  const [data, setData] = useState<TransactionItemProps[]>([]);

  const getData = async () => {
    const result = await AsyncStorage.getItem(dataKey);
    const transactions = result ? JSON.parse(result) : [];
    setData(
      transactions.map((item: TransactionItemProps) => {
        return {
          ...item,
          amount: Number(item.amount).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }),
          date: Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
          }).format(new Date(item.date)),
        };
      }) as TransactionItemProps[]
    );
  };

  useEffect(() => {
    getData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [])
  );
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/4670403?v=4',
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>João Guilherme</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name='power' />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HightLightCards>
        <HightLightCard
          title={'Entradas'}
          amount={14000}
          description={'DESADS'}
          type={'earning'}
        />
        <HightLightCard
          title={'Saidas'}
          amount={14000}
          description={'DESADS'}
          type={'expense'}
        />
        <HightLightCard
          title={'Total'}
          amount={14000}
          description={'DESADS'}
          type={'total'}
        />
      </HightLightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item) => item?.key}
          renderItem={({ item }) => <TransactionCard transaction={item} />}
        />
      </Transactions>
    </Container>
  );
};
