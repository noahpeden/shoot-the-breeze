import React from 'react';

export default class MessageInput extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      charLimit: 140,
      };
  }

  submitItem() {
    this.props.displayMessage(this.state);
    this.clearField();
  }

  clearField() {
    this.setState({ input: '' });
  }

  inputField(e) {
    this.setState({ input: e.target.value });
  }

  enableSubmit() {
    const typedChar = this.state.charLimit - this.state.input.length;
    return typedChar > 0 && typedChar < this.state.charLimit ? false : true;
  }

  render() {
    if (!this.props.user) {
      return (
        <div></div>
      );
    }
    return (
      <div className='messageInputBar'>
        <div className='inputFieldWrapper'>
          <input
            id='message-input'
            type='text'
            placeholder='Message'
            value={this.state.input}
            onChange={(e) => { this.inputField(e); }}/>
          <h5 className='charCount'>
            {this.state.charLimit - this.state.input.length}
          </h5>
        </div>
        <div className='inputBtnWrapper'>
          <button
            className='submitBtn'
            disabled={this.enableSubmit()}
            type='submit' onClick={() => { this.submitItem(); }}>Submit</button>
          <button
            className='clearBtn'
            disabled={this.enableSubmit()}
            onClick={() => this.clearField()}>Clear</button>
        </div>
      </div>
    );
  }
};
