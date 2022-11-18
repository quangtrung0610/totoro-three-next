import React, { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, ThreeElements, useLoader  } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Box = (props: ThreeElements["mesh"]) => {
	const myBox = useRef<THREE.Mesh>(null!);
	const [active, setActive] = useState(false);

	// useFrame((state, delta) => {
	// 	if (myBox.current.position.x < 4.45 && myBox.current.position.z < 4.45) {
	// 		myBox.current.position.x += 0.05;
	// 	}
	// 	if (myBox.current.position.x > 4.45 && myBox.current.position.z < 4.45) {
	// 		myBox.current.position.z += 0.05;
	// 	}
	// });
	return (
		<mesh
			{...props}
			ref={myBox}
			// scale={active ? 1.5 : 1}
			// onClick={() => setActive(!active)}
		>
			<primitive object={new THREE.AxesHelper(2)} />
			<boxGeometry args={[1, 1, 1]} />
			<meshNormalMaterial />
		</mesh>
	);
};

export default Box;
