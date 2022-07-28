import { TranscationType } from '../../global/types';
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
  type: TranscationType;
}

const icon = {
  earning: 'arrow-up-circle',
  expense: 'arrow-down-circle',
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
