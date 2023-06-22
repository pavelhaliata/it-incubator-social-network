import {
  BlogPageInitialStateType,
  blogPageReducer,
  newPostAC,
  newPostTextAC,
} from "./blogPage_reducer";

test("post message text should be updated", () => {
  const startState: BlogPageInitialStateType = {
    newPostTextData: "",
    postsData: [],
  };

  const endState = blogPageReducer(startState, newPostTextAC("some text"));
  expect(endState.newPostTextData).toBe("some text");
});

test("post message shoud be added", () => {
  const startState: BlogPageInitialStateType = {
    newPostTextData: "some text",
    postsData: [],
  };

  const endState = blogPageReducer(startState, newPostAC());
  expect(endState.postsData.length).toBe(1);
});
