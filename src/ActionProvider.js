

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

  handleRelationshipList = () => {
    const message = this.createChatBotMessage("Every realationship can feel rocky at times. Start here to learn about realationships:",
    {
      widget: "realationshipLinks"
    }
  );
    this.updateChatbotState(message)
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('Hello! Tell me how you are feeling. I will find helpful resources for you.');
    this.updateChatbotState(greetingMessage);
  }

  invalidMessage() {
    const message = this.createChatBotMessage('Sorry, I did not understand. Perhaps one of these links can help get us started:',
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
