import styled from "styled-components";

export const DepoimentsContainer = styled.div`
  width: 100%;
  padding: 30px;
  > svg {
    display: flex;
    flex-direction: row;
    color: yellow;
  }
`;

export const DepoismentsTitle = styled.h1`
  align-items: center;
  margin-top: 20px;
  margin: auto;
  text-align: center;
  padding: 30px;
  font-weight: 600;
  color: #f1450c;
  text-transform: uppercase;
  box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.1);
`;

export const DepoimentsContent = styled.div`
  background-color: rgb(13, 13, 13);
  max-width: 300px;
  padding: 30px;
  border-radius: 20px;
  margin-top: 10px;
  align-items: center;
  margin: auto;
  text-align: center;
  margin-top: 20px;
`;

export const DepoimentsText = styled.p`
  color: #fff;
  margin-top: 10px;
  flex-direction: row;
  transition: 1s;

  && :hover {
    transform: scale(1.1);
  }
  > svg {
    color: yellow;
  }
`;

export const DepoimentsFinally = styled.h1`
  align-items: center;
  margin-top: 20px;
  margin: auto;
  text-align: center;
  padding: 30px;
  font-weight: 600;
  color: #f1450c;
  text-transform: uppercase;
  margin-top: 40px;
  font-size: 23px;
  margin-bottom: 20px;
  box-shadow: 0px 11px 20px rgba(0, 0, 0, 0.1);
`;
