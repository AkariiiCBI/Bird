import * as THREE from 'three';

function getTexture() {
    const texLoader = new THREE.TextureLoader();
    const texture = texLoader.load('./src/assets/3.png');
    return texture
}

const material = new THREE.SpriteMaterial({
    map: getTexture(),
    blending: THREE.AdditiveBlending,
    opacity: 0.3
})

const group = new THREE.Group();
for (let i = 0; i < 5000; i++) {
    const sprite = new THREE.Sprite(material);
    group.add(sprite);
    sprite.scale.set(8, 8, 1);
    // 设置精灵模型位置，在长方体空间上上随机分布
    const x = 1000 * (Math.random() - 0.5);
    const y = 600 * Math.random();
    const z = 1000 * (Math.random() - 0.5);
    sprite.position.set(x, y, z)
}

function loop() {
    group.children.forEach(sprite => {
        sprite.position.y -= 0.3;
        if (sprite.position.y < -300) {
            sprite.position.y = 300;
        }
    });
    requestAnimationFrame(loop);
}
loop();

export default group