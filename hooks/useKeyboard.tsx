import { useCallback, useEffect, useState } from "react";


const actionByKey = (key: any) => {
	const keyActionMap: any = {
		KeyW: "moveForward",
		KeyS: "moveBackward",
		KeyA: "moveLeft",
		KeyD: "moveRight",
		Space: "jump",
	};
	return keyActionMap[key];
};

export const useKeyboard = () => {
	const [actions, setActions] = useState({
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
		jump: false,
	});

	const handleKeydown = useCallback((e: any) => {
		const action = actionByKey(e.code);
		if (action) {
			setActions((prev) => {
				return { ...prev, [action]: true };
			});
		}
	}, []);
	const handleKeyup = useCallback((e: any) => {
		const action = actionByKey(e.code);
		if (action) {
			setActions((prev) => {
				return { ...prev, [action]: false };
			});
		}
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", handleKeydown);
		document.addEventListener("keyup", handleKeyup);
		// return () => {
		// 	document.removeEventListener("keydown", handleKeydown);
		// 	document.removeEventListener("keyup", handleKeyup);
		// };
	}, [handleKeydown, handleKeyup]);

	return actions;
};
