"use client";

export type ButtonProps = {
  title: string;
  onClickCallback: () => void;
};

const Button = (props: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={props.onClickCallback}
      className="bg-transparent hover:bg-gray-600 hover:text-primary text-primary-default font-semibold  py-2 px-4 border border-primary-default hover:border-transparent rounded"
    >
      {props.title}
    </button>
  );
};

export default Button;
