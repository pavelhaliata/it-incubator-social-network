import facebook from 'assets/images/social-icons/icons8-facebook.svg'
import github from 'assets/images/social-icons/icons8-github.svg'
import instagram from 'assets/images/social-icons/icons8-instagram.svg'
import website from 'assets/images/social-icons/icons8-internet-48.png'
import twitter from 'assets/images/social-icons/icons8-twitter.svg'
import vk from 'assets/images/social-icons/icons8-vk-com.svg'
import youtube from 'assets/images/social-icons/icons8-youtube.svg'
import mainLink from 'assets/images/social-icons/link_share_icon.svg'
import loading from 'assets/images/loading-spinner-200px.svg'
import { ProfileStatusContainer } from 'components/profileStatus/ProfileStatusContainer'
import { ChangeEvent, Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './profile.module.scss'
import { UserProfileType } from '../../api/social-network-api'
import { RequestStatus } from 'app/app-reducer'
import { ProfilePropsType } from './ProfileContainer'

type PropsType = {
    userProfile: UserProfileType
    uploadPhotoAsync: (file: string | Blob) => void
    requestStatus: RequestStatus
}

export class Profile extends Component<ProfilePropsType> {
    constructor(props: ProfilePropsType) {
        super(props)

        this.uploadPhotoHandler = this.uploadPhotoHandler.bind(this)
    }
    uploadPhotoHandler(event: ChangeEvent<HTMLInputElement>) {
        if (event.target.files?.length) {
            this.props.uploadPhotoAsync(event.target.files[0])
        }
    }

    render() {
        return (
            <div className={style.row}>
                <div className={style.col}>
                    <div className={style.block}>
                        <div className={style.block_title}>
                            <h6 className={style.title}>Personal Info</h6>
                        </div>
                        {this.props.requestStatus === RequestStatus.loading ? (
                            <div style={{ width: '100%', textAlign: 'center' }}>
                                <img src={loading} style={{ width: '34px' }} />
                            </div>
                        ) : (
                            <div className={style.block_content}>
                                <div>
                                    <input type='file' onChange={this.uploadPhotoHandler} />
                                    {this.props.errorMessage && (
                                        <span style={{ color: 'red' }}>
                                            {this.props.errorMessage}. Please, choose correct file
                                        </span>
                                    )}
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        src={this.props.userProfile.photos.small}
                                        alt='photo'
                                        style={{ borderRadius: '50%' }}
                                    />
                                </div>
                                <ul className={style.personal_info}>
                                    <li>
                                        <span className={style.title}>Status:</span>
                                        <span className={style.text}>
                                            <ProfileStatusContainer />
                                        </span>
                                        {this.props.userProfile.lookingForAJob && <span>Open to work</span>}
                                    </li>
                                    <li>
                                        <span className={style.title}>Name:</span>
                                        <span className={style.text}>{this.props.userProfile.fullName}</span>
                                    </li>
                                </ul>
                                <NavLink className={style.edit_link} to={'/edit-profile'}>
                                    Edit Profile
                                </NavLink>
                            </div>
                        )}
                    </div>
                </div>
                <div className={style.col}>
                    <div className={style.block}>
                        <div className={style.block_title}>
                            <h6 className={style.title}>About me:</h6>
                        </div>
                        <div className={style.block_content}>
                            <ul className={style.personal_info}>
                                <li>
                                    <span className={style.title}>About Me:</span>
                                    <span className={style.text}>{this.props.userProfile.aboutMe}</span>
                                </li>
                                <li>
                                    <span className={style.title}>My skills:</span>
                                    <span className={style.text}>
                                        {this.props.userProfile.lookingForAJobDescription}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.block}>
                        <div className={style.block_title}>
                            <h6 className={style.title}>Contacts:</h6>
                        </div>
                        <div className={style.block_content}>
                            <ul className={style.menu}>
                                {this.props.userProfile.contacts.facebook && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfile.contacts.facebook}
                                        >
                                            <img src={facebook} alt='' />
                                        </a>
                                    </li>
                                )}
                                {this.props.userProfile.contacts.twitter && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfile.contacts.twitter}
                                        >
                                            <img src={twitter} alt='' />
                                        </a>
                                    </li>
                                )}
                                {this.props.userProfile.contacts.instagram && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfile.contacts.instagram}
                                        >
                                            <img src={instagram} alt='' />
                                        </a>
                                    </li>
                                )}
                                {this.props.userProfile.contacts.vk && (
                                    <li className={style.item}>
                                        <a target={'_blank'} rel='noreferrer' href={this.props.userProfile.contacts.vk}>
                                            <img src={vk} alt='' />
                                        </a>
                                    </li>
                                )}
                                <li className={style.item}>
                                    <a
                                        target={'_blank'}
                                        rel='noreferrer'
                                        href={this.props.userProfile.contacts.youtube}
                                    >
                                        <img src={youtube} alt='' />
                                    </a>
                                </li>
                                <li className={style.item}>
                                    <a target={'_blank'} rel='noreferrer' href={this.props.userProfile.contacts.github}>
                                        <img src={github} alt='' />
                                    </a>
                                </li>
                                <li className={style.item}>
                                    <a
                                        target={'_blank'}
                                        rel='noreferrer'
                                        href={this.props.userProfile.contacts.website}
                                    >
                                        <img src={website} alt='' />
                                    </a>
                                </li>
                                <li className={style.item}>
                                    <a
                                        target={'_blank'}
                                        rel='noreferrer'
                                        href={this.props.userProfile.contacts.mainLink}
                                    >
                                        <img src={mainLink} alt='' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
