import SocialMedia from "../SocialMedia/SocialMedia";
import ButtonCV from '../../ButtonCV/ButtonCV';
import '../SectionLeft/SectionLeft.css';


export default function SectionLeft() {
    return (
        <section className="section-left">
                    <div className="left-content">
                        <h3>Olá, me chamo</h3>
                        <h1>Antonio Carlos</h1>
                        <h3>E sou desenvolvedor
                            <span className="typewrite"> Front-end</span>
                        </h3>
                        <p>Sou um estudante de Ciência da Computação apaixonado pela tecnologia, e com o que se pode realizar com ela, anseio por transformar minhas ideias em realidade através da programação, e mergulhar cada vez mais nesse profundo campo da tecnologia que tanto me fascina.</p>
                    </div>
            <SocialMedia />
            <ButtonCV />
        </section>
    )
}