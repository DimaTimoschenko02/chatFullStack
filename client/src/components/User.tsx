import React from 'react'
import styled from 'styled-components'
import { IUser } from '../types/UserTypes'

interface ICurUser{
    user:IUser
}
const User = ({user} :ICurUser) =>{

    return(
        <Container>
            user info
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height:100%;
    background-color:#ffffff;
    display: flex;
    align-items:center;
    justify-content:center;
`
export default User