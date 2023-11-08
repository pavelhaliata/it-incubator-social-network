import { ChangeEvent, lazy, useState } from 'react'
import style from './Users.module.scss'
import { UsersPropsType } from './UsersContainer'
import { pagesCreator } from 'utils/pages-creator'
import { RequestStatus, setRequestStatus } from '../../../app/app-reducer'

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
                          findUserAsync
                      }: UsersPropsType) => {
    const totalPage = Math.ceil(totalUsersCount / pageSize)

    const pages: number[] = []

    pagesCreator(pages, totalPage, currentPage)
    const [inputValue, setInputValue] = useState('')
    const [timerId, setTimerId] = useState<number | undefined>(undefined)

    const onChangeTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
        clearInterval(timerId)

        const valueToLog = event.currentTarget.value

        const id = setTimeout(() => {
            findUserAsync(valueToLog)
        }, 1500)

        setTimerId(+id)
    }


    return (
        <>
            <input onChange={onChangeTextHandler} value={inputValue} />
            { requestStatus === RequestStatus.loading && <span>...search user</span>}
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
