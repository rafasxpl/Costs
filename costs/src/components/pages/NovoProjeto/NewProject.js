import './NewProject.modules.css'
import { useNavigate } from 'react-router-dom'
import {Form} from '../../layout/componentesInterface/Form/Form'
export const  NewProject = () => {

        const navigate = useNavigate();

        function createPost(project) {
            project.cost = 0
            project.services = []

            fetch("http://localhost:5000/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(project)
            })
            .then(() => {
                navigate("/projects", {state:{ message: "Projeto Criado com sucesso!"}});
            })
            .catch((error) => console.log(error))
        }

    return (
        <section className="newProject">
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <Form handleSubmit={createPost}/> 
        </section>
    )
}