import { useState } from "react";
import Papers from "../components/Paper/Papers";
import Header from "../components/Header/Header";
import Paper from "../util/Paper";
import SearchBox from "../components/Search/SearchBox";

export default function Search(): JSX.Element {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [fetchingInProgress, setFetchingInProgress] = useState<boolean>(false);

  return (
    <div className="relative flex flex-col items-center h-[calc(100vh-3rem)]">
      <div className="relative flex flex-1 flex-col gap-12 w-[90%] sm:w-[600px] md:w-[700px] xl:w-[1024px] mt-16 mb-10 max-h-full overflow-y-auto">
        <SearchBox
          setPapers={setPapers}
          setIsLoaded={setIsLoaded}
          setFetchingInProgress={setFetchingInProgress}
        />
        <Papers
          papers={papers}
          isLoaded={isLoaded}
          fetchingInProgress={fetchingInProgress}
        />
      </div>
    </div>
  );
}
