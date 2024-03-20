import DeveloperAboutImage from '../../../assets/imgs/perfil 2.png';
import '../DeveloperAbout/DevAbout.css';

export default function DeveloperAbout() {
    return (
        <section className="section-left-about">
            <img className="developer-about" src={DeveloperAboutImage} alt="Avatar do dev" />
        </section>
    )
}