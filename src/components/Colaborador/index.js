import "./Colaborador.css"

const Colaborador = (props) => {

    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src={props.img} alt={props.name}/>
            </div>
            <div className="rodape">
                <h4>{props.name}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador