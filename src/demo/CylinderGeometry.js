import *as THREE from 'three';

const geometry = new THREE.CylinderGeometry( 5, 5, 2, 32 );
const material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
const cylinder = new THREE.Mesh( geometry, material );

cylinder.castShadow=true
export default cylinder