import * as HelloWorldStyles from './styles';

export const HelloWorldLayout: React.FC = ({ children }) => {
  return <HelloWorldStyles.Container>{children}</HelloWorldStyles.Container>;
};
