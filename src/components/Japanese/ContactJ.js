import React from "react";

export default class ContactJ extends React.Component {
  state = {
    subject: "",
    contents: ""
  };

  handleSubject = e => {
    this.setState({ subject: e.target.value });
  };

  handleContents = e => {
    this.setState({ contents: e.target.value });
  };

  render() {
    return (
      <div className="contactForm">
        <input
          type="email"
          value={this.state.subject}
          onChange={this.handleSubject}
          maxLength="50"
          placeholder="Subject..."
        />
        <textarea
          value={this.state.contents}
          onChange={this.handleContents}
          rows="10"
          maxLength="1000"
          placeholder="Contents..."
        />
        <a
          href={`mailto:mulberrytrns@gmail.com?subject=${this.state.subject}&body=${this.state.contents}`}
        >
          E-mail
        </a>
      </div>
    );
  }
}
