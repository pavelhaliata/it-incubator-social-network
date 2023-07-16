import {Component} from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {StateType} from "../../../store-redux/redux-store";
import {followPerson, getUsers, setCurrentPage, setTotalUsersCount, unFollowPerson, UserDomainType,
} from "../../../store-redux/profilePage_reducer";
import { RequestStatus, setRequestStatus } from "../../../app/app-reducer";

// UserApiContainer component
class UserApiContainer extends Component<FriendsPropsType> {
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
                  followPerson={this.props.followPerson}
                  unFollowPerson={this.props.unFollowPerson}
                  pageSize={this.props.pageSize}
                  setCurrentPage={this.setCurrentPageHandler}
                  setTotalUsersCount={this.props.setTotalUsersCount}
                  getUsers={this.props.getUsers}
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
        requestStatus: state.app.status
    };
};

export const FriendsContainer = connect(mapStateToProps, {
    followPerson,
    unFollowPerson,
    getUsers,
    setTotalUsersCount,
    setCurrentPage,
    setRequestStatus
})(UserApiContainer);

// types
export type FriendsPropsType = mapStatePropsType & mapDispatchPropsProps;

type mapStatePropsType = {
    usersData: Array<UserDomainType>;
    pageSize: number;
    currentPage: number;
    totalUsersCount: number;
    requestStatus: RequestStatus
};
type mapDispatchPropsProps = {
    followPerson: (userId: number) => void;
    unFollowPerson: (userId: number) => void;
    getUsers: (currentPage: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
    setCurrentPage: (currentPage: number) => void;
    setRequestStatus: (status: RequestStatus) => void
};
