import logo from '../../assets/logo-dio.png'
import { Button } from '../Button'
import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'
import { IHeader } from './types'

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <a href='home'><img src={logo} alt="Logo da dio" /></a>
                {autenticado ? (
                    <>
                        <BuscarInputContainer>
                            <Input placeholder='Buscar...' />
                        </BuscarInputContainer>
                        <Menu>Live Code</Menu>
                        <Menu>Global</Menu>
                    </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src='https://avatars.githubusercontent.com/u/101156047?v=4'/>
                ) : (
                    <>
                        <MenuRight href="home">Home</MenuRight>
                        <Button title="Entrar" />
                        <Button title="Cadastrar" />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }
