import "../Home.css";
import React from "react";
import axios from "axios";
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8001/api/account",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ username: "", email: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={this.state.username}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  onNameChange(event) {
    this.setState({ username: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }
}

export default NameForm;
