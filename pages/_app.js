import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-full w-full relative">
      <div
        className="h-screen w-screen fixed m-auto inset-0 bg-center bg-no-repeat bg-cover transition opacity-100"
        style={{
          backgroundImage: `url("./assets/images/hero-section-bg-dark.webp")`,
        }}
      ></div>
      <NextNProgress color="#f472b6" />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
