import style from "./Person.module.scss"
import { Button } from "../../../../components/Button/Button";
import manAvatar from "../../../../assets/images/Безымянный-1.jpg"
import background from "../../../../assets/images/background.jpg"

type PersonPropsType = {
  followPerson: () => void;
  unFollowPerson: () => void;
  photos: string | null;
  name: string;
  followed: boolean;
};

export const Person = ({photos,name,followed,followPerson,unFollowPerson}: PersonPropsType) => {
  return (
    <div className={style.wrapper}>
      <div className={style.card}>
        <div className={style.card_header}>
          <img src={background} alt="background" />
        </div>
        <div className={style.card_body}>
          <div className={style.author}>
            <div className={style.author_avatar}>
              <img src={photos ? photos : manAvatar} alt="avatar"/>
            </div>
            <div className={style.author_content}>
              <a className={style.author_name} href="#">
                {name}
              </a>
            </div>
          </div>
            {followed ? (
              <Button className={`${style.btn_person} ${style.unfollow}`} callback={unFollowPerson}>
                unfollow
              </Button>
            ) : (
              <Button className={`${style.btn_person}`} callback={followPerson}>
                follow
              </Button>
            )}
          <div className={style.swiper_container}></div>
        </div>
      </div>
    </div>
  );
};
