import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Layers, ShieldCheck } from 'lucide-react';

export const Dental3DViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLayer, setActiveLayer] = useState<'ceramic' | 'implant' | 'anatomy'>('ceramic');
  const [isRotating, setIsRotating] = useState(true);
  const [webGlSupported, setWebGlSupported] = useState(true);

  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    toothGroup: THREE.Group;
    crownMesh: THREE.Mesh;
    dentinMesh: THREE.Mesh;
    rootsMesh: THREE.Mesh;
    implantScrew: THREE.Mesh;
    gumBase: THREE.Mesh;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch {
      setWebGlSupported(false);
      return;
    }

    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 5.2);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 3. Lighting (Studio aesthetic with warm champagne key and cool rim)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff5ea, 2.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.2);
    fillLight.position.set(-4, -1, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xfef08a, 1.8);
    rimLight.position.set(0, 4, -4);
    scene.add(rimLight);

    // 4. Construct 3D Procedural Anatomical Molar & Crown Geometry
    const toothGroup = new THREE.Group();

    // Ceramic Crown: Smooth multi-cusp molar sculpted geometry
    const crownGeo = new THREE.CylinderGeometry(1.05, 0.78, 1.35, 32, 16);
    // Displace vertices to create authentic molar cusps & occlusal fissures
    const pos = crownGeo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      if (y > 0.4) {
        // Cusp crests
        const angle = Math.atan2(z, x);
        const cuspMod = Math.sin(angle * 4) * 0.14;
        const radialDist = Math.sqrt(x * x + z * z);
        const fissure = (1 - Math.min(1, radialDist / 1.0)) * 0.18;
        pos.setY(i, y + cuspMod - fissure);
      }
    }
    crownGeo.computeVertexNormals();

    // Lustrous translucent ceramic porcelain material
    const ceramicMat = new THREE.MeshPhysicalMaterial({
      color: 0xfaf8f5,
      roughness: 0.12,
      metalness: 0.04,
      clearcoat: 0.95,
      clearcoatRoughness: 0.08,
      transmission: 0.25, // natural enamel translucency
      ior: 1.54, // authentic optical refractive index of dental porcelain
      specularIntensity: 1.2,
      specularColor: 0xffffff
    });

    const crownMesh = new THREE.Mesh(crownGeo, ceramicMat);
    crownMesh.position.y = 0.55;
    toothGroup.add(crownMesh);

    // Dentin Core (Internal layer)
    const dentinGeo = new THREE.CylinderGeometry(0.75, 0.55, 1.1, 24);
    const dentinMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      roughness: 0.4,
      metalness: 0.0,
      transparent: true,
      opacity: 0.85
    });
    const dentinMesh = new THREE.Mesh(dentinGeo, dentinMat);
    dentinMesh.position.y = 0.45;
    dentinMesh.visible = false;
    toothGroup.add(dentinMesh);

    // Natural Roots (Bifurcated molar roots)
    const rootsGroup = new THREE.Group();
    const rootGeo1 = new THREE.ConeGeometry(0.38, 1.7, 24);
    rootGeo1.translate(0, -0.85, 0);
    const rootMat = new THREE.MeshStandardMaterial({
      color: 0xf5f0e6,
      roughness: 0.35
    });

    const root1 = new THREE.Mesh(rootGeo1, rootMat);
    root1.position.set(0.32, -0.1, 0);
    root1.rotation.z = -0.12;

    const root2 = new THREE.Mesh(rootGeo1, rootMat);
    root2.position.set(-0.32, -0.1, 0);
    root2.rotation.z = 0.12;

    rootsGroup.add(root1, root2);
    toothGroup.add(rootsGroup);

    // Titanium Medical Grade Implant Post & Screw
    const implantGroup = new THREE.Group();
    const screwShaft = new THREE.CylinderGeometry(0.38, 0.22, 1.7, 32);
    const titaniumMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.92,
      roughness: 0.22
    });
    const screwMesh = new THREE.Mesh(screwShaft, titaniumMat);
    screwMesh.position.y = -0.95;

    // Titanium screw threading rings
    for (let r = -0.4; r >= -1.6; r -= 0.18) {
      const ringGeo = new THREE.TorusGeometry(0.36 + (r + 1.6) * 0.06, 0.035, 12, 32);
      ringGeo.rotateX(Math.PI / 2);
      const ring = new THREE.Mesh(ringGeo, titaniumMat);
      ring.position.y = r;
      implantGroup.add(ring);
    }
    implantGroup.add(screwMesh);

    // Gold / Titanium Abutment connector collar
    const abutmentGeo = new THREE.CylinderGeometry(0.52, 0.38, 0.45, 32);
    const goldAbutmentMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.25
    });
    const abutmentMesh = new THREE.Mesh(abutmentGeo, goldAbutmentMat);
    abutmentMesh.position.y = 0.05;
    implantGroup.add(abutmentMesh);

    implantGroup.visible = false;
    toothGroup.add(implantGroup);

    // Gingival Margin / Gum contour line ring
    const gumRingGeo = new THREE.TorusGeometry(0.85, 0.14, 16, 40);
    gumRingGeo.rotateX(Math.PI / 2);
    const gumMat = new THREE.MeshStandardMaterial({
      color: 0xf472b6,
      roughness: 0.5,
      transparent: true,
      opacity: 0.65
    });
    const gumBase = new THREE.Mesh(gumRingGeo, gumMat);
    gumBase.position.y = -0.15;
    gumBase.scale.set(1.1, 0.5, 0.9);
    toothGroup.add(gumBase);

    toothGroup.position.y = -0.15;
    toothGroup.rotation.x = 0.2;
    scene.add(toothGroup);

    // 5. Mouse Interaction & Orbit Controls
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMouseX;
      const deltaY = e.clientY - previousMouseY;

      toothGroup.rotation.y += deltaX * 0.012;
      toothGroup.rotation.x += deltaY * 0.008;
      toothGroup.rotation.x = Math.max(-0.6, Math.min(0.8, toothGroup.rotation.x));

      previousMouseX = e.clientX;
      previousMouseY = e.clientY;
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    // 6. Animation Loop
    let animationId = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      if (!isDragging && isRotating) {
        toothGroup.rotation.y += 0.006;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 7. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    sceneRef.current = {
      scene,
      camera,
      renderer,
      toothGroup,
      crownMesh,
      dentinMesh,
      rootsMesh: rootsGroup as unknown as THREE.Mesh,
      implantScrew: implantGroup as unknown as THREE.Mesh,
      gumBase,
      animationId
    };

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      renderer.dispose();
      crownGeo.dispose();
      ceramicMat.dispose();
      dentinGeo.dispose();
      dentinMat.dispose();
      screwShaft.dispose();
      abutmentGeo.dispose();
    };
  }, []);

  // Update visual layers based on user selection
  useEffect(() => {
    if (!sceneRef.current) return;
    const { crownMesh, dentinMesh, rootsMesh, implantScrew } = sceneRef.current;

    if (activeLayer === 'ceramic') {
      crownMesh.visible = true;
      dentinMesh.visible = false;
      rootsMesh.visible = true;
      implantScrew.visible = false;
      (crownMesh.material as THREE.MeshPhysicalMaterial).opacity = 1.0;
      (crownMesh.material as THREE.MeshPhysicalMaterial).transparent = false;
    } else if (activeLayer === 'implant') {
      crownMesh.visible = true;
      dentinMesh.visible = false;
      rootsMesh.visible = false;
      implantScrew.visible = true;
      (crownMesh.material as THREE.MeshPhysicalMaterial).opacity = 0.65;
      (crownMesh.material as THREE.MeshPhysicalMaterial).transparent = true;
    } else if (activeLayer === 'anatomy') {
      crownMesh.visible = true;
      dentinMesh.visible = true;
      rootsMesh.visible = true;
      implantScrew.visible = false;
      (crownMesh.material as THREE.MeshPhysicalMaterial).opacity = 0.45;
      (crownMesh.material as THREE.MeshPhysicalMaterial).transparent = true;
    }
  }, [activeLayer]);

  if (!webGlSupported) {
    return (
      <div className="w-full h-80 rounded-2xl bg-stone-100 border border-stone-200 flex flex-col items-center justify-center p-6 text-center">
        <Sparkles className="w-8 h-8 text-amber-700 mb-2" />
        <h4 className="text-base font-semibold text-stone-900">Restorative Porcelain Anatomy</h4>
        <p className="text-sm text-stone-600 mt-1 max-w-xs">
          Interactive 3D model simulated with high-translucency feldspathic ceramics.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-b from-stone-900/5 to-amber-950/5 border border-stone-200/80 p-5 shadow-xs flex flex-col">
      {/* Top Header bar with clean controls */}
      <div className="flex items-center justify-between pb-3 border-b border-stone-200/60 mb-2">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-amber-800" />
          <span className="text-xs font-semibold tracking-wide uppercase text-stone-700">
            Interactive 3D Craft Explorer
          </span>
        </div>

        <button
          onClick={() => setIsRotating((prev) => !prev)}
          className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
            isRotating
              ? 'bg-amber-100/70 text-amber-900 border border-amber-200'
              : 'bg-stone-100 text-stone-600 hover:text-stone-900'
          }`}
          title="Toggle auto-rotation"
        >
          <RotateCw className={`w-3 h-3 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
          <span>{isRotating ? 'Rotating' : 'Paused'}</span>
        </button>
      </div>

      {/* 3D Canvas Viewport */}
      <div
        ref={containerRef}
        className="w-full h-[280px] sm:h-[320px] cursor-grab active:cursor-grabbing select-none relative flex items-center justify-center"
      >
        {/* Subtle helper instruction */}
        <div className="absolute bottom-2 left-3 pointer-events-none text-[11px] text-stone-400 font-mono tracking-tight bg-white/70 px-2 py-0.5 rounded backdrop-blur-xs">
          Drag to rotate 360° · Scroll to inspect
        </div>
      </div>

      {/* Layer selector tabs */}
      <div className="mt-3 grid grid-cols-3 gap-1.5 p-1 bg-stone-100/90 rounded-lg border border-stone-200">
        <button
          onClick={() => setActiveLayer('ceramic')}
          className={`py-1.5 px-2 text-xs font-medium rounded-md transition-all text-center ${
            activeLayer === 'ceramic'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Ceramic Enamel
        </button>
        <button
          onClick={() => setActiveLayer('implant')}
          className={`py-1.5 px-2 text-xs font-medium rounded-md transition-all text-center ${
            activeLayer === 'implant'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Titanium Post
        </button>
        <button
          onClick={() => setActiveLayer('anatomy')}
          className={`py-1.5 px-2 text-xs font-medium rounded-md transition-all text-center ${
            activeLayer === 'anatomy'
              ? 'bg-white text-stone-900 shadow-xs font-semibold'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Cross Section
        </button>
      </div>

      {/* Explanatory Caption */}
      <div className="mt-3 pt-3 border-t border-stone-200/60 flex items-start gap-2.5 text-xs text-stone-600">
        <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {activeLayer === 'ceramic' &&
            'Custom porcelain crown sculpted with refractive natural enamel gradients to match neighboring natural dentition.'}
          {activeLayer === 'implant' &&
            'Grade 4 pure titanium fixture engineered for biosafe osseointegration with gold-hue precision abutment.'}
          {activeLayer === 'anatomy' &&
            'Anatomical internal dentin preservation with biomimetic sealing to eliminate postoperative sensitivity.'}
        </p>
      </div>
    </div>
  );
};
