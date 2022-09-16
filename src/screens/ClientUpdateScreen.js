import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {deleteClient} from "../actions/clientActions";

const ClientUpdateScreen = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [sub_city, setSubCity] = useState("");
  const [child_gender, setChildGender] = useState("");
  const [child_grade, setChildGrade] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const teacherRegister = useSelector((state) => state.teacherRegister);

  /*
  useEffect(() => {
 dispatch(deleteClient(email))
  }, [navigate, teacherRegisterInfo, location]);
*/
  return <div>ClientUpdateScreen</div>;
};

export default ClientUpdateScreen;
