import {Component} from "react";
import {Friends} from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../../store-redux/redux-store";
import {followUser, getUsers, setCurrentPage, setTotalUsersCount, unfollowUser, UserDomainType,
} from "../../../store-redux/profilePage_reducer";
import { RequestStatus, setRequestStatus } from "../../../app/app-reducer";

// FriendsApiContainer component
class FriendsApiContainer extends Component<FriendsPropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage)
  }

  setCurrentPageHandler = (page: number) => {
    this.props.getUsers(page)
    this.props.setCurrentPage(page)
  };

  render() {
      return (
          <>
              <Friends
                  usersData={this.props.usersData}
                  currentPage={this.props.currentPage}
                  followUser={this.props.followUser}
                  unfollowUser={this.props.unfollowUser}
                  pageSize={this.props.pageSize}
                  setCurrentPage={this.setCurrentPageHandler}
                  setTotalUsersCount={this.props.setTotalUsersCount}
                  getUsers={this.props.getUsers}// этот параметр компоненте не нужен
                  totalUsersCount={this.props.totalUsersCount}
                  requestStatus={this.props.requestStatus}
                  setRequestStatus={this.props.setRequestStatus}
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
        requestStatus: state.app.status,

    };
};

export const FriendsContainer = connect(mapStateToProps, {
    followUser,
    unfollowUser,
    getUsers,
    setTotalUsersCount,
    setCurrentPage,
    setRequestStatus
})(FriendsApiContainer);

// types
export type FriendsPropsType = mapStatePropsType & mapDispatchPropsPropsType;

type mapStatePropsType = {
    usersData: Array<UserDomainType>;
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    requestStatus: RequestStatus
};
type mapDispatchPropsPropsType = {
    followUser: (userId: number) => void;
    unfollowUser: (userId: number) => void;
    getUsers: (currentPage: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
    setCurrentPage: (currentPage: number) => void;
    setRequestStatus: (status: RequestStatus) => void
};
