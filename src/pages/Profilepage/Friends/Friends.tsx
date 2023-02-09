import { PersonType } from "../../../redax/state"
import style from "./Friends.module.scss"

type FrindsPropsType = {
    personData: Array<PersonType>
}

export const Friends = ({ personData }: FrindsPropsType) => {
    return (
        <>
            <div className={style.container_fluid}>
                {personData && personData.map((p) => {
                    return <Person
                        backgroudImg={p.backgroudImg}
                        avatar={p.avatar}
                        name={p.name}
                        country={p.country} />
                })}
            </div>
        </>
    )
}

const Person = ({ backgroudImg, avatar, name, country }: PersonType) => {
    return (
        <div className={style.friend_item}>
            <div className={style.friend_card}>
                <div className={style.friend_header}>
                    <img src={backgroudImg} alt="background" />
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