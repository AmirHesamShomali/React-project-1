import { useContext } from "react"
import { TestContext } from "./Context";


export const Item=(props)=>
{
     const context = useContext(TestContext);

     const handeledelete=(e)=>
     {
        // alert(e.target.innerHTML)
        context.setarray(context.Array.filter(t=> t!=e.target.innerHTML))
     }
    return(
        <div className="time_item"onClick={handeledelete}>
            {props.children}

        </div>
    )
}