import {useEffect} from "react";
import {UserPagePropsType} from "./UserProfileContainer";
import style from "./UserProfile.module.scss"
import twitter from "assets/images/social-icons/icons8-twitter.svg"
import facebook from "assets/images/social-icons/icons8-facebook.svg"
import vk from "assets/images/social-icons/icons8-vk-com.svg"
import youtube from "assets/images/social-icons/icons8-youtube.svg"
import instagram from "assets/images/social-icons/icons8-instagram.svg"
import github from "assets/images/social-icons/icons8-github.svg"
import website from "assets/images/social-icons/icons8-internet-48.png"
import mainLink from "assets/images/social-icons/link_share_icon.svg"
import defaultAvatar from "assets/images/abstract-user-default.svg"
import loading from "assets/images/loading-spinner-200px.svg"
import {useParams} from "react-router-dom";
import {RequestStatus} from "app/app-reducer";

export const User = (props: UserPagePropsType) => {
    const {id: userId} = useParams()
    useEffect(() => {
        props.getProfileUserAsync(Number(userId))
        props.getUserStatusAsync(Number(userId))
    }, [userId])

    if (!props.profileUserData) {
        return <div>...data not found</div>
    }

    const jobSearchStatus = props.profileUserData.lookingForAJob
    const userAvatar = props.profileUserData.photos.large ? props.profileUserData.photos.large : defaultAvatar

    return (
        <div className={style.wrapper}>
            {props.requestStatus === RequestStatus.loading ?
                <div className={style.block_loading}><img src={loading}/></div> :
                <div className={`${style.card}`}>
                    {jobSearchStatus && <div className={style.jobSearchStatus}>open to work</div>}
                    <div className={style.card_body}>
                        <img src={userAvatar} alt="Profile Image"/>
                        <span className={style.name}>{props.profileUserData.fullName}</span>
                        {props.userStatus && <span className={style.status}> status: {props.userStatus}</span>}
                        <div className={style.job_container}>
                            {props.profileUserData.lookingForAJobDescription &&
                                <p className={style.job_description}>
                                    skills: {props.profileUserData.lookingForAJobDescription}
                                </p>
                            }
                        </div>
                        {props.profileUserData.aboutMe &&
                            <div>
                                <span>About me:</span>
                                <p>
                                    {props.profileUserData.aboutMe}
                                </p>
                            </div>}
                    </div>
                    <div className={style.contacts}>
                        <ul className={style.menu}>
                            {props.profileUserData.contacts.facebook &&
                                <li className={style.item}>
                                    <a target={'_blank'} href={props.profileUserData.contacts.facebook}>
                                        <img src={facebook} alt=""/>
                                    </a>
                                </li>}
                            {props.profileUserData.contacts.twitter &&
                                <li className={style.item}>
                                    <a target={'_blank'} href={props.profileUserData.contacts.twitter}>
                                        <img src={twitter} alt=""/>
                                    </a>
                                </li>}
                            {props.profileUserData.contacts.instagram &&
                                <li className={style.item}>
                                    <a target={'_blank'} href={props.profileUserData.contacts.instagram}>
                                        <img src={instagram} alt=""/>
                                    </a>
                                </li>}
                            {props.profileUserData.contacts.vk &&
                                <li className={style.item}>
                                    <a target={'_blank'} href={props.profileUserData.contacts.vk}>
                                        <img src={vk} alt=""/>
                                    </a>
                                </li>}
                            <li className={style.item}><a target={'_blank'}
                                                          href={props.profileUserData.contacts.youtube}><img
                                src={youtube} alt=""/></a></li>
                            <li className={style.item}><a target={'_blank'}
                                                          href={props.profileUserData.contacts.github}><img src={github}
                                                                                                            alt=""/></a>
                            </li>
                            <li className={style.item}><a target={'_blank'}
                                                          href={props.profileUserData.contacts.website}><img
                                src={website} alt=""/></a></li>
                            <li className={style.item}><a target={'_blank'}
                                                          href={props.profileUserData.contacts.mainLink}><img
                                src={mainLink} alt=""/></a></li>
                        </ul>
                    </div>
                </div>}
        </div>
    )
}