import './Projects.modules.css'
import Menssagem from '../../layout/Mensagem/Menssagem'
import {CardProjects} from '../CardProjects/CardProjects'
import {Loading} from '../Loading/Loading'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import LinkButton from '../../layout/LinkButton/LinkButton'

export const Projects = () => {

    const location = useLocation()

    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState("")

    let msg = ''
    if(location.state) {
        msg = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/projects", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((data) => data.json())
            .then((data) => setProjects(data))
            .then(() => setLoading(false))
        }, 1000);
    }, [])

    function removerProjeto(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(() => {
            setProjects(projects.filter((project) => project.id !== id))
            setMessage("Projeto excluído com sucesso!")
        })
    }
    
    return (
        <section className='project'>
            <header className='headerProjects'>
                <LinkButton to='/newProject' text='Novo Projeto'/>
                <h1>Projetos</h1>
            </header>
                {
                    msg && (
                        <Menssagem text={msg} type="ok" msg={msg}/>
                    )
                }
                {
                    message && (
                        <Menssagem text={message} msg="sla" type="ok"/>
                    )
                }
            <div className='containerCards'>
                {projects.map((e, i) => (
                    <CardProjects
                        id={e.id}
                        key={i}
                        projeto={e.projeto}
                        orcamento_total={e.orcamento_total}
                        category={e.category?.nome || 'indefinido'}
                        projects={projects}
                        loading={loading}
                        removeProject={removerProjeto}
                    />
                ))
                }
            </div>
            {
                loading && (
                    <Loading />
                )
            }
            {
                !loading && projects.length === 0 && (
                    <p className='notProjects'>Não há projetos...</p>
                )
            }
        </section>
    )
}