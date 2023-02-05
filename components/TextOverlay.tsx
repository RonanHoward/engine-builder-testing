import { Dispatch, FC, SetStateAction, useState } from "react";

interface Props {
    canvasPushSetter: Dispatch<SetStateAction<string | undefined>>
}

export const TextOverlay: FC<Props> = ({ canvasPushSetter }) => {
    const [display, setDisplay] = useState(0)

    return <div className='textOverlay'>
        <div className={`firstTextContainer${display===0?'':' hide'}`}>
            <h1>engine-builder-v0</h1>
            <p>A development project by Ronan Howard and Turner Howard</p>
            <p>TODOS:</p>
            <ul>
                <li>Get more models</li>
                <li>Create advanced animations</li>
            </ul>
            <button onClick={()=>{
                setDisplay(1)
                canvasPushSetter('0')
            }}>Get Started</button>
        </div>
        <div className={`secondTextContainer${display===1?'':' hide'}`}>
            <h1>Debug Buttons:</h1>
            <button onClick={() => {
                setDisplay(0)
                canvasPushSetter('13vw')
            }}>reset display state</button>
        </div>
    </div>
}
