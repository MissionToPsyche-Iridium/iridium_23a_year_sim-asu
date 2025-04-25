import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function psycheAsteroid() {
  const loader = new GLTFLoader();
  const group = new THREE.Group();

  loader.load('/public/psycheModelCentered.glb', (gltf) => {
    const model = gltf.scene;
    model.scale.set(1, 1, 1); // Adjust the scale if needed
    group.add(model);
  }, undefined, (error) => {
    console.error('An error occurred while loading the GLB model:', error);
  });

  return group;
}
