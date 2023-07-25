import {Component} from 'react';
import style from "./User.module.scss";
import {Button} from "../../../../components/Button/Button";
import defaultAvatar from "../../../../assets/images/abstract-user-default.svg"
import background from "../../../../assets/images/background.jpg"
import {Link} from 'react-router-dom';
import {RequestStatus} from "../../../../app/app-reducer";

type UserPropsType = {
    requestStatus: RequestStatus;
    selectedCurrentUser: Array<number>
    followUser: () => void;
    unFollowUser: () => void;
    backgroundImg: string;
    avatar: string | null;
    name: string;
    country: string;
    followed: boolean;
    id: number;
};


export class User extends Component<UserPropsType> {

  render() {

    return (
        <div className={style.wrapper}>
          <div className={style.card}>
            <div className={style.card_header}>
               <img src={this.props.backgroundImg ? this.props.backgroundImg : background} alt="background" />
            </div>
            <div className={style.card_body}>
                <div className={style.author_avatar}>
                  <img src={this.props.avatar ? this.props.avatar : defaultAvatar} alt="avatar"/>
                </div>
                <div className={style.author_content}>
                  <Link to={`/user/${this.props.id}`} className={style.author_name}>
                   <h3> {this.props.name}</h3>
                  </Link>
                </div>
            </div>
            <div className={style.btn_wrapper}>
              {this.props.followed ? (
                  <Button className={`${style.btn_person} ${style.unfollow}`} callback={this.props.unFollowUser} status={this.props.selectedCurrentUser.some(i => i === this.props.id)} >
                    unfollow
                  </Button>
              ) : (
                  <Button className={`${style.btn_person}`} callback={this.props.followUser} status={this.props.selectedCurrentUser.some(i => i === this.props.id)}>
                    follow
                  </Button>
              )}
            </div>
          </div>
        </div>
    );
  }
}