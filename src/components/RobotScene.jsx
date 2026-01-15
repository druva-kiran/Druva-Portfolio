import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera, HemisphereLight, DirectionalLight } from '@react-three/drei';

function RobotModel() {
  const { scene } = useGLTF('../../public/robot.glb'); // path to your GLB in public folder
  return <primitive object={scene} />;
}

export default function RobotScene() {
  return (
    <Canvas shadows>
      {/* Camera */}
      <PerspectiveCamera makeDefault fov={45} near={70} far={100000} position={[171.9, 6.01, -15.58]} />
      
      {/* Lights */}
      <HemisphereLight intensity={0.75} color="#eaeaea" />
      <DirectionalLight position={[-140.94, -150, 44.92]} intensity={0.44} castShadow />
      <DirectionalLight position={[-133.78, -150, -203.22]} intensity={1.77} castShadow />
      <DirectionalLight position={[140.94, 150, 203.22]} intensity={0.29} castShadow />
      
      {/* Controls */}
      <OrbitControls enableDamping dampingFactor={0.125} />

      {/* Robot Model */}
      <RobotModel />
    </Canvas>
  );
}
