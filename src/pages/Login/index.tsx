import { useForm } from "react-hook-form";
import { FormInput } from "../../components/FormInput";
import * as S from "./styles";
import { useApi } from "../../hooks/useApi";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { User } from "../../types/user";

type LoginDefaultValues = {
    username: string
    password: string
}

const loginDefaultValues: LoginDefaultValues = {
    username: '',
    password: ''
}

export const LoginPage = () => {
    const { signIn } = useAuth();
    const navigate = useNavigate();
    
    const { fetch: signInRequest, loading } = useApi({
        route: '/auth/sign-in',
        method: 'post'
    });
    
    const {
        register,
        handleSubmit,
        formState: { errors}
    } = useForm({ defaultValues: loginDefaultValues });


    const onSignIn = async (data: LoginDefaultValues) => {
        const response = await signInRequest({ payload: data });
        if (response) {
            if (response.status === 200 && response?.data) {
                await signIn(response.data as User);
                navigate("/home");
            }
        }

    }

    return (
        <S.LoginForm onSubmit={handleSubmit(onSignIn)}>
            <FormInput
                id='name'
                label='Usuário'
                placeHolder='Usuário'
                register={{
                    ...register("username", {
                        required: "obrigatório"
                    }),
                }}
                disabled={loading}
                error={errors?.username?.message}
            />
             <FormInput
                id='name'
                label='Senha'
                placeHolder='Senha'
                register={{
                    ...register("password", {
                        required: "obrigatório"
                    }),
                }}
                isPassword={true}
                disabled={loading}
                error={errors?.password?.message}
            />
            <Button text="Entrar" type="submit" disabled={loading} />
        </S.LoginForm>
    )
}