import { render, screen } from '@testing-library/react';


import { Provider } from 'react-redux';
import store from './redux/store';

import AddUser from "./components/Usercontroller/AddUser";
import DeleteUser from "./components/Usercontroller/DeleteUser";
import UpdateUser from "./components/Usercontroller/UpdateUser";
import UserById from "./components/Usercontroller/UserById";
import ViewAllUsers from "./components/Usercontroller/ViewAllUsers";



test('render Data from Add New User', () => {
   
  render(
    <Provider store={store} >
       <AddUser/>
    </Provider>)
  const linkElement = screen.getByText('User Registration');
  expect(linkElement).toBeInTheDocument();
});
test('render Data from Delete user by id', () => {
   
  render(
    <Provider store={store} >
       <DeleteUser/>
    </Provider>)
  const linkElement = screen.getByText('Delete user by id');
  expect(linkElement).toBeInTheDocument();
});
test('render Data from Update New User', () => {
   
  render(
    <Provider store={store} >
       <UpdateUser/>
    </Provider>)
  const linkElement = screen.getByText('Update New User');
  expect(linkElement).toBeInTheDocument();
});
test('render Data from List of all Users', () => {
   
  render(
    <Provider store={store} >
       <ViewAllUsers/>
    </Provider>)
  const linkElement = screen.getByText('List of all Users');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Find user by id', () => {
   
  render(
    <Provider store={store} >
       <UserById/>
    </Provider>)
  const linkElement = screen.getByText('Find user by id');
  expect(linkElement).toBeInTheDocument();
});