/*var container, transformControl, controls;
var camera, scene, renderer;
var geometry = new THREE.BoxGeometry( 20, 20, 20 );
var ARC_SEGMENTS = 200;
var equipmentMesh;
var equipments = [];

		//	init();
			//animate();

			function init() {
        container = document.getElementById('three');

				if(container != null){



									var info = document.createElement( 'div' );
									info.style.position = 'absolute';
									info.style.top = '100px';
									info.style.width = '100%';
									info.style.textAlign = 'center';
									info.innerHTML = 'translate: W ,  rotate: E  ,  scale: R';
									container.appendChild( info );

									scene = new THREE.Scene();
									camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 10000 );
									camera.position.set( 0, 1000, 1500 );
									camera.lookAt( new THREE.Vector3( 0, 200, 0 ) );
									scene.add( camera );

									scene.add( new THREE.AmbientLight( 0xf0f0f0 ) );
									var light = new THREE.SpotLight( 0xffffff, 1.5 );
									light.position.set( 0, 1500, 200 );
									light.castShadow = true;
									light.shadow.camera.near = 200;
									light.shadow.camera.far = 2000;
									light.shadow.camera.fov = 70;
									light.shadow.bias = -0.000222;
									light.shadow.mapSize.width = 1024;
									light.shadow.mapSize.height = 1024;
									scene.add( light );
									spotlight = light;

									var planeGeometry = new THREE.PlaneGeometry( 2000, 2000 );
									planeGeometry.rotateX( - Math.PI / 2 );
									var planeMaterial = new THREE.ShadowMaterial();
									planeMaterial.opacity = 0.2;

									var plane = new THREE.Mesh( planeGeometry, planeMaterial );
									plane.position.y = -200;
									plane.receiveShadow = true;
									scene.add( plane );

									var helper = new THREE.GridHelper( 1000, 100 );
									helper.position.y = -199;
									helper.material.opacity = 0.25;
									helper.material.transparent = true;
									scene.add( helper );

									var axis = new THREE.AxisHelper();
									axis.position.set( -500, -500, -500 );
									scene.add( axis );

									renderer = new THREE.WebGLRenderer( { antialias: true } );
									renderer.setClearColor( 0xf0f0f0 );
									renderer.setPixelRatio( window.devicePixelRatio );
									renderer.setSize( window.innerWidth - 5, window.innerHeight - 90 );
									renderer.shadowMap.enabled = true;
									container.appendChild( renderer.domElement );

									// Controls
									controls = new THREE.OrbitControls( camera, renderer.domElement );
									controls.damping = 0.2;
									controls.addEventListener( 'change', render );

									transformControl = new THREE.TransformControls( camera, renderer.domElement );
									transformControl.addEventListener( 'change', render );

									scene.add( transformControl );

									window.addEventListener( 'keydown', function ( event ) {

										switch ( event.keyCode ) {
											case 87: // W
												transformControl.setMode( "translate" );
												break;

											case 69: // E
												transformControl.setMode( "rotate" );
												break;

											case 82: // R
												transformControl.setMode( "scale" );
												break;
										}
									});

									window.addEventListener( 'resize', onWindowResize, false );
				}
			}

			function animate() {
				if(container != null){
					requestAnimationFrame( animate );
					render();
					controls.update();
					transformControl.update();
				}
			}

			function render() {
				renderer.render( scene, camera );

			}


			//-------- Collada Section ----------------------------
			var dae;
			function addCollada(collada_url) {
				var loader = new THREE.ColladaLoader();
				loader.options.convertUpAxis = true;
				loader.load( collada_url, function ( collada ) {
					dae = collada.scene;
					dae.scale.x = dae.scale.y = dae.scale.z = 0.3;
					dae.updateMatrix();

					scene.add( dae );
					transformControl.attach( dae );
					equipments.push(dae);
					render();
				} );
			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}
*/
