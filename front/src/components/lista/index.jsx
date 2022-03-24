export default function Lista({listaDeNomesDeFrutas}){
    return <ul>
        {listaDeNomesDeFrutas.map((nome, index)=> <li key={index}>{nome}</li>)}
    </ul>
}