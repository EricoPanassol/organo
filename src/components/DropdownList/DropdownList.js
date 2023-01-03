import "./DropdownList.css"

const DropdownList = (props) => {    
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select defaultValue={"DEFAULT"} onChange={e => props.changed(e.target.value)} required={props.obri} userinfo={props.userInput}>
               <option disabled value={"DEFAULT"}>Selecione uma opção</option>
               {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList