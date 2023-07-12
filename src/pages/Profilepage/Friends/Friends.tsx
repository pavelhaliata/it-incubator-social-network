import style from "./Friends.module.scss";
import { Person } from "./Person/Person";
import { FriendsPropsType } from "./FriendsContainer";
import loading from "../../../assets/images/loading-pulse-200px.svg"

export const Friends = ({usersData, setUsers, setCurrentPage, setTotalUsersCount, currentPage, pageSize, totalUsersCount, followPerson, unFollowPerson, isFetching}:FriendsPropsType) => {
  
  const totalPage = Math.ceil(
    totalUsersCount / pageSize
  );
  const pages = [];
  for (let i = 1; i < totalPage; i++) {
    pages.push(i);
  } 
    
    return (
      <>
      <div className={style.page_navigation}>
          {pages.map((p) => (
            <span
              className={`${style.page_number} ${currentPage === p && style.current}`}
              onClick={() => {
                setCurrentPage(p);
              }}>
              {p}
            </span>
          ))}
        </div>
        {isFetching ? 
          <div className={style.block_loading}><img src={loading}/></div>
         :
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
       </div>}
        
        
      </>
    );
}
