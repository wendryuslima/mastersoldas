import {
  DepoimentsContainer,
  DepoimentsContent,
  DepoimentsFinally,
  DepoimentsText,
  DepoismentsTitle,
} from "./depoiments.style";
import { FaStar } from "react-icons/fa";

const Depoiments = () => {
  return (
    <DepoimentsContainer id="servicos">
      <DepoismentsTitle>Depoimentos de Clientes</DepoismentsTitle>

      <DepoimentsContent>
        <DepoimentsText>
          O trabalho que eles fizeram superou ainda mais minhas expectativas
        </DepoimentsText>
        <DepoimentsText>Gabriel Souza</DepoimentsText>
        <DepoimentsText>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </DepoimentsText>
      </DepoimentsContent>

      <DepoimentsContent>
        <DepoimentsText>
          Maravilhosoo. Super atenciosos e um trabalho impecável. Fizerem
          certinho como pedi
        </DepoimentsText>
        <DepoimentsText>Juliana marques</DepoimentsText>
        <DepoimentsText>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </DepoimentsText>
      </DepoimentsContent>

      <DepoimentsContent>
        <DepoimentsText>Ótimo trabalho, estou safisfeito</DepoimentsText>
        <DepoimentsText>Luan almeida</DepoimentsText>
        <DepoimentsText>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </DepoimentsText>
      </DepoimentsContent>

      <DepoimentsContent>
        <DepoimentsText>
          muuuito mesmo, sempre que precisar irei chamá-los
        </DepoimentsText>
        <DepoimentsText>Vitória Santos</DepoimentsText>
        <DepoimentsText>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </DepoimentsText>
      </DepoimentsContent>
      <DepoimentsFinally>
        Os melhore estão aqui. Nos chame no WhatsApp para fazer seu orçamento
      </DepoimentsFinally>
    </DepoimentsContainer>
  );
};

export default Depoiments;
