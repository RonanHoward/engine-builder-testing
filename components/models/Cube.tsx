import { MeshProps, useFrame } from "@react-three/fiber"
import { FC, useRef } from "react"
import { useMouse } from "react-use";
import { Mesh } from "three";

interface props {
    mouseControls?: boolean;
}

export const Cube: FC<props> = ({mouseControls=false}) => {
    const mesh = useRef<Mesh>(null!)
    useFrame(() => (mesh.current.rotation.x += 0.01))
    return <mesh ref={mesh}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
        <meshStandardMaterial color={"orange"}/> 
    </mesh>
}
