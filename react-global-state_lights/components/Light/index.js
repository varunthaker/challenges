import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { lightStore } from "@/store/lightStore";

export default function Light({ room, name, id, isOn }) {
  // const [isOn, setIsOn] = useState(false);
  const { handleToggle } = lightStore();

  console.log(room);

  // function handleToggle() {
  //   setIsOn((isOn) => !isOn);
  // }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(id);
      }}
      $isOn={isOn}
    >
      <Icon $isOn={room.isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? true : false}</State>
      </Text>
    </LightButton>
  );
}
