
import React from 'react'
import { useCallback } from "react";
import Link from "next/link";
import Image from 'next/image';
import '/styles/globals.css'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
function Navbar() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);
  return (
    <>

    <div className='rounded-3xl content-center mb-[50px] pt-1 pr-2'>
  
      <nav className="shadow-sm content-center">

      <div className="pr-[100px]  flex justify-between items-center">
      <Particles
    id="tsparticles"
    className='absolute w-full mb-[30px]'
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        fullScreen: {
          enable: false,
          zIndex: -1,
          },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
/>
        <Link href="/" className='mt-3  mx-6 pb-4'>
          <Image
                src="/logo-header.png"
                width={225}
                height={225}
                alt="Logo"
          />
        </Link>
        <ul className="flex space-x-5">
          <li className='text-white hover:text-blue-200 transition-all duration-[0.3s] ease-[ease]'>
            <Link href="https://www.facebook.com/nova.frosty/" className="text-base">
            <FontAwesomeIcon icon={faCircleInfo} beat size="xl" style={{}} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
    
    </>
  )
}
export default Navbar