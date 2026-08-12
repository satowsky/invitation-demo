// src/main.ts
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

async function initParticles() {
    await loadSlim(tsParticles);

    const options: ISourceOptions = {
        fpsLimit: 30,
        particles: {
            color: {
                value: "#ffc9c9",
            },
            move: {
                direction: "top",
                enable: true,
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 150,
            },
            opacity: {
                value: { min: 0.3, max: 0.8 },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
            wobble: {
                enable: true,
                distance: 10,
                speed: 10,
            },
        },
    };

    await tsParticles.load({
        id: "tsparticles",
        options,
    });
}

initParticles();
