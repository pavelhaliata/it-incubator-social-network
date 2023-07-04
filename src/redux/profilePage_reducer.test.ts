import { v4 as uuidv4 } from "uuid";

import {
	followAC,
	newMessageAC,
	newMessageTextAC,
	ProfilePageInitialStateType,
	profilePageReducer,
	setUsersAC,
	unFollowAC,
  } from "./profilePage_reducer";
  
  test("dialog text should be added", () => {
	const startState: ProfilePageInitialStateType = {
	  messagesData: [],
	  newMessageTextData: "",
	  usersData: [],
	};

	const endState = profilePageReducer(startState, newMessageTextAC("some text"));
	expect(endState.newMessageTextData).toBe("some text");
	expect(startState.newMessageTextData).toBe("");
  });
  
  test("dialog message should be added", () => {
	  
	const startState: ProfilePageInitialStateType = {
	  messagesData: [],
	  newMessageTextData: 'some text message',
	  usersData: [],
	};
	
	const endState = profilePageReducer(startState, newMessageAC());
	expect(endState.messagesData.length).toBe(1);
	expect(startState.messagesData.length).toBe(0);
  });

  test("user should be followed", () => {
	const userId = 1
	const startState: ProfilePageInitialStateType = {
	  messagesData: [],
	  newMessageTextData: "",
	  usersData: [
		{
			id: 1,
			followed: true,
			backgroundImg: "https://html.crumina.net/html-olympus/img/friend1.webp",
			photos: {
				small: null,
				large: null
			  },
			status: null,
			name: "Nicholas Grissom",
			country: "San Francisco, CA",
		}
	  ],
	};
	const endState = profilePageReducer(startState, followAC(userId));
	expect(endState.usersData[0].followed).toBeTruthy();
	expect(startState.usersData[0].followed).toBeFalsy();
  });

  test("user should be unfollowed", () => {
	const userId = 1
	const startState: ProfilePageInitialStateType = {
	  messagesData: [],
	  newMessageTextData: "",
	  usersData: [
		{
			id: 1,
			followed: true,
			backgroundImg: "https://html.crumina.net/html-olympus/img/friend1.webp",
			photos: {
				small: null,
				large: null
			  },
			status: null,
			name: "Nicholas Grissom",
			country: "San Francisco, CA",
		}
	  ],
	};
	const endState = profilePageReducer(startState, unFollowAC(userId));
	expect(endState.usersData[0].followed).toBeFalsy();
	expect(startState.usersData[0].followed).toBeTruthy();
  });

  test("userData should be added", () => {
	const startState: ProfilePageInitialStateType = {
	  messagesData: [],
	  newMessageTextData: "",
	  usersData: [],
	};
const users = [
	{
		id: 1,
			followed: true,
			backgroundImg: "https://html.crumina.net/html-olympus/img/friend1.webp",
			photos: {
				small: null,
				large: null
			  },
			status: null,
			name: "Nicholas Grissom",
			country: "San Francisco, CA",
	},
	{
		id: 1,
			followed: true,
			backgroundImg: "https://html.crumina.net/html-olympus/img/friend1.webp",
			photos: {
				small: null,
				large: null
			  },
			status: null,
			name: "Nicholas Grissom",
			country: "San Francisco, CA",
	}]
	const endState = profilePageReducer(startState, setUsersAC(users));
	expect(endState.usersData.length).toBe(2);
	expect(startState.usersData.length).toBe(0);
  });

