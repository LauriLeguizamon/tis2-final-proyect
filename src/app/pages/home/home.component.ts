import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  NgZone,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('canvasRef', { static: true })
  canvasRef: ElementRef<HTMLCanvasElement>;
  renderer: THREE.Renderer;
  scene: THREE.Scene;
  camera: THREE.Camera;
  cube: THREE.Mesh;
  private frameId: number = null;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    console.log(this.canvasRef);
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvasRef.nativeElement,
      alpha: true,
      antialias: true,
    });

    this.renderer.setSize(500, 350);

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(45, 500 / 350, 1, 5000);
    this.camera.position.set(0, 1, 2);
    this.camera.lookAt(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    const geometry = new THREE.BoxGeometry();
    const loader = new THREE.TextureLoader();

    const materials = [
      new THREE.MeshBasicMaterial({
        map: loader.load('./../../../assets/imgs/foto1.jpeg'),
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load('./../../../assets/imgs/foto2.jpeg'),
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load('./../../../assets/imgs/foto3.jpeg'),
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load('./../../../assets/imgs/foto4.jpeg'),
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load('./../../../assets/imgs/foto5.jpeg'),
      }),
      new THREE.MeshBasicMaterial({
        map: loader.load('./../../../assets/imgs/foto6.jpeg'),
      }),
    ];

    this.cube = new THREE.Mesh(geometry, materials);
    this.scene.add(this.cube);

    this.animate();
  }

  animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }
    });
  }

  public render(): void {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }
}
