import Lottie from 'react-lottie';
import { HelloWorldLayout } from '../../_layouts/HelloWorld';
import animationData from '../../lottie/truck.json';
import * as HelloWorldStyles from './styles';
import { Link } from 'react-router-dom';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export const HelloWorld = () => {
  return (
    <HelloWorldLayout>
      <HelloWorldStyles.LottieContainer>
        <Lottie options={defaultOptions} height={400} width={400} />
      </HelloWorldStyles.LottieContainer>
      <HelloWorldStyles.SoonIntroduction>
        <div>
          <h1>SOON</h1>
          <h2>Reboque.me</h2>
        </div>
        <p>
          Guinchos disponíveis <strong>24/7</strong>
        </p>
        <Link to="/home">
          <button>Clique para saber mais!</button>
        </Link>
      </HelloWorldStyles.SoonIntroduction>
    </HelloWorldLayout>
  );
};
