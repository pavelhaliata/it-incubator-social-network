import style from "./Friends.module.scss"
import {Person} from "./Person/Person";
import {UserType} from "../../../redux/profilePage_reducer";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FriendsPropsType } from "./FriendsContainer";

export const Friends = ({usersData, followPerson, unFollowPerson, setUsers}: FriendsPropsType) => {
   useEffect(()=>{
    setUsers([
            {
              id: uuidv4(),
              followed: true,
              backgroundImg: "https://html.crumina.net/html-olympus/img/friend1.webp",
              avatar: "https://html.crumina.net/html-olympus/img/avatar1.webp",
              name: "Nicholas Grissom",
              country: "San Francisco, CA",
            },
            {
              id: uuidv4(),
              followed: false,
              backgroundImg: "https://html.crumina.net/html-olympus/img/friend2.webp",
              avatar: "https://html.crumina.net/html-olympus/img/avatar2.webp",
              name: "Marina Valentine",
              country: "Long Island, NY",
            },
            {
              id: uuidv4(),
              followed: false,
              backgroundImg: "https://html.crumina.net/html-olympus/img/friend3.webp",
              avatar: "https://html.crumina.net/html-olympus/img/avatar3.webp",
              name: "Nicholas Grissom",
              country: "Los Angeles, CA",
            },
            {
              id: uuidv4(),
              followed: false,
              backgroundImg: "https://html.crumina.net/html-olympus/img/friend4.webp",
              avatar: "https://html.crumina.net/html-olympus/img/avatar4.webp",
              name: "Chris Greyson",
              country: "Austin, TX",
            },
          ])
   },[])

    return (

        <div className={style.container_fluid}>

            {usersData && usersData.map((user) => {
                   const followPersonHandler = () => {
                    followPerson(user.id)
                   }
                   const unFollowPersonHandler = () => {
                    unFollowPerson(user.id)
                   }
                return <Person
                    followed={user.followed}
                    followPerson={followPersonHandler}
                    unFollowPerson={unFollowPersonHandler}
                    key={user.id}
                    backgroundImg={user.backgroundImg}
                    avatar={user.avatar}
                    name={user.name}
                    country={user.country}
                    />
            })}
        </div>
    )
}



