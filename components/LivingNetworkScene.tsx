"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";
import { projects } from "../data/portfolio";

type SceneProps = {
  activeId: string;
  onSelect: (id: string) => void;
  reducedMotion: boolean;
};

function Signal({
  start,
  end,
  color,
  active,
  offset,
  reducedMotion,
}: {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
  active: boolean;
  offset: number;
  reducedMotion: boolean;
}) {
  const pulse = useRef<Mesh>(null);
  const vectorStart = useMemo(() => new THREE.Vector3(...start), [start]);
  const vectorEnd = useMemo(() => new THREE.Vector3(...end), [end]);

  useFrame(({ clock }) => {
    if (!pulse.current || reducedMotion) return;
    const t = (clock.elapsedTime * (active ? 0.58 : 0.3) + offset) % 1;
    pulse.current.position.lerpVectors(vectorStart, vectorEnd, t);
  });

  return (
    <>
      <Line
        points={[start, end]}
        color={color}
        transparent
        opacity={active ? 0.82 : 0.18}
        lineWidth={active ? 1.7 : 0.8}
      />
      <mesh ref={pulse} position={start}>
        <sphereGeometry args={[active ? 0.075 : 0.045, 10, 10]} />
        <meshBasicMaterial color={color} toneMapped={false} />
      </mesh>
    </>
  );
}

function ProjectNode({
  id,
  color,
  position,
  active,
  onSelect,
  reducedMotion,
}: {
  id: string;
  color: string;
  position: [number, number, number];
  active: boolean;
  onSelect: (id: string) => void;
  reducedMotion: boolean;
}) {
  const group = useRef<Group>(null);
  const ring = useRef<Mesh>(null);

  useFrame(({ clock }, delta) => {
    if (!group.current || reducedMotion) return;
    const target = active ? 1.3 : 1;
    const next = THREE.MathUtils.damp(group.current.scale.x, target, 5, delta);
    group.current.scale.setScalar(next);
    if (ring.current) ring.current.rotation.z = clock.elapsedTime * 0.78;
  });

  return (
    <group ref={group} position={position}>
      <Float speed={reducedMotion ? 0 : 1.7} rotationIntensity={0.22} floatIntensity={0.38}>
        <mesh
          onClick={(event) => {
            event.stopPropagation();
            onSelect(id);
          }}
          onPointerEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            document.body.style.cursor = "default";
          }}
        >
          <icosahedronGeometry args={[0.38, 2]} />
          <meshStandardMaterial
            color={active ? color : "#16223b"}
            emissive={color}
            emissiveIntensity={active ? 2.3 : 0.42}
            roughness={0.3}
            metalness={0.65}
          />
        </mesh>
        <mesh ref={ring} rotation={[Math.PI / 2.3, 0, 0]}>
          <torusGeometry args={[0.62, 0.012, 8, 72]} />
          <meshBasicMaterial color={color} transparent opacity={active ? 0.95 : 0.36} />
        </mesh>
      </Float>
    </group>
  );
}

function CameraRig({ reducedMotion }: { reducedMotion: boolean }) {
  const { camera, pointer } = useThree();
  useFrame((_, delta) => {
    if (reducedMotion) return;
    // Three.js camera transforms are intentionally imperative inside the render loop.
    // eslint-disable-next-line react-hooks/immutability
    camera.position.x = THREE.MathUtils.damp(camera.position.x, pointer.x * 0.45, 3.5, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, pointer.y * 0.3, 3.5, delta);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Network({ activeId, onSelect, reducedMotion }: SceneProps) {
  const network = useRef<Group>(null);
  const core = useRef<Group>(null);
  const { size } = useThree();
  const networkScale = size.width < 700 ? 0.66 : 1;

  useFrame(({ clock }, delta) => {
    if (!network.current || reducedMotion) return;
    network.current.rotation.y = THREE.MathUtils.damp(
      network.current.rotation.y,
      Math.sin(clock.elapsedTime * 0.34) * 0.15,
      2,
      delta,
    );
    network.current.rotation.z = THREE.MathUtils.damp(
      network.current.rotation.z,
      Math.sin(clock.elapsedTime * 0.22) * 0.025,
      2,
      delta,
    );
    if (core.current) {
      const corePulse = 1 + Math.sin(clock.elapsedTime * 1.6) * 0.04;
      core.current.scale.setScalar(corePulse);
      core.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={network} scale={networkScale}>
      <ambientLight intensity={0.3} />
      <pointLight position={[2, 4, 5]} color="#e8f4ff" intensity={20} distance={16} />
      <pointLight position={[-4, -3, 2]} color="#ff4fd8" intensity={10} distance={12} />
      <Sparkles count={70} scale={[9, 7, 4]} size={1.4} speed={reducedMotion ? 0 : 0.48} opacity={0.38} color="#8fbdff" />

      {projects.map((project, index) => (
        <Signal
          key={`signal-${project.id}`}
          start={[0, 0, 0]}
          end={project.position}
          color={project.color}
          active={project.id === activeId}
          offset={index * 0.17}
          reducedMotion={reducedMotion}
        />
      ))}

      <Float speed={reducedMotion ? 0 : 1.1} rotationIntensity={0.12} floatIntensity={0.22}>
        <group ref={core}>
          <mesh>
            <sphereGeometry args={[0.8, 48, 48]} />
            <meshStandardMaterial
              color="#eaf6ff"
              emissive="#5aa7ff"
              emissiveIntensity={0.65}
              roughness={0.15}
              metalness={0.1}
            />
          </mesh>
          <mesh>
            <sphereGeometry args={[1.08, 32, 32]} />
            <meshBasicMaterial color="#35d7ff" transparent opacity={0.055} side={THREE.BackSide} />
          </mesh>
          <mesh rotation={[1.22, 0.2, 0.3]}>
            <torusGeometry args={[1.2, 0.015, 8, 100]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.42} />
          </mesh>
        </group>
      </Float>

      {projects.map((project) => (
        <ProjectNode
          key={project.id}
          {...project}
          active={project.id === activeId}
          onSelect={onSelect}
          reducedMotion={reducedMotion}
        />
      ))}
      <CameraRig reducedMotion={reducedMotion} />
    </group>
  );
}

export default function LivingNetworkScene(props: SceneProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8.4], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Network {...props} />
    </Canvas>
  );
}
