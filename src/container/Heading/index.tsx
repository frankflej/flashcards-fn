import Button from "../../components/button"
import { headingProp } from "./headingTypes"
import { Link } from "react-router-dom"


export default function Heading({show}:headingProp) {

    return (
            <div className="heading ">
              <div className="flash">
               <Link to='/'> <p>Flashcard</p></Link>
                
              </div>
              <div>
                {show && <Link to='/create'><Button clickable="+ Create" /></Link>}
              </div>
            </div>
    )
  }
  