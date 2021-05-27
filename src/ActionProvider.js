

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

  handleDepressionList = () => {
    const message = this.createChatBotMessage("Depression can feel overwhelming. I found these resources to learn more:",
    {
      widget: "depressionLinks"
    }
  );
    this.updateChatbotState(message)
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('hi, friend');
    this.updateChatbotState(greetingMessage);
  }

  invalidMessage() {
    const message = this.createChatBotMessage('Sorry, I did not understand. Please type how you feel below and I will find you resources. Or click one of these to get started:',
    {
      widget: "learningOptions"
    }
  );
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
