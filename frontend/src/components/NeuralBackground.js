"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeuralBackground() {
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

        // Neural Particle System
        const count = 3000;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count);
        const phases = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            // Create a swirling distribution
            const r = Math.random() * 8 + 2;
            const theta = Math.random() * Math.PI * 2;
            const y = (Math.random() - 0.5) * 10;

            positions[i * 3] = r * Math.cos(theta);
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = r * Math.sin(theta);

            velocities[i] = Math.random() * 0.02 + 0.01;
            phases[i] = Math.random() * Math.PI * 2;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({
            color: 0xD4AF37,
            size: 0.015,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        camera.position.z = 8;
        camera.position.y = 2;
        camera.lookAt(0, 0, 0);

        const animate = () => {
            const pos = geometry.attributes.position.array;
            for (let i = 0; i < count; i++) {
                // Rotate around Y axis
                const x = pos[i * 3];
                const z = pos[i * 3 + 2];
                const r = Math.sqrt(x * x + z * z);
                const theta = Math.atan2(z, x) + velocities[i];

                pos[i * 3] = r * Math.cos(theta);
                pos[i * 3 + 2] = r * Math.sin(theta);

                // Add subtle vertical oscillation
                pos[i * 3 + 1] += Math.sin(Date.now() * 0.001 + phases[i]) * 0.002;
            }
            geometry.attributes.position.needsUpdate = true;

            points.rotation.x += 0.0002;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

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

    return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0 bg-black" />;
}
