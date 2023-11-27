import { Component } from '@angular/core';
import { IParticlesProps } from 'ng-particles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from "tsparticles-slim";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  particlesOptions: IParticlesProps = {
    background: {
      color: {
        value: "transparent"
      }
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: ["#dee9ed", "#4BF27D", "#348F50", "#56B4D3", "#4BF2CE"]
      },
      links: {
        color: ["#dee9ed"],
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "bounce",
        random: false,
        speed: 1.5,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.2
      },
      shape: {
        type: "circle"
      },
      size: {
        random: true,
        value: 5
      }
    },
    detectRetina: true
  };
  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }
}
