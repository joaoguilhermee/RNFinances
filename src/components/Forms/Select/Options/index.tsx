import React, { useEffect, useState, SetStateAction } from 'react';
import { FlatList } from 'react-native';
import { ItemSelectProps } from '..';
import { Button } from '../../Button';
import {
  Container,
  Header,
  Title,
  Icon,
  Item,
  Name,
  Separator,
  Footer,
} from './styles';

interface OptionsProps {
  title: string;
  value?: ItemSelectProps;
  onSelect: (name: ItemSelectProps) => void;
  onClose: () => void;
  options: any[];
}

export function Options({
  onSelect,
  value,
  title,
  onClose,
  options,
}: OptionsProps) {
  const [selected, setSelected] = useState(value as ItemSelectProps);
  function handleChange(item: ItemSelectProps) {
    setSelected(item);
  }

  const handleSubmit = () => {
    onSelect && onSelect(selected);
    onClose && onClose();
  };

  useEffect(() => {}, []);
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>

      <FlatList
        data={options}
        style={{
          flex: 1,
          width: '100%',
        }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <>
            <Item
              onPress={() => handleChange(item as ItemSelectProps)}
              isActive={selected && selected.key === item.key}
            >
              <Icon name={item.icon} />
              <Name>{item.name}</Name>
            </Item>
          </>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <Button title='Selecionar' onPress={handleSubmit} />
      </Footer>
    </Container>
  );
}
