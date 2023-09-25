import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { lightStore } from "@/store/lightStore";

export default function Light({ room }) {
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
        handleToggle();
      }}
      $isOn={room.isOn}
    >
      <Icon $isOn={room.isOn}>💡</Icon>
      <Text>
        <Name>{room.name}</Name>
        <State>{room.isOn ? true : false}</State>
      </Text>
    </LightButton>
  );
}
