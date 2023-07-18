import { cardProp } from "./cardType"
import { FaEdit,FaTrash } from "react-icons/fa";

export default function Card({title,definition}:cardProp) {
    return (
      <div className="card">
         <div className="oneCard">
         <div className="frontSide ">
              <p>{title}</p>
          </div>
          <div className="backSide">
              <p>{definition}</p>
              <div className="icons">
                <FaTrash color='tomato'/>
                <FaEdit color='green'/>
              </div>
          </div>
         </div>
      </div>
    )
  }
  