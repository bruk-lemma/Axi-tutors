import React, {useState} from "react";
import "antd/dist/antd.css";
import {Col, Row, Space, Table, Tag} from "antd";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {listClients} from "../actions/clientActions.js";
//import {Table} from "react-bootstrap";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";

const AdminDashBoard = () => {
  const [message, setMessage] = useState(null);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, {tags}) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";

            if (tag === "loser") {
              color = "volcano";
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size='middle'>
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const dispatch = useDispatch();

  const clientList = useSelector((state) => state.clientList);
  const {loading, error, clients} = clientList;
  //console.log(clients);
  /*
  const datam = [
    clients.map((client) => ({
      title: {client},
      dataIndex: {client},
      key: {client},
      render: (text) => <a>{text}</a>,
    })),
  ];
*/
  const mycolumns = [
    {
      title: "First name",
      dataIndex: "first_name",
      key: "first_name",
      render: (text) => <a>{text}</a>,
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
      render: (text) => <a>+{text}</a>,
    },
    {
      title: "child_grade",
      dataIndex: "child_grade",
      key: "child_grade",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "child_gender",
      dataIndex: "child_gender",
      key: "child_gender",
      render: (text) => <a>{text}</a>,
    },
  ];

  const datam = [
    clients.map((client) => ({
      key: client._id,
      first_name: client.first_name,
      last_name: client.last_name,
      address: client.address,
    })),
  ];
  console.log(datam);
  console.log(clients);
  useEffect(() => {
    dispatch(listClients());
  }, [dispatch]);
  // console.log(clients);
  /* <Table columns={columns} dataSource={data} />;*/
  return (
    /* <Table striped bordered hover>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>address</th>
          <th>phone number</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr>
            <td>{client.first_name}</td>
            <td>{client.last_name}</td>
            <td>{client.address}</td>
            <td>{client.phone_number}</td>
          </tr>
        ))}
      </tbody>
    </Table>
*/
    /* <>
      {clients.map((p) => (
        <Row>
          <Col> {p.address}</Col>
        </Row>
      ))}
    </>*/
    /*<div>
      <h1>latest</h1>
      <Row>
        {clients.map((client) => (
          <Col key={client.address} sm={12} lg={4} xl={3}>
            <h1>{client.address}</h1>
          </Col>
        ))}
      </Row>
    </div>*/
    <div>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Table color='red' columns={mycolumns} dataSource={clients} />
    </div>
  );
};

export default AdminDashBoard;
