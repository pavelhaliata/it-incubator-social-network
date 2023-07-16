
import {
	followPerson,
	newMessage,
	newMessageText,
	ProfilePageInitialStateType,
	profilePageReducer,
	setUsers,
	unFollowPerson,
} from "./profilePage_reducer";
import {ProfileUserType} from "../api/social-network-api";
  
  const startState: ProfilePageInitialStateType = {
	messagesData: [],
	newMessageTextData: "",
	usersData: [{
		id: 1,
		followed: false,
		backgroundImg: "https://html.crumina.net/html-olympus/img/friend1.webp",
		photos: {
			small: null,
			large: null
		  },
		status: null,
		name: "Nicholas Grissom",
		country: "San Francisco, CA",
	}],
	currentPage: 1,
	pageSize: 5,
	totalUsersCount: 20,
	  profileUserData: {} as ProfileUserType
  };
  test("dialog text should be added", () => {
	
	const endState = profilePageReducer(startState, newMessageText("some text"));
	expect(endState.newMessageTextData).toBe("some text");
	expect(startState.newMessageTextData).toBe("");
  });
  
  test("dialog message should be added", () => {
	const startState: ProfilePageInitialStateType = {
		messagesData: [],
		newMessageTextData: "some text",
		usersData: [],
		currentPage: 1,
		pageSize: 5,
		totalUsersCount: 20,
		profileUserData: {} as ProfileUserType
	  };
	
	const endState = profilePageReducer(startState, newMessage());
	expect(endState.messagesData.length).toBe(1);
	expect(startState.messagesData.length).toBe(0);
  });

  test("user should be followed", () => {
	const endState = profilePageReducer(startState, followPerson(startState.usersData[0].id));
	expect(endState.usersData[0].followed).toBeTruthy();
	expect(startState.usersData[0].followed).toBeFalsy();
  });

  test("user should be unfollowed", () => {
	const startState: ProfilePageInitialStateType = {
		messagesData: [],
		newMessageTextData: "",
		usersData: [{
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
		}],
		currentPage: 1,
		pageSize: 5,
		totalUsersCount: 20,
		profileUserData: {} as ProfileUserType
	  };
	
	const endState = profilePageReducer(startState, unFollowPerson(startState.usersData[0].id));
	expect(endState.usersData[0].followed).toBeFalsy();
	expect(startState.usersData[0].followed).toBeTruthy();
  });

  test("userData should be added", () => {

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
	const endState = profilePageReducer(startState, setUsers(users));
	expect(endState.usersData.length).toBe(2);
	expect(startState.usersData.length).toBe(1);
  });
