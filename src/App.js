import { useEffect, useState } from "react";
import { Layout } from "./Components/Layout";
import Search from "./Components/Search";
import Word from "./Components/Word";

function App() {
  const [isLoading, setLoading] = useState(true);
  const [words, setWords] = useState([]);
  const [search, setSearch] = useState("");

  const getWords = () => {
    fetch(
      `https://gist.githubusercontent.com/f/9c59c515fca028b549a6014aa43c14b0/raw/8253074695e0777b97b6be5e96b6c51f645337ae/all-hex-words.json`
    )
      .then((data) => data.json())
      .then((words) => setWords(words))
      .then(setLoading(false));
  };

  useEffect(() => {
    getWords();
  }, []);

  const filterWords = (search) => {
    fetch(
      `https://gist.githubusercontent.com/f/9c59c515fca028b549a6014aa43c14b0/raw/8253074695e0777b97b6be5e96b6c51f645337ae/all-hex-words.json`
    )
      .then((data) => data.json())
      .then((words) =>
        setWords(
          words.filter((word) => word[0].toLocaleLowerCase().includes(search))
        )
      );
  };

  useEffect(() => {
    filterWords(search);
  }, [search]);
  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <Layout>
      <header className="flex items-center justify-center h-16 max-w-5xl px-4 py-4 mx-auto mt-12 text-black bg-transparent">
        <h1 className="text-2xl italic font-bold">HEX SÖZLÜK</h1>
      </header>
      <main className="justify-center w-full h-full ">
        {/* Search Box */}
        <section className="h-full max-w-5xl pt-3 mx-auto text-center ">
          <Search setSearch={setSearch} />
        </section>
        <section className="h-full max-w-5xl pt-3 mx-auto text-center ">
          {search.trim().length !== 0 && (
            <span className="flex">
              <h2 className="mr-1 font-semibold">{search}</h2> için arama
              sonuçları...
            </span>
          )}
        </section>
        <section className="h-full max-w-5xl mx-auto text-center md:pt-1 ">
          <div className="grid grid-cols-1 gap-2 mt-4 md:mt-8 md:grid-cols-4">
            {words.length > 0 && words.map((word) => <Word word={word} />)}
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default App;
