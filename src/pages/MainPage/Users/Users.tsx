import { RequestStatus } from "app/app-reducer";
import { Field, Formik } from "formik";
import { ChangeEvent, lazy, useState } from "react";
import { useSelector } from "react-redux";
import { usersFilterType } from "store-redux/ProfilePage_reducer";
import { AppRootState } from "store-redux/redux-store";
import { pagesCreator } from "utils/pages-creator";
import style from "./Users.module.scss";
import { UsersPropsType } from "./UsersContainer";

const User = lazy(() =>
  import("./User/User").then((module) => ({ default: module.User })),
);

export const Users = ({
  usersData,
  setCurrentPage,
  currentPage,
  pageSize,
  totalUsersCount,
  followUser,
  unfollowUser,
  requestStatus,
  selectedCurrentUser,
  getUsersAsync,
}: UsersPropsType) => {
  const totalPage = Math.ceil(totalUsersCount / pageSize);

  const pages: number[] = [];

  pagesCreator(pages, totalPage, currentPage);

  return (
    <>
      <UsersSearchForm
        currentPage={currentPage}
        pageSize={pageSize}
        getUsersAsync={getUsersAsync}
      />
      {requestStatus === RequestStatus.loading && <span>...search users</span>}
      <div className={style.page_navigation}>
        {pages.map((p) => (
          <span
            key={p}
            className={`${style.page_number} ${
              currentPage === p && style.current
            }`}
            onClick={() => {
              setCurrentPage(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
      <div className={style.container_fluid}>
        {usersData &&
          usersData.map((user) => {
            const followUserHandler = () => {
              followUser(user.id);
            };
            const unFollowUserHandler = () => {
              unfollowUser(user.id);
            };
            return (
              <User
                selectedCurrentUser={selectedCurrentUser}
                followed={user.followed}
                followUser={followUserHandler}
                unFollowUser={unFollowUserHandler}
                key={user.id}
                avatar={user.photos.small}
                name={user.name}
                requestStatus={requestStatus}
                id={user.id}
              />
            );
          })}
      </div>
      <div className={style.page_navigation}>
        {pages.map((p) => (
          <span
            key={p}
            className={`${style.page_number} ${
              currentPage === p && style.current
            }`}
            onClick={() => {
              setCurrentPage(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </>
  );
};

const UsersSearchForm = (props: {
  currentPage: number;
  pageSize: number;
  getUsersAsync: (
    currentPage: number,
    pageSize: number,
    filter: usersFilterType,
  ) => void;
}) => {
  const term = useSelector(
    (state: AppRootState) => state.profilePage.usersFilter.term,
  );
  const friends = useSelector(
    (state: AppRootState) => state.profilePage.usersFilter.friends,
  );
  const [timerId, setTimerId] = useState<number | undefined>(undefined);

  const initialValue = {
    term: term,
    friends: friends,
  } as usersFilterType;
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(values) => {
        clearInterval(timerId);
        const id = setTimeout(() => {
          props.getUsersAsync(1, props.pageSize, values);
        }, 1500);
        setTimerId(+id);
      }}
    >
      {({ values, handleChange, submitForm }) => (
        <>
          <Field
            className={style.searchForm}
            name="term"
            value={values.term}
            placeholder={"find friends"}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleChange(e);
              submitForm();
            }}
          />
          <Field
            as="select"
            name="friends"
            value={values.friends}
            onChange={(e: any) => {
              handleChange(e);
              submitForm();
            }}
          >
            <option value="null">All</option>
            <option value="true">Only followed</option>
            <option value="false">Only unfollowed</option>
          </Field>
        </>
      )}
    </Formik>
  );
};
