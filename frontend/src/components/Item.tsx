import { useState } from "react";

export default function Item(props: any): JSX.Element {
    const [color, setColor] = useState<string>("bg-white");

    function manageColor(bgColor: string) {
        if (bgColor === color) {
            setColor("bg-white");
        }
        else {
            setColor(bgColor);
        }
    }

    return(
        <div className={`flex flex-grow p-4 justify-between ${color}`}>
            <div className="w-4/5 flex flex-col gap-1">
                <h1 className="font-semibold break-all">{props.title}</h1>
                <a className="hover:text-purple-80 break-words" href={`${props.link}`}>{props.link}</a>
            </div>
            <div className="w-1/5 flex justify-center gap-1">
                <button onClick={() => manageColor("bg-emerald-300")}>
                    <img className="w-6" src="green-button.png" />
                </button>
                <button onClick={() => manageColor("bg-amber-200")}>
                    <img className="w-6" src="yellow-button.png" />
                </button>
                <button onClick={() => manageColor("bg-red-300")}>
                    <img className="w-6" src="red-button.png" />
                </button>
            </div>
        </div>
    );
}