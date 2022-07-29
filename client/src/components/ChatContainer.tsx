import React from 'react'
import styled from 'styled-components'
import { IUser } from '../types/UserTypes'

export interface IProps{
 
    currentUser:IUser
}

const ChatContainer = ({currentUser}:IProps) =>{
   
    return (
        <Container>
            <div className="user-info">
                <div className="avatar">
                    <img src="" alt="" />
                </div>
                <div className="name">
                    <h4>{currentUser.name}</h4>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    
`
export default ChatContainer