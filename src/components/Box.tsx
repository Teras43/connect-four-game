import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import img from "../assets/images/title-splash.webp";

/** Types */

type Props = {
  position: [number, number, number],
}

/** Component */

const Box = (props: Props) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);
  const texture = useMemo(() => new THREE.TextureLoader().load(img), []);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
      onClick={() => setActive(!active)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" transparent side={THREE.DoubleSide}>
        <primitive attach="map" object={texture} />
      </meshBasicMaterial>
    </mesh>
  );
}

/** Exports */

export default Box
