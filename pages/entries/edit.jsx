import Navigation from "../../components/navigation";
import Header from "../../components/header";
import React from 'react';
import { useState } from 'react';

const initialCount = 5;
const updateStep = 0.5;

export default function EditEntry() {

  const [count, setCount] = useState(initialCount);

  const handleIncScore = () => {
    if (count < 10) {
      const updatedCount = count + updateStep;
      setCount(updatedCount);
    }
  };

  const handleDecScore = () => {
    if (count > 0) {
      const updatedCount = count - updateStep;
      setCount(updatedCount);
    }
  };

  return (
      <>
        <Header/>

        <div className="mt-16 p-3 w-full md:w-1/2 lg:w-1/3 mx-auto">

          <div>

            <h2>Score bearbeiten:</h2>

            <form className="flex flex-col items-center justify-items-center space-y-4">

              <div className="flex flex-row text-xl">

                <div>
                              <span onClick={handleDecScore}>
                                  <i className="bi bi-dash-lg text-4xl p-2 hover:text-gray-600"></i>
                              </span>
                </div>
                <div className="text-center">
                  <p className="text-4xl">{count}</p>
                  <p className="text-slate-600">von 10</p>
                </div>
                <div>
                              <span onClick={handleIncScore}>
                                  <i className="bi bi-plus-lg text-4xl p-2 hover:text-gray-600"></i>
                              </span>
                </div>


              </div>

              <div className="w-full">

                <h2>Notizen bearbeiten:</h2>

                <div className="flex grid items-center justify-items-center w-full py-4">
                  <textarea className="w-3/4 p-1 rounded-xl focus:outline-none border-slate-400 border resize-none" rows="7"></textarea>
                </div>


              </div>

              <button
                  type="submit"
                  className="w-1/2 bg-emerald-400 rounded-3xl shadow-2xl text-lg text-center font-semibold p-1">
                Änderungen speichern
              </button>

            </form>


          </div>

        </div>

        <Navigation active="none"></Navigation>
      </>
  )
}
