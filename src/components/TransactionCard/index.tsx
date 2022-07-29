import { CategoryProps, TranscationType } from '../../global/types';
import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  CategoryIcon,
  CategoryName,
  Date,
} from './styles';

export interface TransactionCardProps {
  name: string;
  amount: string;
  category: CategoryProps;
  date: string;
  type: TranscationType;
}

interface TransactionCardDataProps {
  transaction: TransactionCardProps;
}
export const TransactionCard = ({ transaction }: TransactionCardDataProps) => {
  const { name, amount, category, date, type } = transaction;
  return (
    <Container>
      <Title>{name}</Title>
      <Amount type={type}>
        {type === 'expense' && '- '}
        {amount}
      </Amount>
      <Footer>
        <Category>
          <CategoryIcon name={category?.icon || 'dollar-sign'} />
          <CategoryName>{category?.name}</CategoryName>
        </Category>
        <Date>{date}</Date>
      </Footer>
    </Container>
  );
};
