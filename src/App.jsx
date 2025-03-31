import "./App.css";
import ArticlesLogements from "./ArticlesLogements";
import Avis from "./Avis";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <main className="min-h-[76vh] bg-gray-100">
        <ArticlesLogements />

        <Avis />
      </main>

      <Footer />
    </>
  );
}

export default App;
