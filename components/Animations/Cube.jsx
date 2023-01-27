import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Cube() {
  var scene = new THREE.Scene();

  // create a camera
  var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(50, 30, 50);
  camera.lookAt(0, 0, 0);

  // create the renderer
  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // create a simple cube
  var geometry = new THREE.BoxGeometry(20, 20, 20);
  var material = new THREE.MeshLambertMaterial({ color: 0x10a315 });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // add a light so we can see something
  var light = new THREE.PointLight(0xffff00);
  light.position.set(25, 25, 25);
  scene.add(light);

  var mainLoop = () => {
    requestAnimationFrame(mainLoop);
    renderer.render(scene, camera);

    cube.rotation.x += Math.PI / 180;
    cube.rotation.y += Math.PI / 180;
    cube.rotation.z += Math.PI / 180;
    renderer.dispose();
  };

  mainLoop();

  return <Cube />;
}

export default Cube;
