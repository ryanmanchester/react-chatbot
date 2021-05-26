import { createChatBotMessage } from 'react-chatbot-kit';
import LearningOptions from './components/LearningOptions';
import LinkList from './components/LinkList';

const config = {
  botName: "Mental Health Bot",
  initialMessages: [createChatBotMessage('How are you feeling today? I am here for you.', {
    widget: "learningOptions"
  }
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
        options: [
          {
            text: "What is Anxiety?",
            url:  "https://www.psychologytoday.com/us/basics/anxiety",
            id: 1
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ]
      }
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
