import './Container.modules.css'
export default function Container({children}) {
    return (
        <main className="container">
            {children}
        </main>
    )
}