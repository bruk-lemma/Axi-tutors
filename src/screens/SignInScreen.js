import React, {useEffect, useState} from "react";
import {Button, Checkbox, Form, Input} from "antd";
import "antd/dist/antd.css";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {register} from "../actions/userActions.js";
import {Container} from "react-bootstrap";
import Message from "../components/Message.js";
import Loader from "../components/Loader";
//import Title from "antd/lib/skeleton/Title";
import {Typography} from "antd";
const {Title} = Typography;

const SignInScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const {loading, error, userInfo} = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== passwordconfirm) {
      setMessage("Password do not match");
    } else {
      dispatch(register(name, email, password, passwordconfirm));
      console.log(name, email, password, passwordconfirm);
    }
  };

  return (
    <Container>
      {message && <Message variant='danger'>{message}</Message>}
      {loading && <Loader />}
      <Title level={3}>SIGN UP</Title>
      <Form
        name='basic'
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        //onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item
          label='Username'
          name='name'
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
          value={name}
          onChange={(e) => setName(e.target.value)}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Email'
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
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label='Confirm password'
          name='confirmassword'
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
          ]}
          value={passwordconfirm}
          onChange={(e) => setConfirmPassword(e.target.value)}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name='remember'
          valuePropName='checked'
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button onClick={submitHandler} type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default SignInScreen;
