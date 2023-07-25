import {useEffect} from "react";
import {UserPagePropsType} from "./UserProfileContainer";
import style from "./UserProfile.module.scss"
import twitter from "../../../assets/images/social-icons/icons8-twitter.svg"
import facebook from "../../../assets/images/social-icons/icons8-facebook.svg"
import vk from "../../../assets/images/social-icons/icons8-vk-com.svg"
import youtube from "../../../assets/images/social-icons/icons8-youtube.svg"
import instagram from "../../../assets/images/social-icons/icons8-instagram.svg"
import github from "../../../assets/images/social-icons/icons8-github.svg"
import website from "../../../assets/images/social-icons/icons8-internet-48.png"
import mainLink from "../../../assets/images/social-icons/link_share_icon.svg"
import avatar from "../../../assets/images/abstract-user-default.svg"
import loading from "../../../assets/images/loading-spinner-200px.svg"
import { useParams } from "react-router-dom";
import { RequestStatus } from "../../../app/app-reducer";

export const User = (props: UserPagePropsType) => {
    const {id: userId} = useParams()
    useEffect(() => {
        props.getProfileUser(Number(userId))
    }, [userId])

    if (!props.ProfileUserData) {
        return <div>...data not found</div>
    }

    const jobSearchStatus = props.ProfileUserData.lookingForAJob
    const defaultAvatar = props.ProfileUserData.photos.large ? props.ProfileUserData.photos.large: avatar

    return (
        <div className={style.wrapper}>
             {props.requestStatus === RequestStatus.loading ? <div className={style.block_loading}><img src={loading}/></div> :
            <div className={`${style.card}`}>
                {jobSearchStatus && <div className={style.status}>open to work</div>}
                <div className={style.card_body}>
                    <img src={defaultAvatar} alt="Profile Image"/>
                    <h2 className={style.name}>{props.ProfileUserData.fullName}</h2>
                    <div className={style.job_container}>
                        <p className={style.job_description}>
                            {props.ProfileUserData.lookingForAJobDescription}
                        </p>
                    </div>
                    <h5>About me</h5>
                    <p>
                        {props.ProfileUserData.aboutMe}
                    </p>
                </div>
                <div className={style.contacts}>
                    <ul className={style.menu}>
                        <li className={style.item}><a target={'_blank'} href={props.ProfileUserData.contacts.facebook}><img src={facebook} alt=""/></a></li>
                        <li className={style.item}><a target={'_blank'} href={props.ProfileUserData.contacts.twitter}><img src={twitter} alt=""/></a></li>
                        <li className={style.item}><a target={'_blank'} href={props.ProfileUserData.contacts.instagram}><img src={instagram} alt=""/></a></li>
                        <li className={style.item}><a target={'_blank'} href={props.ProfileUserData.contacts.vk}><img src={vk} alt=""/></a></li>
                        <li className={style.item}><a target={'_blank'} href={props.ProfileUserData.contacts.youtube}><img src={youtube} alt=""/></a></li>
                        <li className={style.item}><a target={'_blank'} href={props.ProfileUserData.contacts.github}><img src={github} alt=""/></a></li>
                        <li className={style.item}><a target={'_blank'} href={props.ProfileUserData.contacts.website}><img src={website} alt=""/></a></li>
                        <li className={style.item}><a target={'_blank'} href={props.ProfileUserData.contacts.mainLink}><img src={mainLink} alt=""/></a></li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}