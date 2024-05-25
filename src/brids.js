import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { Clock } from 'three';

import model from "./demo/bird.js";


let camera, scene, renderer, stats, gui;
const clock = new Clock();

function init(){
    //场景
    scene = new THREE.Scene();

    //添加物体
    scene.add(model[0],model[1],model[2]);

    //相机
    camera = new THREE.PerspectiveCamera(
        50,  // 视野角度
        window.innerWidth / window.innerHeight,  //长宽比
        0.1,  //近截面
        500,  //远截面
    );
    camera.position.set(30,20,100);
    camera.lookAt(20,20,0);

    //光源
    const pointLight = new THREE.PointLight(0xffffff, 8);
    pointLight.position.set(50, 10, 60);
    pointLight.decay = 0;  
    scene.add(pointLight);

    //光源
    const pointLight2 = new THREE.PointLight(0xffffff, 10);
    pointLight2.position.set(70, 20,-150);
    pointLight2.decay = 0;  
    scene.add(pointLight2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    scene.background = new THREE.Color("rgb(143,188,212)");

    //渲染器
    renderer = new THREE.WebGLRenderer({antialias:true,});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.render(scene,camera);
    
    document.body.appendChild(renderer.domElement);
    window.onresize = onWindowResize;

}

function animate(){
    renderer.setAnimationLoop(()=>{
    
        renderer.render(scene,camera);
        

        const delta = clock.getDelta();
        model.forEach(model => model.tick(delta));

    })
    
}

function onWindowResize(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}


function initHelper(){
    const axesHelper = new THREE.AxesHelper(50);
    scene.add(axesHelper);
    const constrols = new OrbitControls(camera,renderer.domElement);
    constrols.addEventListener('change',() => {
        renderer.render(scene,camera);
    })
    const gridHelper = new THREE.GridHelper(1000,100,0x000000,0x0000ff);
    scene.add(gridHelper);

    stats = new Stats();
    document.body.appendChild(stats.domElement);
}


init();
animate();