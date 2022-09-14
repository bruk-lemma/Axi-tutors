import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {registerClient} from "../actions/clientActions.js";
import Loader from "../components/Loader.js";
import Message from "../components/Message.js";
const ClientRegisterScreen = () => {
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
  const clientRegister = useSelector((state) => state.clientRegister);
  const {loading, error, clientRegisterInfo} = clientRegister;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (clientRegisterInfo) {
      navigate();
    }
  }, [navigate, clientRegisterInfo, location]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (error) {
      setMessage(`invalid input....${error}`);
    }
    dispatch(
      registerClient(
        first_name,
        last_name,
        email,
        phone_number,
        city,
        sub_city,
        child_gender,
        child_grade
      )
    );
    console.log("client Registered...");
  };

  return (
    <div>
      <div className='phot hidden sm:block' aria-hidden='true'>
        <div className='py-5'>
          <div className='border-t border-gray-200' />
        </div>
      </div>
      <div className='mt-10 md:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6'>
          <div className='md:col-span-1'>
            <div className='px-4 sm:px-0'>
              <h3 className='text-lg font-medium leading-6 text-gray-900'>
                Parent and child Information Registration.
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          {message && <Message variant='danger'>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>}
          {loading && <Loader />}
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form onSubmit={submitHandler} action='#' method='POST'>
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='bg-white px-4 py-8 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        First name
                      </label>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        className='mt-1 block w-full py-2 rounded-md border border-gray-500 focus:outline-blue-500 shadow-sm  focus: md:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Last name
                      </label>
                      <input
                        type='text'
                        name='last-name'
                        required
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        id='last-name'
                        autoComplete='family-name'
                        className='mt-1 block w-full py-2 rounded-md border border-gray-500 focus:outline-blue-500 shadow-sm  focus: md:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label
                        htmlFor='email-address'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Email address
                      </label>
                      <input
                        type='text'
                        name='email-address'
                        id='email-address'
                        autoComplete='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='mt-1 block w-full py-2 rounded-md border border-gray-500 focus:outline-blue-500 shadow-sm  focus: md:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='city'
                        className='block text-sm font-medium text-gray-700'
                      >
                        City
                      </label>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        autoComplete='family-name'
                        className='mt-1 block w-full py-2 rounded-md border border-gray-500 focus:outline-blue-500 shadow-sm  focus: md:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='Subcity'
                        className='block text-sm font-medium text-gray-700'
                      >
                        SubCity
                      </label>
                      <input
                        type='text'
                        name='subcity'
                        id='subcity'
                        required
                        value={sub_city}
                        onChange={(e) => setSubCity(e.target.value)}
                        autoComplete='family-name'
                        className='mt-1 block w-full py-2 rounded-md border border-gray-500 focus:outline-blue-500 shadow-sm  focus: md:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='phone-number'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Phone number
                      </label>
                      <input
                        type='text'
                        name='phone-number'
                        id='phone-number'
                        required
                        value={phone_number}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        autoComplete='phone-number'
                        className='mt-1 block w-full py-2 rounded-md border border-gray-500 focus:outline-blue-500 shadow-sm  focus: md:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='child-grade'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Child Grade
                      </label>
                      <select
                        id='child-grade'
                        name='child-grade'
                        required
                        value={child_grade}
                        onChange={(e) => setChildGrade(e.target.value)}
                        autoComplete='child-grade'
                        className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      >
                        <option value='Primary-school'>Primary-school</option>
                        <option value='Secondary-school'>
                          Secondary-school
                        </option>
                        <option value='Pre-colledge'>Pre-colledge</option>
                      </select>
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='child-gender'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Child Gender
                      </label>
                      <select
                        id='child-gender'
                        name='child-gender'
                        autoComplete='child-gender'
                        required
                        onChange={(e) => setChildGender(e.target.value)}
                        className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      >
                        <option value='male'>Male</option>
                        <option value={"female"}>Female</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientRegisterScreen;
