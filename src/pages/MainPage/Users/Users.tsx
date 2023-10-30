import { lazy } from 'react'
import style from './Users.module.scss'
import { UsersPropsType } from './UsersContainer'
import { pagesCreator } from 'utils/pages-creator'

const User = lazy(() => import('./User/User').then(module => ({ default: module.User })))

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

    const pages: number[] = []

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
            )
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
