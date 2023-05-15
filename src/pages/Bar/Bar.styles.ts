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
  justify-content: center;
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
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 220, 0.3) 0%,
    transparent 100%
  );
  border-radius: 999px 999px 0 0;
  box-shadow: inset -25px -25px 40px rgba(0, 0, 0, 0.5);
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

const Balloon = styled.div`
  background-color: #f3f3f3;
  box-shadow: inset -25px -25px 40px rgba(0, 0, 0, 0.5);
  clip-path: polygon(3% 4%, 100% 0, 96% 61%, 100% 100%, 87% 93%, 0 91%);
  display: grid;
  font-weight: bold;
  font-size: 1.6rem;
  height: 8rem;
  place-items: center;
  width: 100%;
`

const BalloonLeft = styled(Balloon)`
  clip-path: polygon(
    5% 1%,
    98% 4%,
    100% 91%,
    24% 88%,
    5% 100%,
    11% 85%,
    2% 79%
  );
`

const Balloons = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  margin: 0 -1rem 23rem -1rem;
  width: 30vw;
`

export default {
  Balloon,
  BalloonLeft,
  Balloons,
  Bar,
  Content,
  Header,
  Person,
}
