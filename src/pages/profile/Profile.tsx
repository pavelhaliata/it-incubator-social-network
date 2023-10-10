import { Component } from "react";
import { Navigate } from "react-router-dom";
import style from "./profile.module.scss";
import { ProfilePropsType } from "./ProfileContainer";

export class Profile extends Component<ProfilePropsType> {

  render() {

    return (
      <div className={style.row}>
        <div className={style.col}>
          <div className={style.block}>
            <div className={style.block_title}>
              <h6 className={style.title}>Personal Info</h6>
            </div>
            <div className={style.block_content}>
              <ul className={style.personal_info}>
                <li>
                  <span className={style.title}>About Me:</span>
                  <span className={style.text}>
                    Hi, Im Paul, Im 37 and I work as a Front-End Developer for
                    the “Daydreams” Agency in Pier 56
                  </span>
                </li>
                <li>
                  <span className={style.title}>Birthday:</span>
                  <span className={style.text}>December 14th, 1980</span>
                </li>
                <li>
                  <span className={style.title}>Birthplace:</span>
                  <span className={style.text}>Minsk, Republic of Belarus</span>
                </li>
                <li>
                  <span className={style.title}>Lives in:</span>
                  <span className={style.text}>Minsk</span>
                </li>
                <li>
                  <span className={style.title}>Occupation:</span>
                  <span className={style.text}>Front-End Developer</span>
                </li>
                <li>
                  <span className={style.title}>Gender:</span>
                  <span className={style.text}>Male</span>
                </li>
                <li>
                  <span className={style.title}>Email:</span>
                  <span className={style.text}>jspiegel@yourmail.com</span>
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
                  Dribbble
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
