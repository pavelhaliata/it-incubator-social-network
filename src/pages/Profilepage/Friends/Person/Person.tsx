import {Component} from 'react';
import style from "./Person.module.scss";
import { Button } from "../../../../components/Button/Button";
import manAvatar from "../../../../assets/images/Безымянный-1.jpg"
import background from "../../../../assets/images/background.jpg"
import {Link, NavLink} from 'react-router-dom';
import {getProfileUser} from "../../../../store-redux/profilePage_reducer";

type PersonPropsType = {
  followPerson: () => void;
  unFollowPerson: () => void;
  backgroundImg: string;
  avatar: string | null;
  name: string;
  country: string;
  followed: boolean;
  id: number
};


export class Person extends Component<PersonPropsType> {

  onClickHandler = () => {
    getProfileUser(this.props.id)
  }
  render() {
    return (
        <div className={style.wrapper}>
          <div className={style.card}>
            <div className={style.card_header}>
              <img src={this.props.backgroundImg ? this.props.backgroundImg : background} alt="background" />
            </div>
            <div className={style.card_body}>
              <div className={style.author}>
                <div className={style.author_avatar}>
                  <img src={this.props.avatar ? this.props.avatar : manAvatar} alt="avatar"/>
                </div>
                <div className={style.author_content}>
                  <Link to={`/user`} className={style.author_name} onClick={()=> {}}>
                    {this.props.name}
                  </Link>
                  <div className={style.country}>{this.props.country}</div>
                </div>
              </div>
              {this.props.followed ? (
                  <Button className={`${style.btn_person} ${style.unfollow}`} callback={this.props.unFollowPerson}>
                    unfollow
                  </Button>
              ) : (
                  <Button className={`${style.btn_person}`} callback={this.props.followPerson}>
                    follow
                  </Button>
              )}
              <div className={style.swiper_container}></div>
            </div>
          </div>
        </div>
    );
  }
}