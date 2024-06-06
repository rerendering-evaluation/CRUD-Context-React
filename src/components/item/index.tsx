import { useCallback } from "react";
import { Styles } from "./styles";
import { Button } from "../button";
import { PencilIcon } from "../icons/pencil";
import { TrashIcon } from "../icons/trash";
import { ItemForm } from "./form";
import { useContextHook } from '../../context/hook';
import { IItem } from "../../interfaces/IItem";
interface IProps extends IItem {
  position: number;
}
export const Item = ({
  position,
  nickname,
  whatsapp,
  age,
  id,
  isEditing = false
}: IProps) => {
  const {
    deleteItem,
    toggleIsEditing
  } = useContextHook();
  
  const fn1 = useCallback(() => toggleIsEditing(id), []);
  const fn2 = useCallback(() => deleteItem(id), [])

  return <Styles.Container>
            <strong>{position}</strong>
            {isEditing ? <ItemForm {...{
      nickname,
      whatsapp,
      age,
      id,
      isEditing
    }} /> : <>
                            <p>{nickname ?? <i>Insert name</i>}</p>
                            <p>{age ?? <i>Insert age</i>}</p>
                            <p>{whatsapp ?? <i>Insert phone</i>}</p>

                            <Styles.GroupButtons>
                                <Button onClick={fn1}>
                                    <PencilIcon />
                                </Button>
                                <Button onClick={fn2}>
                                    <TrashIcon />
                                </Button>
                            </Styles.GroupButtons>
                        </>}
        </Styles.Container>;
};