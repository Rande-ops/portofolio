/* Kristal 3D interaktif di hero (three.js). Seret untuk memutar; kristal mengikuti kursor. */
import * as THREE from "three";
import { RoomEnvironment } from "../vendor/RoomEnvironment.js";

const box = document.getElementById("hero-art");
const canvas = document.getElementById("crystal");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

function supportsWebGL() {
  try { const c = document.createElement("canvas"); return !!(c.getContext("webgl2") || c.getContext("webgl")); } catch (e) { return false; }
}

if (box && canvas && supportsWebGL()) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
  camera.position.set(0, 0, 7.2);

  const group = new THREE.Group();
  scene.add(group);

  // Main crystal: faceted glass
  const geo = new THREE.IcosahedronGeometry(1.35, 0);
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xd9e9ff, metalness: 0.05, roughness: 0.04, transmission: 1, thickness: 1.4, ior: 1.45,
    iridescence: 0.9, iridescenceIOR: 1.3, clearcoat: 1, clearcoatRoughness: 0.05,
    attenuationColor: new THREE.Color(0x7aa6ff), attenuationDistance: 3.2, flatShading: true
  });
  const crystal = new THREE.Mesh(geo, glassMat);
  group.add(crystal);

  // Inner core
  const core = new THREE.Mesh(new THREE.OctahedronGeometry(0.5, 0),
    new THREE.MeshStandardMaterial({ color: 0x3d6ff0, emissive: 0x2453c9, emissiveIntensity: 0.6, metalness: 0.3, roughness: 0.25, flatShading: true }));
  group.add(core);

  // Wireframe shell, like an AR tracking mesh
  const wire = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.75, 1)),
    new THREE.LineBasicMaterial({ color: 0x6f8fc9, transparent: true, opacity: 0.35 }));
  group.add(wire);

  // Orbiting points
  const orbit = new THREE.Group();
  const dotMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.2, roughness: 0.2, emissive: 0x9cc3ff, emissiveIntensity: 0.4 });
  for (let i = 0; i < 3; i++) {
    const d = new THREE.Mesh(new THREE.SphereGeometry(0.07 + i * 0.02, 20, 20), dotMat);
    const a = (i / 3) * Math.PI * 2;
    d.position.set(Math.cos(a) * 2.3, Math.sin(a) * 0.5, Math.sin(a) * 2.3);
    orbit.add(d);
  }
  orbit.rotation.x = 0.35;
  scene.add(orbit);

  const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(3, 4, 5); scene.add(key);
  const rim = new THREE.DirectionalLight(0x8fb6ff, 1.2); rim.position.set(-4, -2, -3); scene.add(rim);

  function resize() {
    const r = box.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height;
    camera.position.z = camera.aspect < 0.9 ? 8.2 : 7.2;
    camera.updateProjectionMatrix();
  }
  new ResizeObserver(resize).observe(box);
  resize();

  // Interaction: pointer tilt + drag spin with inertia
  let tx = 0, ty = 0, cx = 0, cy = 0;
  let dragging = false, lastX = 0, lastY = 0, vx = 0.004, vy = 0, spinY = 0, spinX = 0;
  window.addEventListener("pointermove", (e) => {
    const r = box.getBoundingClientRect();
    tx = ((e.clientX - r.left) / r.width - 0.5) * 0.6;
    ty = ((e.clientY - r.top) / r.height - 0.5) * 0.4;
    if (dragging) {
      vx = (e.clientX - lastX) * 0.006; vy = (e.clientY - lastY) * 0.004;
      lastX = e.clientX; lastY = e.clientY;
    }
  }, { passive: true });
  box.addEventListener("pointerdown", (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; box.setPointerCapture(e.pointerId); });
  const stop = () => { dragging = false; };
  box.addEventListener("pointerup", stop);
  box.addEventListener("pointercancel", stop);

  let visible = true;
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(box);

  const clock = new THREE.Clock();
  function frame() {
    const t = clock.getElapsedTime();
    if (!dragging) { vx += (0.004 - vx) * 0.02; vy *= 0.94; }
    spinY += vx; spinX += vy;
    cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
    group.rotation.y = spinY + cx;
    group.rotation.x = spinX * 0.5 + cy;
    core.rotation.y = -t * 0.6; core.rotation.x = t * 0.3;
    wire.rotation.y = -spinY * 0.4;
    orbit.rotation.y = t * 0.35;
    group.position.y = Math.sin(t * 0.9) * 0.08;
    renderer.render(scene, camera);
  }
  box.classList.add("has-webgl");
  if (reduce) { frame(); new ResizeObserver(() => frame()).observe(box); }
  else renderer.setAnimationLoop(() => { if (visible && !document.hidden) frame(); });
}
