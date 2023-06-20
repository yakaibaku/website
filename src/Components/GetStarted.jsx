import React from "react";
import banner from '../assets/yakainame.png'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const GetStarted = () => {
    return (
        <div class="card">
          <img src={banner} className="h-72 w-72 animate-pulse" alt="banner" />
        </div>
    )
}

export default GetStarted