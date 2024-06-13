import {Routes, Route} from 'react-router-dom';
import {Home} from '../pages/Home/Home'
import {Company} from '../pages/Company/Company'
import {Contato} from '../pages/Contato/Contato'
import {NewProject} from '../pages/NovoProjeto/NewProject';
import {Projects} from '../pages/Projeto/Projects'
import {Project} from '../pages/Edit_Project/editProject';

export const Rotas = () => {
    return (
        <>
            <Routes>
                <Route path='/' index element={<Home />} />
                <Route path='/company' element={<Company />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/newProject' element={<NewProject/>} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/project/:id' element={<Project />} />
            </Routes>
        </>
    )
}