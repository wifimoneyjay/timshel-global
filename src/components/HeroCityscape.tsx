"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/* ─── BUILDING GENERATOR ─── */
function generateBuildings() {
  const buildings: {
    x: number;
    z: number;
    w: number;
    d: number;
    h: number;
    type: number;
  }[] = [];

  // Dense grid — 120 buildings across a large area
  const gridSize = 12;
  const spacing = 4.2;

  for (let gx = -gridSize; gx <= gridSize; gx++) {
    for (let gz = -gridSize; gz <= gridSize; gz++) {
      // Skip some cells for roads/gaps
      if (Math.random() < 0.15) continue;

      const x = gx * spacing + (Math.random() - 0.5) * 1.5;
      const z = gz * spacing + (Math.random() - 0.5) * 1.5;
      const distFromCenter = Math.sqrt(x * x + z * z);

      // Taller buildings near center (downtown effect)
      const centerBonus = Math.max(0, 1 - distFromCenter / 30);
      const baseHeight = 1 + Math.random() * 4;
      const h = baseHeight + centerBonus * 12 + Math.random() * centerBonus * 8;

      const w = 1.2 + Math.random() * 1.8;
      const d = 1.2 + Math.random() * 1.8;
      const type = Math.floor(Math.random() * 6);

      buildings.push({ x, z, w, d, h, type });
    }
  }

  return buildings;
}

/* ─── WIREFRAME BUILDING MESH ─── */
function WireframeBuilding({
  x, z, w, d, h, type,
}: {
  x: number; z: number; w: number; d: number; h: number; type: number;
}) {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices: number[] = [];

    const hw = w / 2;
    const hd = d / 2;

    // Helper to add a line segment
    const addLine = (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) => {
      vertices.push(x1, y1, z1, x2, y2, z2);
    };

    // Main building edges (12 edges of a box)
    // Bottom face
    addLine(-hw, 0, -hd, hw, 0, -hd);
    addLine(hw, 0, -hd, hw, 0, hd);
    addLine(hw, 0, hd, -hw, 0, hd);
    addLine(-hw, 0, hd, -hw, 0, -hd);
    // Top face
    addLine(-hw, h, -hd, hw, h, -hd);
    addLine(hw, h, -hd, hw, h, hd);
    addLine(hw, h, hd, -hw, h, hd);
    addLine(-hw, h, hd, -hw, h, -hd);
    // Vertical edges
    addLine(-hw, 0, -hd, -hw, h, -hd);
    addLine(hw, 0, -hd, hw, h, -hd);
    addLine(hw, 0, hd, hw, h, hd);
    addLine(-hw, 0, hd, -hw, h, hd);

    // Floor plates (horizontal lines every 1.5 units)
    const floorSpacing = 1.2 + Math.random() * 0.6;
    for (let y = floorSpacing; y < h - 0.3; y += floorSpacing) {
      // Front and back
      addLine(-hw, y, -hd, hw, y, -hd);
      addLine(-hw, y, hd, hw, y, hd);
      // Left and right
      addLine(-hw, y, -hd, -hw, y, hd);
      addLine(hw, y, -hd, hw, y, hd);
    }

    // Window mullion verticals (between floors on front/back faces)
    if (type !== 3) { // Skip for some variety
      const mullionCount = Math.floor(w / 0.8);
      for (let i = 1; i < mullionCount; i++) {
        const mx = -hw + (w * i) / mullionCount;
        // Front face mullions
        addLine(mx, 0, -hd, mx, h, -hd);
        // Back face mullions (less detail for perf)
        if (type < 3) addLine(mx, 0, hd, mx, h, hd);
      }
    }

    // Side face mullions
    if (type < 4) {
      const sideMullions = Math.floor(d / 1.0);
      for (let i = 1; i < sideMullions; i++) {
        const mz = -hd + (d * i) / sideMullions;
        addLine(-hw, 0, mz, -hw, h, mz);
        if (type < 2) addLine(hw, 0, mz, hw, h, mz);
      }
    }

    // Type-specific details
    if (type === 0 && h > 8) {
      // Spire/antenna on tall buildings
      addLine(0, h, 0, 0, h + 2.5, 0);
      addLine(-0.3, h, -0.3, 0, h + 2.5, 0);
      addLine(0.3, h, -0.3, 0, h + 2.5, 0);
      addLine(0.3, h, 0.3, 0, h + 2.5, 0);
      addLine(-0.3, h, 0.3, 0, h + 2.5, 0);
    }

    if (type === 1 && h > 6) {
      // Stepped setback at 60% height
      const setbackH = h * 0.6;
      const inset = 0.4;
      addLine(-hw + inset, setbackH, -hd + inset, hw - inset, setbackH, -hd + inset);
      addLine(hw - inset, setbackH, -hd + inset, hw - inset, setbackH, hd - inset);
      addLine(hw - inset, setbackH, hd - inset, -hw + inset, setbackH, hd - inset);
      addLine(-hw + inset, setbackH, hd - inset, -hw + inset, setbackH, -hd + inset);
      // Vertical setback edges
      addLine(-hw + inset, setbackH, -hd + inset, -hw + inset, h, -hd + inset);
      addLine(hw - inset, setbackH, -hd + inset, hw - inset, h, -hd + inset);
      addLine(hw - inset, setbackH, hd - inset, hw - inset, h, hd - inset);
      addLine(-hw + inset, setbackH, hd - inset, -hw + inset, h, hd - inset);
    }

    if (type === 2 && h > 5) {
      // Cross-bracing on one face
      addLine(-hw, 0, -hd, hw, h * 0.5, -hd);
      addLine(hw, 0, -hd, -hw, h * 0.5, -hd);
      addLine(-hw, h * 0.5, -hd, hw, h, -hd);
      addLine(hw, h * 0.5, -hd, -hw, h, -hd);
    }

    if (type === 4 && h > 4) {
      // Rooftop structure (mechanical penthouse)
      const rw = hw * 0.5;
      const rd = hd * 0.5;
      const rh = 1.2;
      addLine(-rw, h, -rd, rw, h, -rd);
      addLine(rw, h, -rd, rw, h, rd);
      addLine(rw, h, rd, -rw, h, rd);
      addLine(-rw, h, rd, -rw, h, -rd);
      addLine(-rw, h + rh, -rd, rw, h + rh, -rd);
      addLine(rw, h + rh, -rd, rw, h + rh, rd);
      addLine(rw, h + rh, rd, -rw, h + rh, rd);
      addLine(-rw, h + rh, rd, -rw, h + rh, -rd);
      addLine(-rw, h, -rd, -rw, h + rh, -rd);
      addLine(rw, h, -rd, rw, h + rh, -rd);
      addLine(rw, h, rd, rw, h + rh, rd);
      addLine(-rw, h, rd, -rw, h + rh, rd);
    }

    if (type === 5) {
      // Construction crane
      const craneH = h + 3;
      addLine(0, h, 0, 0, craneH, 0);
      addLine(0, craneH, 0, 2.5, craneH, 0);
      addLine(0, craneH, 0, -1, craneH, 0);
      addLine(2.5, craneH, 0, 2.5, craneH - 0.3, 0);
      // Cable from crane tip
      addLine(2.5, craneH, 0, 2.0, h, 0);
    }

    geo.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    return geo;
  }, [w, d, h, type]);

  return (
    <lineSegments position={[x, 0, z]} geometry={geometry}>
      <lineBasicMaterial color="#4a90d9" transparent opacity={0.2} />
    </lineSegments>
  );
}

