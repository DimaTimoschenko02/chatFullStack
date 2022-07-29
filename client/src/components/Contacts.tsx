import { observe } from "mobx";
import { observer } from "mobx-react-lite";
import React, { FC, useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "..";
import { IUser } from "../types/UserTypes";


interface IContacts {
  user: IUser;
  contacts: IUser[];
  changeChat: (chat:IUser) => void
}
const Contacts = ({ user, contacts, changeChat, ...props }: IContacts) => {
  const [curentSelected, setCurrentSelected] = useState("");
  const { store } = useContext(Context);
  console.log(store.test)
  function handleCurrentChat(chat:IUser ){
    changeChat(chat)
    setCurrentSelected(chat.email)
  }
  return (
    <Container>
      <div className="contacts">
        {contacts.map((contact) => {
          return (
            <div
              className={`contact ${
                contact.email === curentSelected ? "selected" : ""
              } `}
              key={contact.email}
              onClick ={() => handleCurrentChat(contact)}
            >
              <div className="avatar">
                <img src="" alt="" />
              </div>
              <div className="user" onClick={() => store.setTest(!(store.test))}>
                <h4>{contact.name} {store.test.toString()}</h4>
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

  overflow: auto;
  .contacts{
    ::-webkit-scrollbar-thumb {
  background-color: blue;
  border-radius: 20px;
  border: 3px solid orange;
}
    width:100%;
    height:100%;
    display:flex;
    border: 1px solid darkslateblue;
    align-items:flex-start;
    padding:10px;
    flex-direction: column;
    border-radius:10px;
    
    .contact{
        margin-bottom:10px;
        width:100%;
        height:18%;
        border:2px solid darkslateblue;
        border-radius:10px;
        display:flex;
        align-items: stretch;
        justify-content:space-between;
        padding:6px;
        cursor:pointer;
        transition: 0.5s ease-in-out;

        .avatar{
          height:50px;
          width:50px;
          border:5px solid whitesmoke
        }
        .user{
          h4{
            color:goldenrod
          }
        }
    }
    .selected{
      background-color:blueviolet
    }
  }
`;
export default observer(Contacts);
