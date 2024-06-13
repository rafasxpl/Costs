import {Label} from '../Label/Label'
import './Select.modules.css'
export const Select = ({ name, options, handleOnChange }) => {
    return (
            <div>
                <Label name="select" text="Selecione a categoria"/>
                <select 
                name={name} 
                id={name} 
                defaultValue=""
                onChange={handleOnChange}>
                
                    <option selected >Selecione uma opção</option>
                    {
                        options.map((option) => (
                            <option value={option.id} key={option.id}>{option.nome}</option>
                        ))
                    }
                </select>
            </div>
    )
}