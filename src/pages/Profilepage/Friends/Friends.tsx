import style from "./Friends.module.scss";
import { Person } from "./Person/Person";
import { useEffect } from "react";
import { FriendsPropsType } from "./FriendsContainer";
import {  socialNetworkAPI } from "../../../api/social-network-api";

export const Friends = ({
  usersData,
  followPerson,
  unFollowPerson,
  setUsers,
}: FriendsPropsType) => {
  
  useEffect(() => {
    socialNetworkAPI.getUsers()
    .then((response) => {
      setUsers(response.data.items)
    })
    
  }, []);

  return (
    <div className={style.container_fluid}>
      {usersData &&
        usersData.map((user) => {
          const followPersonHandler = () => {
            followPerson(user.id);
          };
          const unFollowPersonHandler = () => {
            unFollowPerson(user.id);
          };
          return (
            <Person
              followed={user.followed}
              followPerson={followPersonHandler}
              unFollowPerson={unFollowPersonHandler}
              key={user.id}
              backgroundImg={user.backgroundImg}
              avatar={user.photos.small}
              name={user.name}
              country={user.country}
            />
          );
        })}
    </div>
  );
};