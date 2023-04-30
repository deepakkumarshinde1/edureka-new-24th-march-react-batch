import { render, screen, fireEvent } from "@testing-library/react";
import ToDoInput from "./ToDoInput";

let mockChangeInput = jest.fn();
let mockSaveTo = jest.fn();

describe("Input Text", () => {
  // on change input must be change
  it("on change input must be change", () => {
    render(
      <ToDoInput
        input="text"
        changeInput={mockChangeInput}
        saveToDo={mockSaveTo}
      />
    );
    const inputElement = screen.getByPlaceholderText(/Enter Todo/i);
    fireEvent.change(inputElement, { target: { value: "text" } });
    expect(inputElement.value).toBe("text");
  });
  //

  it("on click button method mut called", () => {
    render(
      <ToDoInput input="" changeInput={mockChangeInput} saveToDo={mockSaveTo} />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockSaveTo).toBeCalled();
  });

  //

  it("on click button input must be empty", () => {
    render(
      <ToDoInput input="" changeInput={mockChangeInput} saveToDo={mockSaveTo} />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const inputElement = screen.getByPlaceholderText(/Enter Todo/i);
    expect(inputElement.value).toBe("");
  });
});
