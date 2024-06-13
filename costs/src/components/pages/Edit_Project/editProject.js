import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import {Input} from '../../layout/componentesInterface/Inputs/Input';
import {Select} from '../../layout/componentesInterface/Select/Select';

import './Project.modules.css'
import './Project.modules.css'

export const Project = () => {

    const { id } = useParams()
    const [categories, setCategories] = useState([])
    const [changes, setChanges] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(data => data.json())
        .then(data => setCategories(data))
    }, [])

    function changeProject() {
        if(changes.orcamento_total <= 0) {
            alert("ORÇAMENTOS NEGATIVOS OU IGUAIS A ZERO NÃO SÃO PERMITIDOS")
        } else {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(changes)
            })
            .then(data => data.json())
            .then(() => {
                navigate('/projects', {state:{message: "Projeto atualizado com sucesso!"}})
            })
        }
    }

    function calcelChange() {
        navigate('/projects')
    }

    function handleCategory(e) {
        setChanges({
            ...changes,
            category: {
                id: e.target.value,
                nome: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    function handleChange(e) {
        setChanges({
            ...changes,
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className='containerCard'>
            <div className='cardProject'>
                <h1>Editar projeto</h1>
                <div className='nome__orcamento'>
                    <span className='nomeProjeto'>Nome do projeto:</span>
                    <Input
                        type="text"
                        name="projeto"
                        placeholder="Novo nome"
                        handleOnChange={handleChange}
                        autoComplete="off"
                    />
                    <span className='orcamento'>Orçamento:</span>
                    <Input
                        type="number"
                        name="orcamento_total"
                        placeholder="Novo orçamento"
                        handleOnChange={handleChange}
                    />
                </div>
                <Select 
                    options={categories}
                    name="select"
                    handleOnChange={handleCategory}
                />
                <div className='save__cancel'>
                    <button onClick={changeProject} className='saveChanges'>
                        <FaSave /> <span>Salvar</span>
                    </button>
                    <button onClick={calcelChange} className='calcelChanges'>
                        <MdOutlineCancel /> <span>Cancelar</span>
                    </button>
                </div>
            </div>
        </div>
    )
}