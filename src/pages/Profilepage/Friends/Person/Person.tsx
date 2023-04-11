import style from "./Person.module.scss"
import { Button } from "../../../../components/Button/Button";
import { userDataType } from "../../../../redux/profilePage_reducer";

type PersonPropsType  = {
    followPerson: () => void
    unFollowPerson: () => void
    backgroundImg: string
    avatar: string
    name: string 
    country: string 
    followed: boolean
}

export const Person = ({backgroundImg, avatar, name, country, followed, followPerson, unFollowPerson}: PersonPropsType) => {   
    return (
        <div className={style.friend_item}>
            <div className={style.friend_card}>
                <div className={style.friend_header}>
                    <img src={backgroundImg} alt="background" />
                </div>
                <div className={style.friend_content}>
                    <div className={style.friend_avatar}>
                        <div className={style.author_thumb}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={style.author_content}>
                            <a className={style.author_name} href="#">{name}</a>
                            <div className={style.country}>{country}</div>
                        </div>
                    </div>
                    <div>{followed ? <Button callback={unFollowPerson}>Unfollow</Button> : <Button callback={followPerson}>Follow</Button>}</div>
                    <div className={style.swiper_container}></div>
                </div>
            </div>
        </div>
    )

}