import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

const ThreeLogo = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene, camera, renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 10000);
        camera.position.z = 900;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(300, 200);
        mountRef.current.appendChild(renderer.domElement);

        // Load SVG
        const loader = new SVGLoader();
        loader.load('/logo.svg', (data) => {
            const paths = data.paths;
            const group = new THREE.Group();

            paths.forEach((path) => {
                const material = new THREE.MeshBasicMaterial({
                    color: path.color,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                });

                const shapes = SVGLoader.createShapes(path);
                shapes.forEach((shape) => {
                    const geometry = new THREE.ShapeGeometry(shape);
                    const mesh = new THREE.Mesh(geometry, material);
                    group.add(mesh);
                });
            });

            group.scale.set(2, 2, 2);
            scene.add(group);
            const box = new THREE.Box3().setFromObject(group);
            const center = box.getCenter(new THREE.Vector3());
            group.position.sub(center);

            // Move each mesh to half its x position inside the group
            /* group.children.forEach((child) => {
                if (child instanceof THREE.Mesh) {
                    child.position.x -= box.max.x / 2;
                }
            }); */
            // Animation loop: spin on Y axis
            const animate = () => {
                group.rotation.y += 0.01;
                renderer.render(scene, camera);
                requestAnimationFrame(animate);
            };
            animate();
        });

        // Cleanup
        return () => {
            while (mountRef.current?.firstChild) {
                mountRef.current.removeChild(mountRef.current.firstChild);
            }
        };
    }, []);

    return <div ref={mountRef} />;
};

export default ThreeLogo;
