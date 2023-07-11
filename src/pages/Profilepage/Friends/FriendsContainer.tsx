import { Friends } from "./Friends";
import { connect } from "react-redux";
import { StateType } from "../../../redux/redux-store";
import {
  followAC,
  setTotalUsersCountAC,
  setUsersAC,
  unFollowAC,
  UserDomainType,
} from "../../../redux/profilePage_reducer";
import { UserType } from "../../../api/social-network-api";
import { Dispatch } from "redux";

// type FriendsContainerProps = {
//     store: any
// }

//  const FriendsContainer_block = ({store}: FriendsContainerProps) => {
//     const state: StateDataType = store.getState()
//     return (
//         <>
//             <Friends personsData={state.profilePage.personsData}/>
//         </>
//     )
// }
//!!! типизация state из redux/store

type mapStatePropsType = {
  usersData: Array<UserDomainType>;
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
};
type mapDispatchPropsProps = {
  followPerson: (userId: number) => void;
  unFollowPerson: (userId: number) => void;
  setUsers: (usersData: Array<UserType>) => void;
  setTotalUsersCount: (totalCount: number) => void;
};

export type FriendsPropsType = mapStatePropsType & mapDispatchPropsProps;

const mapStateToProps = (state: StateType): mapStatePropsType => {
  return {
    usersData: state.profilePage.usersData,
    pageSize: state.profilePage.pageSize,
    currentPage: state.profilePage.currentPage,
    totalUsersCount: state.profilePage.totalUsersCount
  };
};
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsProps => {
  return {
    followPerson: (userId: number) => {
      dispatch(followAC(userId));
    },
    unFollowPerson: (userId: number) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (usersData: Array<UserType>) => {
      dispatch(setUsersAC(usersData));
    },
    setTotalUsersCount: (totalCount: number) => {
        dispatch(setTotalUsersCountAC(totalCount))
    }
  };
};

export const FriendsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Friends);
