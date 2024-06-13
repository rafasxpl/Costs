import './Label.modules.css'

export const Label = ({name, text}) => {
    return (
        <>
            <label htmlFor={name}>{text}</label>
        </>
        )
}