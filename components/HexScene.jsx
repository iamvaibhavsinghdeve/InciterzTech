'use client';

import { useEffect } from 'react';
import * as THREE from 'three';

/**
 * The interactive 3D Inciterz hexagon:
 * extruded logo mark with the arrow on both faces, drag-to-spin with inertia,
 * scroll journey down the page, zone-aware white/blue colour flip,
 * text-protection (edge docking + auto-dim), mobile/perf fallbacks.
 */
export default function HexScene() {
  useEffect(() => {
    var canvas = document.getElementById('hexScene');
      if(!canvas || canvas.dataset.init) return;
      canvas.dataset.init = '1';
      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
      var renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true, alpha:true});
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      var scene = new THREE.Scene();
      var camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
      camera.position.set(0, 0, 10);
    
      var vw=0, vh=0, halfW=6, halfH=4;
      function size(){
        vw = window.innerWidth; vh = window.innerHeight;
        renderer.setSize(vw, vh, false);
        camera.aspect = vw/vh; camera.updateProjectionMatrix();
        halfH = Math.tan(THREE.MathUtils.degToRad(27.5)) * 10;
        halfW = halfH * camera.aspect;
      }
      size(); window.addEventListener('resize', size);
    
      var C_WHITE = new THREE.Color(0xFFFFFF);
      var C_BLUE  = new THREE.Color(0x002FA6);
    
      /* lights so the solid reads as 3D */
      scene.add(new THREE.AmbientLight(0xFFFFFF, 1.05));
      var key = new THREE.DirectionalLight(0xFFFFFF, 0.35); key.position.set(3, 4, 6); scene.add(key);
      var fill = new THREE.DirectionalLight(0xFFFFFF, 0.15); fill.position.set(-4, -2, -5); scene.add(fill);
    
      var traveller = new THREE.Group(); scene.add(traveller);
      var spinner = new THREE.Group(); traveller.add(spinner);
    
      /* ===== THE HEXAGON: exact logo mark as an extruded 3D solid ===== */
      var R = 2.2, DEPTH = 0.55;
      var shape = new THREE.Shape();
      for(var i=0;i<6;i++){
        var a = Math.PI/3*i;                      /* pointy left-right, flat top - same as the logo */
        var x = Math.cos(a)*R, y = Math.sin(a)*R;
        if(i===0) shape.moveTo(x,y); else shape.lineTo(x,y);
      }
      shape.closePath();
      var prismGeo = new THREE.ExtrudeGeometry(shape, {depth:DEPTH, bevelEnabled:true, bevelThickness:0.05, bevelSize:0.05, bevelSegments:2, curveSegments:1});
      prismGeo.translate(0, 0, -DEPTH/2);
      var bodyMat = new THREE.MeshPhongMaterial({color:0xFFFFFF, shininess:22, transparent:true, opacity:1});
      var prism = new THREE.Mesh(prismGeo, bodyMat);
      spinner.add(prism);
    
      /* the arrow ("tick") from the logo, on the front and back faces */
      var loader = new THREE.TextureLoader();
      var texArrB = loader.load('/images/arrow-blue.png');   /* blue arrow  - shown when body is white */
      var texArrW = loader.load('/images/arrow-white.png');  /* white arrow - shown when body is blue  */
      var planeW = R*2*0.98, planeH = planeW*(177/201);
      var faceGeo = new THREE.PlaneGeometry(planeW, planeH);
      var arrMats = [];
      function addFace(tex, z, flip){
        var mat = new THREE.MeshBasicMaterial({map:tex, transparent:true, depthWrite:false});
        var p = new THREE.Mesh(faceGeo, mat);
        p.position.z = z;
        if(flip) p.rotation.y = Math.PI;
        spinner.add(p);
        arrMats.push({m:mat, front:!flip, tex:tex});
        return mat;
      }
      var zF = DEPTH/2 + 0.06, zB = -DEPTH/2 - 0.06;
      var aBf = addFace(texArrB, zF, false), aBb = addFace(texArrB, zB, true);
      var aWf = addFace(texArrW, zF, false), aWb = addFace(texArrW, zB, true);
    
      /* soft glow behind (hero only) */
      var glowCv = document.createElement('canvas'); glowCv.width = glowCv.height = 256;
      var g = glowCv.getContext('2d');
      var grad = g.createRadialGradient(128,128,0,128,128,128);
      grad.addColorStop(0,'rgba(255,255,255,0.26)');
      grad.addColorStop(0.5,'rgba(255,255,255,0.08)');
      grad.addColorStop(1,'rgba(255,255,255,0)');
      g.fillStyle = grad; g.fillRect(0,0,256,256);
      var glow = new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(glowCv), transparent:true, depthWrite:false}));
      glow.scale.set(7.5,7.5,1); glow.position.z = -1.2;
      traveller.add(glow);
    
      /* ================= INTERACTION: drag anywhere to spin ================= */
      var dragging=false, px=0, py=0, velX=0, velY=0, rotX=0, rotY=0, dragEnergy=0;
      function dStart(x,y,target){
        var t = target && target.tagName;
        if(t==='INPUT'||t==='TEXTAREA'||t==='SELECT'||t==='BUTTON'||t==='A') return;
        dragging=true; px=x; py=y; document.body.classList.add('dragging-hex');
      }
      function dMove(x,y){
        if(!dragging) return;
        velY=(x-px)*0.0028; velX=(y-py)*0.0028;
        rotY+=velY; rotX+=velX;
        dragEnergy = Math.min(0.6, dragEnergy + Math.abs(x-px)*0.0008 + Math.abs(y-py)*0.0008);
        px=x; py=y;
      }
      function dEnd(){ dragging=false; document.body.classList.remove('dragging-hex'); }
      window.addEventListener('mousedown', function(e){ dStart(e.clientX,e.clientY,e.target); });
      window.addEventListener('mousemove', function(e){ dMove(e.clientX,e.clientY); mx=(e.clientX/vw-.5)*2; my=(e.clientY/vh-.5)*2; });
      window.addEventListener('mouseup', dEnd);
      window.addEventListener('touchstart', function(e){ var t=e.touches[0]; dStart(t.clientX,t.clientY,e.target); }, {passive:true});
      window.addEventListener('touchmove', function(e){ var t=e.touches[0]; dMove(t.clientX,t.clientY); }, {passive:true});
      window.addEventListener('touchend', dEnd);
      var resetting=false;
      window.addEventListener('dblclick', function(){ resetting=true; velX=velY=0; });
    
      var mx=0,my=0,tx=0,ty=0;
    
      /* ================= SCROLL JOURNEY ================= */
      var WAY = [
      [0.00, 0.52, 1.00],
      [0.12, 0.52, 0.90],
      [0.30, 0.62, 0.50],
      [0.60, 0.62, 0.48],
      [0.85, 0.62, 0.50],
      [1.00, 0.60, 0.55]
    ];
      function wayAt(p){
        for(var i=0;i<WAY.length-1;i++){
          var a=WAY[i], b=WAY[i+1];
          if(p>=a[0] && p<=b[0]){
            var t=(p-a[0])/(b[0]-a[0]); t=t*t*(3-2*t);
            return [a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t];
          }
        }
        return [WAY[WAY.length-1][1], WAY[WAY.length-1][2]];
      }
    
      var hero=document.querySelector('.hero-3d'), footer=document.querySelector('footer');
      var scrollP=0, heroEnd=800, footTop=999999, docMax=1, lastScroll=window.scrollY, scrollVel=0;
      var heroTextRight = 0;  /* px from screen centre to the right edge of hero text */
      function measure(){
        heroEnd = hero ? hero.offsetHeight : vh;
        footTop = footer ? footer.offsetTop : 999999;
        docMax = Math.max(1, document.body.scrollHeight - vh);
        var inner = document.querySelector('.hero-3d .hero-inner');
        if(inner){ heroTextRight = inner.getBoundingClientRect().right - vw/2; }
      }
      measure();
      window.addEventListener('resize', measure);
      window.addEventListener('load', measure);
      window.addEventListener('scroll', function(){
        scrollP = Math.min(1, window.scrollY/docMax);
        scrollVel += (window.scrollY - lastScroll)*0.0004;
        lastScroll = window.scrollY;
      }, {passive:true});
    
      var cx=0, cs=1, colorMix=0, fade=1;
      var tmpC = new THREE.Color();
      var MR = R + 0.1;   /* model radius for layout math */
    
      var clock = new THREE.Clock();
      function tick(){
        var t = clock.getElapsedTime();
        tx += (mx-tx)*0.05; ty += (my-ty)*0.05;
    
        if(!dragging){ rotY+=velY; rotX+=velX; velX*=0.92; velY*=0.92; }
        if(resetting){
          rotX*=0.9; rotY*=0.9;
          if(Math.abs(rotX)<0.01 && Math.abs(rotY)<0.01){ rotX=rotY=0; resetting=false; }
        }
        rotX = Math.max(-1.2, Math.min(1.2, rotX));
        dragEnergy *= 0.975;
        scrollVel *= 0.9;
    
        var w = wayAt(scrollP);
        var narrow = vw < 1000;
        var contentHalfPx = Math.min(1240, vw - 48)/2;
        var pxPerWorld = (vw/2)/halfW;
        var docYc = window.scrollY + vh/2;
        var inHero = docYc < heroEnd;
    
        var HERO_ONLY = true;
        var targetX, targetS, targetFade = 1;
        if(inHero){
          /* centred watermark behind the hero text */
          targetX = 0;
          var wmRpx = Math.min(vh*0.40, vw*0.30);
          targetS = wmRpx / (MR*pxPerWorld);
          targetFade = narrow ? 0.09 : 0.11;
        } else if(HERO_ONLY){
          /* HERO-ONLY MODE: the hexagon never travels over page content.
             Set HERO_ONLY = false to re-enable the edge-docking journey below. */
          targetX = cx; targetS = Math.max(cs, 0.3); targetFade = 0;
        } else {
          var side = w[0] >= 0 ? 1 : -1;
          var Rpx = Math.max(110, Math.min(240, vw*0.13));
          targetS = Rpx / (MR*pxPerWorld);
          var edgePx = vw/2 + Rpx*0.28;
          targetX = side * edgePx / pxPerWorld;
          if(narrow) targetFade = 0;
        }
        if(!inHero && targetFade > 0){
      var curRpx = MR*cs*pxPerWorld;
      var overlapPx = contentHalfPx - (Math.abs(cx*pxPerWorld) - curRpx);
      if(overlapPx > -12) targetFade = 0;   /* touching the content column (12px buffer) -> invisible */
    }
    fade += (targetFade-fade)*(targetFade < fade ? 0.18 : 0.045);  /* hide fast, return gently */
    
        cx += (targetX - cx)*0.035;
    cs += (targetS - cs)*0.035;
        traveller.position.x = cx;
        traveller.position.y = Math.sin(t*0.5)*0.03;
        traveller.scale.setScalar(cs);
    
        var wantBlue = (docYc < footTop + 80) ? 1 : 0;
        colorMix += (wantBlue-colorMix)*0.08;
    
        /* body: white over blue zones -> blue over white zones */
        tmpC.copy(C_WHITE).lerp(C_BLUE, colorMix);
        bodyMat.color.copy(tmpC);
        bodyMat.opacity = fade;
    
        /* arrow: opposite of the body */
        aBf.opacity = (1-colorMix)*fade; aBb.opacity = aBf.opacity;   /* blue arrow on white body */
        aWf.opacity = colorMix*fade; aWb.opacity = aWf.opacity;       /* white arrow on blue body */
    
        glow.material.opacity = (0.75+Math.sin(t*0.9)*0.15)*(1-colorMix)*fade;
    
        /* rotation: gentle coin spin + user drag */
        var spinBoost = 1 + dragEnergy*0.5 + Math.min(0.12, Math.abs(scrollVel)*6);
        spinner.rotation.y = t*0.10*spinBoost + rotY + tx*0.07;
        spinner.rotation.x = -0.06 + rotX + ty*0.04;
        spinner.rotation.z = 0;  /* stay level */
    
        camera.position.x = tx*0.2;
    camera.position.y = -ty*0.12;
        camera.lookAt(cx*0.6, 0, 0);
    
        renderer.render(scene, camera);
        if(!reduced && !document.hidden) requestAnimationFrame(tick);
      }
      document.addEventListener('visibilitychange', function(){ if(!document.hidden && !reduced) requestAnimationFrame(tick); });
      measure();
      tick();
      if(reduced) renderer.render(scene, camera);
  }, []);

  return null;
}
