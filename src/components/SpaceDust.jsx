import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import Random from 'canvas-sketch-util/random';
// import { Canvas } from '@react-three/fiber';

export function SpaceDust({ count }) {
  const mesh = useRef();
  const light = useRef();

  // 일부 입자의 랜덤 위치, 속도 요인 및 시간 요소 생성
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Random.range(0, 100);
      const factor = Random.range(50, 200);
      const speed = Random.range(0.01, 0.015) / 10;
      const x = Random.range(-50, 50);
      const y = Random.range(-50, 50);
      const z = Random.range(-50, 50);

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const SpaceDust = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    // 랜덤화된 입자 데이터를 실행하여 일부 이동
    particles.forEach((particle, index) => {
      let { factor, speed, x, y, z } = particle;

      // 입자 시간 조정
      const t = (particle.time += speed);

      // 시간을 기준으로 입자 위치 업데이트
      // (x, y, z) 지점 주위를 맴도는 임의의 삼각 함수
      SpaceDust.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 20,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 20,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 20
      );

      // 입자의 크기 및 회전
      const s = Math.cos(t);
      SpaceDust.scale.set(s, s, s);
      SpaceDust.rotation.set(s * 5, s * 5, s * 5);
      SpaceDust.updateMatrix();

      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(index, SpaceDust.matrix);
    });
    // 인스턴스 렌더링을 지원하는 meshs의 특수 메서드
    // 많은 수의 렌더링을 해야하는 경우 사용
    // 데이터 호출 수를 줄여 앱의 전반적인 렌더링 성능 향상
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={40} intensity={8} color="lightblue" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.3, 0]} />
        <meshPhongMaterial color="#fff" sizeAttenuation= "true" />
      </instancedMesh>
    </>
  );
};

/*
  <pointLight> - 한 지점에서 모든 방향으로 방출되는 빛
  이 메서드는 그림자를 드리울 수 있다.

  <dodecahedronGeometry> - 십이면체기하학
  * 십이면체 기하 도형을 생성하기 위한 클래스
  매개변수로는 (반지름(부동 소수점), 세부 면 분할)
*/