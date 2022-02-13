import React from 'react';
import weed from '../../public/images/weed.jpg';

export default function WeedCard() {

  return (
      <>
        <a>

            <div className="shadow-md
                            rounded-3xl border border-slate-300
                            flex flex-row">

                <div className="flex flex-col grid content-between
                                w-3/5 p-3">
                    <span className="text-lg">
                        vor 10 Tagen
                    </span>
                    <span className="text-md text-slate-600">
                        Stärke: 8/10
                    </span>
                </div>

                <div className="w-2/5">
                    <img src={weed.src}
                         className="rounded-r-3xl"/>
                </div>

            </div>

        </a>
      </>
  );
}
