import styled from "styled-components";
import { useEra } from "../../utils/erars/bridge";
import { ButtonType, Color, TextStyle } from "../../utils/erars/types";
import TextPart from "./Text";

const Button = styled.span<{
  hl_color: Color;
}>`
  cursor: pointer;
  & p:hover {
    color: rgb(${({ hl_color }) => hl_color.join(",")});
  }
`;

function ButtonPart({
  part,
  active = false,
}: {
  part: ButtonType;
  active?: boolean;
}) {
  const era = useEra();
  const [segements, value] = part;

  return active ? (
    <Button
      hl_color={era.hl_color}
      onClick={() => {
        era.sendInput((value.Int ?? value.String).toString() ?? "");
      }}
    >
      {segements.map((text, textIdx) => {
        return <TextPart key={textIdx} part={text} />;
      })}
    </Button>
  ) : (
    <>
      {segements.map((text, textIdx) => {
        return <TextPart key={textIdx} part={text} />;
      })}
    </>
  );
}

export default ButtonPart;
