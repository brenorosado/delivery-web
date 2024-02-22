import * as S from "./styles";

type AuthLayoutProps = {
	children: React.ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <S.AuthLayoutSection>
            <S.AuthContenteContainer>
                {children}
            </S.AuthContenteContainer>
        </S.AuthLayoutSection>
    )
}