import Navigation from "../../components/navigation";
import Header from "../../components/header";
import React from 'react';
import { useState } from 'react';

export default function AddEntry() {
  // TODO Design und Ablauf überlegen
  // Schrittweise? Zuerst Kategorie abfragen: Weed, Shisha, etc
  // Dann kategorie spezifische Oberfläche anzeigen?
    const [count, setCount] = useState(5);
    const [error, setError] = useState("")

    const handleIncScore = () => {
        setError("");
        if (count == 10) {
            setError("Maximal 10/10 möglich")
        } else {
            const updatedCount = count + 0.5;
            setCount(updatedCount);
        }
    };

    const handleDecScore = () => {
        setError("");
        if (count == 0) {
            setError("Keine negativen Werte möglich")
        } else {
            const updatedCount = count - 0.5;
            setCount(updatedCount);
        }
    };

  return (
      <>
          <Header/>

          <div className="mt-16 p-3 w-full md:w-1/2 lg:w-1/3 mx-auto">

              <div>

                  <h2>Score:</h2>
                  <form className="flex flex-col items-center justify-items-center space-y-4">

                      <div>
                          {error && <p><i className="bi bi-exclamation-triangle text-red-500 p-1"></i> {error}</p>}
                      </div>

                      <div className="flex flex-row text-lg">

                          <div>
                              <span onClick={handleDecScore}>
                                  <i className="bi bi-dash-lg"></i>
                              </span>
                          </div>
                          <div className="text-center w-2">
                              <span className="text-2xl">{count}</span>
                              <p className="text-slate-600">von 10</p>
                          </div>
                          <div>
                              <span onClick={handleIncScore}>
                                  <i className="bi bi-plus-lg"></i>
                              </span>
                          </div>


                      </div>

                      <button
                          type="submit"
                          className="w-1/2 bg-emerald-400 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1">
                          Hinzufügen
                      </button>

                  </form>


              </div>

          </div>

          <Navigation active="none"></Navigation>
      </>
  );
}
