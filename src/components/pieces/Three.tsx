import React, { useState, useEffect, useRef } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

interface GLTFOptions {
  receiveShadow: boolean
  castShadow: boolean
}

function loadGLTFModel(scene: any, glbPath: string, options: GLTFOptions) {
  const { receiveShadow, castShadow } = options
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    loader.load(
      glbPath,
      (gltf: any) => {
        const obj = gltf.scene
        obj.name = "dinosaur"
        obj.position.y = 0
        obj.position.x = 0
        obj.receiveShadow = receiveShadow
        obj.castShadow = castShadow
        scene.add(obj)

        obj.traverse(function (child: any) {
          if (child.isMesh) {
            child.castShadow = castShadow
            child.receiveShadow = receiveShadow
          }
        })

        resolve(obj)
      },
      undefined,
      function (error: any) {
        console.log(error)
        reject(error)
      }
    )
  })
}

const CharacterModel = () => {
  const refContainer = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()

  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const scene = new THREE.Scene()
      const scale = 1.5
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      const target = new THREE.Vector3(0, 1.2, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )
      const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
      scene.add(ambientLight)
      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      loadGLTFModel(scene, "/models/Boss.glb", {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req: any = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)
        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 40

          camera.position.y = 5
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={refContainer}
      className="w-[370px] h-[430px] sm:w-[540px] sm:h-[540px] relative"
    >
      {loading && (
        <span style={{ position: "absolute", left: "50%", top: "50%" }}>
          Loading...
        </span>
      )}
    </div>
  )
}

export default CharacterModel
