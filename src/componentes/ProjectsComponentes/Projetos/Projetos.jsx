import '../Projetos/Projetos.css';
import ButtonGit from '../ButtonGIT/ButtonGit';
import ButtonDeploy from '../ButtonDeploy/ButtonDeploy';

export default function Projetos() {
    return (
        <>
            <div className="cards-container">
                <div className="cards">
                    <i class='bx bxl-github'></i>
                        <h3>Lista de Tarefas</h3>
                        <p>Este projeto consiste em ser uma lista de tarefas, onde cada usuário terá suas tarefas adicionadas de forma individual. O projeto tem validação de dados, validação de token, banco de dados relacional e outras funcionalidades.
                        </p>
                        <h3>Tecnologias</h3>
                        <p> 
                            <i id='logoreact' class='bx bxl-react'></i>
                            <i id="logojs" class='bx bxl-javascript'></i>
                            <i id='logonodejs' class='bx bxl-nodejs'></i>
                            <i id='logopostgresql' class='bx bxl-postgresql' ></i>
                        </p>
                        <ButtonGit link='https://github.com/accsj/Lista-de-Tarefas' text='Acesse o repositório' />
                        <ButtonDeploy  link='https://tasklistaccsj.vercel.app/' />
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
                    <ButtonDeploy  link='https://haikyuu.vercel.app/' />
                </div>
                <div className="cards">
                    <i class='bx bxl-github'></i>
                    <h3>Spotify Clone</h3>
                    <p>Este projeto ainda em desenvolvimento consiste em ser um clone do Spotify, com telas de login e registro, verificação de usuário com banco de dados e validação de jwt, focando sempre na segurança da aplicação.</p>
                    <h3>Tecnologias</h3>
                    <p> 
                        <i id='logoreact' class='bx bxl-react'></i>
                        <i id="logojs" class='bx bxl-javascript'></i>
                        <i id='logonodejs' class='bx bxl-nodejs'></i>
                        <i id='logopostgresql' class='bx bxl-postgresql' ></i>
                    </p>
                    <ButtonGit  link='https://github.com/accsj/Spotify-Clone' text='Acesse o repositório'/>
                    <ButtonDeploy  link='https://spotify-clone-accsj.vercel.app/' />
                </div>
            </div>
            <div className="cards-container">
                <div className="cardsite">
                    <div className="cards">
                        <i class='bx bxl-github'></i>
                        <h3>Weather App</h3>
                        <p>Uma aplicação simples para consulta e previsão de tempo, optei por consumir a api da OpenWeather para conseguir todas as informações das quais precisava, acredito que foi uma das aplicações mais fáceis que fiz até agora, e foi ótima pra rever alguns conceitos do javascript puro.</p>
                        <h3>Tecnologias</h3>
                        <p> 
                            <i id='logoreact' class='bx bxl-react'></i>
                        </p>
                        <ButtonGit  link='https://github.com/accsj/weather-app' text='Acesse o repositório'/>
                        <ButtonDeploy  link='https://weather-accsj.vercel.app/' />
                    </div>
                </div>
            </div>
            <div className="cards-container">
                <div className="cardsite">
                    <div className="cards">
                        <i class='bx bxl-github'></i>
                        <h3>Agenda de Contatos</h3>
                        <p>É um projeto que usei para entender como funciona a estrutura de pastas dentro do Django, não consegui fazer algo muito elaborado e também tive dificuldades de certa forma com o deploy pois usei o React para fazer o front-end e posteriormente gerando uma build para usar na minha aplicação Django, optei por usar o banco de dados que normalmente costumo utilizar que é o Postgresql, em aplicações futuras acredito já ter uma experiência e noção de como funciona uma aplicação Django. No meu Github contém tanto o projeto com React quanto o projeto com o Django.</p>
                        <h3>Tecnologias</h3>
                        <p> 
                            <i id='logoreact' class='bx bxl-react'></i>
                            <i id="logopython" class='bx bxl-python'></i>
                            <i id='logopostgresql' class='bx bxl-postgresql' ></i>
                        </p>
                        <ButtonGit  link='https://github.com/accsj/Contatos-Django' text='Acesse o repositório'/>
                    </div>
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
