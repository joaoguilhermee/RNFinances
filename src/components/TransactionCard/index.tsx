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
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
  type: TranscationType;
}

interface TransactionCardDataProps {
  transaction: TransactionCardProps;
}
export const TransactionCard = ({ transaction }: TransactionCardDataProps) => {
  const { title, amount, category, date, type } = transaction;
  return (
    <Container>
      <Title>{title}</Title>
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
