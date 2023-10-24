
import {
	newMessage,
	newMessageText,
	ProfilePageInitialStateType,
	profilePageReducer,
	setUsers,
	toggleFollowingStatusRequest, follow, unFollow
} from './MainPage_reducer'
import {UserProfileType} from "../api/social-network-api";
const userId = 1
  
  const startState: ProfilePageInitialStateType = {
	messagesData: [],
	newMessageTextData: "",
	usersData: [{
		id: userId,
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
	userProfileData: {} as UserProfileType,
	selectedCurrentUser: [] as Array<number>,
	followingStatusRequest: false,
	  userStatus: ''
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
		userProfileData: {} as UserProfileType,
		selectedCurrentUser: [] as Array<number>,
		followingStatusRequest: false,
		userStatus: ''
	  };
	
	const endState = profilePageReducer(startState, newMessage());
	expect(endState.messagesData.length).toBe(1);
	expect(startState.messagesData.length).toBe(0);
  });

  test("user should be followed", () => {
	const endState = profilePageReducer(startState, follow(startState.usersData[0].id));

	expect(endState.usersData[0].followed).toBeTruthy();
	expect(startState.usersData[0].followed).toBeFalsy();
  });

  test("user should be unfollowed", () => {
	const startState: ProfilePageInitialStateType = {
		messagesData: [],
		newMessageTextData: "",
		usersData: [{
			id: userId,
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
		userProfileData: {} as UserProfileType,
		selectedCurrentUser: [] as Array<number>,
		followingStatusRequest: false,
		userStatus: ''
	  };
	
	const endState = profilePageReducer(startState, unFollow(startState.usersData[0].id));
	expect(endState.usersData[0].followed).toBeFalsy();
	expect(startState.usersData[0].followed).toBeTruthy();
  });
  
  test("should be toggle following status", () => {
	const endState = profilePageReducer(startState, toggleFollowingStatusRequest(true, userId));

	expect(endState.followingStatusRequest).toBeFalsy();
	expect(endState.selectedCurrentUser[0]).toBe(userId);
	expect(startState.followingStatusRequest).toBeFalsy();
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
		id: 2,
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

