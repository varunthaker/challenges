import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(<Input />);

  const input = screen.getByLableText(/Name of game/i);
  expect(input).toBeInTheDocument();

  expect(input).toHaveAttribute(type, "text");
});

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));
test("calls callback on every user input", async () => {
  const onChangeFun = jest.fn();
  const user = userEvent.setup();
  const input = screen.getByLableText(/Name of game/i);

  render(<Input onChange={onChangeFun} />);

  await user.type(onChangeFun);
  await user.type(onChangeFun);

  expect(onChangeFun).toHaveBeenCalled(2);
});
