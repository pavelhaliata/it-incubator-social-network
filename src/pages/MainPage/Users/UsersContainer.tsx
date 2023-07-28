import {Component} from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../../store-redux/redux-store";
import {followUser, getUsers, setCurrentPage, setTotalUsersCount, unfollowUser, UserDomainType,
} from "../../../store-redux/MainPage_reducer";
import { RequestStatus, setRequestStatus } from "../../../app/app-reducer";

// FriendsApiContainer component
class UsersApiContainer extends Component<FriendsPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  setCurrentPageHandler = (currentPage: number) => {
    this.props.getUsers(currentPage, this.props.pageSize)
    this.props.setCurrentPage(currentPage)
  };

  render() {
      return (
          <>
              <Users
                {...this.props}
                setCurrentPage={this.setCurrentPageHandler}
              />
          </>
      )
  }
}

// FriendsContainer component
const mapStateToProps = (state: StateType): mapStatePropsType => {
    return {
        usersData: state.profilePage.usersData,
        pageSize: state.profilePage.pageSize,
        currentPage: state.profilePage.currentPage,
        totalUsersCount: state.profilePage.totalUsersCount,
        requestStatus: state.app.requestStatus,
        selectedCurrentUser: state.profilePage.selectedCurrentUser
    };
};

export const FriendsContainer = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    getUsers,
    setTotalUsersCount,
    setCurrentPage,
    setRequestStatus
})(UsersApiContainer);

// types
export type FriendsPropsType = mapStatePropsType & mapDispatchPropsPropsType;

type mapStatePropsType = {
    usersData: Array<UserDomainType>;
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    requestStatus: RequestStatus;
    selectedCurrentUser: Array<number>
};
type mapDispatchPropsPropsType = {
    followUser: (userId: number) => void;
    unfollowUser: (userId: number) => void;
    getUsers: (currentPage: number, pageSize: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
    setCurrentPage: (currentPage: number) => void;
    setRequestStatus: (status: RequestStatus) => void
};
