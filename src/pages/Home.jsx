import { useState, Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky.jsx';
import Bird from '../models/Bird.jsx';
import Plane from '../models/Plane.jsx';
import HomeInfo from '../components/HomeInfo.jsx';

const OptimizeScene = ({ isRotating, setIsRotating, setCurrentStage }) => {
    const [islandScale, setIslandScale] = useState([1, 1, 1]);
    const [islandPosition, setIslandPosition] = useState([0, -6.5, -43]);
    const [islandRotation, setIslandRotation] = useState([0.1, 4.7, 0]);
    const [planeScale, setPlaneScale] = useState([3, 3, 3]);
    const [planePosition, setPlanePosition] = useState([0, -4, -4]);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        setIslandScale(isMobile ? [0.9, 0.9, 0.9] : [1, 1, 1]);
        setPlaneScale(isMobile ? [1.5, 1.5, 1.5] : [3, 3, 3]);
        setPlanePosition(isMobile ? [0, -1.5, 0] : [0, -4, -4]);
    }, []);

    return (
        <>
            <Bird />
            <Sky isRotating={isRotating} />
            <Island
                position={islandPosition}
                scale={islandScale}
                rotation={islandRotation}
                isRotating={isRotating}
                setIsRotating={setIsRotating}
                setCurrentStage={setCurrentStage}
            />
            <Plane
                isRotating={isRotating}
                scale={planeScale}
                position={planePosition}
                rotation={[0, 20, 0]}
            />
        </>
    );
};

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>

            <Canvas
                gl={{ powerPreference: 'high-performance', antialias: false }}
                dpr={Math.min(window.devicePixelRatio, 2)}
                className={`w-full h-screen bg-transparent ${
                    isRotating ? 'cursor-grabbing' : 'cursor-grab'
                }`}
                camera={{ near: 0.1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <hemisphereLight intensity={0.75} groundColor="#000000" />
                    <OptimizeScene
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;
