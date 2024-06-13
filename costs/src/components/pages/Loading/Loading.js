import loading from '../../../img/loading.svg'
import './Loading.modules.css'
export const Loading = () => {
    return (
        <div className='loading'>
            <img src={loading} alt="loader" />
        </div>
    )
}