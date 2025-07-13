function abrir() {
  window.open(fl, '_self');
}

function sairVR() {
	const sceneEl = document.querySelector('a-scene');
	if (sceneEl.is('vr-mode')) {
		sceneEl.exitVR();
	}
}

function mfaces() {
	var x = document.getElementById("faces")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#fc')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function msides() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#tr0')
	var entityEl1 = sceneEl.querySelector('#tr1')
	var entityEl2 = sceneEl.querySelector('#tr2')
	var entityEl3 = sceneEl.querySelector('#tr3')
	var entityEl4 = sceneEl.querySelector('#tr4')
	var entityEl5 = sceneEl.querySelector('#tr5')
	var entityEl6 = sceneEl.querySelector('#tr6')
	var entityEl7 = sceneEl.querySelector('#tr7')
	var entityEl8 = sceneEl.querySelector('#tr8')
	var entityEl9 = sceneEl.querySelector('#tr9')
	var entityEl10 = sceneEl.querySelector('#tr10')
	var p = document.getElementById("md").value
	entityEl.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl1.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl2.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl3.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl4.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl5.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl6.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl7.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl8.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl9.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl10.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
}

function msides1() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#tr0')
	var entityEl1 = sceneEl.querySelector('#tr1')
	var entityEl2 = sceneEl.querySelector('#tr2')
	var entityEl3 = sceneEl.querySelector('#tr3')
	var entityEl4 = sceneEl.querySelector('#tr4')
	var entityEl5 = sceneEl.querySelector('#tr5')
	var entityEl6 = sceneEl.querySelector('#tr6')
	var entityEl7 = sceneEl.querySelector('#tr7')
	var entityEl8 = sceneEl.querySelector('#tr8')
	var entityEl9 = sceneEl.querySelector('#tr9')
	var entityEl10 = sceneEl.querySelector('#tr10')
	var p = document.getElementById("md").value
	entityEl.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:3; segments-tubular: ${p}`);
	entityEl1.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:1.5; segments-tubular: ${p}`);
	entityEl2.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:1.5; segments-tubular: ${p}`);
	entityEl3.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:1.5; segments-tubular: ${p}`);
	entityEl4.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:1.5; segments-tubular: ${p}`);
	entityEl5.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:1.5; segments-tubular: ${p}`);
	entityEl6.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:1.5; segments-tubular: ${p}`);
	entityEl7.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:1.5; segments-tubular: ${p}`);
	entityEl8.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:1.5; segments-tubular: ${p}`);
	entityEl9.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:1.5; segments-tubular: ${p}`);
	entityEl10.setAttribute('geometry',`radius-tubular:0.05; primitive: torus; radius:1.5; segments-tubular: ${p}`);
}

function marestas() {
	var x = document.getElementById("arestas")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#ar')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function mvertices() {
	var x = document.getElementById("vertices")
	var sceneEl = document.querySelector('a-scene')
	var entityEl = sceneEl.querySelector('#esfera')
	if (x.checked == true) { 
	  entityEl.setAttribute('visible','true');
	}
	else {
	  entityEl.setAttribute('visible','false');
	}
}

function mnivel() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl0 = sceneEl.querySelector('#nivel0')
	var entityEl1 = sceneEl.querySelector('#nivel1')
	var entityEl2 = sceneEl.querySelector('#nivel2')
	var entityEl3 = sceneEl.querySelector('#nivel3')
	var entityEl4 = sceneEl.querySelector('#nivel4')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  entityEl0.setAttribute('visible','true');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 1) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','true');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 2) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','true');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','false');
	} else if (p == 3) {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','true');
	  entityEl4.setAttribute('visible','false');
	} else {
	  entityEl0.setAttribute('visible','false');
	  entityEl1.setAttribute('visible','false');
	  entityEl2.setAttribute('visible','false');
	  entityEl3.setAttribute('visible','false');
	  entityEl4.setAttribute('visible','true');
	}
}

function mnivelRA() {
	var sceneEl = document.querySelector('a-scene')
	var entityEl0 = sceneEl.querySelectorAll('.nivel0')
	var entityEl1 = sceneEl.querySelectorAll('.nivel1')
	var entityEl2 = sceneEl.querySelectorAll('.nivel2')
	var entityEl3 = sceneEl.querySelectorAll('.nivel3')
	var entityEl4 = sceneEl.querySelectorAll('.nivel4')
	var p = document.getElementById("nv").value
	if (p == 0) { 
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	} else if (p == 1) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	} else if (p == 2) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
	    entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	} else if (p == 3) {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','true');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','false');
	  }
	} else {
	  for (let i = 0; i < entityEl0.length; i++) {
		entityEl0[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl1.length; i++) {
		entityEl1[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl2.length; i++) {
		entityEl2[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl3.length; i++) {
		entityEl3[i].setAttribute('visible','false');
	  }
	  for (let i = 0; i < entityEl4.length; i++) {
		entityEl4[i].setAttribute('visible','true');
	  }
	}
}
