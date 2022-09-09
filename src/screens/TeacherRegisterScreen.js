import React from "react";

const TeacherRegisterScreen = () => {
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
                Teacher Information Registration.
              </h3>
              <p className='mt-1 text-sm text-gray-600'>
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form action='#' method='POST'>
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
                        autoComplete='phone-number'
                        className='mt-1 block w-full py-2 rounded-md border border-gray-500 focus:outline-blue-500 shadow-sm  focus: md:text-sm'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='education-level'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Education Level
                      </label>
                      <select
                        id='education-level'
                        name='education-level'
                        autoComplete='child-grade'
                        className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      >
                        <option>Bsc</option>
                        <option>Msc</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='tutor-subjects'
                        className='block text-sm font-medium text-gray-700'
                      >
                        Child Gender
                      </label>
                      <select
                        id='tutor-subjects'
                        name='tutor-subjects'
                        autoComplete='tutor-subjects'
                        className='mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                      >
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                  >
                    Submit
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

export default TeacherRegisterScreen;
