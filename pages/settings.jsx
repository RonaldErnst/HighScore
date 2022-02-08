import Navigation from "../components/navigation";
import Header from "../components/header";
import { withPrivate } from "../components/Routing";
import { fireauth } from "../firebase";

function Settings() {
    return (
        <>
            <Header/>

            <div className="mt-16 p-3 w-full md:w-1/2 lg:w-1/3 mx-auto">

                <h1 className="text-xl">Einstellungen:</h1>

                <form action="" className="p-6 space-y-6 grid items-center justify-items-center">

                    <div className="space-y-2">
                        <h2 className="text-md text-slate-700">E-Mail ändern</h2>

                        <div className="w-full bg-white
										rounded-3xl
										flex flex-row
										shadow-xl
										text-lg
									    border-slate-400 border">

                            <label htmlFor="email" className="grid items-center justify-items-center px-2">
                                <i className="bi bi-envelope"></i>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="E-Mail"
                                className="bg-transparent p-1 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-md text-slate-700">Passwort ändern</h2>

                        <div className="w-full bg-white
									    rounded-3xl
									    flex flex-row
									    shadow-xl
								        text-lg
									    border-slate-400 border">
                            <label htmlFor="password" className="grid items-center justify-items-center px-2">
                                <i className="bi bi-lock"></i>
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="bg-transparent p-1 focus:outline-none"
                            />
                        </div>
                    </div>



                    <button
                        type="submit" className="w-1/2 bg-emerald-400 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1">
                        Speichern
                    </button>

                </form>

            </div>

            <Navigation active="settings"></Navigation>

        </>
    );
}

export default withPrivate(Settings);