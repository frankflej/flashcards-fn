import { buttonProp } from "./buttonType"

export default function Button({clickable}:buttonProp) {
    return (
            <div className={`mybutton`}>
              <button>{clickable}</button>
            </div>
    )
  }
  