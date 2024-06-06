import { useCallback } from "react";
import { useState } from 'react';
import { Styles } from "./styles";
import { IItem } from "../../interfaces/IItem";
import { Button } from "../button";
import { Input } from "../input";
import { SaveIcon } from "../icons/save";
import { CloseIcon } from "../icons/close";
import { useContextHook } from '../../context/hook';
import { memo } from 'react';
const InputMemo = memo(Input);
export const ItemForm = ({
  ...item
}: IItem) => {
  console.log(window.globalCount++);
  const {
    toggleIsEditing,
    editItem
  } = useContextHook();
  const [formState, setFormState] = useState(item);
  const {
    nickname = '',
    whatsapp = '',
    age = '',
    id
  } = formState || {};
  return <>
            <InputMemo name="nickname" placeholder="Nickname" onChangeText={useCallback(v => setFormState(old => ({
      ...old,
      nickname: v
    })), [setFormState])} value={nickname} autoFocus />
            <InputMemo name="age" placeholder="Age" type="number" onChangeText={useCallback(v => setFormState(old => ({
      ...old,
      age: ~~v
    })), [setFormState])} value={age} />
            <InputMemo name="whatsapp" placeholder="Whatsapp number" type="number" onChangeText={useCallback(v => setFormState(old => ({
      ...old,
      whatsapp: ~~v
    })), [setFormState])} value={whatsapp} />
            <Styles.GroupButtons>
                <Button onClick={useCallback(() => editItem(formState), [formState])}>
                    <SaveIcon />
                </Button>
                <Button onClick={useCallback(() => toggleIsEditing(id), [])}>
                    <CloseIcon />
                </Button>
            </Styles.GroupButtons>
        </>;
};