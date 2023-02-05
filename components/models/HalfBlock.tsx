import { FC, Suspense, useRef } from "react";
import { ThreeElements, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF } from "@react-three/drei";

interface Props {
    position?: number[];
}

export const HalfBlock: FC<Props> = ({position=[-4,-4,-3]}) => {
    const { scene } = useLoader(GLTFLoader, '/engine_block_1.glb')
    return <primitive position={position} object={ scene } />
}
