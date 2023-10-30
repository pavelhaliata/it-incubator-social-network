import { RequestStatus } from 'app/app-reducer'
import defaultAvatar from 'assets/images/abstract-user-default.svg'
import loading from 'assets/images/loading-spinner-200px.svg'
import facebook from 'assets/images/social-icons/icons8-facebook.svg'
import github from 'assets/images/social-icons/icons8-github.svg'
import instagram from 'assets/images/social-icons/icons8-instagram.svg'
import website from 'assets/images/social-icons/icons8-internet-48.png'
import twitter from 'assets/images/social-icons/icons8-twitter.svg'
import vk from 'assets/images/social-icons/icons8-vk-com.svg'
import youtube from 'assets/images/social-icons/icons8-youtube.svg'
import mainLink from 'assets/images/social-icons/link_share_icon.svg'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import style from './UserProfile.module.scss'
import { UserPagePropsType } from './UserProfileContainer'

export const User = (props: UserPagePropsType) => {
    const { id: userId } = useParams()
    useEffect(() => {
        props.getProfileUserAsync(Number(userId))
        props.getUserStatusAsync(Number(userId))
    }, [userId])

    if (!props.profileUserData) {
        return <div>...data not found</div>
    }

    const jobSearchStatus = props.profileUserData.lookingForAJob
    const userAvatar = props.profileUserData.photos.small ? props.profileUserData.photos.small : defaultAvatar
    const contacts: { [index: string]: any } = props.profileUserData.contacts

    return (
        <div className={style.wrapper}>
            {props.requestStatus === RequestStatus.loading ? (
                <div className={style.block_loading}>
                    <img src={loading} />
                </div>
            ) : (
                <div className={`${style.card}`}>
                    {jobSearchStatus && <div className={style.jobSearchStatus}>open to work</div>}
                    <div className={style.card_body}>
                        <img src={userAvatar} alt='Profile Image' />
                        <span className={style.name}>{props.profileUserData.fullName}</span>
                        {props.userStatus && (
                            <span className={style.status}>
                                status: <span>{props.userStatus}</span>
                            </span>
                        )}
                        <div className={style.job_container}>
                            {props.profileUserData.lookingForAJobDescription && (
                                <p className={style.job_description}>
                                    skills: {props.profileUserData.lookingForAJobDescription}
                                </p>
                            )}
                        </div>
                        {props.profileUserData.aboutMe && (
                            <div className={style.aboutMe}>
                                <span>About me:</span>
                                <p>{props.profileUserData.aboutMe}</p>
                            </div>
                        )}
                    </div>
                    {Object.keys(contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={contacts[key]} />
                    })}

                    <div className={style.contacts}>
                        <ul className={style.menu}>
                            {props.profileUserData.contacts.facebook && (
                                <li className={style.item}>
                                    <a
                                        target={'_blank'}
                                        rel='noreferrer'
                                        href={props.profileUserData.contacts.facebook}
                                    >
                                        <img src={facebook} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.profileUserData.contacts.twitter && (
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={props.profileUserData.contacts.twitter}>
                                        <img src={twitter} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.profileUserData.contacts.instagram && (
                                <li className={style.item}>
                                    <a
                                        target={'_blank'}
                                        rel='noreferrer'
                                        href={props.profileUserData.contacts.instagram}
                                    >
                                        <img src={instagram} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.profileUserData.contacts.vk && (
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={props.profileUserData.contacts.vk}>
                                        <img src={vk} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.profileUserData.contacts.youtube && (
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={props.profileUserData.contacts.youtube}>
                                        <img src={youtube} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.profileUserData.contacts.github && (
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={props.profileUserData.contacts.github}>
                                        <img src={github} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.profileUserData.contacts.website && (
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={props.profileUserData.contacts.website}>
                                        <img src={website} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.profileUserData.contacts.mainLink && (
                                <li className={style.item}>
                                    <a
                                        target={'_blank'}
                                        rel='noreferrer'
                                        href={props.profileUserData.contacts.mainLink}
                                    >
                                        <img src={mainLink} alt='' />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
const Contact = ({ contactTitle, contactValue }: ContactPropsType) => {
    return (
        <div style={{ display: 'flex', gap: '5px' }}>
            <b style={{}}>{contactTitle}: </b>
            <a style={{ color: '#888da8' }} target='_blank' href={contactValue} rel='noreferrer'>
                {contactValue}
            </a>
        </div>
    )
}
