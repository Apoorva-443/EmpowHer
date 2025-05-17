"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Text } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"

function Model({ rotation = [0, 0, 0] }) {
  const group = useRef()

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y += 0.005
    }
  })

  // Using a simple sphere as a placeholder
  return (
    <group ref={group} rotation={rotation}>
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial color="#ff69b4" roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  )
}

function FloatingText() {
  return (
    <Text
      position={[0, 0, 0]}
      fontSize={0.5}
      color="#ffffff"
      anchorX="center"
      anchorY="middle"
      font="/fonts/Inter_Bold.json"
    >
      EmpowHer
    </Text>
  )
}

export function LandingHero() {
  const isMobile = useMobile()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Empowering Women Through Technology
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join our platform designed to help women in rural communities develop skills, connect with mentors, and
                build economic opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/learn">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600">
                  Start Your Journey
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="h-[300px] md:h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-950/30 dark:to-purple-950/30">
            {loaded && (
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Model rotation={[0, 0, 0]} />
                <Environment preset="sunset" />
                <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={1} />
              </Canvas>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
