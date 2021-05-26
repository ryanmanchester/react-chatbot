

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

  updateChatbotState(message) {
    this.setState(prevState => ({
        ...prevState, messages: [...prevState.messages, message]
      }
    ))
  }
}

export default ActionProvider;
