import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import Model from '../components/Model'
import { Html, OrbitControls, useProgress } from '@react-three/drei'


function Loader() {
    const { progress } = useProgress()
    return <Html className="text-white" center>{progress} % loaded</Html>
}

function earth() {

    const transition = { duration: 2, ease: [0.6, 0.01, -0.05, 0.9] };

  return (
    <div className="overflow-hidden">
        <motion.div       
            initial='initial'
            animate='animate'
            exit='exit'
        >
            <motion.div className='h-screen'
                initial={{
                    x: '100%',
                    y: '0%',
                }}
                animate={{
                    x: '4%',
                    y: '-5%',
                    transition: {delay: 0.5, ...transition}
                }}
            >
                <Canvas camera={{ position: [ 8, 0, 0 ] }}>
                    <pointLight position={[10, 10, 10]} />
                    <ambientLight intensity={0.2} />
                    <OrbitControls />
                    <Suspense fallback={<Loader />}>
                        <Model />
                    </Suspense>
                </Canvas>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default earth