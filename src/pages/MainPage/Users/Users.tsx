import style from './Users.module.scss'
import { User } from './User/User'
import { UsersPropsType } from './UsersContainer'
import loading from 'assets/images/loading-spinner-200px.svg'
import { RequestStatus } from 'app/app-reducer'
import { pagesCreator } from 'utils/pages-creator'

export const Users = ({
    usersData,
    setCurrentPage,
    currentPage,
    pageSize,
    totalUsersCount,
    followUser,
    unfollowUser,
    requestStatus,
    selectedCurrentUser,
}: UsersPropsType) => {
    const totalPage = Math.ceil(totalUsersCount / pageSize)

    const pages: Array<number> = []

    pagesCreator(pages, totalPage, currentPage)

    return (
        <>
            <div className={style.page_navigation}>
                {pages.map(p => (
                    <span
                        key={p}
                        className={`${style.page_number} ${currentPage === p && style.current}`}
                        onClick={() => {
                            setCurrentPage(p)
                        }}
                    >
                        {p}
                    </span>
                ))}
            </div>
            {requestStatus === RequestStatus.loading ? (
                <div className={style.block_loading}>
                    <img src={loading} />
                </div>
            ) : (
                <div className={style.container_fluid}>
                    {usersData &&
                        usersData.map(user => {
                            const followUserHandler = () => {
                                followUser(user.id)
                            }
                            const unFollowUserHandler = () => {
                                unfollowUser(user.id)
                            }
                            return (
                                <User
                                    selectedCurrentUser={selectedCurrentUser}
                                    followed={user.followed}
                                    followUser={followUserHandler}
                                    unFollowUser={unFollowUserHandler}
                                    key={user.id}
                                    avatar={user.photos.small}
                                    name={user.name}
                                    requestStatus={requestStatus}
                                    id={user.id}
                                />
                            )
                        })}
                </div>
            )}
            <div className={style.page_navigation}>
                {pages.map(p => (
                    <span
                        key={p}
                        className={`${style.page_number} ${currentPage === p && style.current}`}
                        onClick={() => {
                            setCurrentPage(p)
                        }}
                    >
                        {p}
                    </span>
                ))}
            </div>
        </>
    )
}
