import "./TextField.css"

const TextField = (props) => {
    
    const inputField = `${props.placeholder}...`
    
    const changeHandler = (e) => {
        props.changed(e.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input userinfo={props.textField} onChange={changeHandler} type="text" placeholder={inputField} required={props.obri}/>
        </div>
    )
}

export default TextField