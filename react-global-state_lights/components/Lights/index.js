import styled from "styled-components";
import Light from "../Light";
import { useLightStore } from "../../store/lightStore";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights() {
  const roomData = useLightStore((state) => state.roomData);

  return (
    <StyledLights>
      {roomData.map((room) => {
        return (
          <li key={room.id}>
            <Light room={room} />
          </li>
        );
      })}
    </StyledLights>
  );
}
