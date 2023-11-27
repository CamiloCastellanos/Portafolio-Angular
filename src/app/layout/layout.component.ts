import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Camilo Castellanos';

  id = "tsparticles";

  particlesOptions = {
		move: {
			enable: true,
			speed: { min: 1, max: 6 }
		},
		number: {
			value: 20,
			max: 30
		},
		opacity: {
			value: 1
		},
		rotate: {
			path: true
		},
		shape: {
			options: {
				image: {
					gif: true,
					height: 200,
					src: "https://particles.js.org/images/mario.gif",
					width: 200
				}
			},
			type: "image"
		},
		size: {
			value: {
				min: 32,
				max: 64
			}
		}
	}

}
