import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations} from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

import birdScene from '../assets/3d/bird.glb';

export function Bird() {
    const birdRef = useRef();

    // Carga el modelo 3D y las animaciones del archivo GLTF
    const { scene, animations } = useGLTF(birdScene);

    // Accede a las animaciones para el ave
    const { actions } = useAnimations(animations, birdRef);

    // Reproduce la animacion 'Take 001' cuando monta el componente.
    // Los nombres de las animaciones se encuentran donde esta el modelo en Sketchfab
    useEffect(() => {
      actions['Take 001'].play();
    }, []);

    useFrame(({clock, camera}) => {
        // Actualiza la posicion Y para simular el vuelo del ave en forma de ola (wave)
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;
        // Chequea si el ave llego a cierto punto relativo en la camara
        if (birdRef.current.position.x > camera.position.x + 10) {
         // Cambia la direccion hacia atras y tora el ave 180 grados en las axis de Y   
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
         // Cambia la direccion hacia delante y resetea la rotacion del ave   
            birdRef.current.rotation.y = 0;
        }

         // Actualiza las posiciones X, Z basado en la direccion
        if (birdRef.current.rotation.y === 0) {
         // Se mueve hacia delante  
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
         // Se mueve hacia atras    
            birdRef.current.position.x -= 0.01
            birdRef.current.position.z += 0.01;
        }
    });

    return (
      // Para crear y mostrar objetos 3D  
      <mesh 
        position={[-5, 2, 1]}
        scale={[0.003, 0.003, 0.003]}
        ref={birdRef}
      >
        // Se usa el elemento primitive cuando queres envestir un modelo complejo en 3D o scena.
        <primitive object={scene} />
      </mesh>
    )
}

export default Bird