/* ─── GROUND GRID ─── */
function GroundGrid() {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const size = 60;
    const divisions = 80;
    const step = (size * 2) / divisions;

    for (let i = -size; i <= size; i += step) {
      vertices.push(-size, -0.01, i, size, -0.01, i);
      vertices.push(i, -0.01, -size, i, -0.01, size);
    }

    geo.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
    return geo;
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#4a90d9" transparent opacity={0.06} />
    </lineSegments>
  );
}

/* ─── SCENE ─── */
function CityScene() {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();
  const timeRef = useRef(0);

  const buildings = useMemo(() => generateBuildings(), []);

  // Set initial camera
  useEffect(() => {
    camera.position.set(30, 35, 30);
    camera.lookAt(0, 5, 0);
  }, [camera]);

  useFrame((_, delta) => {
    timeRef.current += delta;
    const t = timeRef.current;

    // Slow orbit — smooth one-directional drift
    const radius = 42;
    const speed = 0.03;
    const angle = t * speed;

    camera.position.x = Math.cos(angle) * radius;
    camera.position.z = Math.sin(angle) * radius;
    camera.position.y = 32 + Math.sin(t * 0.05) * 3;

    camera.lookAt(0, 5, 0);
  });

  return (
    <group ref={groupRef}>
      <GroundGrid />
      {buildings.map((b, i) => (
        <WireframeBuilding key={i} {...b} />
      ))}

      {/* Atmospheric fog-like fade — subtle accent glow at ground level */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[120, 120]} />
        <meshBasicMaterial color="#4a90d9" transparent opacity={0.02} />
      </mesh>
    </group>
  );
}

/* ─── MAIN COMPONENT ─── */
export default function HeroCityscape() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ fov: 45, near: 0.5, far: 200 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={["#08081a", 30, 85]} />
        <CityScene />
      </Canvas>

      {/* Bottom fade to blend into content */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #08081a 0%, transparent 100%)",
        }}
      />

      {/* Center darkening so text pops */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center 60%, rgba(8,8,26,0.55) 0%, rgba(8,8,26,0.3) 40%, rgba(8,8,26,0.7) 100%)",
        }}
      />
    </div>
  );
}
