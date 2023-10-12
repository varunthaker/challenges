import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { useLightStore } from "../../store/lightStore";
export default function Light({ room }) {
  const { name, id, isOn } = room;

  const handleToggle = useLightStore((state) => state.handleToggle);

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(id);
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? true : false}</State>
      </Text>
    </LightButton>
  );
}
