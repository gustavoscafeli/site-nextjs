import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Servicos() {
  return (
    <div className="contato">
      <Head>
        <title>Serviços — Scafeli</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <Footer />
    </div>
  );
}
