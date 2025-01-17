import Particles from "react-tsparticles";

const FlowerBackground = ({ children }) => {
  return (
    <div className="relative w-full h-auto">
      <Particles
        options={{
          background: {
            color: { value: "#ffffff" },
          },
          particles: {
            shape: {
              type: "image",
              image: [
                {
                  src: "https://paintingvalley.com/drawings/pen-and-ink-flower-drawings-17.jpg",
                  width: 100,
                  height: 100,
                },
              ],
            },
            number: {
              value: 30,
            },
            size: {
              value: 20,
            },
            move: {
              enable: true,
              speed: 2,
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default FlowerBackground;
