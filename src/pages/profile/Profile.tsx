import { Component } from "react";
import style from "./profile.module.scss";

export class Profile extends Component<any> {
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
                  <span className={style.text}>
				  	December 14th, 1980
                  </span>
                </li>
				<li>
                  <span className={style.title}>Birthplace:</span>
                  <span className={style.text}>
                    Minsk, Republic of Belarus
                  </span>
                </li>
				<li>
                  <span className={style.title}>Lives in:</span>
                  <span className={style.text}>
				  	Minsk
                  </span>
                </li>
				<li>
                  <span className={style.title}>Occupation:</span>
                  <span className={style.text}>
				  	Front-End Developer
                  </span>
                </li>
				<li>
                  <span className={style.title}>Gender:</span>
                  <span className={style.text}>
                   	Male
                  </span>
                </li>
				<li>
                  <span className={style.title}>Email:</span>
                  <span className={style.text}>
				  	jspiegel@yourmail.com
                  </span>
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
              <h6 className={style.title}>Personal Info</h6>
            </div>
            <div className={style.block_content}></div>
          </div>
          <div className={style.block}>
            <div className={style.block_title}>
              <h6 className={style.title}>Personal Info</h6>
            </div>
            <div className={style.block_content}></div>
          </div>
        </div>
      </div>
    );
  }
}
