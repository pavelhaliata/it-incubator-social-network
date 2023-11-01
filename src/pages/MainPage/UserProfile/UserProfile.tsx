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

    if (!props.userProfileData) {
        return <div>...data not found</div>
    }

    const jobSearchStatus = props.userProfileData.lookingForAJob
    const userAvatar = props.userProfileData.photos.small ? props.userProfileData.photos.small : defaultAvatar
    const contacts: { [index: string]: any } = props.userProfileData.contacts

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
                        <img src={userAvatar} alt='avatar' />
                        <span className={style.name}>{props.userProfileData.fullName}</span>
                        {props.userStatus && (
                            <span className={style.status}>
                                status: <span>{props.userStatus}</span>
                            </span>
                        )}
                        <div className={style.job_container}>
                            {props.userProfileData.lookingForAJobDescription && (
                                <p className={style.job_description}>
                                    skills: {props.userProfileData.lookingForAJobDescription}
                                </p>
                            )}
                        </div>
                        {props.userProfileData.aboutMe && (
                            <div className={style.aboutMe}>
                                <span>About me:</span>
                                <p>{props.userProfileData.aboutMe}</p>
                            </div>
                        )}
                    </div>
                    {Object.keys(contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={contacts[key]} />
                    })}

                    <div className={style.contacts}>
                        <ul className={style.menu}>
                            {props.userProfileData.contacts.facebook && (
                                <li className={style.item}>
                                    <a
                                        target={'_blank'}
                                        rel='noreferrer'
                                        href={props.userProfileData.contacts.facebook}
                                    >
                                        <img src={facebook} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.userProfileData.contacts.twitter && (
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={props.userProfileData.contacts.twitter}>
                                        <img src={twitter} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.userProfileData.contacts.instagram && (
                                <li className={style.item}>
                                    <a
                                        target={'_blank'}
                                        rel='noreferrer'
                                        href={props.userProfileData.contacts.instagram}
                                    >
                                        <img src={instagram} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.userProfileData.contacts.vk && (
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={props.userProfileData.contacts.vk}>
                                        <img src={vk} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.userProfileData.contacts.youtube && (
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={props.userProfileData.contacts.youtube}>
                                        <img src={youtube} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.userProfileData.contacts.github && (
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={props.userProfileData.contacts.github}>
                                        <img src={github} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.userProfileData.contacts.website && (
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={props.userProfileData.contacts.website}>
                                        <img src={website} alt='' />
                                    </a>
                                </li>
                            )}
                            {props.userProfileData.contacts.mainLink && (
                                <li className={style.item}>
                                    <a
                                        target={'_blank'}
                                        rel='noreferrer'
                                        href={props.userProfileData.contacts.mainLink}
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
