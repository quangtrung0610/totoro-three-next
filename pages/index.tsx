import type { NextPage } from "next";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import { Model } from "../components/Totoro";
import { Physics } from "@react-three/cannon";
import Ground from "../components/Ground";
import { FallenTree } from "../components/FallenTree";
import { Ground3 } from "../components/Ground3";
import { Tree } from "../components/Tree";
import { StylizedGround } from "../components/StylizedGround";

const Home: NextPage = () => {
	return (
			<Suspense fallback={null}>
				<Canvas
					shadows
					camera={{
						position: [50, 50, 50],
					}}
				>
					<ambientLight intensity={0.2} />
					<pointLight castShadow position={[50, 50, 20]} />
					<Sky sunPosition={[50, 50, 20]} />
					<Physics gravity={[0, -20, 0]}>
						<Ground />
						<StylizedGround
							position={[0, 0, 0]}
							rotation={[0, 0, -Math.PI / 100]}
						/>
						<Ground3 position={[0, -7, 0]} />
						<FallenTree position={[-49, 0.07, 10]} />
						<Tree position={[-15, 0, 0]} />
						<Model position={[0, 10, 0]} />
					</Physics>
					{/* <gridHelper args={[100, 20, `white`]} /> */}
					<OrbitControls />
				</Canvas>
			</Suspense>
	);
};

export default Home;
