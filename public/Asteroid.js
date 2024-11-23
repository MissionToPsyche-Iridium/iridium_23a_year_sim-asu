export function psycheAsteroid() {
    // Create asteroid geometry
    const geometry = new THREE.SphereBufferGeometry(1, 64, 64);
    
    // Add random displacement for craters
    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const offset = (Math.random() - 0.5) * 0.1;
      positions[i] += offset;     // X coordinate
      positions[i + 1] += offset; // Y coordinate
      positions[i + 2] += offset; // Z coordinate
    }
    geometry.attributes.position.needsUpdate = true;
  
    // Create material for the asteroid
    const material = new THREE.MeshStandardMaterial({
      color: 0x808080,
      roughness: 0.9,
      metalness: 0.1,
    });
  
    // Return the created asteroid mesh
    return new THREE.Mesh(geometry, material);
  }