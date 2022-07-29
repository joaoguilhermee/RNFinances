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

export interface TransactionItemProps extends TransactionCardProps {
  id: number;
}
export const Dashboard = () => {
  const data: TransactionItemProps[] = [
    {
      id: 1,
      title: 'Desenvolvmento',
      type: 'earning',
      amount: 'R$ 10.000,00',
      date: '10/10/2020',
      category: {
        icon: 'dollar-sign',
        name: 'Vendas',
      },
    },
    {
      id: 2,
      title: 'Aluguel',
      type: 'expense',
      amount: 'R$ 10.000,00',
      date: '10/10/2020',
      category: {
        icon: 'coffee',
        name: 'Vendas',
      },
    },
  ];
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
          keyExtractor={(item) => item?.id}
          renderItem={({ item }) => <TransactionCard transaction={item} />}
        />
      </Transactions>
    </Container>
  );
};
