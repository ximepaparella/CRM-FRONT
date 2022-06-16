import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./../config/apollo";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
};

export default MyApp;
