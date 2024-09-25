import React from "react";

const BarChart = ({ data, title }) => {
    const maxValue = Math.max(...data.map((item) => item.value));

    return (
        <div className="w-full max-w-xl mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-5">{title}</h2>

            <div className="flex">
                {/* Y軸の目盛り */}
                <div className="flex flex-col justify-between items-end h-64 pr-2">
                    {[100, 80, 60, 40, 20, 0].map((tick, index) => (
                        <div
                            key={index}
                            className="h-1/6 text-sm text-gray-500"
                        >
                            {tick}
                        </div>
                    ))}
                </div>

                {/* 棒グラフ本体 */}
                <div className="flex justify-between items-end h-64 w-full bg-gray-100 p-4 rounded-lg">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center px-2"
                        >
                            <div
                                style={{
                                    height: `${(item.value / maxValue) * 100}px`,
                                }}
                                className="w-8 bg-blue-500"
                            ></div>
                            <span className="mt-2 text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BarChart;
