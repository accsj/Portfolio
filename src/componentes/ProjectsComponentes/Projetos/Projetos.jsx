import '../Projetos/Projetos.css';
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
                    <p>É um projeto ainda em desenvolvimento mas com grande parte já feita, tem validação com banco de dados usando Node.js e Postgresql, verificação e validação de jwt tanto no client side quanto no server side, envio de email com tempo de expiração de token para redefinição de senha e muito mais, é um projeto que eu uso muito para estudo e testes.</p>
                    <h3>Tecnologias</h3>
                    <p>
                        <i id='logoreact' class='bx bxl-react'></i>
                        <i id="logojs" class='bx bxl-javascript'></i>
                        <i id='logonodejs' class='bx bxl-nodejs'></i>
                        <i id='logopostgresql' class='bx bxl-postgresql' ></i>
                    </p>
                    <ButtonGit  link='https://github.com/accsj/Haikyuu' text='Acesse o repositório'/>
                </div>
                <div className="cards">
                    <i class='bx bxl-github'></i>
                    <h3>Spotify Clone</h3>
                    <p>Este projeto ainda em desenvolvimento consiste em ser um clone do Spotify, com telas de login e registro, verificação de usuário com banco de dados e validação de jwt, focando sempre na segurança da aplicação.</p>
                    <h3>Tecnologias</h3>
                    <p> 
                        <i id='logoreact' class='bx bxl-react'></i>
                        <i id="logojs" class='bx bxl-javascript'></i>
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
