import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import User from './User';

Enzyme.configure({ adapter: new Adapter() })

let wrapper;

beforeAll(() => {
	wrapper = shallow(<App/>);
});

describe('username, password and button', function() {
	it('test username', () => {
		wrapper.find('#username').simulate("change", {target: {value: 'client', name: 'username'}});
		expect(wrapper.state().username).toEqual('client');
	});

	it('test password', () => {
		wrapper.find('#password').simulate("change", {target: {value: '123456', name: 'password'}});
		expect(wrapper.state().password).toEqual('123456');
	});

	it('test button', () => {
		wrapper.find('button').simulate("click");
		expect(wrapper.state().isSubmitted).toBeTruthy();
	});
});

describe('response from API',  function() {
	
	let data;
	beforeEach(() => {
		data =  new User();
	});

	it('test API response', async () => {
		if(wrapper.state().isSubmitted == true)
			var result = await data.getUsers();
		expect(result[0].username).toEqual('Bret');
	});

	it('test API response Fails', async () => {
		if(wrapper.state().isSubmitted == true)
			var result = await data.getUsers();
		expect(result[1].username).toEqual('Bret');
	});
});


