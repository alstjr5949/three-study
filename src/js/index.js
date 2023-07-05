import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffe287);

const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xfffff);
light.position.set(2, 4, 3);
scene.add(light);

const material = new THREE.MeshStandardMaterial({
  color: 0x2e6ff2,
});

// 육면체
const geo1 = new THREE.BoxGeometry(1, 1, 1);
const obj1 = new THREE.Mesh(geo1, material);

// scene.add(obj1);

// 원뿔
const geo2 = new THREE.ConeGeometry(0.5, 1, 32);
const obj2 = new THREE.Mesh(geo2, material);

// scene.add(obj2);

// 원기둥
const geo3 = new THREE.CylinderGeometry(0.5, 0.8, 1, 4);
const obj3 = new THREE.Mesh(geo3, material);

// scene.add(obj3);

// 구
const geo4 = new THREE.SphereGeometry(1);
const obj4 = new THREE.Mesh(geo4, material);

// scene.add(obj4);

// 평면
const geo5 = new THREE.PlaneGeometry(1, 2);
const obj5 = new THREE.Mesh(geo5, material);

scene.add(obj5);

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});
