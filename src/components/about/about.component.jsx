import { useSpring, animated } from "react-spring";
import {
  AboutClientsConteiner,
  AboutClientsContent,
  AboutContainer,
  AboutContent,
  AboutTitle,
} from "./about.style";
import { IoIosAddCircle } from "react-icons/io";

const AnimatedText = ({ children, delay }) => {
  const springs = useSpring({
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    to: { opacity: 1, transform: "translate3d(0,0px,0)" },
    delay: delay,
  });

  return <animated.div style={springs}>{children}</animated.div>;
};

const About = () => {
  return (
    <AboutContainer id="sobre-nos">
      <AnimatedText>
        <AboutTitle delay={200}>Sobre nós</AboutTitle>
      </AnimatedText>

      <AnimatedText>
        <AboutContent delay={400}>
          Bem-vindo à Metal Soldas, sua serralheria de confiança com mais de 5
          anos de experiência no mercado. Nossa dedicação à excelência e ao
          atendimento personalizado nos diferencia, garantindo sempre a
          satisfação dos nossos clientes. Desde a nossa fundação, temos nos
          especializado em serviços de soldagem e serralheria, fornecendo
          soluções de alta qualidade para uma ampla gama de necessidades. Seja
          para projetos residenciais, comerciais ou industriais, estamos
          comprometidos em entregar resultados que superem as expectativas. Na
          Metal Soldas, valorizamos a precisão, a durabilidade e a estética em
          cada trabalho realizado. Utilizamos técnicas avançadas e materiais de
          primeira linha para assegurar que cada projeto seja concluído com
          perfeição e dentro do prazo.
        </AboutContent>
      </AnimatedText>

      <AboutClientsConteiner>
        <AboutClientsContent>
          <IoIosAddCircle />
          400 Clientes
        </AboutClientsContent>

        <AboutClientsContent>
          <IoIosAddCircle />5 anos de experiência
        </AboutClientsContent>
      </AboutClientsConteiner>
    </AboutContainer>
  );
};

export default About;
