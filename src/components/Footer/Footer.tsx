import s from './Footer.module.scss'

interface IProps {
    className: string
}

function Footer({ className }: IProps) {
    return <div className={`${s.container} ${className}`}></div>
}

export default Footer
