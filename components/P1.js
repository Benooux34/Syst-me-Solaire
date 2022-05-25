import { OrbitControls, Html, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Header from "./Header"
import Model from "./Model"

function Loader() {
  const { progress } = useProgress()
  return <Html className="text-white" center>{progress} % loaded</Html>
}

function p1() {
  return (
    <div className="h-screen">
      <div className="h-[15%]">
        <Header />
      </div>
      <div className="h-[85%] sm:flex sm:justify-between sm:items-center">
        <div className="text-center sm:text-left sm:w-[50%] sm:ml-20 text-white">
          <span className="text-3xl font-light sm:text-5xl">Bienvenue dans notre</span>
          <h2 className="text-5xl sm:text-8xl mt-5 sm:mt-4">Système Solaire</h2>
          <button className="bg-white text-black mt-7 sm:mt-12 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-2xl sm:text-3xl cursor-pointer">Explorez !</button>
        </div>
        <div className="sm:w-[50%] h-[80%] sm:h-[100%]">
            <Canvas>
              <OrbitControls />
              <pointLight position={[10, 10, 10]} />
              <ambientLight intensity={0.2} />
              <Suspense fallback={<Loader />}>
                <Model />
              </Suspense>
            </Canvas>
        </div>
      </div>
    </div>
  )
}

export default p1