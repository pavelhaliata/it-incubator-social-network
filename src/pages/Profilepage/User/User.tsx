import {useEffect} from "react";
import {UserPagePropsType} from "./UserPageContainer";
import style from "./user.module.scss"
import twitter from "../../../assets/images/social-icons/icons8-twitter.svg"
import facebook from "../../../assets/images/social-icons/icons8-facebook.svg"
import vk from "../../../assets/images/social-icons/icons8-vk-com.svg"
import youtube from "../../../assets/images/social-icons/icons8-youtube.svg"
import instagram from "../../../assets/images/social-icons/icons8-instagram.svg"
import github from "../../../assets/images/social-icons/github_icon.png"
import tiktok from "../../../assets/images/social-icons/icons8-tiktok.svg"
import website from "../../../assets/images/social-icons/icons8-internet-48.png"
import mainLink from "../../../assets/images/social-icons/link_share_icon.svg"

export const User = (props: UserPagePropsType) => {

    useEffect(() => {
        props.getProfileUser(2)
    }, [])

    if (!props.ProfileUserData.contacts.facebook) {
        return <div>not found</div>
    }

    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <div className={style.card_body}>
                    <img src={props.ProfileUserData.photos.small} alt="Profile Image"/>
                    <h2 className={style.name}>{props.ProfileUserData.fullName}</h2>
                    <div className={style.job}>
                        <h4>Status</h4>
                        <span className={style.job_status}>{props.ProfileUserData.lookingForAJob ?
                            <input type="checkbox" checked={true}/> : <input type="checkbox" checked={false}/> }
                    </span>
                        <p className={style.job_description}>
                            {props.ProfileUserData.lookingForAJobDescription}
                        </p>
                    </div>
                    <p>
                        {props.ProfileUserData.aboutMe}
                    </p>

                </div>

                <div className={style.contacts}>
                    <h4>Contact me  </h4>
                    <ul className={style.menu}>
                        <li className={style.item}>
                            <a target={'_blank'} href={props.ProfileUserData.contacts.facebook}><img src={facebook} alt=""/></a>
                        </li>
                        <li className={style.item}><a href=''><img src={twitter} alt=""/></a></li>
                        <li className={style.item}><a href=''><img src={instagram} alt=""/></a></li>
                        <li className={style.item}><a href=''><img src={vk} alt=""/></a></li>
                        <li className={style.item}><a href=''><img src={youtube} alt=""/></a></li>
                        <li className={style.item}><a href=''><img src={tiktok} alt=""/></a></li>
                        <li className={style.item}><a href=''><img src={github} alt=""/></a></li>
                        <li className={style.item}><a href=''><img src={website} alt=""/></a></li>
                        <li className={style.item}><a href=''><img src={mainLink} alt=""/></a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}