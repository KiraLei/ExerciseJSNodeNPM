// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"scripts/main.js":[function(require,module,exports) {
function ejercicio1() {
  var num1, num2, total;
  num1 = document.getElementById("num1").value;
  num2 = document.getElementById("num2").value;

  if (isNaN(num1) || isNaN(num2)) {
    total = "Es necesarios introducir dos números válidos";
  } else {
    total = "El total de la suma es : " + (parseFloat(num1) + parseFloat(num2));
  }

  document.getElementById("sumando").innerHTML = total;
}

function ejercicio2() {
  var nota1, nota2, nota3, nota4, total;
  nota1 = document.getElementById("nota1").value;
  nota2 = document.getElementById("nota2").value;
  nota3 = document.getElementById("nota3").value;
  nota4 = document.getElementById("nota4").value;

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
    total = "Es necesarios introducir números válidos";
  } else {
    total = "El promedio de las 4 notas es : " + (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;
  }

  document.getElementById("ejercicio2").innerHTML = total;
}

function ejercicio3() {
  var lado1, lado2, total;
  lado1 = document.getElementById("lado1").value;
  lado2 = document.getElementById("lado2").value;

  if (isNaN(lado1) || isNaN(lado2)) {
    total = "Es necesarios introducir números válidos";
  } else {
    total = "El area del Rectangulo es : " + parseFloat(lado1) * parseFloat(lado2);
  }

  document.getElementById("ejercicio3").innerHTML = total;
}

function ejercicio4() {
  var altura, base, total;
  altura = document.getElementById("altura").value;
  base = document.getElementById("base").value;

  if (isNaN(altura) || isNaN(base)) {
    total = "Es necesarios introducir números válidos";
  } else {
    total = "El area total del triangulo es : " + parseFloat(altura) * parseFloat(base) / 2;
  }

  document.getElementById("ejercicio4").innerHTML = total;
}

function ejercicio5() {
  var radio, total;
  radio = document.getElementById("radio").value;

  if (isNaN(radio)) {
    total = "Es necesarios introducir números válidos";
  } else {
    total = "El area del circulo es : " + Math.trunc(Math.PI * Math.pow(parseFloat(radio), 2));
  }

  document.getElementById("ejercicio5").innerHTML = total;
}

function ejercicio7() {
  var metro, total;
  metro = document.getElementById("metro").value;

  if (isNaN(metro)) {
    total = "Es necesarios introducir números válidos";
  } else {
    total = "Debe pedir  : " + parseFloat(metro) * 39.3701 + " pulgadas de tela";
  }

  document.getElementById("ejercicio7").innerHTML = total;
}

function ejercicio8() {
  var soles, total;
  soles = document.getElementById("soles").value;

  if (isNaN(soles)) {
    total = "Es necesarios introducir números válidos";
  } else {
    total = "Obtendra  : " + Math.trunc(parseFloat(soles) / 3.5) + " dolares";
  }

  document.getElementById("ejercicio8").innerHTML = total;
}

function ejercicio9() {
  var anio_nacimiento, anio_actual, total;
  anio_nacimiento = document.getElementById("anio_nacimiento").value;
  anio_actual = document.getElementById("anio_actual").value;

  if (isNaN(anio_nacimiento) || isNaN(anio_actual)) {
    total = "Es necesarios introducir números válidos";
  } else {
    total = "Tiene : " + (parseFloat(anio_actual) - parseFloat(anio_nacimiento)) + " años";
  }

  document.getElementById("ejercicio9").innerHTML = total;
}

function ejercicio11() {
  var antiguedad, total;
  antiguedad = document.getElementById("antiguedad").value;

  switch (antiguedad) {
    case "0":
      total = "No recibira ningun bono";
      document.getElementById("ejercicio11").innerHTML = total;
      break;

    case "1":
      total = "Recibira : $100 de bono";
      document.getElementById("ejercicio11").innerHTML = total;
      break;

    case "2":
      total = "Recibira : $200 de bono";
      document.getElementById("ejercicio11").innerHTML = total;
      break;

    case "3":
      total = "Recibira : $300 de bono";
      document.getElementById("ejercicio11").innerHTML = total;
      break;

    case "4":
      total = "Recibira : $400 de bono";
      document.getElementById("ejercicio11").innerHTML = total;
      break;

    case "5":
      total = "Recibira : $500 de bono";
      document.getElementById("ejercicio11").innerHTML = total;
      break;

    default:
      total = "Recibira $1000 de bono";
      document.getElementById("ejercicio11").innerHTML = total;
  }
}

function ejercicio12() {
  var sueldo, total;
  var i;
  sueldo = parseInt(1500);
  total = '';

  for (i = 0; i < 6; i++) {
    total = total + '<br/>' + "* En el año " + i + " recibira " + sueldo + " de Salario";
    sueldo = Math.trunc(sueldo * 1.1); //console.log(total)

    document.getElementById("ejercicio12").innerHTML = total;
  }
}

function ejercicio13() {
  var nota, total;
  var a;
  var aprobados, desaprobados;
  var i;
  var cantidad = [a];

  for (var _i = 0; _i < a; _i++) {
    cantAlumnos[_i] = prompt("Nota numero ".concat(_i + 1));
  } // cantidad = document.getElementById("cantidad").value; 
  //  nota = document.getElementById("nota").value; 
  // total='';
  // while(i<=cantidad){
  //      total=total+'<br/>' +"Obtendra  : "+(parseFloat(cantidad)) + " dolares"; 

  /* if(parseInt(nota)>10 && parseInt(nota)<20 ){
       total=total+'<br/>'+" En el año "+ i + " recibira " +sueldo+ " de Salario";
       console.log(total)
       document.getElementById("ejercicio13").innerHTML = total;
       
   }*/
  // }    

}

function ejercicio14() {
  var cantidad, nota, total;
  var i;
  cantidad = document.getElementById("cantidad").value;
  nota = document.getElementById("nota").value;
  total = ''; // while(i<=cantidad){

  total = total + '<br/>' + "Obtendra  : " + parseFloat(cantidad) + " dolares";
  /* if(parseInt(nota)>10 && parseInt(nota)<20 ){
       total=total+'<br/>'+" En el año "+ i + " recibira " +sueldo+ " de Salario";
       console.log(total)
       document.getElementById("ejercicio13").innerHTML = total;
       
   }*/
  // }    
}

function ejercicio15() {
  var agePeople, total;
  agePeople = document.getElementById("agePeople").value;

  if (parseFloat(agePeople) >= 18) {
    total = "Puedes votar en las proximas elecciones";
  } else {
    total = "Aun no puedes votar en las proximas elecciones";
  }

  document.getElementById("ejercicio15").innerHTML = total;
}
},{}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53225" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","scripts/main.js"], null)
//# sourceMappingURL=/main.d8ebb8d6.js.map