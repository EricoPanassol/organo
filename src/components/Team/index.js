import Colaborador from "../Colaborador"
import "./Team.css"

const Team = (props) => {

    return (
        (props.colaboradores.length > 0) && <section className="team" style={{ backgroundColor: props.secondColor }}>
            <h3 style={{ borderColor: props.primeColor }}>{props.name}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador 
                                                        key={colaborador.name} 
                                                        name={colaborador.name} 
                                                        cargo={colaborador.cargo} 
                                                        img={colaborador.img}
                                                        />)}
            </div>
        </section>
    )
}

export default Team