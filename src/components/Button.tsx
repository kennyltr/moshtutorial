interface Props {
  children: string;
  onClick: () => void;
  colour?: string;
}

const Button = ({ children, colour = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + colour} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
