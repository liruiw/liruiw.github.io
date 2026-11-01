"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{557:(e,t,i)=>{i.d(t,{B:()=>a});var s=i(4910);function r(e,t){if(t===s.RJ4)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t!==s.rYR&&t!==s.O49)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e;{let i=e.getIndex();if(null===i){let t=[],s=e.getAttribute("position");if(void 0===s)return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e;for(let e=0;e<s.count;e++)t.push(e);e.setIndex(t),i=e.getIndex()}let r=i.count-2,a=[];if(t===s.rYR)for(let e=1;e<=r;e++)a.push(i.getX(0)),a.push(i.getX(e)),a.push(i.getX(e+1));else for(let e=0;e<r;e++)e%2==0?(a.push(i.getX(e)),a.push(i.getX(e+1)),a.push(i.getX(e+2))):(a.push(i.getX(e+2)),a.push(i.getX(e+1)),a.push(i.getX(e)));a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let n=e.clone();return n.setIndex(a),n.clearGroups(),n}}class a extends s.aHM{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new u(e)}),this.register(function(e){return new d(e)}),this.register(function(e){return new M(e)}),this.register(function(e){return new R(e)}),this.register(function(e){return new S(e)}),this.register(function(e){return new f(e)}),this.register(function(e){return new m(e)}),this.register(function(e){return new g(e)}),this.register(function(e){return new v(e)}),this.register(function(e){return new c(e)}),this.register(function(e){return new x(e)}),this.register(function(e){return new p(e)}),this.register(function(e){return new _(e)}),this.register(function(e){return new T(e)}),this.register(function(e){return new l(e)}),this.register(function(e){return new E(e)}),this.register(function(e){return new w(e)})}load(e,t,i,r){let a,n=this;if(""!==this.resourcePath)a=this.resourcePath;else if(""!==this.path){let t=s.r6x.extractUrlBase(e);a=s.r6x.resolveURL(t,this.path)}else a=s.r6x.extractUrlBase(e);this.manager.itemStart(e);let o=function(t){r?r(t):console.error(t),n.manager.itemError(e),n.manager.itemEnd(e)},l=new s.Y9S(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(i){try{n.parse(i,a,function(i){t(i),n.manager.itemEnd(e)},o)}catch(e){o(e)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return -1===this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.push(e),this}unregister(e){return -1!==this.pluginCallbacks.indexOf(e)&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r,a={},n={},l=new TextDecoder;if("string"==typeof e)r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===P){try{a[o.KHR_BINARY_GLTF]=new A(e)}catch(e){s&&s(e);return}r=JSON.parse(a[o.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(void 0===r.asset||r.asset.version[0]<2){s&&s(Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new q(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let e=0;e<this.pluginCallbacks.length;e++){let t=this.pluginCallbacks[e](c);t.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),n[t.name]=t,a[t.name]=!0}if(r.extensionsUsed)for(let e=0;e<r.extensionsUsed.length;++e){let t=r.extensionsUsed[e],i=r.extensionsRequired||[];switch(t){case o.KHR_MATERIALS_UNLIT:a[t]=new h;break;case o.KHR_DRACO_MESH_COMPRESSION:a[t]=new C(r,this.dracoLoader);break;case o.KHR_TEXTURE_TRANSFORM:a[t]=new y;break;case o.KHR_MESH_QUANTIZATION:a[t]=new N;break;default:i.indexOf(t)>=0&&void 0===n[t]&&console.warn('THREE.GLTFLoader: Unknown extension "'+t+'".')}}c.setExtensions(a),c.setPlugins(n),c.parse(i,s)}parseAsync(e,t){let i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function n(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}let o={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class l{constructor(e){this.parser=e,this.name=o.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){let s=t[i];s.extensions&&s.extensions[this.name]&&void 0!==s.extensions[this.name].light&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t,i=this.parser,r="light:"+e,a=i.cache.get(r);if(a)return a;let n=i.json,o=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e],l=new s.Q1f(0xffffff);void 0!==o.color&&l.setRGB(o.color[0],o.color[1],o.color[2],s.Zr2);let h=void 0!==o.range?o.range:0;switch(o.type){case"directional":(t=new s.ZyN(l)).target.position.set(0,0,-1),t.add(t.target);break;case"point":(t=new s.HiM(l)).distance=h;break;case"spot":(t=new s.nCl(l)).distance=h,o.spot=o.spot||{},o.spot.innerConeAngle=void 0!==o.spot.innerConeAngle?o.spot.innerConeAngle:0,o.spot.outerConeAngle=void 0!==o.spot.outerConeAngle?o.spot.outerConeAngle:Math.PI/4,t.angle=o.spot.outerConeAngle,t.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,t.target.position.set(0,0,-1),t.add(t.target);break;default:throw Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return t.position.set(0,0,0),z(t,o),void 0!==o.intensity&&(t.intensity=o.intensity),t.name=i.createUniqueName(o.name||"light_"+e),a=Promise.resolve(t),i.cache.add(r,a),a}getDependency(e,t){if("light"===e)return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,s=i.json.nodes[e],r=(s.extensions&&s.extensions[this.name]||{}).light;return void 0===r?null:this._loadLight(r).then(function(e){return i._getNodeRef(t.cache,r,e)})}}class h{constructor(){this.name=o.KHR_MATERIALS_UNLIT}getMaterialType(){return s.V9B}extendParams(e,t,i){let r=[];e.color=new s.Q1f(1,1,1),e.opacity=1;let a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){let t=a.baseColorFactor;e.color.setRGB(t[0],t[1],t[2],s.Zr2),e.opacity=t[3]}void 0!==a.baseColorTexture&&r.push(i.assignTexture(e,"map",a.baseColorTexture,s.er$))}return Promise.all(r)}}class c{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return void 0!==s&&(t.emissiveIntensity=s),Promise.resolve()}}class u{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];if(void 0!==n.clearcoatFactor&&(t.clearcoat=n.clearcoatFactor),void 0!==n.clearcoatTexture&&a.push(i.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),void 0!==n.clearcoatRoughnessFactor&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),void 0!==n.clearcoatRoughnessTexture&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),void 0!==n.clearcoatNormalTexture&&(a.push(i.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),void 0!==n.clearcoatNormalTexture.scale)){let e=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new s.I9Y(e,e)}return Promise.all(a)}}class d{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_DISPERSION}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=void 0!==s.dispersion?s.dispersion:0,Promise.resolve()}}class p{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return void 0!==a.iridescenceFactor&&(t.iridescence=a.iridescenceFactor),void 0!==a.iridescenceTexture&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),void 0!==a.iridescenceIor&&(t.iridescenceIOR=a.iridescenceIor),void 0===t.iridescenceThicknessRange&&(t.iridescenceThicknessRange=[100,400]),void 0!==a.iridescenceThicknessMinimum&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),void 0!==a.iridescenceThicknessMaximum&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),void 0!==a.iridescenceThicknessTexture&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class f{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_SHEEN}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[];t.sheenColor=new s.Q1f(0,0,0),t.sheenRoughness=0,t.sheen=1;let n=r.extensions[this.name];if(void 0!==n.sheenColorFactor){let e=n.sheenColorFactor;t.sheenColor.setRGB(e[0],e[1],e[2],s.Zr2)}return void 0!==n.sheenRoughnessFactor&&(t.sheenRoughness=n.sheenRoughnessFactor),void 0!==n.sheenColorTexture&&a.push(i.assignTexture(t,"sheenColorMap",n.sheenColorTexture,s.er$)),void 0!==n.sheenRoughnessTexture&&a.push(i.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(a)}}class m{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return void 0!==a.transmissionFactor&&(t.transmission=a.transmissionFactor),void 0!==a.transmissionTexture&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class g{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_VOLUME}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];t.thickness=void 0!==n.thicknessFactor?n.thicknessFactor:0,void 0!==n.thicknessTexture&&a.push(i.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let o=n.attenuationColor||[1,1,1];return t.attenuationColor=new s.Q1f().setRGB(o[0],o[1],o[2],s.Zr2),Promise.all(a)}}class v{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_IOR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=void 0!==s.ior?s.ior:1.5,Promise.resolve()}}class x{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_SPECULAR}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();let a=[],n=r.extensions[this.name];t.specularIntensity=void 0!==n.specularFactor?n.specularFactor:1,void 0!==n.specularTexture&&a.push(i.assignTexture(t,"specularIntensityMap",n.specularTexture));let o=n.specularColorFactor||[1,1,1];return t.specularColor=new s.Q1f().setRGB(o[0],o[1],o[2],s.Zr2),void 0!==n.specularColorTexture&&a.push(i.assignTexture(t,"specularColorMap",n.specularColorTexture,s.er$)),Promise.all(a)}}class T{constructor(e){this.parser=e,this.name=o.EXT_MATERIALS_BUMP}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=void 0!==a.bumpFactor?a.bumpFactor:1,void 0!==a.bumpTexture&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class _{constructor(e){this.parser=e,this.name=o.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?s.uSd:null}extendMaterialParams(e,t){let i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return void 0!==a.anisotropyStrength&&(t.anisotropy=a.anisotropyStrength),void 0!==a.anisotropyRotation&&(t.anisotropyRotation=a.anisotropyRotation),void 0!==a.anisotropyTexture&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class M{constructor(e){this.parser=e,this.name=o.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a)if(!(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0))return null;else throw Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return t.loadTextureImage(e,r.source,a)}}class R{constructor(e){this.parser=e,this.name=o.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],n=s.images[a.source],o=i.textureLoader;if(n.uri){let e=i.options.manager.getHandler(n.uri);null!==e&&(o=e)}return i.loadTextureImage(e,a.source,o)}}class S{constructor(e){this.parser=e,this.name=o.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],n=s.images[a.source],o=i.textureLoader;if(n.uri){let e=i.options.manager.getHandler(n.uri);null!==e&&(o=e)}return i.loadTextureImage(e,a.source,o)}}class E{constructor(e){this.name=o.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(!i.extensions||!i.extensions[this.name])return null;{let e=i.extensions[this.name],s=this.parser.getDependency("buffer",e.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported)if(!(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0))return null;else throw Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return s.then(function(t){let i=e.byteOffset||0,s=e.byteLength||0,a=e.count,n=e.byteStride,o=new Uint8Array(t,i,s);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(a,n,o,e.mode,e.filter).then(function(e){return e.buffer}):r.ready.then(function(){let t=new ArrayBuffer(a*n);return r.decodeGltfBuffer(new Uint8Array(t),a,n,o,e.mode,e.filter),t})})}}}class w{constructor(e){this.name=o.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||void 0===i.mesh)return null;for(let e of t.meshes[i.mesh].primitives)if(e.mode!==D.TRIANGLES&&e.mode!==D.TRIANGLE_STRIP&&e.mode!==D.TRIANGLE_FAN&&void 0!==e.mode)return null;let r=i.extensions[this.name].attributes,a=[],n={};for(let e in r)a.push(this.parser.getDependency("accessor",r[e]).then(t=>(n[e]=t,n[e])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(e=>{let t=e.pop(),i=t.isGroup?t.children:[t],r=e[0].count,a=[];for(let e of i){let t=new s.kn4,i=new s.Pq0,o=new s.PTz,l=new s.Pq0(1,1,1),h=new s.ZLX(e.geometry,e.material,r);for(let e=0;e<r;e++)n.TRANSLATION&&i.fromBufferAttribute(n.TRANSLATION,e),n.ROTATION&&o.fromBufferAttribute(n.ROTATION,e),n.SCALE&&l.fromBufferAttribute(n.SCALE,e),h.setMatrixAt(e,t.compose(i,o,l));for(let t in n)if("_COLOR_0"===t){let e=n[t];h.instanceColor=new s.uWO(e.array,e.itemSize,e.normalized)}else"TRANSLATION"!==t&&"ROTATION"!==t&&"SCALE"!==t&&e.geometry.setAttribute(t,n[t]);s.B69.prototype.copy.call(h,e),this.parser.assignFinalMaterial(h),a.push(h)}return t.isGroup?(t.clear(),t.add(...a),t):a[0]}))}}let P="glTF";class A{constructor(e){this.name=o.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,12),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==P)throw Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-12,r=new DataView(e,12);let a=0;for(;a<s;){const t=r.getUint32(a,!0);a+=4;const s=r.getUint32(a,!0);if(a+=4,0x4e4f534a===s){const s=new Uint8Array(e,12+a,t);this.content=i.decode(s)}else if(5130562===s){const i=12+a;this.body=e.slice(i,i+t)}a+=t}if(null===this.content)throw Error("THREE.GLTFLoader: JSON content not found.")}}class C{constructor(e,t){if(!t)throw Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=o.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,r=this.dracoLoader,a=e.extensions[this.name].bufferView,n=e.extensions[this.name].attributes,o={},l={},h={};for(let e in n)o[k[e]||e.toLowerCase()]=n[e];for(let t in e.attributes){let s=k[t]||t.toLowerCase();if(void 0!==n[t]){let r=i.accessors[e.attributes[t]],a=O[r.componentType];h[s]=a.name,l[s]=!0===r.normalized}}return t.getDependency("bufferView",a).then(function(e){return new Promise(function(t,i){r.decodeDracoFile(e,function(e){for(let t in e.attributes){let i=e.attributes[t],s=l[t];void 0!==s&&(i.normalized=s)}t(e)},o,h,s.Zr2,i)})})}}class y{constructor(){this.name=o.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(void 0===t.texCoord||t.texCoord===e.channel)&&void 0===t.offset&&void 0===t.rotation&&void 0===t.scale||(e=e.clone(),void 0!==t.texCoord&&(e.channel=t.texCoord),void 0!==t.offset&&e.offset.fromArray(t.offset),void 0!==t.rotation&&(e.rotation=t.rotation),void 0!==t.scale&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class N{constructor(){this.name=o.KHR_MESH_QUANTIZATION}}class b extends s.lGw{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let e=0;e!==s;e++)t[e]=i[r+e];return t}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,n=this.valueSize,o=2*n,l=3*n,h=s-t,c=(i-t)/h,u=c*c,d=u*c,p=e*l,f=p-l,m=-2*d+3*u,g=d-u,v=1-m,x=g-u+c;for(let e=0;e!==n;e++){let t=a[f+e+n],i=a[f+e+o]*h,s=a[p+e+n],l=a[p+e]*h;r[e]=v*t+x*i+m*s+g*l}return r}}let I=new s.PTz;class L extends b{interpolate_(e,t,i,s){let r=super.interpolate_(e,t,i,s);return I.fromArray(r).normalize().toArray(r),r}}let D={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},O={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},U={9728:s.hxR,9729:s.k6q,9984:s.pHI,9985:s.kRr,9986:s.Cfg,9987:s.$_I},F={33071:s.ghU,33648:s.kTW,10497:s.GJx},H={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},k={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},B={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},V={CUBICSPLINE:void 0,LINEAR:s.PJ3,STEP:s.ljd};function G(e,t,i){for(let s in i.extensions)void 0===e[s]&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[s]=i.extensions[s])}function z(e,t){void 0!==t.extras&&("object"==typeof t.extras?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function j(e){let t="",i=Object.keys(e).sort();for(let s=0,r=i.length;s<r;s++)t+=i[s]+":"+e[i[s]]+";";return t}function K(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}let X=new s.kn4;class q{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new n,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,a=!1,o=-1;if("u">typeof navigator){const e=navigator.userAgent;i=!0===/^((?!chrome|android).)*safari/i.test(e);const t=e.match(/Version\/(\d+)/);r=i&&t?parseInt(t[1],10):-1,o=(a=e.indexOf("Firefox")>-1)?e.match(/Firefox\/([0-9]+)\./)[1]:-1}"u"<typeof createImageBitmap||i&&r<17||a&&o<98?this.textureLoader=new s.Tap(this.options.manager):this.textureLoader=new s.Kzg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new s.Y9S(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),"use-credentials"===this.options.crossOrigin&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(e){return e._markDefs&&e._markDefs()}),Promise.all(this._invokeAll(function(e){return e.beforeRoot&&e.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(t){let a={scene:t[0][s.scene||0],scenes:t[0],animations:t[1],cameras:t[2],asset:s.asset,parser:i,userData:{}};return G(r,a,s),z(a,s),Promise.all(i._invokeAll(function(e){return e.afterRoot&&e.afterRoot(a)})).then(function(){for(let e of a.scenes)e.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let s=t[i].joints;for(let t=0,i=s.length;t<i;t++)e[s[t]].isBone=!0}for(let t=0,s=e.length;t<s;t++){let s=e[t];void 0!==s.mesh&&(this._addNodeRef(this.meshCache,s.mesh),void 0!==s.skin&&(i[s.mesh].isSkinnedMesh=!0)),void 0!==s.camera&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){void 0!==t&&(void 0===e.refs[t]&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let s=i.clone(),r=(e,t)=>{let i=this.associations.get(e);for(let[s,a]of(null!=i&&this.associations.set(t,i),e.children.entries()))r(a,t.children[s])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let s=e(t[i]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(e){return e.loadNode&&e.loadNode(t)});break;case"mesh":s=this._invokeOne(function(e){return e.loadMesh&&e.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(e){return e.loadBufferView&&e.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(e){return e.loadMaterial&&e.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(e){return e.loadTexture&&e.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(e){return e.loadAnimation&&e.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(!(s=this._invokeOne(function(i){return i!=this&&i.getDependency&&i.getDependency(e,t)})))throw Error("Unknown type: "+e)}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this;t=Promise.all((this.json[e+("mesh"===e?"es":"s")]||[]).map(function(t,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&"arraybuffer"!==t.type)throw Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(void 0===t.uri&&0===e)return Promise.resolve(this.extensions[o.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(e,a){i.load(s.r6x.resolveURL(t.uri,r.path),e,void 0,function(){a(Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(e){let i=t.byteLength||0,s=t.byteOffset||0;return e.slice(s,s+i)})}loadAccessor(e){let t=this,i=this.json,r=this.json.accessors[e];if(void 0===r.bufferView&&void 0===r.sparse){let e=H[r.type],t=O[r.componentType],i=!0===r.normalized,a=new t(r.count*e);return Promise.resolve(new s.THS(a,e,i))}let a=[];return void 0!==r.bufferView?a.push(this.getDependency("bufferView",r.bufferView)):a.push(null),void 0!==r.sparse&&(a.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(a).then(function(e){let a,n,o=e[0],l=H[r.type],h=O[r.componentType],c=h.BYTES_PER_ELEMENT,u=c*l,d=r.byteOffset||0,p=void 0!==r.bufferView?i.bufferViews[r.bufferView].byteStride:void 0,f=!0===r.normalized;if(p&&p!==u){let e=Math.floor(d/p),i="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+e+":"+r.count,u=t.cache.get(i);u||(a=new h(o,e*p,r.count*p/c),u=new s.eB$(a,p/c),t.cache.add(i,u)),n=new s.eHs(u,l,d%p/c,f)}else a=null===o?new h(r.count*l):new h(o,d,r.count*l),n=new s.THS(a,l,f);if(void 0!==r.sparse){let t=H.SCALAR,i=O[r.sparse.indices.componentType],a=r.sparse.indices.byteOffset||0,c=r.sparse.values.byteOffset||0,u=new i(e[1],a,r.sparse.count*t),d=new h(e[2],c,r.sparse.count*l);null!==o&&(n=new s.THS(n.array.slice(),n.itemSize,n.normalized)),n.normalized=!1;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(n.setX(t,d[e*l]),l>=2&&n.setY(t,d[e*l+1]),l>=3&&n.setZ(t,d[e*l+2]),l>=4&&n.setW(t,d[e*l+3]),l>=5)throw Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}n.normalized=f}return n})}loadTexture(e){let t=this.json,i=this.options,s=t.textures[e].source,r=t.images[s],a=this.textureLoader;if(r.uri){let e=i.manager.getHandler(r.uri);null!==e&&(a=e)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){let r=this,a=this.json,n=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+n.sampler;if(this.textureCache[l])return this.textureCache[l];let h=this.loadImageSource(t,i).then(function(t){t.flipY=!1,t.name=n.name||o.name||"",""===t.name&&"string"==typeof o.uri&&!1===o.uri.startsWith("data:image/")&&(t.name=o.uri);let i=(a.samplers||{})[n.sampler]||{};return t.magFilter=U[i.magFilter]||s.k6q,t.minFilter=U[i.minFilter]||s.$_I,t.wrapS=F[i.wrapS]||s.GJx,t.wrapT=F[i.wrapT]||s.GJx,t.generateMipmaps=!t.isCompressedTexture&&t.minFilter!==s.hxR&&t.minFilter!==s.k6q,r.associations.set(t,{textures:e}),t}).catch(function(){return null});return this.textureCache[l]=h,h}loadImageSource(e,t){let i=this.json,r=this.options;if(void 0!==this.sourceCache[e])return this.sourceCache[e].then(e=>e.clone());let a=i.images[e],n=self.URL||self.webkitURL,o=a.uri||"",l=!1;if(void 0!==a.bufferView)o=this.getDependency("bufferView",a.bufferView).then(function(e){l=!0;let t=new Blob([e],{type:a.mimeType});return o=n.createObjectURL(t)});else if(void 0===a.uri)throw Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(o).then(function(e){return new Promise(function(i,a){let n=i;!0===t.isImageBitmapLoader&&(n=function(e){let t=new s.gPd(e);t.needsUpdate=!0,i(t)}),t.load(s.r6x.resolveURL(e,r.path),n,void 0,a)})}).then(function(e){var t;return!0===l&&n.revokeObjectURL(o),z(e,a),e.userData.mimeType=a.mimeType||((t=a.uri).search(/\.jpe?g($|\?)/i)>0||0===t.search(/^data\:image\/jpeg/)?"image/jpeg":t.search(/\.webp($|\?)/i)>0||0===t.search(/^data\:image\/webp/)?"image/webp":t.search(/\.ktx2($|\?)/i)>0||0===t.search(/^data\:image\/ktx2/)?"image/ktx2":"image/png"),e}).catch(function(e){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),e});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(void 0!==i.texCoord&&i.texCoord>0&&((a=a.clone()).channel=i.texCoord),r.extensions[o.KHR_TEXTURE_TRANSFORM]){let e=void 0!==i.extensions?i.extensions[o.KHR_TEXTURE_TRANSFORM]:void 0;if(e){let t=r.associations.get(a);a=r.extensions[o.KHR_TEXTURE_TRANSFORM].extendTexture(a,e),r.associations.set(a,t)}}return void 0!==s&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,r=void 0===t.attributes.tangent,a=void 0!==t.attributes.color,n=void 0===t.attributes.normal;if(e.isPoints){let e="PointsMaterial:"+i.uuid,t=this.cache.get(e);t||(t=new s.BH$,s.imn.prototype.copy.call(t,i),t.color.copy(i.color),t.map=i.map,t.sizeAttenuation=!1,this.cache.add(e,t)),i=t}else if(e.isLine){let e="LineBasicMaterial:"+i.uuid,t=this.cache.get(e);t||(t=new s.mrM,s.imn.prototype.copy.call(t,i),t.color.copy(i.color),t.map=i.map,this.cache.add(e,t)),i=t}if(r||a||n){let e="ClonedMaterial:"+i.uuid+":";r&&(e+="derivative-tangents:"),a&&(e+="vertex-colors:"),n&&(e+="flat-shading:");let t=this.cache.get(e);t||(t=i.clone(),a&&(t.vertexColors=!0),n&&(t.flatShading=!0),r&&(t.normalScale&&(t.normalScale.y*=-1),t.clearcoatNormalScale&&(t.clearcoatNormalScale.y*=-1)),this.cache.add(e,t),this.associations.set(t,this.associations.get(i))),i=t}e.material=i}getMaterialType(){return s._4j}loadMaterial(e){let t,i=this,r=this.json,a=this.extensions,n=r.materials[e],l={},h=n.extensions||{},c=[];if(h[o.KHR_MATERIALS_UNLIT]){let e=a[o.KHR_MATERIALS_UNLIT];t=e.getMaterialType(),c.push(e.extendParams(l,n,i))}else{let r=n.pbrMetallicRoughness||{};if(l.color=new s.Q1f(1,1,1),l.opacity=1,Array.isArray(r.baseColorFactor)){let e=r.baseColorFactor;l.color.setRGB(e[0],e[1],e[2],s.Zr2),l.opacity=e[3]}void 0!==r.baseColorTexture&&c.push(i.assignTexture(l,"map",r.baseColorTexture,s.er$)),l.metalness=void 0!==r.metallicFactor?r.metallicFactor:1,l.roughness=void 0!==r.roughnessFactor?r.roughnessFactor:1,void 0!==r.metallicRoughnessTexture&&(c.push(i.assignTexture(l,"metalnessMap",r.metallicRoughnessTexture)),c.push(i.assignTexture(l,"roughnessMap",r.metallicRoughnessTexture))),t=this._invokeOne(function(t){return t.getMaterialType&&t.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(t){return t.extendMaterialParams&&t.extendMaterialParams(e,l)})))}!0===n.doubleSided&&(l.side=s.$EB);let u=n.alphaMode||"OPAQUE";if("BLEND"===u?(l.transparent=!0,l.depthWrite=!1):(l.transparent=!1,"MASK"===u&&(l.alphaTest=void 0!==n.alphaCutoff?n.alphaCutoff:.5)),void 0!==n.normalTexture&&t!==s.V9B&&(c.push(i.assignTexture(l,"normalMap",n.normalTexture)),l.normalScale=new s.I9Y(1,1),void 0!==n.normalTexture.scale)){let e=n.normalTexture.scale;l.normalScale.set(e,e)}if(void 0!==n.occlusionTexture&&t!==s.V9B&&(c.push(i.assignTexture(l,"aoMap",n.occlusionTexture)),void 0!==n.occlusionTexture.strength&&(l.aoMapIntensity=n.occlusionTexture.strength)),void 0!==n.emissiveFactor&&t!==s.V9B){let e=n.emissiveFactor;l.emissive=new s.Q1f().setRGB(e[0],e[1],e[2],s.Zr2)}return void 0!==n.emissiveTexture&&t!==s.V9B&&c.push(i.assignTexture(l,"emissiveMap",n.emissiveTexture,s.er$)),Promise.all(c).then(function(){let s=new t(l);return n.name&&(s.name=n.name),z(s,n),i.associations.set(s,{materials:e}),n.extensions&&G(a,s,n),s})}createUniqueName(e){let t=s.Nwf.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,r=this.primitiveCache,a=[];for(let n=0,l=e.length;n<l;n++){let l=e[n],h=function(e){let t,i=e.extensions&&e.extensions[o.KHR_DRACO_MESH_COMPRESSION];if(t=i?"draco:"+i.bufferView+":"+i.indices+":"+j(i.attributes):e.indices+":"+j(e.attributes)+":"+e.mode,void 0!==e.targets)for(let i=0,s=e.targets.length;i<s;i++)t+=":"+j(e.targets[i]);return t}(l),c=r[h];if(c)a.push(c.promise);else{let e;e=l.extensions&&l.extensions[o.KHR_DRACO_MESH_COMPRESSION]?function(e){return i[o.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e,t).then(function(i){return Z(i,e,t)})}(l):Z(new s.LoY,l,t),r[h]={primitive:l,promise:e},a.push(e)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,a=this.extensions,n=i.meshes[e],o=n.primitives,l=[];for(let e=0,t=o.length;e<t;e++){var h;let t=void 0===o[e].material?(void 0===(h=this.cache).DefaultMaterial&&(h.DefaultMaterial=new s._4j({color:0xffffff,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:s.hB5})),h.DefaultMaterial):this.getDependency("material",o[e].material);l.push(t)}return l.push(t.loadGeometries(o)),Promise.all(l).then(function(i){let l=i.slice(0,i.length-1),h=i[i.length-1],c=[];for(let i=0,u=h.length;i<u;i++){let u,d=h[i],p=o[i],f=l[i];if(p.mode===D.TRIANGLES||p.mode===D.TRIANGLE_STRIP||p.mode===D.TRIANGLE_FAN||void 0===p.mode)!0===(u=!0===n.isSkinnedMesh?new s.I46(d,f):new s.eaF(d,f)).isSkinnedMesh&&u.normalizeSkinWeights(),p.mode===D.TRIANGLE_STRIP?u.geometry=r(u.geometry,s.O49):p.mode===D.TRIANGLE_FAN&&(u.geometry=r(u.geometry,s.rYR));else if(p.mode===D.LINES)u=new s.DXC(d,f);else if(p.mode===D.LINE_STRIP)u=new s.N1A(d,f);else if(p.mode===D.LINE_LOOP)u=new s.FCc(d,f);else if(p.mode===D.POINTS)u=new s.ONl(d,f);else throw Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(u.geometry.morphAttributes).length>0&&function(e,t){if(e.updateMorphTargets(),void 0!==t.weights)for(let i=0,s=t.weights.length;i<s;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let t=0,s=i.length;t<s;t++)e.morphTargetDictionary[i[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}(u,n),u.name=t.createUniqueName(n.name||"mesh_"+e),z(u,n),p.extensions&&G(a,u,p),t.assignFinalMaterial(u),c.push(u)}for(let i=0,s=c.length;i<s;i++)t.associations.set(c[i],{meshes:e,primitives:i});if(1===c.length)return n.extensions&&G(a,c[0],n),c[0];let u=new s.YJl;n.extensions&&G(a,u,n),t.associations.set(u,{meshes:e});for(let e=0,t=c.length;e<t;e++)u.add(c[e]);return u})}loadCamera(e){let t,i=this.json.cameras[e],r=i[i.type];return r?("perspective"===i.type?t=new s.ubm(s.cj9.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):"orthographic"===i.type&&(t=new s.qUd(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),z(t,i),Promise.resolve(t)):void console.warn("THREE.GLTFLoader: Missing camera parameters.")}loadSkin(e){let t=this.json.skins[e],i=[];for(let e=0,s=t.joints.length;e<s;e++)i.push(this._loadNodeShallow(t.joints[e]));return void 0!==t.inverseBindMatrices?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(e){let i=e.pop(),r=[],a=[];for(let n=0,o=e.length;n<o;n++){let o=e[n];if(o){r.push(o);let e=new s.kn4;null!==i&&e.fromArray(i.array,16*n),a.push(e)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[n])}return new s.EAD(r,a)})}loadAnimation(e){let t=this.json,i=this,r=t.animations[e],a=r.name?r.name:"animation_"+e,n=[],o=[],l=[],h=[],c=[];for(let e=0,t=r.channels.length;e<t;e++){let t=r.channels[e],i=r.samplers[t.sampler],s=t.target,a=s.node,u=void 0!==r.parameters?r.parameters[i.input]:i.input,d=void 0!==r.parameters?r.parameters[i.output]:i.output;void 0!==s.node&&(n.push(this.getDependency("node",a)),o.push(this.getDependency("accessor",u)),l.push(this.getDependency("accessor",d)),h.push(i),c.push(s))}return Promise.all([Promise.all(n),Promise.all(o),Promise.all(l),Promise.all(h),Promise.all(c)]).then(function(e){let t=e[0],n=e[1],o=e[2],l=e[3],h=e[4],c=[];for(let e=0,s=t.length;e<s;e++){let s=t[e],r=n[e],a=o[e],u=l[e],d=h[e];if(void 0===s)continue;s.updateMatrix&&s.updateMatrix();let p=i._createAnimationTracks(s,r,a,u,d);if(p)for(let e=0;e<p.length;e++)c.push(p[e])}let u=new s.tz3(a,void 0,c);return z(u,r),u})}createNodeMesh(e){let t=this.json,i=this,s=t.nodes[e];return void 0===s.mesh?null:i.getDependency("mesh",s.mesh).then(function(e){let t=i._getNodeRef(i.meshCache,s.mesh,e);return void 0!==s.weights&&t.traverse(function(e){if(e.isMesh)for(let t=0,i=s.weights.length;t<i;t++)e.morphTargetInfluences[t]=s.weights[t]}),t})}loadNode(e){let t=this.json.nodes[e],i=this._loadNodeShallow(e),s=[],r=t.children||[];for(let e=0,t=r.length;e<t;e++)s.push(this.getDependency("node",r[e]));let a=void 0===t.skin?Promise.resolve(null):this.getDependency("skin",t.skin);return Promise.all([i,Promise.all(s),a]).then(function(e){let t=e[0],i=e[1],s=e[2];null!==s&&t.traverse(function(e){e.isSkinnedMesh&&e.bind(s,X)});for(let e=0,s=i.length;e<s;e++)t.add(i[e]);return t})}_loadNodeShallow(e){let t=this.json,i=this.extensions,r=this;if(void 0!==this.nodeCache[e])return this.nodeCache[e];let a=t.nodes[e],n=a.name?r.createUniqueName(a.name):"",o=[],l=r._invokeOne(function(t){return t.createNodeMesh&&t.createNodeMesh(e)});return l&&o.push(l),void 0!==a.camera&&o.push(r.getDependency("camera",a.camera).then(function(e){return r._getNodeRef(r.cameraCache,a.camera,e)})),r._invokeAll(function(t){return t.createNodeAttachment&&t.createNodeAttachment(e)}).forEach(function(e){o.push(e)}),this.nodeCache[e]=Promise.all(o).then(function(t){let o;if((o=!0===a.isBone?new s.$Kf:t.length>1?new s.YJl:1===t.length?t[0]:new s.B69)!==t[0])for(let e=0,i=t.length;e<i;e++)o.add(t[e]);if(a.name&&(o.userData.name=a.name,o.name=n),z(o,a),a.extensions&&G(i,o,a),void 0!==a.matrix){let e=new s.kn4;e.fromArray(a.matrix),o.applyMatrix4(e)}else void 0!==a.translation&&o.position.fromArray(a.translation),void 0!==a.rotation&&o.quaternion.fromArray(a.rotation),void 0!==a.scale&&o.scale.fromArray(a.scale);if(r.associations.has(o)){if(void 0!==a.mesh&&r.meshCache.refs[a.mesh]>1){let e=r.associations.get(o);r.associations.set(o,{...e})}}else r.associations.set(o,{});return r.associations.get(o).nodes=e,o}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],r=this,a=new s.YJl;i.name&&(a.name=r.createUniqueName(i.name)),z(a,i),i.extensions&&G(t,a,i);let n=i.nodes||[],o=[];for(let e=0,t=n.length;e<t;e++)o.push(r.getDependency("node",n[e]));return Promise.all(o).then(function(e){for(let t=0,i=e.length;t<i;t++)a.add(e[t]);return r.associations=(e=>{let t=new Map;for(let[e,i]of r.associations)(e instanceof s.imn||e instanceof s.gPd)&&t.set(e,i);return e.traverse(e=>{let i=r.associations.get(e);null!=i&&t.set(e,i)}),t})(a),a})}_createAnimationTracks(e,t,i,r,a){let n,o=[],l=e.name?e.name:e.uuid,h=[];switch(B[a.path]===B.weights?e.traverse(function(e){e.morphTargetInfluences&&h.push(e.name?e.name:e.uuid)}):h.push(l),B[a.path]){case B.weights:n=s.Hit;break;case B.rotation:n=s.MBL;break;case B.translation:case B.scale:n=s.RiT;break;default:n=1===i.itemSize?s.Hit:s.RiT}let c=void 0!==r.interpolation?V[r.interpolation]:s.PJ3,u=this._getArrayFromAccessor(i);for(let e=0,i=h.length;e<i;e++){let i=new n(h[e]+"."+B[a.path],t.array,u,c);"CUBICSPLINE"===r.interpolation&&this._createCubicSplineTrackInterpolant(i),o.push(i)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let e=K(t.constructor),i=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)i[s]=t[s]*e;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(e){return new(this instanceof s.MBL?L:b)(this.times,this.values,this.getValueSize()/3,e)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Z(e,t,i){let r=t.attributes,a=[];for(let t in r){let s=k[t]||t.toLowerCase();s in e.attributes||a.push(function(t,s){return i.getDependency("accessor",t).then(function(t){e.setAttribute(s,t)})}(r[t],s))}if(void 0!==t.indices&&!e.index){let s=i.getDependency("accessor",t.indices).then(function(t){e.setIndex(t)});a.push(s)}return s.ppV.workingColorSpace!==s.Zr2&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${s.ppV.workingColorSpace}" not supported.`),z(e,t),!function(e,t,i){let r=t.attributes,a=new s.NRn;if(void 0===r.POSITION)return;{let e=i.json.accessors[r.POSITION],t=e.min,n=e.max;if(void 0===t||void 0===n)return console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");if(a.set(new s.Pq0(t[0],t[1],t[2]),new s.Pq0(n[0],n[1],n[2])),e.normalized){let t=K(O[e.componentType]);a.min.multiplyScalar(t),a.max.multiplyScalar(t)}}let n=t.targets;if(void 0!==n){let e=new s.Pq0,t=new s.Pq0;for(let s=0,r=n.length;s<r;s++){let r=n[s];if(void 0!==r.POSITION){let s=i.json.accessors[r.POSITION],a=s.min,n=s.max;if(void 0!==a&&void 0!==n){if(t.setX(Math.max(Math.abs(a[0]),Math.abs(n[0]))),t.setY(Math.max(Math.abs(a[1]),Math.abs(n[1]))),t.setZ(Math.max(Math.abs(a[2]),Math.abs(n[2]))),s.normalized){let e=K(O[s.componentType]);t.multiplyScalar(e)}e.max(t)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(e)}e.boundingBox=a;let o=new s.iyt;a.getCenter(o.center),o.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=o}(e,t,i),Promise.all(a).then(function(){return void 0!==t.targets?function(e,t,i){let s=!1,r=!1,a=!1;for(let e=0,i=t.length;e<i;e++){let i=t[e];if(void 0!==i.POSITION&&(s=!0),void 0!==i.NORMAL&&(r=!0),void 0!==i.COLOR_0&&(a=!0),s&&r&&a)break}if(!s&&!r&&!a)return Promise.resolve(e);let n=[],o=[],l=[];for(let h=0,c=t.length;h<c;h++){let c=t[h];if(s){let t=void 0!==c.POSITION?i.getDependency("accessor",c.POSITION):e.attributes.position;n.push(t)}if(r){let t=void 0!==c.NORMAL?i.getDependency("accessor",c.NORMAL):e.attributes.normal;o.push(t)}if(a){let t=void 0!==c.COLOR_0?i.getDependency("accessor",c.COLOR_0):e.attributes.color;l.push(t)}}return Promise.all([Promise.all(n),Promise.all(o),Promise.all(l)]).then(function(t){let i=t[0],n=t[1],o=t[2];return s&&(e.morphAttributes.position=i),r&&(e.morphAttributes.normal=n),a&&(e.morphAttributes.color=o),e.morphTargetsRelative=!0,e})}(e,t.targets,i):e})}},948:(e,t,i)=>{i.d(t,{F:()=>l,o:()=>r});var s=i(4910);class r{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let a=new s.qUd(-1,1,1,-1,0,1);class n extends s.LoY{constructor(){super(),this.setAttribute("position",new s.qtW([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new s.qtW([0,2,0,0,2,0],2))}}let o=new n;class l{constructor(e){this._mesh=new s.eaF(o,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},2370:(e,t,i)=>{i.d(t,{Z:()=>s});let s={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}},6992:(e,t,i)=>{i.d(t,{l:()=>r});var s=i(4910);class r extends s.Z58{constructor(){super();const e=new s.iNn;e.deleteAttribute("uv");const t=new s._4j({side:s.hsX}),i=new s._4j,r=new s.HiM(0xffffff,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const n=new s.eaF(e,t);n.position.set(-.757,13.219,.717),n.scale.set(31.713,28.305,28.591),this.add(n);const o=new s.ZLX(e,i,6),l=new s.B69;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),o.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),o.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),o.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),o.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),o.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),o.setMatrixAt(5,l.matrix),this.add(o);const h=new s.eaF(e,a(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const c=new s.eaF(e,a(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const u=new s.eaF(e,a(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const d=new s.eaF(e,a(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const p=new s.eaF(e,a(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const f=new s.eaF(e,a(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;for(let t of(this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))}),e))t.dispose()}}function a(e){return new s.G_z({color:0,emissive:0xffffff,emissiveIntensity:e})}},7137:(e,t,i)=>{i.d(t,{X:()=>n});var s=i(4910),r=i(948);let a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class n extends r.o{constructor(){super(),this.uniforms=s.LlO.clone(a.uniforms),this.material=new s.D$Q({name:a.name,uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this._fsQuad=new r.F(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},s.ppV.getTransfer(this._outputColorSpace)===s.KLL&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===s.kyO?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===s.Mjd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===s.nNL?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===s.FV?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===s.LAk?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===s.aJ8?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===s.g7M&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),!0===this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}},8291:(e,t,i)=>{i.d(t,{F:()=>d});var s=i(4910),r=i(948);let a={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new s.I9Y},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new s.kn4},cameraProjectionMatrixInverse:{value:new s.kn4},cameraWorldMatrix:{value:new s.kn4},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new s.Pq0(-1,-1,-1)},sceneBoxMax:{value:new s.Pq0(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},n={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},o={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`},l={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:h(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new s.I9Y},cameraProjectionMatrixInverse:{value:new s.kn4},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function h(e,t,i){let r=function(e,t,i){let r=[];for(let a=0;a<e;a++){let n=2*Math.PI*t*a/e,o=Math.pow(a/(e-1),i);r.push(new s.Pq0(Math.cos(n),Math.sin(n),o))}return r}(e,t,i),a="vec3[SAMPLES](";for(let t=0;t<e;t++){let i=r[t];a+=`vec3(${i.x}, ${i.y}, ${i.z})${t<e-1?",":")"}`}return a}var c=i(2370);class u{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(256*e.random());this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[255&e];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let i,s,r,a,n,o=.5*(Math.sqrt(3)-1)*(e+t),l=Math.floor(e+o),h=Math.floor(t+o),c=(3-Math.sqrt(3))/6,u=(l+h)*c,d=e-(l-u),p=t-(h-u);d>p?(a=1,n=0):(a=0,n=1);let f=d-a+c,m=p-n+c,g=d-1+2*c,v=p-1+2*c,x=255&l,T=255&h,_=this.perm[x+this.perm[T]]%12,M=this.perm[x+a+this.perm[T+n]]%12,R=this.perm[x+1+this.perm[T+1]]%12,S=.5-d*d-p*p;S<0?i=0:(S*=S,i=S*S*this._dot(this.grad3[_],d,p));let E=.5-f*f-m*m;E<0?s=0:(E*=E,s=E*E*this._dot(this.grad3[M],f,m));let w=.5-g*g-v*v;return w<0?r=0:(w*=w,r=w*w*this._dot(this.grad3[R],g,v)),70*(i+s+r)}noise3d(e,t,i){let s,r,a,n,o,l,h,c,u,d,p=1/3*(e+t+i),f=Math.floor(e+p),m=Math.floor(t+p),g=Math.floor(i+p),v=1/6*(f+m+g),x=e-(f-v),T=t-(m-v),_=i-(g-v);x>=T?T>=_?(o=1,l=0,h=0,c=1,u=1,d=0):(x>=_?(o=1,l=0,h=0):(o=0,l=0,h=1),c=1,u=0,d=1):T<_?(o=0,l=0,h=1,c=0,u=1,d=1):x<_?(o=0,l=1,h=0,c=0,u=1,d=1):(o=0,l=1,h=0,c=1,u=1,d=0);let M=x-o+1/6,R=T-l+1/6,S=_-h+1/6,E=x-c+1/6*2,w=T-u+1/6*2,P=_-d+1/6*2,A=x-1+1/6*3,C=T-1+1/6*3,y=_-1+1/6*3,N=255&f,b=255&m,I=255&g,L=this.perm[N+this.perm[b+this.perm[I]]]%12,D=this.perm[N+o+this.perm[b+l+this.perm[I+h]]]%12,O=this.perm[N+c+this.perm[b+u+this.perm[I+d]]]%12,U=this.perm[N+1+this.perm[b+1+this.perm[I+1]]]%12,F=.6-x*x-T*T-_*_;F<0?s=0:(F*=F,s=F*F*this._dot3(this.grad3[L],x,T,_));let H=.6-M*M-R*R-S*S;H<0?r=0:(H*=H,r=H*H*this._dot3(this.grad3[D],M,R,S));let k=.6-E*E-w*w-P*P;k<0?a=0:(k*=k,a=k*k*this._dot3(this.grad3[O],E,w,P));let B=.6-A*A-C*C-y*y;return B<0?n=0:(B*=B,n=B*B*this._dot3(this.grad3[U],A,C,y)),32*(s+r+a+n)}noise4d(e,t,i,s){let r,a,n,o,l,h=this.grad4,c=this.simplex,u=this.perm,d=(5-Math.sqrt(5))/20,p=(Math.sqrt(5)-1)/4*(e+t+i+s),f=Math.floor(e+p),m=Math.floor(t+p),g=Math.floor(i+p),v=Math.floor(s+p),x=(f+m+g+v)*d,T=e-(f-x),_=t-(m-x),M=i-(g-x),R=s-(v-x),S=32*(T>_)+16*(T>M)+8*(_>M)+4*(T>R)+2*(_>R)+ +(M>R),E=+(c[S][0]>=3),w=+(c[S][1]>=3),P=+(c[S][2]>=3),A=+(c[S][3]>=3),C=+(c[S][0]>=2),y=+(c[S][1]>=2),N=+(c[S][2]>=2),b=+(c[S][3]>=2),I=+(c[S][0]>=1),L=+(c[S][1]>=1),D=+(c[S][2]>=1),O=+(c[S][3]>=1),U=T-E+d,F=_-w+d,H=M-P+d,k=R-A+d,B=T-C+2*d,V=_-y+2*d,G=M-N+2*d,z=R-b+2*d,j=T-I+3*d,K=_-L+3*d,X=M-D+3*d,q=R-O+3*d,Z=T-1+4*d,W=_-1+4*d,Y=M-1+4*d,Q=R-1+4*d,J=255&f,$=255&m,ee=255&g,et=255&v,ei=u[J+u[$+u[ee+u[et]]]]%32,es=u[J+E+u[$+w+u[ee+P+u[et+A]]]]%32,er=u[J+C+u[$+y+u[ee+N+u[et+b]]]]%32,ea=u[J+I+u[$+L+u[ee+D+u[et+O]]]]%32,en=u[J+1+u[$+1+u[ee+1+u[et+1]]]]%32,eo=.6-T*T-_*_-M*M-R*R;eo<0?r=0:(eo*=eo,r=eo*eo*this._dot4(h[ei],T,_,M,R));let el=.6-U*U-F*F-H*H-k*k;el<0?a=0:(el*=el,a=el*el*this._dot4(h[es],U,F,H,k));let eh=.6-B*B-V*V-G*G-z*z;eh<0?n=0:(eh*=eh,n=eh*eh*this._dot4(h[er],B,V,G,z));let ec=.6-j*j-K*K-X*X-q*q;ec<0?o=0:(ec*=ec,o=ec*ec*this._dot4(h[ea],j,K,X,q));let eu=.6-Z*Z-W*W-Y*Y-Q*Q;return eu<0?l=0:(eu*=eu,l=eu*eu*this._dot4(h[en],Z,W,Y,Q)),27*(r+a+n+o+l)}_dot(e,t,i){return e[0]*t+e[1]*i}_dot3(e,t,i,s){return e[0]*t+e[1]*i+e[2]*s}_dot4(e,t,i,s,r){return e[0]*t+e[1]*i+e[2]*s+e[3]*r}}class d extends r.o{constructor(e,t,i=512,h=512,u,d,p){super(),this.width=i,this.height=h,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=function(e=5){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),i=function(e){let t=Math.floor(e)%2==0?Math.floor(e)+1:Math.floor(e),i=t*t,s=Array(i).fill(0),r=Math.floor(t/2),a=t-1;for(let e=1;e<=i;){if(-1===r&&a===t?(a=t-2,r=0):(a===t&&(a=0),r<0&&(r=t-1)),0!==s[r*t+a]){a-=2,r++;continue}s[r*t+a]=e++,a++,r--}return s}(t),r=i.length,a=new Uint8Array(4*r);for(let e=0;e<r;++e){let t=2*Math.PI*i[e]/r,n=new s.Pq0(Math.cos(t),Math.sin(t),0).normalize();a[4*e]=(.5*n.x+.5)*255,a[4*e+1]=(.5*n.y+.5)*255,a[4*e+2]=127,a[4*e+3]=255}let n=new s.GYF(a,t,t);return n.wrapS=s.GJx,n.wrapT=s.GJx,n.needsUpdate=!0,n}(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new s.nWS(this.width,this.height,{type:s.ix0}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new s.BKk({defines:Object.assign({},a.defines),uniforms:s.LlO.clone(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,blending:s.XIg,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=+!!this.camera.isPerspectiveCamera,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new s.qBx,this.normalMaterial.blending=s.XIg,this.pdMaterial=new s.BKk({defines:Object.assign({},l.defines),uniforms:s.LlO.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new s.BKk({defines:Object.assign({},n.defines),uniforms:s.LlO.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,blending:s.XIg}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new s.BKk({uniforms:s.LlO.clone(c.Z.uniforms),vertexShader:c.Z.vertexShader,fragmentShader:c.Z.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:s.wn6,blendDst:s.ojh,blendEquation:s.gO9,blendSrcAlpha:s.hdd,blendDstAlpha:s.ojh,blendEquationAlpha:s.gO9}),this.blendMaterial=new s.BKk({uniforms:s.LlO.clone(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:s.bCz,blendSrc:s.wn6,blendDst:s.ojh,blendEquation:s.gO9,blendSrcAlpha:s.hdd,blendDstAlpha:s.ojh,blendEquationAlpha:s.gO9}),this._fsQuad=new r.F(null),this._originalClearColor=new s.Q1f,this.setGBuffer(u?u.depthTexture:void 0,u?u.normalTexture:void 0),void 0!==d&&this.updateGtaoMaterial(d),void 0!==p&&this.updatePdMaterial(p)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){void 0!==e?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new s.VCu,this.depthTexture.format=s.dcC,this.depthTexture.type=s.V3x,this.normalRenderTarget=new s.nWS(this.width,this.height,{minFilter:s.hxR,magFilter:s.hxR,type:s.ix0,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let i=+!!this.normalTexture,r=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=i,this.gtaoMaterial.defines.DEPTH_SWIZZLING=r,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=i,this.pdMaterial.defines.DEPTH_SWIZZLING=r,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=1!==this.gtaoMaterial.defines.SCENE_CLIP_BOX,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=0===this.gtaoMaterial.defines.SCENE_CLIP_BOX,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){void 0!==e.radius&&(this.gtaoMaterial.uniforms.radius.value=e.radius),void 0!==e.distanceExponent&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),void 0!==e.thickness&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),void 0!==e.distanceFallOff&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),void 0!==e.scale&&(this.gtaoMaterial.uniforms.scale.value=e.scale),void 0!==e.samples&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),void 0!==e.screenSpaceRadius&&+!!e.screenSpaceRadius!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=+!!e.screenSpaceRadius,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;void 0!==e.lumaPhi&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),void 0!==e.depthPhi&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),void 0!==e.normalPhi&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),void 0!==e.radius&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),void 0!==e.radiusExponent&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),void 0!==e.rings&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),void 0!==e.samples&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=h(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,i){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,0xffffff,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,0xffffff,1),this.output){case d.OUTPUT.Off:break;case d.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=s.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case d.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=s.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case d.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=s.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case d.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case d.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=s.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case d.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=i.texture,this.copyMaterial.blending=s.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),n=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,null!=s&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=n,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,i,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),n=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,null!=s&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=n,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new u,i=new Uint8Array(e*e*4);for(let s=0;s<e;s++)for(let r=0;r<e;r++){let a=s,n=r;i[(s*e+r)*4]=(.5*t.noise(a,n)+.5)*255,i[(s*e+r)*4+1]=(.5*t.noise(a+e,n)+.5)*255,i[(s*e+r)*4+2]=(.5*t.noise(a,n+e)+.5)*255,i[(s*e+r)*4+3]=(.5*t.noise(a+e,n+e)+.5)*255}let r=new s.GYF(i,e,e,s.GWd,s.OUM);return r.wrapS=s.GJx,r.wrapT=s.GJx,r.needsUpdate=!0,r}}d.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5}},9159:(e,t,i)=>{i.d(t,{s:()=>h});var s=i(4910),r=i(2370),a=i(948);class n extends a.o{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof s.BKk?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=s.LlO.clone(e.uniforms),this.material=new s.BKk({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new a.F(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class o extends a.o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s,r,a=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0),this.inverse?(s=0,r=1):(s=1,r=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,s,0xffffffff),n.buffers.stencil.setClear(r),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,0xffffffff),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}}class l extends a.o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class h{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){const i=e.getSize(new s.I9Y);this._width=i.width,this._height=i.height,(t=new s.nWS(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:s.ix0})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new n(r.Z),this.copyPass.material.blending=s.XIg,this.clock=new s.zD7}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){void 0===e&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let t=0,s=this.passes.length;t<s;t++){let s=this.passes[t];if(!1!==s.enabled){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){let t=this.renderer.getContext(),i=this.renderer.state.buffers.stencil;i.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),i.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==o&&(s instanceof o?i=!0:s instanceof l&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new s.I9Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}},9776:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(4910),r=i(948);class a extends r.o{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new s.Q1f}render(e,t,i){let s,r,a=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(s),null!==this.overrideMaterial&&(this.scene.overrideMaterial=r),e.autoClear=a}}}}]);