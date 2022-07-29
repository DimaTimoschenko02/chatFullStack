import React, { FC, useState } from "react";
import styled from "styled-components";
import { IUser } from "../types/UserTypes";


interface IContacts {
  user: IUser;
  contacts: IUser[];
  changeChat: (chat:string) => void
}
const Contacts = ({ user, contacts, changeChat, ...props }: IContacts) => {
  const [curentSelected, setCurrentSelected] = useState("");

  function handleCurrentChat(chat:any , email:string){
    changeChat(chat)
    setCurrentSelected(email)
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
              onClick ={() => handleCurrentChat(contact , contact.email)}
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
export default Contacts;
