import { PersonType } from "../../../redax/store"
import style from "./Friends.module.scss"
import {Person} from "./Person/Person";

type FriendsPropsType = {
    state: Array<PersonType>
}

export const Friends = ({ state }: FriendsPropsType) => {
    return (
        <>
            <div className={style.container_fluid}>
                {state && state.map((p) => {
                    return <Person
                        id={p.id}
                        key={p.id}
                        backgroundImg={p.backgroundImg}
                        avatar={p.avatar}
                        name={p.name}
                        country={p.country} />
                })}
            </div>
        </>
    )
}


