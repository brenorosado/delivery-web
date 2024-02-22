import styled from "styled-components";

export const StyledButton = styled.button<{ negative: boolean }>`
	outline: none;
	border: none;
	font-family: "Poppins", sans-serif;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: clamp(14px, 0.729vw, 0.729vw);
	min-height: 32px;

	${({ theme, negative, disabled }) => {
		const { navyBlue, white } = theme.colors;
		return `
        padding: clamp(12px, 0.625vw, 0.625vw) clamp(16px, 0.833vw, 0.833vw);
        border-radius: clamp(4px, 0.21vw, 0.21vw);
        background: ${negative ? "red" : navyBlue};
        color: ${white};
		cursor: ${disabled ? "auto" : "pointer"};
    `;
	}}

	:hover {
		opacity: 0.9;
	}

	:disabled {
		opacity: 0.7;
	}
`;
