import DevImage from '../../../assets/imgs/perfil.png'
import '../Developer/Dev.css'


export default function Developer() {
    return (
        <aside className="right-content">
            <img src={DevImage} alt="avatar do dev" className="developer" />
        </aside>
    )
}