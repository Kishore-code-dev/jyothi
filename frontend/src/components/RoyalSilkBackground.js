"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RoyalSilkBackground() {
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

        const geometry = new THREE.PlaneGeometry(30, 20, 128, 128);

        // Create custom shader for silk-like sheen
        const material = new THREE.MeshPhysicalMaterial({
            color: 0x7B1123,
            emissive: 0x5A0D18,
            emissiveIntensity: 0.2,
            roughness: 0.3,
            metalness: 0.8,
            clearcoat: 1.0,
            clearcoatRoughness: 0.1,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.08,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = -Math.PI / 3;
        mesh.position.y = -2;
        scene.add(mesh);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        scene.add(directionalLight);

        camera.position.z = 10;

        const animate = (time) => {
            const positions = geometry.attributes.position.array;
            const t = time * 0.0003;

            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const y = positions[i + 1];

                // Silk-like fluid wave equations
                const n1 = Math.sin(x * 0.3 + t) * Math.cos(y * 0.2 + t);
                const n2 = Math.sin(y * 0.4 - t * 0.5) * Math.cos(x * 0.5 + t);

                positions[i + 2] = (n1 + n2) * 0.8;
            }

            geometry.attributes.position.needsUpdate = true;
            mesh.rotation.z = Math.sin(t * 0.1) * 0.05;

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
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-[-1] bg-[#F8F6F4]" />;
}
