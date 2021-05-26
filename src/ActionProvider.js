

class ActionProvider  {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleAnxietyList = () => {
    const message = this.createChatBotMessage(
      "Anxiety can be difficult to cope with. Here are some helpful resources:",
      {
        widget: "anxietyLinks"
      }
    );
    this.updateChatbotState(message)
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('hi, friend');
    this.updateChatbotState(greetingMessage);
  }

  invalidMessage() {
    const message = this.createChatBotMessage('Sorry, I did not understand. Please type how you feel below and I will find you resources.');
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }
    ))
  }
}

export default ActionProvider;
