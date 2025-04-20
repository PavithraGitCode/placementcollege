import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
 const navigate=useNavigate();
   

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

   
   

   
  const handleSubmit = async (event) => {
    event.preventDefault();
    setRegistrationError("");
    setRegistrationSuccess(false);

    if (password !== confirmPassword) {
      setRegistrationError("Passwords do not match.");
      return;
    }

        


    const newUser = {
      
      username: username,
      password: password,
     
    };

    try {
      const response = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);
        navigate('/login')
        setRegistrationSuccess(true);
        // Optionally redirect the user or show a success message
      } else {
        const errorData = await response.json();
        console.error("Registration failed:", errorData);
        setRegistrationError(
          `Registration failed: ${
            errorData?.message || response.statusText
          }`
        );
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setRegistrationError("An unexpected error occurred during registration.");
    }
  };

  return (
    <>
      <div className="bg-login">
        <div className="containers">
          <div className="screen">
            <div className="screen__content">
              <form className="login" onSubmit={handleSubmit}>
                
                <div className="login__field">
                  <i className="login__icon fas fa-user"></i>
                  <input
                    type="text"
                    className="login__input"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div className="login__field">
                  <i className="login__icon fas fa-lock"></i>
                  <input
                    type="password"
                    className="login__input"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                </div>
                 

                

                <button className="button login__submit" type="submit">
                  <span className="button__text">Register Now</span>
                  <i className="button__icon fas fa-chevron-right"></i>
                </button>
                {registrationError && (
                  ()=>{
                    alert(registrationError);
                    return null;
                   
                }
                )}
                {registrationSuccess && (
  () => {
    alert("Registration successful!");
    return null; // Or any other valid React node if needed
  }
)()}
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
