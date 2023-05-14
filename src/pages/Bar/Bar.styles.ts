import styled from 'styled-components'

const Bar = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 3rem;
`

const Content = styled.div`
  align-items: flex-end;
  background-color: #111111;
  border-radius: 4px;
  clip-path: polygon(1% 1%, 97% 4%, 97% 96%, 4% 100%);
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  height: 8rem;
  justify-content: center;
  width: 100%;
`

const Person = styled.div<{ $color: string }>`
  background-color: ${({ $color }) => $color};
  background-image: -webkit-linear-gradient(
    -45deg,
    rgba(255, 255, 220, 0.3) 0%,
    transparent 100%
  );
  background-image: -moz-linear-gradient(
    -45deg,
    rgba(255, 255, 220, 0.3) 0%,
    transparent 100%
  );
  background-image: -o-linear-gradient(
    -45deg,
    rgba(255, 255, 220, 0.3) 0%,
    transparent 100%
  );
  background-image: -ms-linear-gradient(
    -45deg,
    rgba(255, 255, 220, 0.3) 0%,
    transparent 100%
  );
  border-radius: 999px 999px 0 0;
  box-shadow: inset -25px -25px 40px rgba(0, 0, 0, 0.5);
  filter: hue-rotate(2deg);
  height: 16rem;
  position: relative;
  width: 14rem;

  &::before {
    aspect-ratio: 1;
    background-color: lightpink;
    background-image: -webkit-linear-gradient(
      -45deg,
      rgba(255, 255, 220, 0.3) 0%,
      transparent 100%
    );
    background-image: -moz-linear-gradient(
      -45deg,
      rgba(255, 255, 220, 0.3) 0%,
      transparent 100%
    );
    background-image: -o-linear-gradient(
      -45deg,
      rgba(255, 255, 220, 0.3) 0%,
      transparent 100%
    );
    background-image: -ms-linear-gradient(
      -45deg,
      rgba(255, 255, 220, 0.3) 0%,
      transparent 100%
    );
    border-radius: 50%;
    box-shadow: inset -25px -25px 40px rgba(0, 0, 0, 0.5);
    content: '';
    height: 7rem;
    position: absolute;
    right: 50%;
    top: -4rem;
    transform: translate(50%, -50%);
  }
`

export default {
  Bar,
  Content,
  Header,
  Person,
}
