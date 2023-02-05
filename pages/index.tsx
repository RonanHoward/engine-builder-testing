import styles from '@/styles/Home.module.scss'
// three/fiber
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { CompleteBlock } from '@/components/CompleteBlock'
import { useState } from 'react'
import { TextOverlay } from '@/components/TextOverlay'


// main app
export default function Home() {
    const testFunction = () => {
        setTogether(together ? false : true)
    }
    const moveCanvas = () => {
        if (pushCanvas) {
            setPushCanvas(undefined)
            return
        }
        setPushCanvas('13vw')
    }

    const [together, setTogether] = useState(false)

    const [pushCanvas, setPushCanvas] = useState<string | undefined>('13vw')

    return <main>
        <Canvas style={{height:'100vh',marginLeft:pushCanvas}} camera={{position:[3,3,-3]}} id='builder-canvas'>
            <ambientLight intensity={1} />
            {/* lights */}
            <directionalLight color="white" position={[5, 0, 5]} />
            <directionalLight color="white" position={[0, 5, -5]} />
            <directionalLight color="white" position={[5, -5, 0]} />
            <directionalLight color="white" position={[-5, -5, 0]} />
            <directionalLight color="white" position={[-5, 0, -5]} />

            {/* geometry */}
            <CompleteBlock together={together} />

            {/* controls */}
            <OrbitControls enablePan={false} enableZoom={false} />
        </Canvas>
        <TextOverlay canvasPushSetter={setPushCanvas} />

        <div className='testOverlay'>
            <button className='bottom right' onClick={testFunction}>TOGETHER</button>
            <button className='bottom left' onClick={moveCanvas}>MOVE CANVAS</button>
        </div>
    </main>
}
