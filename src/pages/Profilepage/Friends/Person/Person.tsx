import {PersonType} from "../../../../redux/store";
import style from "./Person.module.scss"

export const Person = ({backgroundImg, avatar, name, country }: PersonType) => {
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
                    <div className={style.swiper_container}>

                    </div>
                </div>
            </div>
        </div>
    )

}