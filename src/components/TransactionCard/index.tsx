import { categories } from '../../data/categories';
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
  category: string;
  date: string;
  type: TranscationType;
}

interface TransactionCardDataProps {
  transaction: TransactionCardProps;
}
export const TransactionCard = ({ transaction }: TransactionCardDataProps) => {
  const { name, amount, category: categoryKey, date, type } = transaction;
  const category = categories.find((item) => item.key === categoryKey);
  console.log('TYPE', type);
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
