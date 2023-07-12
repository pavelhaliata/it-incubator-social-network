import {Component} from "react";
import { Friends } from "./Friends";
import { connect } from "react-redux";
import { StateType } from "../../../redux/redux-store";
import {
  followAC,
  setCurrentPageAC,
  setIsFetchingAC,
  setTotalUsersCountAC,
  setUsersAC,
  unFollowAC,
  UserDomainType,
} from "../../../redux/profilePage_reducer";
import { socialNetworkAPI, UserType } from "../../../api/social-network-api";
import { Dispatch } from "redux";

class UserApiContainer extends Component<FriendsPropsType> {
  componentDidMount() {
    socialNetworkAPI.getUsers(this.props.currentPage)
    .then((response) => {
      this.props.setIsFetching(true)
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount);
      this.props.setIsFetching(false)
    });
  }
  setCurrentPageHandler = (page: number) => {
    socialNetworkAPI.getUsers(page).then((response) => {
      this.props.setIsFetching(false)
      this.props.setUsers(response.data.items)})
      this.props.setCurrentPage(page)
      this.props.setIsFetching(true)
  };

  render(){
    return(
      <>
        <Friends
         usersData={this.props.usersData}
         currentPage={this.props.currentPage}
         followPerson={this.props.followPerson}
         unFollowPerson={this.props.unFollowPerson}
         pageSize={this.props.pageSize}
         setCurrentPage={this.setCurrentPageHandler}
         setTotalUsersCount={this.props.setTotalUsersCount}
         setUsers={this.props.setUsers}
         totalUsersCount={this.props.totalUsersCount}
         isFetching={this.props.isFetching}
         setIsFetching={this.props.setIsFetching}
         />
      </>
    )
  }
 
  
}



const mapStateToProps = (state: StateType): mapStatePropsType => {
  return {
    usersData: state.profilePage.usersData,
    pageSize: state.profilePage.pageSize,
    currentPage: state.profilePage.currentPage,
    totalUsersCount: state.profilePage.totalUsersCount,
    isFetching: state.profilePage.isFetching
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
    },
    setCurrentPage(currentPage: number) {
      dispatch(setCurrentPageAC(currentPage))
    },
    setIsFetching(isFetching: boolean) {
      dispatch(setIsFetchingAC(isFetching))
    },
  };
};

export const FriendsContainer = connect(mapStateToProps,mapDispatchToProps)(UserApiContainer);

// types
export type FriendsPropsType = mapStatePropsType & mapDispatchPropsProps;

type mapStatePropsType = {
  usersData: Array<UserDomainType>;
  pageSize: number;
  currentPage: number;
  totalUsersCount: number;
  isFetching: boolean
};
type mapDispatchPropsProps = {
  followPerson: (userId: number) => void;
  unFollowPerson: (userId: number) => void;
  setUsers: (usersData: Array<UserType>) => void;
  setTotalUsersCount: (totalCount: number) => void;
  setCurrentPage: (currentPage: number) => void;
  setIsFetching: (isFetching: boolean) => void;
};
