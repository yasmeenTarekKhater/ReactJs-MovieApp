import { useState } from "react";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorsRegister, setErorrs] = useState({
    name: null,
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const handleInputChange = (e) => {
    const field_name = e.target.name;
    const field_value = e.target.value;
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@*%$#])[0-9a-zA-Z@*%$#]+$/;
    if (field_name === "name") {
      setRegisterForm({
        ...registerForm,
        name: field_value,
      });

      setErorrs({
        ...errorsRegister,
        name:
          field_value.length === 0
            ? "This field is required"
            : field_value.length < 3
            ? "Min.length is 3"
            : null,
      });
    }
    if (field_name === "username") {
      setRegisterForm({
        ...registerForm,
        username: field_value,
      });

      setErorrs({
        ...errorsRegister,
        username:
          field_value.length === 0
            ? "This field is required"
            : field_value.length < 3
            ? "Min.length is 3"
            : field_value.split(" ").length > 1
            ? "spaces not required"
            : null,
      });
    }
    if (field_name === "email") {
      setRegisterForm({
        ...registerForm,
        email: field_value,
      });

      setErorrs({
        ...errorsRegister,
        email:
          field_value.length === 0
            ? "This field is required"
            : !field_value.includes("@")
            ? "must be email format"
            : null,
      });
    }
    if (field_name === "password") {
      setRegisterForm({
        ...registerForm,
        password: field_value,
      });

      setErorrs({
        ...errorsRegister,
        password:
          field_value.length === 0
            ? "This field is required"
            : field_value.length < 8
            ? "This field length must grater than 8"
            : !passwordRegex.test(field_value)
            ? " must contains at least one lowercase , one uppercase , at least one diĀit and special character [ example : *@%$# ]"
            : null,
      });
    }
    if (field_name === "confirmPassword") {
      setRegisterForm({
        ...registerForm,
        confirmPassword: field_value,
      });

      setErorrs({
        ...errorsRegister,
        confirmPassword:
          field_value !== registerForm.password ? "not matched password" : null,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mt-4">
      <h1>Register</h1>
      <hr />
      <form className="w-50" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            aria-describedby="name-help"
            value={registerForm.name}
            onChange={handleInputChange}
          />
          {errorsRegister.name && (
            <div id="game_name_help" className="form-text text-danger">
              {errorsRegister.name}
            </div>
          )}
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">
            UserName
          </label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
            aria-describedby="username-help"
            value={registerForm.username}
            onChange={handleInputChange}
          />
          {errorsRegister.username && (
            <div id="game_name_help" className="form-text text-danger">
              {errorsRegister.username}
            </div>
          )}
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={registerForm.email}
            onChange={handleInputChange}
          />
          {errorsRegister.email && (
            <div id="game_name_help" className="form-text text-danger">
              {errorsRegister.email}
            </div>
          )}
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            type="text"
            class="form-control"
            id="password"
            name="password"
            value={registerForm.password}
            onChange={handleInputChange}
          />
          {errorsRegister.password && (
            <div id="game_name_help" className="form-text text-danger">
              {errorsRegister.password}
            </div>
          )}
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={registerForm.confirmPassword}
            onChange={handleInputChange}
          />
          {errorsRegister.confirmPassword && (
            <div id="game_name_help" className="form-text text-danger">
              {errorsRegister.confirmPassword}
            </div>
          )}
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
