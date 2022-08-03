import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "..";
import { IUser } from "../types/UserTypes";

interface ICurUser {
  user: IUser;
}
const User = () => {
  const { store } = useContext(Context);
  return (
    <Container>
      <div className="settings">
        <button
          onClick={async () => {
            await store.logout();
          }}
        >
          LOGOUT
        </button>
      </div>
      <div className="user">
        <div className="username">
          <h2>{store.user.name}</h2>
        </div>
        <div className="email">
          <h6>{store.user.email}</h6>
        </div>
        <div className="avatar">
          <img src="" alt="" />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:70%;
    height:100%;
    
    .avatar{
    height:100%;
    width:100px;
    border:3px solid #dfdede;
    border-radius:6px;
  }
  }
  .settings{
    width:30%;
  }
  
`;
export default observer(User);
