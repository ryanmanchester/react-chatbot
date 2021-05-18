import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './components/LearningOptions';

const config = {
  botName: "Learning bot",
  initialMessages: [createChatBotMessage('Hi, I am here to help. What would you like to learn today?', {
    widget: "learningOptions"
  }
)],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />
    }
  ],
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
