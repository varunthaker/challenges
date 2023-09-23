import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const play = screen.getByRole("link", { name: /play/i });
  const history = screen.getByRole("link", { name: /history/i });
  expect(play).toBeInTheDocument();
  expect(history).toBeInTheDocument();
});
