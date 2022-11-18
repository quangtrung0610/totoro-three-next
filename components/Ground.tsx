import { usePlane } from "@react-three/cannon";
import React from "react";
import * as THREE from "three";

const Ground = () => {
	const [ref] = usePlane<THREE.Mesh>(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [0, 0, 0],
	}));
	return (
		<mesh ref={ref} receiveShadow>
			<planeGeometry attach="geometry" args={[20, 20]} />
			<meshStandardMaterial attach="material" color="#60864c" />
		</mesh>
	);
};

export default Ground;
