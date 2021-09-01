
window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Analysis For The Given Comment For Each Respective Room and Desk Number"              
		},
		data: [              
		{
			// Change type to "column", "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "FFR1D1",  y: 10  },
				{ label: "FFR1D2", y: 15  },
				{ label: "FFR1D3", y: 25  },
				{ label: "FFR1D4",  y: 30  },
                { label: "FFR2D1",  y: 20  },
				{ label: "FFR2D2", y: 15  },
				{ label: "FFR2D3", y: 30  },
				{ label: "FFR2D4",  y: 30  },
                { label: "SFR1D1",  y: 10  },
				{ label: "SFR1D2", y: 22  },
				{ label: "SFR1D3", y: 15  },
				{ label: "SFR1D4",  y: 30  },
                { label: "SFR2D1",  y: 35  },
				{ label: "SFR2D2", y: 35  },
				{ label: "SFR2D3", y: 25  },
				{ label: "SFR2D4",  y: 60  }
			]
		}
		]
	});
	chart.render();
}
