import React, { FC, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../types/UserTypes";

import { Context } from "..";
import { observer } from "mobx-react-lite";
import Contacts from "../components/Contacts";
import ChatContainer from "../components/ChatContainer";
import styled from "styled-components";
import User from "../components/User";
const ChatPage: FC = () => {
  const [contacts, setContacts] = useState<IUser[] | []>([]);
  const [curUser, setCurUser] = useState<IUser>({} as IUser);
  const [curChat, setCurChat] = useState("");
  const { store } = useContext(Context);
  const navigate = useNavigate();

  const handleChatChange = (chat: any) => {
    setCurChat(chat);
  };
  useEffect(() => {
    if (!store.isAuth) {
      navigate("/login");
    } else {
    }
  }, []);

  useEffect(() => {
    const setUsers = async () => await getContacts();
    setUsers();
  }, []);
  async function getContacts() {
    store.getContacts().then((data) => {
      setContacts(data as IUser[]);
    });
    store
      .getUser(localStorage.getItem("token") as string)
      .then((data) => setCurUser(data as IUser));
  }

  return (
    <Container>
      <div className="container user">
        <User user={curUser} />
      </div>

      <div className="container">
        <Contacts
          user={curUser}
          contacts={contacts}
          changeChat={handleChatChange}/>
        <div className="chat">
          {curChat ? <ChatContainer currentUser={curUser}/> : <h1>Please select the chat</h1>}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: #4b6ce6e1;
  .container {
    width: 85%;
    height: 85%;
    background-color: #abcde2;
    border: 8px solid #e5f726;
    border-radius: 20px;
    display: flex;
    .chat {
      width: 70%;
      height: 100%;
      background-color: darkblue;
      
      text-align:center;
      h1{
        color:white;
        
      }
    }
  }
  .user {
    height: 15%;
  }
`;

export default observer(ChatPage);