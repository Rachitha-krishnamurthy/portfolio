"use client";

import {
  Canvas,
  useFrame,
  useThree,
} from "@react-three/fiber";

import {
  Float,
  Sparkles,
} from "@react-three/drei";

import * as THREE from "three";

import {
  useEffect,
  useRef,
  useState,
} from "react";


/* =========================================================
   MAIN 3D CORE
   ========================================================= */

function Core() {
  const group =
    useRef<THREE.Group>(null);

  const { pointer } =
    useThree();

  useFrame((state, delta) => {
    if (!group.current) {
      return;
    }

    const t =
      state.clock.elapsedTime;

    /*
     * Continuous rotation
     */

    group.current.rotation.y +=
      delta * 0.16;

    /*
     * Mouse interaction
     */

    group.current.rotation.x =
      THREE.MathUtils.damp(
        group.current.rotation.x,
        pointer.y * 0.22,
        3,
        delta
      );

    group.current.rotation.z =
      THREE.MathUtils.damp(
        group.current.rotation.z,
        -pointer.x * 0.16,
        3,
        delta
      );

    /*
     * Very subtle breathing
     */

    const scale =
      1 +
      Math.sin(t * 1.5) *
        0.025;

    group.current.scale.setScalar(
      scale
    );
  });

  return (
    <group ref={group}>

      {/* =================================================
          MAIN 3D OBJECT
      ================================================= */}

      <mesh>
        <icosahedronGeometry
          args={[1.65, 4]}
        />

        <meshStandardMaterial
          color="#111b32"
          emissive="#164fa3"
          emissiveIntensity={1.4}
          metalness={0.8}
          roughness={0.22}
        />
      </mesh>


      {/* =================================================
          INNER GLOWING CORE
      ================================================= */}

      <mesh scale={0.72}>
        <sphereGeometry
          args={[1, 64, 64]}
        />

        <meshStandardMaterial
          color="#09152b"
          emissive="#2577ff"
          emissiveIntensity={2.5}
          metalness={0.35}
          roughness={0.18}
        />
      </mesh>


      {/* =================================================
          OUTER WIREFRAME
      ================================================= */}

      <mesh scale={1.04}>
        <icosahedronGeometry
          args={[1.7, 2]}
        />

        <meshBasicMaterial
          color="#69cfff"
          wireframe
          transparent
          opacity={0.32}
        />
      </mesh>


      {/* =================================================
          ORBIT 1
      ================================================= */}

      <mesh
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <torusGeometry
          args={[
            2.45,
            0.014,
            12,
            180,
          ]}
        />

        <meshBasicMaterial
          color="#5ce6ff"
          transparent
          opacity={0.75}
        />
      </mesh>


      {/* =================================================
          ORBIT 2
      ================================================= */}

      <mesh
        rotation={[
          0.8,
          0.4,
          0.25,
        ]}
      >
        <torusGeometry
          args={[
            2.85,
            0.01,
            12,
            180,
          ]}
        />

        <meshBasicMaterial
          color="#7198ff"
          transparent
          opacity={0.45}
        />
      </mesh>


      {/* =================================================
          ORBIT 3
      ================================================= */}

      <mesh
        rotation={[
          0.2,
          1.15,
          0.8,
        ]}
      >
        <torusGeometry
          args={[
            3.2,
            0.007,
            12,
            180,
          ]}
        />

        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.22}
        />
      </mesh>


      {/* =================================================
          FLOATING POINTS
      ================================================= */}

      <mesh
        position={[
          2.1,
          1.1,
          0,
        ]}
      >
        <sphereGeometry
          args={[
            0.055,
            24,
            24,
          ]}
        />

        <meshBasicMaterial
          color="#5ce6ff"
        />
      </mesh>


      <mesh
        position={[
          -2.2,
          -1,
          0.5,
        ]}
      >
        <sphereGeometry
          args={[
            0.045,
            24,
            24,
          ]}
        />

        <meshBasicMaterial
          color="#80aaff"
        />
      </mesh>


      <mesh
        position={[
          1.3,
          -1.8,
          0,
        ]}
      >
        <sphereGeometry
          args={[
            0.04,
            24,
            24,
          ]}
        />

        <meshBasicMaterial
          color="#ffffff"
        />
      </mesh>

    </group>
  );
}


/* =========================================================
   3D WORLD
   ========================================================= */

