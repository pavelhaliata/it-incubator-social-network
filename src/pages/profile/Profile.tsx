import { RequestStatus } from 'app/app-reducer'
import loading from 'assets/images/loading-spinner-200px.svg'
import facebook from 'assets/images/social-icons/icons8-facebook.svg'
import github from 'assets/images/social-icons/icons8-github.svg'
import instagram from 'assets/images/social-icons/icons8-instagram.svg'
import website from 'assets/images/social-icons/icons8-internet-48.png'
import twitter from 'assets/images/social-icons/icons8-twitter.svg'
import vk from 'assets/images/social-icons/icons8-vk-com.svg'
import youtube from 'assets/images/social-icons/icons8-youtube.svg'
import mainLink from 'assets/images/social-icons/link_share_icon.svg'
import { ProfileStatusContainer } from 'components/profileStatus/ProfileStatusContainer'
import React, { ChangeEvent, Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './profile.module.scss'
import { ProfilePropsType } from './ProfileContainer'

export class Profile extends Component<ProfilePropsType> {
    private filePicker: React.RefObject<HTMLInputElement>
    constructor(props: ProfilePropsType) {
        super(props)
        this.filePicker = React.createRef()
        this.handlerPick = this.handlerPick.bind(this)
        this.uploadPhotoHandler = this.uploadPhotoHandler.bind(this)
    }
    handlerPick() {
        this.filePicker.current?.click()
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
                                    <input
                                        ref={this.filePicker}
                                        className={style.hidden}
                                        type='file'
                                        accept='image*/,.png,.jpeg'
                                        onChange={this.uploadPhotoHandler}
                                    />
                                    {this.props.errorMessage && (
                                        <span style={{ color: 'red' }}>
                                            {this.props.errorMessage}. Please, choose correct file.
                                        </span>
                                    )}
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <img
                                        className={style.avatar}
                                        onClick={this.handlerPick}
                                        src={this.props.userProfileData.photos.small}
                                        alt='avatar'
                                    />
                                </div>
                                <ul className={style.personal_info}>
                                    <li>
                                        {this.props.userProfileData.lookingForAJob && (
                                            <span
                                                style={{ display: 'block', textAlign: 'center', marginBottom: '8px' }}
                                            >
                                                Open to work
                                            </span>
                                        )}
                                        <span className={style.title}>Status:</span>
                                        <span className={style.text}>
                                            <ProfileStatusContainer />
                                        </span>
                                    </li>
                                    <li>
                                        <span className={style.title}>Name:</span>
                                        <span className={style.text}>{this.props.userProfileData.fullName}</span>
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
                                    <span className={style.text}>{this.props.userProfileData.aboutMe}</span>
                                </li>
                                <li>
                                    <span className={style.title}>My skills:</span>
                                    <span className={style.text}>
                                        {this.props.userProfileData.lookingForAJobDescription}
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
                                {this.props.userProfileData.contacts.facebook && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfileData.contacts.facebook}
                                        >
                                            <img src={facebook} alt='' />
                                        </a>
                                    </li>
                                )}
                                {this.props.userProfileData.contacts.twitter && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfileData.contacts.twitter}
                                        >
                                            <img src={twitter} alt='' />
                                        </a>
                                    </li>
                                )}
                                {this.props.userProfileData.contacts.instagram && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfileData.contacts.instagram}
                                        >
                                            <img src={instagram} alt='' />
                                        </a>
                                    </li>
                                )}
                                {this.props.userProfileData.contacts.vk && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfileData.contacts.vk}
                                        >
                                            <img src={vk} alt='' />
                                        </a>
                                    </li>
                                )}
                                {this.props.userProfileData.contacts.youtube && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfileData.contacts.youtube}
                                        >
                                            <img src={youtube} alt='' />
                                        </a>
                                    </li>
                                )}
                                {this.props.userProfileData.contacts.github && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfileData.contacts.github}
                                        >
                                            <img src={github} alt='' />
                                        </a>
                                    </li>
                                )}
                                {this.props.userProfileData.contacts.website && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfileData.contacts.website}
                                        >
                                            <img src={website} alt='' />
                                        </a>
                                    </li>
                                )}
                                {this.props.userProfileData.contacts.mainLink && (
                                    <li className={style.item}>
                                        <a
                                            target={'_blank'}
                                            rel='noreferrer'
                                            href={this.props.userProfileData.contacts.mainLink}
                                        >
                                            <img src={mainLink} alt='' />
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
