import "./main.style.css";
import { useSpring, animated } from "react-spring";

const AnimatedText = ({ children, delay }) => {
  const springs = useSpring({
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
    delay: delay,
  });

  return <animated.div style={springs}>{children}</animated.div>;
};
const Main = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <AnimatedText delay={200}>
          <h2>SERRALHERIA MASTER SOLDAS</h2>
        </AnimatedText>
        <AnimatedText delay={400}>
          <p>A MAIS DE 5 ANOS NO MERCADO</p>
        </AnimatedText>
        <AnimatedText delay={600}>
          <h1>OS MELHORES ESTÃO AQUI</h1>
        </AnimatedText>
      </div>
    </div>
  );
};

export default Main;
