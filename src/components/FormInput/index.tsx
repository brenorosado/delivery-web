import { useState, ChangeEventHandler } from "react";
import { UseFormRegisterReturn, FieldError, Merge, FieldErrorsImpl } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import * as S from "./styles";

export type FormInputProps = {
	label: string;
	id: string;
	placeHolder: string;
	type?: string;
	isPassword?: boolean;
	register?: UseFormRegisterReturn;
	error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<never>>;
	onFocus?: () => void;
	onBlur?: () => void;
	onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
	disabled?: boolean;
	value?: string;
	max?: string;
};

export const FormInput = ({
	id,
	register,
	placeHolder,
	type = "text",
	isPassword = false,
	label,
	error,
	onFocus,
	onBlur,
	onChange,
	disabled = false,
	...rest
}: FormInputProps) => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	return (
		<S.FormInputContainer error={!!error} disabled={disabled}>
			<label htmlFor={id}>
				{label}
				{error && <span> ({error as string})</span>}
			</label>

			<input
				id={id}
				type={isPassword ? (showPassword ? type : "password") : type}
				autoComplete='off'
				placeholder={placeHolder}
				onFocus={onFocus}
				onBlur={onBlur}
				onChange={onChange}
				disabled={disabled}
				{...register}
				{...rest}
			/>

			{isPassword && (
				<>
					<div
						onClick={(event) => {
							event.preventDefault();
							setShowPassword((prevState) => !prevState);
						}}
					>
						{showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
					</div>
				</>
			)}
		</S.FormInputContainer>
	);
};
