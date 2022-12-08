import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, LoginContainer, Column, Spacing, Title } from "./styles";
import { defaultValues, IFormLogin } from "./types";

const schema = yup.object({
    email: yup.string().email('Esse email não é válido.').required('Campo obrigatório.'),
    password: yup.string().min(6, 'No mínimo 6 caracteres.').required('Campo obrigatório.'),
}).required();

const Login = () => {
    const {
        watch,
        control,
        formState: {errors, isValid},
    } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        defaultValues,
        reValidateMode: 'onChange'
    });

    const form = watch();

    // if(isValid !== true){
    //     let element = <HTMLInputElement> document.ge</HTMLInputElement>
    // }

    return(
        <Container>
            <LoginContainer>
                <Column>
                    <Title>Login</Title>
                    <Spacing />
                    <Input name="email" placeholder="Email" control={control} errorMessage={errors?.email?.message as string}/>
                    <Spacing />
                    <Input type="password" name="password" placeholder="Senha" control={control} errorMessage={errors?.password?.message as string}/>
                    <Spacing />
                    <Button title="Entrar" disabled={isValid !== true ? true : false}/>
                </Column>
            </LoginContainer>
        </Container>
    )
}

export default Login;