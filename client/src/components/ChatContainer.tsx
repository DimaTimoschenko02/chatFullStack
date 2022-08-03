import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "..";
import { IUser } from "../types/UserTypes";
import Dialog from "./Dialog";
import ChatInput from "./ui/ChatInput";

const ChatContainer = () => {
  const { store } = useContext(Context);
  return (
    <Container>
      <div className="header">
        <div className="button-back">
          <button onClick={() => store.setChat({} as IUser)}>back</button>
        </div>
        <div className="user-info">
          <div className="avatar">
            <img src="" alt="" />
          </div>
          <div className="name">
            <h4>{store.chat.name}</h4>
          </div>
        </div>
      </div>
      <div className="dialog">
        <Dialog />
      </div>
      <div className="input">
        <ChatInput />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding:15px 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  height: 100%;
  .header {
    order: 0;
    flex: 0 1 auto;
    align-self: center;
    height: 10%;
    width: 100%;
    display: flex;
  }
  .dialog {
    height: 80%;
    order: 0;
    flex: 4 1 auto;
    align-self: auto;
    width: 100%;
  }
  .input {
    width: 100%;
    height: 10%;
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
  }
`;
export default ChatContainer;
