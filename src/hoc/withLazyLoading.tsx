import { ComponentType, Suspense } from 'react'
import loadingSpinner from '../assets/images/loading-spinner-200px.svg'

const LoadingIcon = () => {
    const style = {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
    return (
        <div style={style}>
            <img src={loadingSpinner} alt='loading' />
        </div>
    )
}

export function withLazyLoading<T>(Component: ComponentType<T>) {
    const Lazy = (props: any) => {
        return (
            <Suspense fallback={<LoadingIcon />}>
                <Component {...(props as T & {})} />
            </Suspense>
        )
    }
    return Lazy
}
