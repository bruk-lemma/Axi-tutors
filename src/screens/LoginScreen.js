import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Checkbox, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions/userActions.js";
import {useNavigate} from "react-router-dom";
//import Hero from "../components/Hero.js";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import {Container} from "react-bootstrap";
import {Avatar, Card} from "antd";
import register from "../actions/userActions.js";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const {loading, error, userInfo} = userLogin;
  //const {data} = userInfo;
  //console.log(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo && userInfo.data.user.role === "admin") {
      navigate("/admin");
    }
    // <Message>Not authorized</Message>;
    //navigate("/login");
    // dispatch(login(" ", " "));
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    // e.preventDefault();
    if (error) {
      setMessage(`${error}`);
    }
    console.log(error);
    dispatch(login(email, password));
  };

  const registerHandler = (e) => {
    navigate("/signin");
  };
  return (
    <Card>
      <h3>Login</h3>
      {message && <Message variant='danger'>{message}</Message>}
      {loading && <Loader />}
      <Form name='normal_login' className='login-form'>
        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Username'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href='#.'>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            onClick={submitHandler}
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in
          </Button>
          Or <a href='/signin'>register now!</a>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginScreen;
