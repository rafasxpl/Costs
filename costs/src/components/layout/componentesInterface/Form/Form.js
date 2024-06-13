    import './Form.modules.css'
    import { useEffect, useState } from 'react'
    import {Input} from '../Inputs/Input'
    import {Label} from '../Label/Label'
    import {Select} from '../Select/Select'

    export const Form = ({handleSubmit, projectData}) => {

        const [categories, setCategories] = useState([]);
        const [projeto, setProjeto] = useState(projectData || {});

        useEffect(() => {
            fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            })
            .then((resp) => resp.json())
            .then((data) => setCategories(data))
        },[])

        function handleChange(e) {
            setProjeto({
                ...projeto,
                [e.target.name] : e.target.value
            })
        }

        function handleCategory(e) {
            setProjeto({
                ...projeto,
                category: {
                    id: e.target.value,
                    nome: e.target.options[e.target.selectedIndex].text
                }
            })
        }

        function submit(e) {
            e.preventDefault()
            handleSubmit(projeto)
        }

        return (
            <form onSubmit={submit} className="form">
                <div className="projeto">
                    <Label name="projeto" text="Nome do projeto" />

                    <Input 
                    type="text" 
                    name="projeto" 
                    placeholder="Informe o nome do projeto" 
                    handleOnChange={handleChange}
                    autoComplete="off"
                    />
                </div>
                
                <div className="orcamento__total">
                    <Label name="orcamento_total" text="Orçamento total"/>

                    <Input 
                    type="number" 
                    name="orcamento_total" 
                    placeholder="Informe o orçamento do projeto" 
                    min="0"
                    handleOnChange={handleChange} />
                </div>
                
                <Select 
                    name="select" 
                    options={categories} 
                    handleOnChange={handleCategory}
                />

                <div className="container__btn__project">
                    <button type="submit" value="Criar Projeto">Criar Projeto</button>
                </div>
            </form> 
        )
    }