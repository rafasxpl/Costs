import './Card.modules.css'
import { useState } from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import {NavLink} from 'react-router-dom'

export const  CardProjects = ({ id, removeProject, projeto, orcamento_total, category, key }) => {

    const handleRemove = (e) => {
        removeProject(id)
    }

    return (
            <div key={key} className='cardProjects'>
                <h2 className='nomeProjeto'>Projeto: <span>{projeto || 'indefinido'}</span></h2>
                <p className='orcamento'>Orçamento:
                    <span>{orcamento_total !== undefined ? "R$" + orcamento_total : 'indefinido'}</span>
                </p>
                <p className={`category ${category || "indefinido"}`}>Categoria: <span>{category || 'indefinido'}</span></p>
                <div className='options'>
                    <NavLink className="edit" to={`/project/${id}`} >
                        <FaEdit /> <span>Editar</span>
                    </NavLink>
                    <div className='trash__Fill' onClick={handleRemove}>
                        <BsFillTrashFill /> <span>Excluir</span>
                    </div>
                </div>
            </div>
    )
}
