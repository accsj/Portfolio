import Header from "../../componentes/Header/Header";
import Title from '../../componentes/ProjectsComponentes/Title/Title';
import Projetos from '../../componentes/ProjectsComponentes/Projetos/Projetos';
import Footer from '../../componentes/Footer/Footer';



function ProjectsPage() {

    return (
        <>
        <Header />
        <main>
            <section className="projects">
                <Title />
                    <Projetos />
            </section>
        </main>
        <Footer />
        </>
    )
}

export default ProjectsPage;