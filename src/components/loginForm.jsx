import React from "react";
import Form from "./commons/form";
import { toast } from "react-toastify";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    // username: Joi.string().required().label("Nom d'utilisateur"),
    // password: Joi.string().required().label("Mot de passe"),
  };

  username = React.createRef();

  doSubmit = () => {
    // console.log("Submitted");
    toast("Connexion lancée");
  };

  render() {
    return (
      <div>
        <h1>Connexion</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Nom d'utilisateur")}
          {this.renderInput("password", "Mot de passe")}
          {this.renderButton("Connexion")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
