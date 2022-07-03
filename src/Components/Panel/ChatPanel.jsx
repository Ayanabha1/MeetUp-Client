import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import userImage from "./Resources/user.png";

function ChatPanel({ showChat }) {
  const [selectedBtn, setSelectedBtn] = useState(0);
  const messages = [
    {
      sender: "Sam",
      message: "Hi everyone👋",
      time: "01:09",
    },
    {
      sender: "Alex",
      message: "Yo! wassup",
      time: "01:11",
    },
    {
      sender: "You",
      message: "Kya haal he laundo",
      time: "01:15",
    },
    {
      sender: "Alex",
      message: "Sahi he tu bata",
      time: "02:09",
    },
  ];
  return (
    <div className={`chat-panel ${showChat && "chat-panel-vis"}`}>
      <div className="chat-container">
        <div className="chat-toggle">
          <button
            className={`${selectedBtn === 0 && "selected-btn"}`}
            onClick={() => setSelectedBtn(0)}
          >
            Messages
          </button>
          <button
            className={`${selectedBtn === 1 && "selected-btn"}`}
            onClick={() => setSelectedBtn(1)}
          >
            Participants
          </button>
        </div>
        <div className="chat-messages-container">
          <div className="chat-messages-container-main">
            <div className="chat-partition">
              <div className="chat-partition-line"></div>
              <span>Messages</span>
              <div className="chat-partition-line"></div>
            </div>
            {messages?.map((mess, i) => (
              <div
                className={`message-box ${
                  mess.sender === "You" && "message-box-self"
                }`}
              >
                {mess.sender !== "You" && (
                  <div className="left">
                    <img src={userImage} alt="" />
                  </div>
                )}
                <div className="right">
                  <div
                    className={`${
                      mess.sender === "You" ? "from-self" : "from"
                    }`}
                  >
                    {mess.sender}
                  </div>
                  <div className="message">
                    <span>{mess.message}</span>
                    <span className="message-time">{mess.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="chat-messages-wrapper">
          <div className="chat-messages-input">
            <input type="text" placeholder="Write message here" />
            <button className="chat-messages-input-send">
              <MdSend size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPanel;
