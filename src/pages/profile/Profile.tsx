import {Component} from "react";
import style from "./profile.module.scss";
import {ProfileStatusContainer} from "components/profileStatus/ProfileStatusContainer";
import { UserProfileType } from "api/social-network-api";

type PropsType = {
  userProfile: UserProfileType
}

export class Profile extends Component<PropsType> {
  

  render() {
    return (
      <div className={style.row}>
        <div className={style.col}>
          <div className={style.block}>
            <div className={style.block_title}>
              <h6 className={style.title}>Personal Info</h6>
              <ProfileStatusContainer />
            </div>
            <div>
            </div>
            <div className={style.block_content}>
              <ul className={style.personal_info}>
                <li>
                  <span className={style.title}>Name:</span>
                  <span className={style.text}>
                    {this.props.userProfile.fullName}
                  </span>
                  {this.props.userProfile.lookingForAJob && <span>Open to work</span>}
                </li>
                <li>
                  <span className={style.title}>About Me:</span>
                  <span className={style.text}>
                    {this.props.userProfile.aboutMe}
                  </span>
                </li>
                <li>
                  <span className={style.title}>My Skills:</span>
                  <span className={style.text}>
                    {this.props.userProfile.lookingForAJobDescription}
                  </span>
                </li>
                <li>
                  <span className={style.title}>Email:</span>
                  <span className={style.text}> rgerfw@rvrvf</span>
                </li>
              </ul>
              <div className="widget w-socials">
                <h6 className="title">Other Social Networks:</h6>
                <a href="#" className="social-item bg-facebook">
                  Facebook
                </a>
                <a href="#" className="social-item bg-twitter">
                  Twitter
                </a>
                <a href="#" className="social-item bg-dribbble">
                 VK
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={style.col}>
          <div className={style.block}>
            <div className={style.block_title}>
              <h6 className={style.title}>Hobbies and Interests</h6>
            </div>
            <div className={style.block_content}>
            <ul className={style.personal_info}>
                <li>
                  <span className={style.title}>Hobbies:</span>
                  <span className={style.text}>
                    I like to ride the bike to work, 
                    swimming, and working out. 
                    I also like reading design magazines, go to museums, 
                    and binge watching a good tv show while its raining outside.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.block}>
            <div className={style.block_title}>
              <h6 className={style.title}>Education and Employement</h6>
            </div>
            <div className={style.block_content}>
            <ul className={style.personal_info}>
                <li>
                  <span className={style.title}>The New College of Design</span>
                  <span className={style.date}>2001 - 2006</span>
                  <span className={style.text}>
                  Digital Design Intern for the “Multimedz” agency. 
                  Was in charge of the communication with the clients.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
