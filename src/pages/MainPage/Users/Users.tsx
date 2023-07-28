import style from "./Users.module.scss";
import {User} from "./User/User";
import {FriendsPropsType} from "./UsersContainer";
import loading from "../../../assets/images/loading-spinner-200px.svg"
import {RequestStatus} from "../../../app/app-reducer";
import { createPages } from "../../../utils/pagesCreator";


export const Users = ({ usersData, setCurrentPage, currentPage, pageSize, totalUsersCount, 
followUser, unfollowUser, requestStatus, selectedCurrentUser }: FriendsPropsType) => {

    const totalPage = Math.ceil(totalUsersCount / pageSize);

    const pages: Array<number> = [];
    // for (let i = 1; i <= totalPage; i++) {
    //     pages.push(i);
    // }
    createPages(pages, totalPage, currentPage)

    return (
        <>
            <div className={style.page_navigation}>
                {pages.map((p) => (
                    <span
                        key={p}
                        className={`${style.page_number} ${currentPage === p && style.current}`}
                        onClick={() => {setCurrentPage(p)}}
                    >
                    {p}
                    </span>
                ))}
            </div>
            {requestStatus === RequestStatus.loading ? <div className={style.block_loading}><img src={loading}/></div>
                :
                <div className={style.container_fluid}>
                    
                    {usersData &&
                        usersData.map((user) => {

                            const followUserHandler = () => {
                                followUser(user.id);
                            };
                            const unFollowUserHandler = () => {
                                unfollowUser(user.id);
                            };
                            return (
                                <User
                                    selectedCurrentUser={selectedCurrentUser}
                                    followed={user.followed}
                                    followUser={followUserHandler}
                                    unFollowUser={unFollowUserHandler}
                                    key={user.id}
                                    backgroundImg={user.backgroundImg}
                                    avatar={user.photos.small}
                                    name={user.name}
                                    country={user.country}
                                    requestStatus={requestStatus}
                                    id={user.id}
                                />
                            );
                        })}
                   
                </div>
            }
            <div className={style.page_navigation}>
                {pages.map((p) => (
                    <span
                        key={p}
                        className={`${style.page_number} ${currentPage === p && style.current}`}
                        onClick={() => {setCurrentPage(p)}}
                    >
                    {p}
                    </span>
                ))}
            </div>
        </>
    );
}
