import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://www.eesc.usp.br/estagios-admin/wp-content/uploads/2022/10/4123a9b1fb522b0ea7519c279c214c190796243001666124880.png' />
        <Content>
            <UserInfo>
                <UserPicture src='https://avatars.githubusercontent.com/u/101156047?v=4' />
                <div>
                    <h4>Gabriel Carlos</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito no curso de React JS do Bootcamp Orange Tech + na DIO...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp />10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
