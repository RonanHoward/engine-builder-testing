import { useNumberManager } from "@/lib/hooks";
import { useFrame, useLoader } from "@react-three/fiber";
import { FC, useRef } from "react";
import { Group, Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { HalfBlock } from "./models/HalfBlock";

interface Props {
    together?: boolean;
    autoRotate?: boolean;
}

export const CompleteBlock: FC<Props> = (props) => {
    let half1 = useLoader(GLTFLoader, '/engine_block_1.glb').scene
    let half2 = half1.clone()

    let z: number[] = props.together ? [-1.66, 1.66] : [-0.6, 0.6]

    const z1 = useNumberManager(props.together ? -1.66 : -0.6, 1, 'cubic')
    const z2 = useNumberManager(props.together ? 1.66 : 0.6, 1, 'cubic')

    const groupRef = useRef<any>()
    useFrame(() => {
        if (props.autoRotate || true) {
            groupRef.current.rotation.y += 0.001
        }
    })

    return <group {...props} ref={groupRef}>
        <primitive
            position={[-4,-4,z1]}
            object={half1}
        />
        <primitive
            position={[-4,-4,z2]}
            rotation={[Math.PI,Math.PI,0]}
            object={half2}
            scale={-1}
        />
    </group>
}
