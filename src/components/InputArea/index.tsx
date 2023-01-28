import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2023, 0, 29),
      category: "food",
      title: "Item de test",
      value: 250.25,
    };
    onAdd(newItem);
  };

  return (
    <C.Container>
      <button onClick={handleAddEvent}>Adicionar</button>
    </C.Container>
  );
};
