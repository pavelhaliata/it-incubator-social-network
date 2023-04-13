import style from "./Person.module.scss";
import { Button } from "../../../../components/Button/Button";

type PersonPropsType = {
  followPerson: () => void;
  unFollowPerson: () => void;
  backgroundImg: string;
  avatar: string;
  name: string;
  country: string;
  followed: boolean;
};

export const Person = ({backgroundImg,avatar,name,country,followed,followPerson,unFollowPerson}: PersonPropsType) => {
  return (
    <div className={style.friend_item}>
      <div className={style.friend_card}>
        <div className={style.card_header}>
          <img src={backgroundImg} alt="background" />
        </div>
        <div className={style.card_body}>
          <div className={style.author}>
            <div className={style.author_avatar}>
              <img src={avatar} alt="avatar" />
            </div>
            <div className={style.author_content}>
              <a className={style.author_name} href="#">
                {name}
              </a>
              <div className={style.country}>{country}</div>
            </div>
          </div>
            {followed ? (
              <Button className={style.btn_person} callback={unFollowPerson}>
                unsubscribe
              </Button>
            ) : (
              <Button className={style.btn_person} callback={followPerson}>
                subscribe
              </Button>
            )}
          <div className={style.swiper_container}></div>
        </div>
      </div>
    </div>
  );
};
