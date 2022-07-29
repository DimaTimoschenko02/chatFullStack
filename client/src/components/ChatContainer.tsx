import React from "react";
import styled from "styled-components";
import { IUser } from "../types/UserTypes";
import Dialog from "./Dialog";

export interface IProps {
  currentUser: IUser;
  exitChat: (chat:IUser) => void
}

const ChatContainer = ({ currentUser , exitChat}: IProps) => {
  return (
    <Container>
      <div className="header">
        <div className="button-back">
          <button onClick={() => exitChat({} as IUser)}>back</button>
        </div>
        <div className="user-info">
          <div className="avatar">
            <img src="" alt="" />
          </div>
          <div className="name">
            <h4>{currentUser.name}</h4>
          </div>
        </div>
      </div>
      <div className="dialog">
        <Dialog />
      </div>
      <div className="input">
        <input type="text" />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  height:100%;
  .header {
    order: 0;
    flex: 0 1 auto;
    align-self: center;
    height:10%;
    width:100%;
    display:flex;
  }
  .dialog {
    height:80%;
    order: 0;
    flex: 4 1 auto;
    align-self: auto;
    width:100%;
  }
  .input {
    width:100%;
    height:10%;
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
  }
`;
export default ChatContainer;
