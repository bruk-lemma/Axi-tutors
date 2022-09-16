import React, {useEffect, useState} from "react";
import "antd/dist/antd.css";
import {Col, Row, Space, Table, Tag} from "antd";
import {useDispatch, useSelector} from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {listTeachers} from "../actions/teacherActions.js";
import {deleteClient} from "../actions/clientActions.js";

const AdminDashboardTeachers = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);

  const teacherList = useSelector((state) => state.teacherList);

  const {loading, error, teachers} = teacherList;

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
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Sub city",
      dataIndex: "sub_city",
      key: "sub_city",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Phone Number",
      dataIndex: "phone_number",
      key: "phone_number",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Teacher Education Level",
      dataIndex: "teacher_education_level",
      key: "teacher_education_level",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Teacher Tutor Subjects",
      dataIndex: "teacher_tutor_subjects",
      key: "teacher_tutor_subjects",
      render: (text) => <p>{text}</p>,
    },
  ];

  useEffect(() => {
    dispatch(listTeachers());
    //console.log(teachers);
  }, [dispatch]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteClient());
  };

  return (
    <div>
      <Table color='red' columns={mycolumns} dataSource={teachers} />
    </div>
  );
};

export default AdminDashboardTeachers;
