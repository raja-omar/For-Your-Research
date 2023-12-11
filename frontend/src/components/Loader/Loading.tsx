export default function Loading(props: any): JSX.Element {
    return(
        <div className="flex flex-col items-center justify-center">
            <img className="w-48 h-48" src="loading.png"/>
            {props.fetching ? <div className="flex items-center gap-2"><h1>Discovering research papers</h1><img className="w-5" src="spinning-gear.gif"/></div> : <h1>Discover research papers...</h1>}
        </div>
    );
}