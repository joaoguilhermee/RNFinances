import { getBottomSpace } from 'react-native-iphone-x-helper';
import { HightLightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserInfo,
  User,
  UserGreeting,
  Photo,
  UserName,
  UserWrapper,
  Icon,
  HightLightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export const Dashboard = () => {
  const transaction = {
    title: 'Desenvolvmento',
    amount: 'R$ 10.000,00',
    date: '10/10/2020',
    category: {
      icon: 'dollar-sign',
      name: 'Vendas',
    },
  };
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
          <Icon name='power' />
        </UserWrapper>
      </Header>
      <HightLightCards>
        <HightLightCard
          title={'Entradas'}
          amount={14000}
          description={'DESADS'}
          type={'up'}
        />
        <HightLightCard
          title={'Saidas'}
          amount={14000}
          description={'DESADS'}
          type={'down'}
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
          data={[transaction, transaction, transaction, transaction]}
          renderItem={({ item }) => <TransactionCard transaction={item} />}
          showsVerticalScrollIndicator
          contentContainerStyle={{
            paddingBottom: getBottomSpace(),
          }}
        />
      </Transactions>
    </Container>
  );
};
