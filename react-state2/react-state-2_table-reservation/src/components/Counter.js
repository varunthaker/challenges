export default function Counter({ peopleNumber, onPeopleChange }) {
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={() => onPeopleChange(peopleNumber + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={() => onPeopleChange(peopleNumber - 1)}
        >
          -
        </button>
      </div>
    </>
  );
}
