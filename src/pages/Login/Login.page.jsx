import { useState } from "react";
import { Button, Flex, Input, Typography } from "antd";
import { Title } from "../../components/atom/Title/Title";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLoginButtonClick = () => {
    fetch("http://localhost:8080/login/", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ username: user, password: password }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok && data.msg) {
          setErrorMsg(data.msg);
        } else {
          localStorage.setItem("accessToken", data.accessToken);
          window.location.href = "/";
        }
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <Flex gap={"8px"} vertical style={{ width: "400px" }}>
      <Title />
      <Input
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="Usuario"
      />
      <Input
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button
        type="primary"
        disabled={!user.trim() || !password.trim()}
        onClick={handleLoginButtonClick}
      >
        Log in
      </Button>
      <Typography.Text>{errorMsg}</Typography.Text>
    </Flex>
  );
};

export { Login };
