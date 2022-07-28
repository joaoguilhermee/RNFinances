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

interface CategoryProps {
  key?: string;
  name: string;
  icon: string;
}
interface TransactionProps {
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface TransactionCardProps {
  transaction?: TransactionProps;
}
export const TransactionCard = ({ transaction }: TransactionCardProps) => {
  const { title, amount, category, date } = transaction;
  return (
    <Container>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
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
