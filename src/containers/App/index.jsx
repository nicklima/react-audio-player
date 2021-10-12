import { ThemeProvider } from "styled-components";

import { useStore } from "store";
import Mobile from "components/Mobile";

import GlobalStyle from "styles/globals";
import { Main } from "styles/shared";

const App = () => {
  const { theme } = useStore();

  return (
    <ThemeProvider theme={theme.colors}>
      <GlobalStyle />
      <Main>
        <Mobile />
      </Main>
    </ThemeProvider>
  );
};

export default App;
