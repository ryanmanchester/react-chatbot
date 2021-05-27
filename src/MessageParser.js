

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('hello')) {
      this.actionProvider.greet();
    }
    if(lowerCaseMessage.includes('anxi')) {
      this.actionProvider.handleAnxietyList();
    }
    if (lowerCaseMessage.includes('depress')) {
      this.actionProvider.handleDepressionList();
    }
  }
}

export default MessageParser;
