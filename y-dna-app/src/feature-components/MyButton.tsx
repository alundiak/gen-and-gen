import { ButtonProps } from "reactstrap";
import { css } from "../css";

export default function MyButton(props: ButtonProps) {
  return (
    <button
      {...props}
      style={css({
        color: "black",
        "&:hover": { color: "blue" },
      })}
    />
  );
}
