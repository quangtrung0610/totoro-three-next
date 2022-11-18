/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: nigromancer (https://sketchfab.com/nigromancer)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/ground-3-633a75725a804474a7195a00cbc6f53b
title: Ground 3
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
	nodes: {
		SM_Generic_Ground_03_SM_Generic_Ground_03_PolygonTown_01_A_0: THREE.Mesh;
	};
	materials: {
		SM_Generic_Ground_03_PolygonTown_01_A: THREE.MeshStandardMaterial;
	};
};

export function Ground3(props: JSX.IntrinsicElements["group"]) {
	//@ts-ignore
	const { nodes, materials } = useGLTF("/ground3.glb") as GLTFResult;
	return (
		<group {...props} dispose={null} scale={10}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						geometry={
							nodes.SM_Generic_Ground_03_SM_Generic_Ground_03_PolygonTown_01_A_0
								.geometry
						}
						material={materials.SM_Generic_Ground_03_PolygonTown_01_A}
					>
						
					</mesh>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/ground3.glb");