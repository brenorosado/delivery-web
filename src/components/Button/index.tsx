import * as S from "./styles";

type ButtonProps = {
	text: string | React.ReactNode;
	type?: "button" | "submit" | "reset";
	form?: string;
	disabled?: boolean;
	negative?: boolean;
	onClick?: () => void;
};

export const Button = ({
	text,
	disabled = false,
	type = "button",
	onClick,
	negative = false,
}: ButtonProps) => {
	return (
		<S.StyledButton
			onClick={() => {
				!disabled && onClick && onClick();
			}}
			type={type}
			disabled={disabled}
			negative={negative}
		>
			{text}
		</S.StyledButton>
	);
};
