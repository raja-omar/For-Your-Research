export default function Header(props: any): JSX.Element {
    return(
        <div className="w-full h-12 z-20 flex flex-grow justify-between items-center shadow-md bg-[#fff]">
            <div className="pl-6 [font-family:'Manrope-Blod',Helvetica] font-semibold text-2xl">{props.page}</div>
            <div className="flex gap-4 px-3">
                <button>
                    <img className="w-6 h-6" src="notification.png"/>
                </button>
                <button>
                    <img className="w-8 h-8" src="profile.png"/>
                </button>
            </div>
        </div>
    );
}
