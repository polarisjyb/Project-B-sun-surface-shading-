import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import Random from 'canvas-sketch-util/random';
// import { Canvas } from '@react-three/fiber';

export function SpaceDust({ count }) {
  const mesh = useRef();
  const light = useRef();

  // Generate some random positions, speed factors and timings
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Random.range(0, 100);
      const factor = Random.range(30, 200);
      const speed = Random.range(0.01, 0.015) / 2;
      const x = Random.range(-100, 100);
      const y = Random.range(-100, 100);
      const z = Random.range(-100, 100);

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const SpaceDust = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    // Run through the randomized data to calculate some movement
    particles.forEach((particle, index) => {
      let { factor, speed, x, y, z } = particle;

      // Update the particle time
      const t = (particle.time += speed);

      // Update the particle position based on the time
      // This is mostly random trigonometry functions to oscillate around the (x, y, z) point
      SpaceDust.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 20,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 20,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 20
      );

      // Derive an oscillating value which will be used
      // for the particle size and rotation
      const s = Math.cos(t);
      SpaceDust.scale.set(s, s, s);
      SpaceDust.rotation.set(s * 5, s * 5, s * 5);
      SpaceDust.updateMatrix();

      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(index, SpaceDust.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#fff" sizeAttenuation= "true" />
      </instancedMesh>
    </>
  );
}