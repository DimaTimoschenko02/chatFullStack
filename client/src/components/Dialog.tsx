import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "..";
const Dialog =() =>{
    const { store } = useContext(Context);
    useEffect(() => {
        const setUsers = async () => {
          await store.getChatMessages();
          console.log(store.chatMessages)
        };
        setUsers();
        console.log(store.chatMessages)
      }, [store.chatMessages]);
    return(
        <Container></Container>
    )
}
const Container = styled.div`
    
`
export default observer(Dialog)