import react from "react";
import s from "./Friends.module.scss"
type FriendsPropsType= {

}

export function Friends ({}: FriendsPropsType) {

    
    return(
        <div>
            <div className={s.friend_item}>
                <div className={s.friend_header}>
                    <img src="https://html.crumina.net/html-olympus/img/friend1.webp" alt="background" />
                </div>
                <div className={s.friend_content}>
                    <div className={s.friend_avatar}>
                        <div className={s.author_thumb}>
                            <img src="https://html.crumina.net/html-olympus/img/avatar1.webp" alt="avatar" />
                        </div>
                        <div className={s.author_content}>
                            <a className={s.author_name} href="#">Nicholas Grissom</a>
                            <div className={s.country}>San Francisco, CA</div>
                        </div>
                    </div>
                    <div className={s.swiper_container}>

                    </div>
                </div>
            </div>
        </div>
    )
} 