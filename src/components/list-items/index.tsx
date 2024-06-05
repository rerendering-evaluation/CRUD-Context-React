import { memo } from "react";
import { Styles } from "./styles";
import { Button } from "../button";
import { Item } from "../item";
import { useContextHook } from '../../context/hook';
export const ListItems = memo(() => {
  const {
    state,
    createNewItem
  } = useContextHook();
  return <Styles.Container>
            <Button onClick={createNewItem}>Create new person</Button>
            {state.items.map((item, index) => <Item key={item.id} position={index} {...item} />)}
        </Styles.Container>;
});