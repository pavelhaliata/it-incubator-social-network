import {Component} from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {AppRootState} from "store-redux/redux-store";
import {followAsync, getUsersAsync, setCurrentPage, setTotalUsersCount, unfollowAsync, UserDomainType,
} from "store-redux/MainPage_reducer";
import { RequestStatus, setRequestStatus } from "app/app-reducer";


class UsersApiContainer extends Component<UsersPropsType> {
  componentDidMount() {
    this.props.getUsersAsync(this.props.currentPage, this.props.pageSize)
  }

  setCurrentPageHandler = (currentPage: number) => {
    this.props.getUsersAsync(currentPage, this.props.pageSize)
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


const mapStateToProps = (state: AppRootState): mapStatePropsType => {
    return {
        usersData: state.profilePage.usersData,
        pageSize: state.profilePage.pageSize,
        currentPage: state.profilePage.currentPage,
        totalUsersCount: state.profilePage.totalUsersCount,
        requestStatus: state.app.requestStatus,
        selectedCurrentUser: state.profilePage.selectedCurrentUser
    };
};

export const UsersContainer = connect(mapStateToProps, {
    followUser: followAsync,
    unfollowUser: unfollowAsync,
    getUsersAsync,
    setTotalUsersCount,
    setCurrentPage,
    setRequestStatus
})(UsersApiContainer);

// types
export type UsersPropsType = mapStatePropsType & mapDispatchPropsPropsType;

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
    getUsersAsync: (currentPage: number, pageSize: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
    setCurrentPage: (currentPage: number) => void;
    setRequestStatus: (status: RequestStatus) => void
};
