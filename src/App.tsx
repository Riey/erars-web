import styled from "styled-components";
import Console from "./emuera/Console";

const FullscreenApp = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: transparent;
`;

function App() {

  return (
    <FullscreenApp>
      <Console />
    </FullscreenApp>
  );
}

export default App;
