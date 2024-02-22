import styled from "styled-components";

export const FormInputContainer = styled.div<{
	error: boolean;
	disabled: boolean;
}>`
	width: 100%;
	display: flex;
	position: relative;
	gap: clamp(2px, 0.1042vw, 0.1042vw);
	padding: clamp(8px, 0.42vw, 0.42vw) clamp(12px, 0.625vw, 0.625vw);
	border-radius: clamp(4px, 0.21vw, 0.21vw);
	background: white;

	${({ theme, error, disabled }) => {
		const { navyBlue } = theme.colors;

		return `
			opacity: ${disabled ? "0.8" : "1"};
			border: 1px solid ${error ? "red" : navyBlue};
		`;
	}}

	label {
		position: absolute;
		padding: 0px clamp(4px, 0.21vw, 0.21vw);
		font-size: clamp(12px, 0.625vw, 0.625vw);
		line-height: clamp(12px, 0.625vw, 0.625vw);
		top: calc(-1 * clamp(6px, 0.3125vw, 0.3125vw));
		left: clamp(8px, 0.42vw, 0.42vw);
		background: white;
		color: ${({ theme, error }) => (error ? "red" : theme.colors.navyBlue)};
	}

	input {
		all: unset;
		background: white;
		font-size: clamp(14px, 0.729vw, 0.729vw);
		width: 100%;

		::-webkit-outer-spin-button,
		::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}

		[type="number"] {
			-moz-appearance: textfield;
		}

		${({ theme }) => {
		const { navyBlue } = theme.colors;

		return `
            color: ${navyBlue};
            ::placeholder {
                color: gray;
            }
        `;
	}}
	}

	div {
		all: unset;
		cursor: pointer;
		font-size: clamp(20px, 1.042vw, 1.042vw);
		color: ${({ theme, error }) => (error ? "red" : theme.colors.navyBlue)};
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const InputContainer = styled.div`
	position: relative;
	display: flex;
	background: white;
	width: 100%;
`;
