import { Component } from 'react'
import style from './profile.module.scss'
import { ProfileStatusContainer } from 'components/profileStatus/ProfileStatusContainer'
import { UserProfileType } from 'api/social-network-api'
import twitter from 'assets/images/social-icons/icons8-twitter.svg'
import facebook from 'assets/images/social-icons/icons8-facebook.svg'
import vk from 'assets/images/social-icons/icons8-vk-com.svg'
import youtube from 'assets/images/social-icons/icons8-youtube.svg'
import instagram from 'assets/images/social-icons/icons8-instagram.svg'
import github from 'assets/images/social-icons/icons8-github.svg'
import website from 'assets/images/social-icons/icons8-internet-48.png'
import mainLink from 'assets/images/social-icons/link_share_icon.svg'
import { NavLink } from 'react-router-dom'

type PropsType = {
    userProfile: UserProfileType
}

export class Profile extends Component<PropsType> {


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
                                    <span className={style.title}>Name:</span>
                                    <span className={style.text}>
                                        {this.props.userProfile.fullName}
                                    </span>
                                </li>
                                <li>
                                    <span className={style.title}>Status:</span>
                                    <span className={style.text}>
                                        <ProfileStatusContainer />
                                    </span>
                                    {this.props.userProfile.lookingForAJob && <span>Open to work</span>}
                                </li>
                            </ul>
                            <NavLink className={style.edit_link} to={'/edit-profile'}>Edit Profile</NavLink>
                        </div>
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
                                    <span className={style.text}>
                                        {this.props.userProfile.aboutMe}
                                    </span>
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
                                {this.props.userProfile.contacts.facebook &&
                                    <li className={style.item}>
                                        <a target={'_blank'} rel='noreferrer'
                                           href={this.props.userProfile.contacts.facebook}>
                                            <img src={facebook} alt='' />
                                        </a>
                                    </li>}
                                {this.props.userProfile.contacts.twitter &&
                                    <li className={style.item}>
                                        <a target={'_blank'} rel='noreferrer'
                                           href={this.props.userProfile.contacts.twitter}>
                                            <img src={twitter} alt='' />
                                        </a>
                                    </li>}
                                {this.props.userProfile.contacts.instagram &&
                                    <li className={style.item}>
                                        <a target={'_blank'} rel='noreferrer'
                                           href={this.props.userProfile.contacts.instagram}>
                                            <img src={instagram} alt='' />
                                        </a>
                                    </li>}
                                {this.props.userProfile.contacts.vk &&
                                    <li className={style.item}>
                                        <a target={'_blank'} rel='noreferrer' href={this.props.userProfile.contacts.vk}>
                                            <img src={vk} alt='' />
                                        </a>
                                    </li>}
                                <li className={style.item}><a target={'_blank'} rel='noreferrer'
                                                              href={this.props.userProfile.contacts.youtube}><img
                                    src={youtube} alt='' /></a></li>
                                <li className={style.item}><a target={'_blank'} rel='noreferrer'
                                                              href={this.props.userProfile.contacts.github}><img
                                    src={github}
                                    alt='' /></a>
                                </li>
                                <li className={style.item}><a target={'_blank'} rel='noreferrer'
                                                              href={this.props.userProfile.contacts.website}><img
                                    src={website} alt='' /></a></li>
                                <li className={style.item}><a target={'_blank'} rel='noreferrer'
                                                              href={this.props.userProfile.contacts.mainLink}><img
                                    src={mainLink} alt='' /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
