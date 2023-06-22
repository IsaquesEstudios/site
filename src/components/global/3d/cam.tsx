"use client";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { useEffect, useState } from "react";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function Cam() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth / 2);
    setHeight(window.innerHeight / 2);

    //cena
    const scene = new THREE.Scene();

    //camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    //carregar objeto 3D gltf
    const objectLoader = new GLTFLoader();

    objectLoader.load("scene.gltf", (gltf) => {
      const model = gltf.scene;
      model.position.set(0, 0, 0);
      model.scale.set(4, 4, 4);
      model.rotateY(6);

      function animate() {
        requestAnimationFrame(animate);
        model.rotateY(+0.001);
      }

      animate()

      //adicionar objeto na cena
      scene.add(model);
    });

    scene.background = new THREE.Color("#131313");
    //iluminação para mostrar objeto

    const light = new THREE.HemisphereLight("#bbbcbd", "#77797b", 10);
    scene.add(light);

    camera.position.z = 14;
    camera.position.x = 2;
    camera.position.y = 6;

    //renderizador
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    new OrbitControls(camera, renderer.domElement);

    //função de ativar animação e renderizar conteudo na tela
    function animate() {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    }

    animate();
  });

  return <div />;
}
