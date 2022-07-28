import React from 'react';
import {
  Container,
  Header,
  UserInfo,
  User,
  UserGreeting,
  Photo,
  UserName,
  UserWrapper,
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
        </UserWrapper>
      </Header>
    </Container>
  );
};
