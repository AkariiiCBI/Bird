import *as THREE from 'three';

const geometry = new THREE.SphereGeometry(
    10,          // 半径
    32,          // 水平分段数，增加细节
    24,          // 垂直分段数，增加细节
    0,           // 起始纬度，从赤道开始
    Math.PI * 2,     // 纬度角度长度，表示完整的180度即Math.PI
    0,           // 起始经度，从正方向开始
    Math.PI * 2  // 经度角度长度，表示完整的360度即Math.PI*2
);
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load('./assets/earth.jpg');

const material=new THREE.MeshPhongMaterial({
    color:0x00ff00,
    transparent: true,
    map: texture,
    opacity: 0.5
})
const mesh=new THREE.Mesh(geometry,material)

export default mesh;