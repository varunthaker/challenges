import styled from "styled-components";
import Light from "../Light";
import { lightStore } from "@/store/lightStore";

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
  const { roomData } = lightStore();
  console.log(roomData);

  return (
    <StyledLights>
      {roomData.map((room) => {
        console.log(room);
        return (
          <li key={room.id}>
            <Light room={room} />
          </li>
        );
      })}
    </StyledLights>
  );
}
