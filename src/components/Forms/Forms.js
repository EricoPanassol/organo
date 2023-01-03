import Button from '../Button/Button';
import DropdownList from '../DropdownList/DropdownList';
import TextField from '../TextField/TextField';
import { useState } from "react"
import "./Forms.css"

const Forms = (props) => {

    const [name, setName] = useState("")
    const [cargo, setCargo] = useState("")
    const [img, setImg] = useState("")
    const [team, setTeam] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.aoColaboradorCadastrado({
            name, 
            cargo, 
            img, 
            team
        })
        setName("");
        setCargo("");
        setImg("");
        setTeam("");
        
        
    }

    return (
        <section className='forms'>
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <TextField 
                    obri={true}
                    label="Nome"   
                    placeholder="Digite seu nome" 
                    userinfo={name}
                    changed={userinfo => setName(userinfo)}
                />

                <TextField 
                    obri={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    userinfo={cargo}
                    changed={userinfo => setCargo(userinfo)}
                />

                <TextField
                    label="Imagem" 
                    placeholder="Digite o endereço da img"
                    userinfo={img}
                    changed={userinfo => setImg(userinfo)}
                 />

                <DropdownList 
                    obri={true}
                    label="Time" 
                    itens={props.teams} 
                    userinfo={team}
                    changed={userinfo => setTeam(userinfo)}
                />

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Forms
