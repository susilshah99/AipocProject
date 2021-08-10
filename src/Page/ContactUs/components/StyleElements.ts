import styled from "@emotion/styled";

export const ContactContainer = styled.div`
  display: flex;
  gap: 48px;
  width: 80%;
  margin: 150px auto;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 49px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const Wrapper = styled.div``;
