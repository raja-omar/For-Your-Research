export default function NavigationItem(props: any): JSX.Element {
    return(
        <button className={`flex ${props.isCollapsed ? "" : "w-32"} gap-1 items-center ${props.name === props.activePage ? "bg-white" : ""} p-1 rounded-sm`}>
            <img className="w-5" src={props.name === props.activePage ? `${props.link}-colored.png` : `${props.link}.png`}/>
            {!props.isCollapsed ? <h1 className={`${props.name === props.activePage ? "text-purple-80" : "text-white"} text-sm`}>{props.name}</h1> : <div></div>}
        </button>
    );
}