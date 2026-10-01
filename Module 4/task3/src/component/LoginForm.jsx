import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() !== "" && password.trim() !== "") {
      setMessage("Login Successful");
    } else {
      setMessage("Please enter username and password");
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <br />
        <div>
          <label>Password: </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <br />
        <button type="submit">[ Login ]</button>
      </form>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
}

export default LoginForm;