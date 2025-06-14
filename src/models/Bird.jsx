import { useRef, useEffect } from "react";
import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        if (actions['Take 001']) {
            actions['Take 001'].play();
        }
    }, [actions]);

    useFrame(({ clock, camera }) => {
        const bird = birdRef.current;
        if (!bird) return;

        bird.position.y = Math.sin(clock.elapsedTime * 2) * 0.2 + 2; // faster vertical bounce

        const leftBound = camera.position.x - 10;
        const rightBound = camera.position.x + 10;

        if (bird.position.x > rightBound) {
            bird.rotation.y = Math.PI;
        } else if (bird.position.x < leftBound) {
            bird.rotation.y = 0;
        }

        const speed = 0.03; // increased speed

        if (bird.rotation.y === 0) {
            bird.position.x += speed;
            bird.position.z -= speed;
        } else {
            bird.position.x -= speed;
            bird.position.z += speed;
        }
    });

    return (
        <primitive
            object={scene}
            ref={birdRef}
            position={[-5, 2, 1]}
            scale={[0.003, 0.003, 0.003]}
        />
    );
};

export default Bird;
