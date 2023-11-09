import { RequestStatus } from 'app/app-reducer'
import { Field, Formik } from 'formik'
import { ChangeEvent, lazy, useState } from 'react'
import { pagesCreator } from 'utils/pages-creator'
import style from './Users.module.scss'
import { UsersPropsType } from './UsersContainer'

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
    getUsersAsync,
}: UsersPropsType) => {
    const [inputValue, setInputValue] = useState('')
    const [timerId, setTimerId] = useState<number | undefined>(undefined)

    const totalPage = Math.ceil(totalUsersCount / pageSize)

    const pages: number[] = []

    pagesCreator(pages, totalPage, currentPage)

    const onChangeTextHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value)
        clearInterval(timerId)

        const valueToLog = event.currentTarget.value

        const id = setTimeout(() => {
            getUsersAsync(currentPage, pageSize, valueToLog)
        }, 1500)

        setTimerId(+id)
    }

    return (
        <>
            <input onChange={onChangeTextHandler} value={inputValue} />
            <UsersSearchForm currentPage={currentPage} pageSize={pageSize} getUsersAsync={getUsersAsync} />
            {requestStatus === RequestStatus.loading && <span>...search users</span>}
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

const UsersSearchForm = (props: {
    currentPage: number
    pageSize: number
    getUsersAsync: (currentPage: number, pageSize: number, term?: string) => void
}) => {
    const initialValue = {
        term: '',
        onliFriends: false,
    }
    return (
        <Formik
            initialValues={{ value: '' }}
            onSubmit={({ value }, formikBag) => {
                setTimeout(() => {
                    console.log(value)
                    props.getUsersAsync(props.currentPage, props.pageSize, value)
                }, 1500)
            }}
        >
            {({ values, handleChange, submitForm }) => (
                <Field
                    name='value'
                    value={values.value}
                    onChange={(e: any) => {
                        handleChange(e)
                        submitForm()
                    }}
                />
            )}
        </Formik>
    )
}
