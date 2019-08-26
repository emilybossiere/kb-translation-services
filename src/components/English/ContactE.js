import React from "react";

export default class ContactE extends React.Component {
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
        <h2>Requests / Inquiries</h2>
        <hr/>
        <p>
          If you have any questions or would like to request a service, please contact us below.
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
          rows="10"
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
