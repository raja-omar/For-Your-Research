import { FaSearch } from "react-icons/fa";
import React, { useState, useEffect } from "react";

export default function SearchBar(props: any): JSX.Element {
    const [query, setQuery] = useState("Augmented Reality");

    const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    async function runScraper() {
        try {
            let flag = false;
            await fetch(`http://127.0.0.1:8000/myapp/api/scrape/?query=${encodeURIComponent(query)}`);
            const res = await fetch("http://127.0.0.1:8000/myapp/api/papers");
            console.log(res.json());
        } catch(error) {
            console.log(error);
        }
    }

    const getResults = () => {
        runScraper()
        var results = "results";
        props.onSearch(results);            
    }

    return(
        <div className="flex items-center justify-between pl-[24px] pr-[20px] py-[16px] bg-neutral-800 rounded-[4px]">
            <input
                    type="text"
                    value={query}
                    onChange={handleQueryChange}
                    placeholder="Enter your search query..."
                    className="flex-grow p-2 border rounded-md focus:outline-none focus:ring focus:border-grey-30"
                    />
            <div className="flex items-center justify-center gap-[8px] p-2 ">
                <FaSearch className="w-6 h-6" color="black" onClick={getResults}/>
            </div>
        </div>
        
    );
}

