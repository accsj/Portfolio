import '../Projetos/Projetos.css';
import '../../../assets/styles/projectresponsive.css';
import ButtonGit from '../ButtonGIT/ButtonGit';



export default function Projetos() {
    return (
        <>
            <div className="cards-container">
                <div className="cards">
                    <i class='bx bxl-github'></i>
                        <h3>Sistema de Login</h3>
                        <p>Estudo de banco de dados com Python, fechando as conexões de forma segura, validando usuário/email/senha, e buscando informações em tempo real com o database.</p>
                        <h3>Tecnologias</h3>
                        <p> 
                            <i id="logopython" class='bx bxl-python'></i>
                        </p>
                        <ButtonGit link='https://github.com/accsj/Login-database' text='Acesse o repositório' />
                </div>
                <div className="cards">
                    <i class='bx bxl-github'></i>
                        <h3>Haikyuu</h3>
                        <p>Em um dos meus projetos pessoais, optei por unir os 3 maiores amores da minha vida: programação, vôlei e animes. Fiz um site baseado no anime de vôlei Japônes, com telas de login/register/recovery, também com abas laterais contando as histórias de cada personagem. </p>
                        <h3>Tecnologias</h3>
                        <p> <i id="logohtml" class='bx bxl-html5' ></i>
                            <i id="logocss" class='bx bxl-css3' ></i>
                            <i id="logojs" class='bx bxl-javascript'></i>
                        </p>
                        <ButtonGit  link='https://github.com/accsj/Haikyuu' text='Acesse o repositório'/>
                </div>
                <div className="cards">
                    <i class='bx bxl-github'></i>
                    <h3>Login Screen</h3>
                    <p>Uma de minhas primeiras telas feitas com as linguagens de marcação onde pude aprender a organizar arquivos, estruturar de forma semântica o HTML/CSS e deixar de forma responsiva.</p>
                    <h3>Tecnologias</h3>
                    <p> <i id="logohtml" class='bx bxl-html5' ></i>
                        <i id="logocss" class='bx bxl-css3' ></i>
                    </p>
                    <ButtonGit  link='https://github.com/accsj/Login-Screen-Responsive' text='Acesse o repositório'/>
                </div>
            </div>
            <div className="cards-container">
                <div className="cardsite">
                    <div className="cards">
                        <i class='bx bxl-github'></i>
                        <h3>Website</h3>
                        <p>Este site foi desenvolvido como portfolio, um projeto que decidi iniciar para criar um site com os conhecimentos que tenho no momento.</p>
                        <h3>Tecnologias</h3>
                        <p>
                            <i id='logoreact' class='bx bxl-react'></i>
                            <i id="logojs" class='bx bxl-javascript'></i>
                        </p>
                        <ButtonGit  link='https://github.com/accsj/Portfolio' text='Acesse o repositório'/>
                    </div>
                </div>
            </div>
        </>
    )
}
