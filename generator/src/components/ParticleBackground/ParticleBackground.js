import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <Particles
            init={particlesInit}
            options={{
                particles: {
                    number: { value: 100 },
                    move: { enable: true, speed: 2 },
                    size: { value: 3 },
                    opacity: { value: 0.5 },
                },
            }}
        />
    );
}
