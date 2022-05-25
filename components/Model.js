import React, { useEffect } from 'react'

import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model() {
  
    const gltf = useLoader(GLTFLoader, '/earth/scene.gltf')

    useEffect(() => {
        gltf.scene.scale.set(0.03, 0.03, 0.03)
        gltf.scene.position.set(0.7, -0.7, 0.5)
    }, [gltf])

    useFrame(({ clock }) => {
        gltf.scene.rotation.y = clock.getElapsedTime() * 0.05
    })

    return <primitive object={gltf.scene} />
}

export default Model