import style from "./Friends.module.scss";
import {Person} from "./Person/Person";
import {useEffect, useState} from "react";
import {FriendsPropsType} from "./FriendsContainer";
import {socialNetworkAPI} from "../../../api/social-network-api";

export const Friends = ({usersData, followPerson, unFollowPerson, setUsers,}: FriendsPropsType) => {
    const [messagesFollow, setMessagesFollow] = useState<Array<string>>()

    useEffect(() => {
            socialNetworkAPI.getUsers()
                .then(response => {
                    setUsers(response.data.items)})

    }, []);

    const followUser = (userId: number) => {
        socialNetworkAPI.followUser(userId)
            .then(response => setMessagesFollow(response.data.messages))
    }
    const unfollowUser = (userId: number) => {
        socialNetworkAPI.unfollowUser(userId)
            .then(response => console.log(response.data.resultCode))
    }


    return (
        <div className={style.container_fluid}>
            {usersData &&
                usersData.map((user) => {
                    const followPersonHandler = () => {
                        followUser(user.id);
                    };
                    const unFollowPersonHandler = () => {
                        unfollowUser(user.id);
                    };
                    return (
                        <Person
                            followed={user.followed}
                            followPerson={followPersonHandler}
                            unFollowPerson={unFollowPersonHandler}
                            key={user.id}
                            photos={user.photos.small}
                            name={user.name}
                        />
                    );
                })}
        </div>
    );
};