import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import '../styles/main.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
