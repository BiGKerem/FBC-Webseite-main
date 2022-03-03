import styled from 'styled-components';

export const Box = styled.div`
  padding: 5vh 5vh;
  position: bottom;
  bottom: 0;
  width: 100%;
  z-index:1;


  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 100%); 
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 300px 250px 250px 250px;
  grid-gap: 50px;
  margin: 0 auto;
  width: fit-content;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 1vh;
  font-size: 1rem;
  text-decoration: none;
  font-family: poppins;
  cursor: unset;
  &:hover {
      color: white;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 1.15rem;
  font-family: poppins;
  color: #fff;
  margin-bottom: 3vh;
  font-family: "poppins";
`;