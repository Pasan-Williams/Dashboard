import React from "react";
import { Doughnut } from 'react-chartjs-2';

const data = {
	labels: ['Google', 'SMAL', 'Internal'],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ['#6050FF', '#753A92', '#4791FF'],
			hoverBackgroundColor: ['#574CC7', '#442055', '#245FB8']
		}
	]
};

export default function DoughnutChart () {
		return (
			<div className="flex flex-col items-center w-full max-w-md">
				{/* <h4>Distribution Of Users</h4> */}
				<Doughnut data={data} />
			</div>
		);
}

 
