import { useState } from "react";
import Paper from "../../util/Paper";

export default function SearchBox(props: any): JSX.Element {
  const [query, setQuery] = useState<string>("");

  async function runScraper(
    queryString: string,
    setPapers: any,
    setIsLoaded: any,
    setFetch: any
  ) {
    try {
      setFetch(true);
      await fetch(
        `http://127.0.0.1:8000/myapp/api/scrape/?query=${encodeURIComponent(
          queryString
        )}`
      );
      const res = await fetch("http://127.0.0.1:8000/myapp/api/papers", );
      const out = await res.json();
      const papersList = out.map((arrayItem: any) => {
        return new Paper(
          arrayItem.id,
          arrayItem.title,
          arrayItem.link,
          arrayItem.author,
          arrayItem.cited_by_link,
          arrayItem.website,
          arrayItem.related_articles,
          arrayItem.version_link,
          arrayItem.version_number,
          arrayItem.cited_by_number
        );
      });
      setPapers(papersList);
      setFetch(false);
      setIsLoaded(true);
      console.log(papersList);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <form className="flex">
        <input
          className="flex-1 h-9 px-4 shadow-md rounded-sm border border-slate-200"
          type="text"
          placeholder="Type Keywords or Title"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <button
          className="flex items-center justify-center bg-bg-dark rounded-sm w-9 h-9"
          onClick={(event) => {
            event.preventDefault();
            runScraper(
              query,
              props.setPapers,
              props.setIsLoaded,
              props.setFetchingInProgress
            );
          }}
        >
          <img className="w-4 h-4" src="search.png" />
        </button>
      </form>
      <div className="flex gap-2">
        <button className="flex items-center gap-1 shadow-md rounded-sm p-2 border border-slate-100">
          <img className="w-3 h-3" src="sort.png" />
          <h1 className="text-xs">Sort</h1>
        </button>
        <button className="flex items-center gap-1 shadow-md rounded-sm p-2 border border-slate-100">
          <img className="w-3 h-3" src="filter.png" />
          <h1 className="text-xs">Filters</h1>
        </button>
      </div>
    </div>
  );
}
