import { memo } from "react";
import { ThemeProvider } from "styled-components";
import { Container, GlobalStyles } from "./styles/global";
import { theme } from "./config/theme";
import { Header } from "./components/header";
import { ListItems } from "./components/list-items";
import { useContextHook } from './context/hook';
export const App = memo(() => {
  console.log(window.globalCount++);
  const {
    state
  } = useContextHook();
  const currentTheme = (theme as any)[state.themeName];
  return <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <ListItems />
        </Container>
      </>
    </ThemeProvider>;
});