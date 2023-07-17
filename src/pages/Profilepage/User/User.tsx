import {useEffect} from "react";
import {UserPagePropsType} from "./UserPageContainer";
import style from "./user.module.scss"
import twitter from "../../../assets/images/social-icons/icons8-twitter.svg"
import facebook from "../../../assets/images/social-icons/icons8-facebook.svg"
import vk from "../../../assets/images/social-icons/icons8-vk-com.svg"
import youtube from "../../../assets/images/social-icons/icons8-youtube.svg"
import instagram from "../../../assets/images/social-icons/icons8-instagram.svg"
import github from "../../../assets/images/social-icons/icons8-github.svg"
import website from "../../../assets/images/social-icons/icons8-internet-48.png"
import mainLink from "../../../assets/images/social-icons/link_share_icon.svg"
import defaultProfileImage from "../../../assets/images/user-svgrepo-com.svg"
import { useParams } from "react-router-dom";

export const User = (props: UserPagePropsType) => {
    const {id} = useParams()
    useEffect(() => {
        props.getProfileUser(Number(id))
    }, [id])

    if (!props.ProfileUserData) {
        return <div>...not found</div>
    }

    return (
        <div className={style.wrapper}>
            <div className={style.card}>
                <div className={style.card_body}>
                    <img src={props.ProfileUserData.photos.large ? props.ProfileUserData.photos.large: defaultProfileImage} alt="Profile Image"/>
                    <h2 className={style.name}>{props.ProfileUserData.fullName}</h2>
                    <div className={style.job_container}>
                        <span>status:</span>
                        <span className={style.job_status}>{props.ProfileUserData.lookingForAJob ?
                            <span> open to work</span> : <span>found already</span> }
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
                    <ul className={style.menu}>
                        <li className={style.item}><a target={'_blank'} href={props.ProfileUserData.contacts.facebook}><img src={facebook} alt=""/></a></li>
                        <li className={style.item}><a href={props.ProfileUserData.contacts.twitter}><img src={twitter} alt=""/></a></li>
                        <li className={style.item}><a href={props.ProfileUserData.contacts.instagram}><img src={instagram} alt=""/></a></li>
                        <li className={style.item}><a href={props.ProfileUserData.contacts.vk}><img src={vk} alt=""/></a></li>
                        <li className={style.item}><a href={props.ProfileUserData.contacts.youtube}><img src={youtube} alt=""/></a></li>
                        <li className={style.item}><a href={props.ProfileUserData.contacts.github}><img src={github} alt=""/></a></li>
                        <li className={style.item}><a href={props.ProfileUserData.contacts.website}><img src={website} alt=""/></a></li>
                        <li className={style.item}><a href={props.ProfileUserData.contacts.mainLink}><img src={mainLink} alt=""/></a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}