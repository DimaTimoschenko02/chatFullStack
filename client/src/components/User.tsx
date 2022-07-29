import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '..'
import { IUser } from '../types/UserTypes'

interface ICurUser{
    user:IUser
}
const User = () =>{
    const {store} = useContext(Context)
    return(
        <Container>
            <button onClick={async() => {await store.logout()}}>LOGOUT</button>
            {store.user.email}
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
export default observer(User)