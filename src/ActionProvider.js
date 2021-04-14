

class ActionProvider  {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('hi, friend');
    this.updateChatbotState(greetingMessage);
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }
    ))
  }
}

export default ActionProvider;
