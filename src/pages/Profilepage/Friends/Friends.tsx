import style from "./Friends.module.scss";
import {Person} from "./Person/Person";
import React from "react";
import {FriendsPropsType} from "./FriendsContainer";
import {socialNetworkAPI} from "../../../api/social-network-api";

export class Friends extends React.Component <FriendsPropsType> {

    componentDidMount() {
        socialNetworkAPI.getUsers()
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <div className={style.container_fluid}>
            {this.props.usersData &&
                this.props.usersData.map((user) => {
                    const followPersonHandler = () => {
                        this.props.followPerson(user.id);
                    };
                    const unFollowPersonHandler = () => {
                        this.props.unFollowPerson(user.id);
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
    }
}