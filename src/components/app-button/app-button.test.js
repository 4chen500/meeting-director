import { render, act } from "@testing-library/react";
import AppButton from "./app-button.js";

describe("AppButton", () => {
  test("it renders its children as text, even if its markup", () => {
    const TEST_CHILD = "<script>alert(123);</script>";
    const { container } = render(<AppButton>{TEST_CHILD}</AppButton>);
    const button = container.querySelector(".app-button button");

    expect(button.textContent === TEST_CHILD);
  });
  test("onClick", () => {
    const handleClick = jest.fn().mockResolvedValue("success");
    const { container } = render(<AppButton onClick={handleClick} />);
    const button = container.querySelector(".app-button button");

    act(() => {
      button.click();
    });

    expect(handleClick).toHaveBeenCalled();
  });
});
