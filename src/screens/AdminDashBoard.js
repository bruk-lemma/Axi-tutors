import React, {useState} from "react";
import "antd/dist/antd.css";
import {Row, Table} from "antd";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteClient, listClients} from "../actions/clientActions.js";
//import {Table} from "react-bootstrap";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";

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
      render: (text) => <p>{text}</p>,
    },
    {
      title: "address",
      dataIndex: "address",
      key: "address",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "phone_number",
      dataIndex: "phone_number",
      key: "phone_number",
      render: (text) => <p>+{text}</p>,
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
          //onClick={handleDelete(record.first_name)}
        >
          Update
        </a>
      ),
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (text, record) => (
        <a href='#' onClick={() => handleDelete(record.first_name)}>
          Delete
        </a>
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

  useEffect(() => {
    dispatch(listClients());
  }, [dispatch]);

  return (
    <div>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Table color='red' columns={mycolumns} dataSource={clients} />
    </div>
  );
};

export default AdminDashBoard;
