import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-color: #111;
  gap: 10px;
`;

export const AboutTitle = styled.h1`
  margin: auto;
  text-align: center;
  color: #f1450c;
  margin-top: 50px;
  text-transform: uppercase;
`;

export const AboutContent = styled.p`
  margin: auto;
  text-align: center;
  margin-top: 10px;
  color: rgb(156, 163, 175);
  font-weight: 600;
  font-size: 1.1rem;
  padding: 30px;
  max-width: 700px;
`;

export const AboutClientsConteiner = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  flex-direction: column;
  margin-top: 20px;
  font-size: 3rem;

  > svg {
    align-items: center;
    padding: 50px;
  }
`;

export const AboutClientsContent = styled.p`
  font-size: 2rem;
  padding: 20px;
  font-weight: bold;
  color: 000;
  display: flex;
  background: rgb(212, 99, 12);
  background: linear-gradient(
    90deg,
    rgba(212, 99, 12, 1) 0%,
    rgba(18, 17, 17, 1) 100%
  );
  margin-top: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`;
