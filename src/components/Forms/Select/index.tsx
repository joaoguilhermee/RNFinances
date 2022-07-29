import { useState, useEffect, SetStateAction } from 'react';
import { Modal } from 'react-native';
import { Options } from './Options';
import { Container, Label, Icon } from './styles';

export interface ItemSelectProps {
  key: string;
  name: string;
}

interface SelectProps {
  title: string;
  onChange: (item?: ItemSelectProps) => void;
  value?: ItemSelectProps;
  options: any[];
}

export const Select = ({ title, onChange, options, value }: SelectProps) => {
  const [opened, setOpened] = useState(false);
  const [seleted, setSelected] = useState(value);

  const handleClose = () => {
    setOpened(false);
  };
  const handleOpen = () => {
    setOpened(true);
  };

  const handleChange = (item: SetStateAction<ItemSelectProps | undefined>) => {
    setSelected(item);
  };

  useEffect(() => {
    onChange && onChange(seleted);
  }, [seleted]);

  return (
    <>
      <Container onPress={handleOpen}>
        <Label>{(value && value?.name) || title}</Label>
        <Icon name='chevron-down' />
      </Container>
      <Modal visible={opened}>
        <Options
          value={value}
          onSelect={handleChange}
          onClose={handleClose}
          title={title}
          options={options}
        />
      </Modal>
    </>
  );
};
