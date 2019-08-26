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
        <h2>ご依頼/お問い合せ</h2>
        <hr />
        <p>
          ご質問がある場合、またはサービスをご希望の場合は、下記までご連絡ください。
        </p>
        <input
          className="subject"
          type="email"
          value={this.state.subject}
          onChange={this.handleSubject}
          maxLength="50"
          placeholder="Subject..."
        />

        <textarea
          className="contents"
          value={this.state.contents}
          onChange={this.handleContents}
          rows="7"
          maxLength="1000"
          placeholder="Your message..."
        />
        <button type="button" class="btn btn-primary">
          <a
            href={`mailto:mulberrytrns@gmail.com?subject=${this.state.subject}&body=${this.state.contents}`}
          >
            Send
          </a>
        </button>
      </div>
    );
  }
}
