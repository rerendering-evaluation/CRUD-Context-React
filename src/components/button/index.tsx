import { memo } from "react";
import { ReactNode } from "react";
import { Styles } from "./styles";
interface IProps {
  onClick?(): void;
  type?: "button" | "submit";
  children: ReactNode;
}
export const Button = memo(({
  type = "button",
  children,
  ...rest
}: IProps) => {
  console.log(window.globalCount++);
  return <Styles.Container type={type} {...rest}>
            {children}
        </Styles.Container>;
});