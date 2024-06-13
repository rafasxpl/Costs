import './Home.modules.css'
import savings from '../../../img/savings.svg'
import LinkButton from '../../layout/LinkButton/LinkButton'

export const  Home = () => {
    return (
        <section className="home">
            <h1>Bem vindo ao <span className="title__home">Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo</p>
            <LinkButton to='/newProject' text='Novo Projeto'/>
            <div className="savings__container">
                <img className="savings" src={savings} alt="costs" />
            </div>
        </section>
    )
}