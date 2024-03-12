import Menu from "./Menu";
const Header = (props) => {
    return (
        <>
            <header className="flex  w-full flex-row justify-around border-2 items-center sticky top-0 z-10 bg-white">

                <div className="flex flex-row">
                    <img className="h-12 flex self-center " src="/MyTinerariHeaderLogo.png" alt="Logo MyTinerari" />{/*Aca va un logo */}
                </div>
                <div className="flex flex-row items-center gap-5 max-md:gap-0">
                    <img className="  bg-white h-6 w-6" src="/user.png" alt="user image" />{/*Aca va el icono de persona */}
                    <Menu />

                </div>
            </header>
        </>
    );
};

export default Header; 