function SceneWorld({
  progress,
}: {
  progress: number;
}) {
  const group =
    useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) {
      return;
    }

    /*
     * Keep the 3D object visible.
     *
     * It subtly changes position while
     * scrolling but NEVER disappears.
     */

    const targetX =
      THREE.MathUtils.lerp(
        2.1,
        -0.7,
        progress
      );

    const targetY =
      THREE.MathUtils.lerp(
        0.3,
        -0.4,
        progress
      );

    const targetZ =
      THREE.MathUtils.lerp(
        0,
        -1.2,
        progress
      );

    group.current.position.x =
      THREE.MathUtils.damp(
        group.current.position.x,
        targetX,
        2.5,
        delta
      );

    group.current.position.y =
      THREE.MathUtils.damp(
        group.current.position.y,
        targetY,
        2.5,
        delta
      );

    group.current.position.z =
      THREE.MathUtils.damp(
        group.current.position.z,
        targetZ,
        2.5,
        delta
      );
  });

  return (
    <group ref={group}>

      <Float
        speed={1}
        rotationIntensity={0.15}
        floatIntensity={0.45}
      >
        <Core />
      </Float>

      <Sparkles
        count={180}
        scale={[
          12,
          9,
          8,
        ]}
        size={1.5}
        speed={0.2}
        opacity={0.5}
        color="#91baff"
      />

    </group>
  );
}


/* =========================================================
   CAMERA
   ========================================================= */

function CameraRig({
  progress,
}: {
  progress: number;
}) {
  const { camera } =
    useThree();

  useFrame((_, delta) => {

    const targetX =
      THREE.MathUtils.lerp(
        0,
        -0.25,
        progress
      );

    const targetY =
      THREE.MathUtils.lerp(
        0.15,
        0.35,
        progress
      );

    const targetZ =
      THREE.MathUtils.lerp(
        8.2,
        9.2,
        progress
      );

    camera.position.x =
      THREE.MathUtils.damp(
        camera.position.x,
        targetX,
        2.5,
        delta
      );

    camera.position.y =
      THREE.MathUtils.damp(
        camera.position.y,
        targetY,
        2.5,
        delta
      );

    camera.position.z =
      THREE.MathUtils.damp(
        camera.position.z,
        targetZ,
        2.5,
        delta
      );

    camera.lookAt(
      0,
      0,
      0
    );
  });

  return null;
}


/* =========================================================
   SCENE CONTENTS
   ========================================================= */

function SceneContents({
  progress,
}: {
  progress: number;
}) {
  return (
    <>
      <color
        attach="background"
        args={["#02040a"]}
      />

      <fog
        attach="fog"
        args={[
          "#02040a",
          10,
          30,
        ]}
      />

      <ambientLight
        intensity={0.7}
      />

      <directionalLight
        position={[
          5,
          6,
          6,
        ]}
        intensity={4}
        color="#b7d3ff"
      />

      <pointLight
        position={[
          4,
          2,
          3,
        ]}
        intensity={18}
        distance={15}
        color="#4d8cff"
      />

      <pointLight
        position={[
          -4,
          -2,
          2,
        ]}
        intensity={12}
        distance={14}
        color="#37dfff"
      />

      <SceneWorld
        progress={progress}
      />

      <CameraRig
        progress={progress}
      />
    </>
  );
}


/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function ImmersiveScene() {
  const [
    progress,
    setProgress,
  ] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (ticking) {
        return;
      }

      ticking = true;

      requestAnimationFrame(() => {
        const maxScroll =
          Math.max(
            document.documentElement
              .scrollHeight -
              window.innerHeight,
            1
          );

        const value =
          window.scrollY /
          maxScroll;

        setProgress(
          THREE.MathUtils.clamp(
            value,
            0,
            1
          )
        );

        ticking = false;
      });
    };

    update();

    window.addEventListener(
      "scroll",
      update,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "resize",
      update
    );

    return () => {
      window.removeEventListener(
        "scroll",
        update
      );

      window.removeEventListener(
        "resize",
        update
      );
    };
  }, []);

  return (
    <div className="webgl-layer">

      <Canvas
        dpr={[
          1,
          1.5,
        ]}
        frameloop="always"
        camera={{
          position: [
            0,
            0.15,
            8.2,
          ],

          fov: 42,

          near: 0.1,

          far: 100,
        }}
        gl={{
          antialias: true,

          alpha: false,

          powerPreference:
            "high-performance",
        }}
      >
        <SceneContents
          progress={progress}
        />
      </Canvas>

    </div>
  );
}