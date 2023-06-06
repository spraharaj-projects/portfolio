import { useCallback, useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import bg from "../assets/pbg3.jpg";

const Particle = () => {
  const particlesRef = useRef(null);
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    console.log(particlesRef, particlesLoaded);
  }, []);

  return (
    <Particles
      ref={particlesRef}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      width="100%"
      height="700px"
      options={{
        background: {
          image: `url(${bg})`,
          repeat: "no-repeat",
          size: "cover",
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: {
                enable: false,
                force: 100,
                smooth: 200,
              },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 100,
              size: 2,
              duration: 2,
              opacity: 1,
              speed: 1,
            },
          },
        },
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 25,
            },
          },
          color: {
            value: ["#ffffff"],
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.0,
            random: false,
          },
          size: {
            value: 2.2,
            random: true,
          },
          move: {
            enable: false,
          },
          twinkle: {
            particles: {
              enable: true,
              color: "#ffffff",
              frequency: 0.0001,
              opacity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
