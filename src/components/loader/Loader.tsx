import style from './loader.module.scss'


export const Loader = () => {
    return(
        <div className={style.loader}>
            <i></i><i></i><i></i><i></i><i></i>
        </div>
    )
}