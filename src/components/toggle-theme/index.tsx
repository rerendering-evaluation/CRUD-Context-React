import { memo } from "react";
import { useContextHook } from '../../context/hook';
import { MoonIcon } from "../icons/moon";
import { SunIcon } from "../icons/sun";
import { Styles } from "./styles";
export const ToggleTheme = memo(() => {
  const {
    state,
    toggleTheme
  } = useContextHook();
  return <Styles.Container onClick={toggleTheme}>
            <Styles.Bull>
                <Styles.Icon>
                    {state.themeName === 'light' ? <SunIcon /> : <MoonIcon />}
                </Styles.Icon>
            </Styles.Bull>
        </Styles.Container>;
});