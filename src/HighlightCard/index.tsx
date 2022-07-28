import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  Description,
} from './styles';

interface HightLightCardProps {
  title: string;
  amount: number;
  description: string;
  type: 'down' | 'up' | 'total';
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign',
};
export const HightLightCard = ({
  type,
  title,
  amount,
  description,
}: HightLightCardProps) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>R$ {amount}</Amount>
        <Description type={type}>{description}</Description>
      </Footer>
    </Container>
  );
};
