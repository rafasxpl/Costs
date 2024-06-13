import './Input.modules.css'

export const Input = ({type, name, placeholder, min, handleOnChange, autoComplete}) => {

    return (
    <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        autoComplete={autoComplete}
        min={min}>
        
    </input>
    )
}