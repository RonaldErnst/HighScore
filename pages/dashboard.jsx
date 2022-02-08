import Navigation from "../components/navigation";
import Header from "../components/header";
import React from "react";
import Chart from "chart.js/auto";

export default function Dashboard() {

    React.useEffect(() => {
        var config = {
            type: "line",
            data: {
                labels: [
                    "1. Feb",
                    "2. Feb",
                    "5. Feb",
                    "12. Feb",
                    "22. Feb",
                    "2. Mar",
                    "6. Mar",
                ],
                datasets: [
                    {
                        label: "Gras",
                        backgroundColor: "rgb(52 211 153)",
                        borderColor: "rgb(52 211 153)",
                        data: [0, 1, 8, 3, 6, 5, 10],
                        fill: false,
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                tooltips: {
                    mode: "index",
                    intersect: false,
                },
                hover: {
                    mode: "nearest",
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: "rgba(33, 37, 41, 0.3)",
                                zeroLineColor: "rgba(0, 0, 0, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "rgba(255,255,255,.7)",
                            },
                            display: true,
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: "rgba(255, 255, 255, 0.15)",
                                zeroLineColor: "rgba(33, 37, 41, 0)",
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        var ctx = document.getElementById("line-chart").getContext("2d");
        window.myLine = new Chart(ctx, config);
    }, []);

    return (
        <>
            <Header/>
            <div className="mt-16 p-3 w-full md:w-1/2 lg:w-1/3 mx-auto">

                <div className="">
                    <canvas id="line-chart"></canvas>
                </div>

            </div>

            <Navigation active="dashboard"></Navigation>
        </>
    );
}