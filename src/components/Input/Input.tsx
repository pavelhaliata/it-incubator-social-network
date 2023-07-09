import { ChangeEvent, KeyboardEvent, useState } from "react";

type InputPropsType = {
  placeholder?: string;
  inputValue?: string;
  className?: string;
};

export const Input = ({
  placeholder,
  inputValue,
  className,
}: InputPropsType) => {
  const [value, setValue] = useState("");
  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value) {
      setValue("");
      console.log("work");
    }
  };
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  return (
    <form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        value={value}
        type="text"
        placeholder={placeholder}
        onKeyDown={onKeyDownHandler}
        onChange={onChangeHandler}
      />
    </form>
  );
};
