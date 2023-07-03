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
			"name": "Shubert",
			"id": 1,
			"photos": {
				"small": null,
				"large": null
			},
			"status": null,
			"followed": false
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
			"name": "Shubert",
			"id": 1,
			"photos": {
				"small": null,
				"large": null
			},
			"status": null,
			"followed": false
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
		"name": "Shubert",
		"id": 1,
		"photos": {
			"small": null,
			"large": null
		},
		"status": null,
		"followed": false
	},
	{
		"name": "Shubert",
		"id": 2,
		"photos": {
			"small": null,
			"large": null
		},
		"status": null,
		"followed": false
	}]
	const endState = profilePageReducer(startState, setUsersAC(users));
	expect(endState.usersData.length).toBe(2);
	expect(startState.usersData.length).toBe(0);
  });

