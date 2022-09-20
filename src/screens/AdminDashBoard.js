import React, {useState} from "react";
import "antd/dist/antd.css";
import {Popconfirm, Empty, Row, Statistic, Table} from "antd";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  deleteClient,
  listClients,
  updateClient,
  getClient,
} from "../actions/clientActions.js";
//import {Table} from "react-bootstrap";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
import {Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const AdminDashBoard = () => {
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const clientList = useSelector((state) => state.clientList);

  const {loading, error, clients} = clientList;

  const handleDelete = (k) => {
    // e.preventDefault();
    console.log(k);
    dispatch(deleteClient(k));
    dispatch(listClients());
  };

  const navigate = useNavigate();

  const handleUpdate = (id) => {
    dispatch(getClient(id));

    navigate("/update");
    // console.log("client update ....");
  };

  useEffect(() => {
    dispatch(listClients());
  }, [dispatch]);

  const mycolumns = [
    {
      title: "First name",
      dataIndex: "first_name",
      key: "first_name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
      render: (text, record) => <p>{record.last_name}</p>,
    },

    {
      title: "phone_number",
      dataIndex: "phone_number",
      key: "phone_number",
      render: (text) => <p>+{text}</p>,
    },

    {
      title: "city",
      dataIndex: "city",
      key: "city",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "sub_city",
      dataIndex: "sub_city",
      key: "sub_city",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "child_grade",
      dataIndex: "child_grade",
      key: "child_grade",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "child_gender",
      dataIndex: "child_gender",
      key: "child_gender",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: (text, record) => (
        <a
          href='#'
          background-Color='blue'
          onClick={() => handleUpdate(record.id)}
        >
          Update
        </a>
      ),
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (text, record) => (
        <Popconfirm
          title='Sure to delete?'
          //on{() => handleDelete(record.key)}
          onConfirm={() => handleDelete(record.first_name)}
        >
          <a href='#'>Delete</a>
        </Popconfirm>
      ),
    },
  ];
  /*
  const datam = [
    clients.map((client) => ({
      key: client._id,
      first_name: client.first_name,
      last_name: client.last_name,
      address: client.address,
    })),
  ];
  */
  //console.log(datam);
  //console.log(clients);

  return (
    <div>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      {clients.length <= 0 || !clients ? (
        <Container>
          {" "}
          <Empty />
        </Container>
      ) : (
        <Table color='red' columns={mycolumns} dataSource={clients} />
      )}
      <Statistic title='Total Clients' value={clients.length} />
    </div>
  );
};

export default AdminDashBoard;
