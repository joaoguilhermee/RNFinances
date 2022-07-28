import React from 'react';
import { HightLightCard } from '../../HighlightCard';
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
} from './styles';

export const Dashboard = () => {
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
    </Container>
  );
};
