import './style.css'

export default function BotaoFilter({children, funcao, filtro}){
    return <button onClick={()=>funcao(filtro)} className={filtro}>{children}</button>
}