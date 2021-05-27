import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './components/LearningOptions';
import LinkList from './components/LinkList';
import {anxietyLinks, depressionLinks} from './links/resourceLinks';


const config = {
  botName: "Mental Health Bot",
  initialMessages: [createChatBotMessage('How are you feeling today? Type your response below and I will find you resources to learn more. You are not alone.'
)],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />
    },
    {
      widgetName: "anxietyLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: anxietyLinks
      }
    },
    {
      widgetName: "depressionLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: depressionLinks
      }
    },
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
