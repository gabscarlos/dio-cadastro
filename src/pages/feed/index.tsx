import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';
import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
    return (<>
    <Header autenticado={true}/>
    <Container>
        <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Column>
        <Column flex={1}>
            <TitleHighlight># RANKING 5 TOP DA SEMNA</TitleHighlight>
            <UserInfo percentual={70} nome="Gabriel Carlos" image="https://avatars.githubusercontent.com/u/101156047?v=4'"/>
            <UserInfo percentual={50} nome="Gabriel Carlos" image="https://avatars.githubusercontent.com/u/101156047?v=4'"/>
            <UserInfo percentual={30} nome="Gabriel Carlos" image="https://avatars.githubusercontent.com/u/101156047?v=4'"/>
            <UserInfo percentual={90} nome="Gabriel Carlos" image="https://avatars.githubusercontent.com/u/101156047?v=4'"/>
            <UserInfo percentual={40} nome="Gabriel Carlos" image="https://avatars.githubusercontent.com/u/101156047?v=4'"/>
        </Column>
    </Container>
    </>)
}

export { Feed }