import React, { Component } from "react";
import { toast } from "react-toastify";
import Form from "./commons/form";

class SubscribeForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    // username: Joi.string().required().label("Nom d'utilisateur"),
    // password: Joi.string().min(5).required().label("Mot de passe"),
    // name: Joi.string().required().label("Nom"),
  };

  username = React.createRef();

  doSubmit = () => {
    toast("Inscription réussie");
  };
  render() {
    return (
      <div>
        <h1>Inscription</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Nom d'utilisateur")}
          {this.renderInput("password", "Mot de passe")}
          {this.renderInput("name", "Nom")}
          {this.renderButton("Inscription")}
        </form>
      </div>
    );
  }
}

export default SubscribeForm;
