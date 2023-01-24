import { type } from "@testing-library/user-event/dist/type";
import react from "react";
import s from "./Friends.module.scss"

export type PersonPropsType = {
    backgroudImg: string
    avatar: string
    name: string
    country: string
}
type IProps = {
    person: Array<PersonPropsType>
}


export const Friends = ({ person }: IProps)=> {
    return (
        <>
            <div className={s.container_fluid}>
                {person.map((p) => {
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

const Person = ({ backgroudImg, avatar, name, country }: PersonPropsType) => {
    return (
        <div className={s.friend_item}>
            <div className={s.friend_card}>
                <div className={s.friend_header}>
                    <img src={backgroudImg} alt="background" />
                </div>
                <div className={s.friend_content}>
                    <div className={s.friend_avatar}>
                        <div className={s.author_thumb}>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <div className={s.author_content}>
                            <a className={s.author_name} href="#">{name}</a>
                            <div className={s.country}>{country}</div>
                        </div>
                    </div>
                    <div className={s.swiper_container}>

                    </div>
                </div>
            </div>
        </div>
    )
}