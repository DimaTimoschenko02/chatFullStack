import { observe } from "mobx";
import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "..";
import { IUser } from "../types/UserTypes";

interface IContacts {
  //user: IUser;
  //contacts: IUser[];
  changeChat: (chat: IUser) => void;
}
const Contacts = () => {
  //const [curentSelected, setCurrentSelected] = useState("");
  const { store } = useContext(Context);
  // function handleCurrentChat(chat: IUser) {
  //   changeChat(chat);
  //   setCurrentSelected(chat.email);
  // }
  return (
    <Container>
      <div className="contacts">
        {store.userContacts.map((contact) => {
          return (
            <div
              className={`contact ${
                contact.email === store.chat.email ? "selected" : ""
              } `}
              key={contact.email}
              onClick={() => store.setChat(contact)}
            >
              <div className="avatar">
                <img src="" alt="" />
              </div>
              <div className="user">
                <h4>{contact.name}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 25%;
  height: 100%;

  
  .contacts {
    ::-webkit-scrollbar-thumb {
      background-color: blue;
      border-radius: 20px;
      border: 3px solid orange;
    }
    overflow: auto;
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid darkslateblue;
    align-items: flex-start;
    padding: 10px;
    flex-direction: column;
    border-radius: 10px;

    .contact {
      margin-bottom: 10px;
      width: 100%;
      height: 18%;
      border: 2px solid darkslateblue;
      border-radius: 10px;
      display: flex;
      align-items: stretch;
      justify-content: space-between;
      padding: 6px;
      cursor: pointer;
      transition: 0.5s ease-in-out;

      .avatar {
        height: 50px;
        width: 50px;
        border: 5px solid whitesmoke;
      }
      .user {
        h4 {
          color: goldenrod;
        }
      }
    }
    .selected {
      background-color: blueviolet;
    }
  }
`;
export default observer(Contacts);
