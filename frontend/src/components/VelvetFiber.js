"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VelvetFiber() {
    const mountRef = useRef(null);

    useEffect(() => {
        let width = window.innerWidth;
        let height = window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // Create a very subtle "velvet" wave using points or a plane
        const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
        const material = new THREE.MeshPhysicalMaterial({
            color: 0x7B1123,
            emissive: 0x5A0D18,
            emissiveIntensity: 0.1,
            roughness: 0.8,
            metalness: 0.2,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.05,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 2.5;
        scene.add(mesh);

        const light = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(light);

        const ptLight = new THREE.PointLight(0xffffff, 0.5);
        ptLight.position.set(5, 5, 5);
        scene.add(ptLight);

        camera.position.z = 5;

        const animate = (time) => {
            const positions = geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const y = positions[i + 1];
                positions[i + 2] = Math.sin(x * 0.5 + time * 0.001) * Math.cos(y * 0.5 + time * 0.001) * 0.3;
            }
            geometry.attributes.position.needsUpdate = true;

            mesh.rotation.z += 0.0005;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />;
}
