import { FC, useState } from "react";
import styled from "styled-components";
import EmojiPicker from "emoji-picker-react";
import { IoMdFemale, IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

interface IProps{
  handleSendChat: (msg:string) => void
}
const ChatInput = ({...props}:IProps) => {
  const [showEmojies , setShowEmojies] = useState<boolean>(false)
  const [message , setMessage] = useState<string>('')
  const handleEmojiClick = (event: any , emoji: any) =>{
    setMessage(message + emoji.emoji)
  }
  const handleSubmit = async (event:any) =>{
    event.preventDefault()
    if(message){
      await props.handleSendChat(message)
      setMessage('')
    }
  }
  return (
    <Container>
      <div className="button-container">
        <div className="eemoji">
          <BsEmojiSmileFill onClick={() => setShowEmojies(!showEmojies)} />
          {
            showEmojies && <EmojiPicker onEmojiClick={handleEmojiClick}/>
          }
        </div>
      </div>
      <form className="input-container" onSubmit={handleSubmit}>
        <input type="text" placeholder="your message" value={message} onChange = {e => setMessage(e.target.value)} onClick ={() => setShowEmojies(false)}/>
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height:100%;
  width:100%;
  .button-container{
    width:20%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    .eemoji{
      position:relative;
      height:100%;
      svg{
        color:#ffff00c8;
        cursor:pointer;
      }
      .emoji-picker-react{
        position:ablsolute;
        top:-350px;
      }
    }
  }
  .input-container{
    width:80%;
    display:flex;
    input{
      width:80%;
      height:100%;
      padding:0px 10px;
    }
    button{
      width:20%;
      height:100%;
    }
  }

`;
export default ChatInput;
