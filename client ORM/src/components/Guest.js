import React from "react";
import Particles from "react-particles-js";

export default function Guest() {
    return (
        <>
            <Particles
                width="100vw"
                height="100vh"
                params={{
                    particles: {
                        number: {
                            value: 50,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
            />
        </>
    );
}
