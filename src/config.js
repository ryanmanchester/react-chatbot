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
            text: "How I Healed My Lifelong Anxiety",
            url:
              "https://theholisticpsychologist.com/how-i-healed-my-life-long-anxiety/",
            id: 2,
          },
          {
            text: "Natural Approaches to Anxiety",
            url: "https://www.psychologytoday.com/intl/basics/anxiety/natural-approaches-anxiety",
            id: 3,
          },
        ]
      }
    },
    {
      widgetName: "depressionLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
          text:'What is Depression?',
          url: 'https://www.psychologytoday.com/intl/basics/depression',
          id: 1
        },
        {
          text:'Integrative Mental Health',
          url: 'https://www.huffpost.com/entry/integrative-mental-health_b_354332',
          id: 2
        },
        {
          text: 'Is Depression Good For You?',
          url: 'https://fullpermissionliving.blogspot.com/2008/03/is-depression-good-for-you.html',
          id: 3
        }
      ]
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
