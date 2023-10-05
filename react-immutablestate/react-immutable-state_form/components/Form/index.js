import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

export default function Form() {
  const [mountain, setMountain] = useImmer({
    name: "",
    values: {
      altitude: "",
      mountainRange: "",
    },
  });

  // function handleNameChange(event) {
  //   let mountainName = event.target.value;
  //   setMountain({ ...mountain, name: mountainName });
  // }
  //Object Destructured Way //
  // function handleNameChange(event) {
  //   let mountainName = event.target.value;
  //   setMountain((prevState) => {
  //     return { ...prevState, name: mountainName };
  //   });
  // }

  // function handleAltitudeChange(event) {
  //   let mountainAltitude = event.target.value;
  //   setMountain((prevState) => {
  //     return {
  //       ...prevState,
  //       values: { ...mountain.values, altitude: mountainAltitude },
  //     };
  //   });
  // }

  // function handleMountainRangeChange(event) {
  //   let givenMountainRange = event.target.value;
  //   setMountain((prevState) => {
  //     return {
  //       ...prevState,
  //       values: { ...mountain.values, mountainRange: givenMountainRange },
  //     };
  //   });
  // }

  function handleNameChange(event) {
    let mountainName = event.target.value;
    setMountain((draft) => {
      draft.name = mountainName;
    });
  }
  function handleAltitudeChange(event) {
    let mountainAltitude = event.target.value;
    setMountain((draft) => {
      draft.values.altitude = mountainAltitude;
    });
  }
  function handleMountainRangeChange(event) {
    let givenMountainRange = event.target.value;
    setMountain((draft) => {
      draft.values.mountainRange = givenMountainRange;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          // value={mountain.name}
          onChange={() => handleNameChange(event)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={() => handleAltitudeChange(event)}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={() => handleMountainRangeChange(event)}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
