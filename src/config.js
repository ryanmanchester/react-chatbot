import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
  botName: "Learning bot",
  initialMessages: [createChatBotMessage('Hi, I am here to help. What would you like to learn today?')],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
}

export default config
