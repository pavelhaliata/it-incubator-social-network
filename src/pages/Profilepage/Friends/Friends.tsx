import style from "./Friends.module.scss"
import {Person} from "./Person/Person";
import {PersonType} from "../../../redux/profilePage_reducer";

type FriendsPropsType = {
    personsData: Array<PersonType>
}

export const Friends = ({personsData}: FriendsPropsType) => {

    return (
        <div className={style.container_fluid}>
            {personsData && personsData.map((data) => {
                return <Person
                    id={data.id}
                    key={data.id}
                    backgroundImg={data.backgroundImg}
                    avatar={data.avatar}
                    name={data.name}
                    country={data.country}/>
            })}
        </div>
    )
}


