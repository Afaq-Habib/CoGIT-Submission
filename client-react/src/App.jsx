import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signout } from './helpers/auth';
import { ToastContainer, toast } from 'react-toastify';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Container } from '@material-ui/core';
import HOMEPAGE from "./components/homepage/homepage";

function App({ history }) {
  return (
    <Container className="bg-gray-100 text-gray-900 justify-center" maxWidth="lg">
      <ToastContainer />
      <div className='max-w-screen-xl bg-white shadow  flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-8/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <div className='w-full flex-1 mt-8 text-indigo-500'>
              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Features
                </div>
              </div>
              <div className='mx-auto max-w-xs relative '>
                <Link
                  to='/login'
                  className='mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  <span className='ml-3'>Sign In</span>
                </Link>
                <Link
                  to='/register'
                  className='mt-5 tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-user-plus  w-6  -ml-2' />
                  <span className='ml-3'>Sign Up</span>
                </Link>
                <Link
                  to='/private'
                  className='mt-5 tracking-wide font-semibold bg-orange-500 text-gray-100 w-full py-4 rounded-lg hover:bg-orange-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  <span className='ml-3'>Profile Dashbaord</span>
                </Link>
                <Link
                  to='/admin'
                  className='mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-in-alt  w-6  -ml-2' />
                  <span className='ml-3'>Admin Dashbaord</span>
                </Link>
                <Button onClick={() => {
                  signout(() => {
                    toast.error('Signout Successfully');
                    history.push('/home');
                  });
                }}
                  className='mt-5 tracking-wide font-semibold bg-pink-500 text-gray-100 w-full py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-sign-out-alt  w-6  -ml-2' />
                  <span className='ml-3'>Signout</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </Container>
  );
}

export default App;
