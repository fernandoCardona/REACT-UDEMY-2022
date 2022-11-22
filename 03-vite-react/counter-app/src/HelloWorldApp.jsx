import { Fragment } from "react"
import { FirstApp } from "./components/FirstApp";


const newSaludo = 'Hola !! como estas?'
const obj = {
    name: 'Carolina',
    msg: 'Hola Hermano!'
}
export const HelloWorldApp = () => {
    
    return (
        <Fragment>
            <h1>{ newSaludo }</h1>
            <FirstApp name={ obj.name }  msg={ obj.msg } />
            {/* <h2>{ obj.name } { obj.msg }</h2> */}
            {/* <p>{ JSON.stringify( obj ) }</p> */}
        </Fragment>
    )
}


