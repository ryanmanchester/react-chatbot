

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('hello')) {
      this.actionProvider.greet();
    } else if(lowerCaseMessage.includes('anxi') || lowerCaseMessage.includes('afraid') || lowerCaseMessage.includes('scar')) {
        this.actionProvider.handleAnxietyList();
    } else if (lowerCaseMessage.includes('depress') || lowerCaseMessage.includes('sad') || lowerCaseMessage.includes('lone')) {
        this.actionProvider.handleDepressionList();
    } else {
      this.actionProvider.invalidMessage();
    }
  }
}

export default MessageParser;
