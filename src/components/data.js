export const projects = [
	{
		title: "Robotics",
		projs: [
			{
				title: "Tic-Tac-Toe playing robot",
				desc: "A robotic manipulator that plays tic-tac-toe with humans, and always wins!",
				links: [
					{ type: "github", link: "https://github.com/Abban-Fahim/b38ro-project/"}
				]
			},
			{
				title: "B.U.R.G.E.R",
				desc: "Coming soon...",
				links: [
					{ type: "linkedin", link: "https://www.linkedin.com/posts/abu-dhabi-university_roboticscompetition-innovationchallenge-activity-7188491442758041601-AlAq/"}
				]
			}
		]
	},
	{
		title: "Web projects",
		projs: [
			{
				img: "/notezzz.png",
				title: "Notezzz",
				desc: "A simple web-based note-taking app",
				links: [
					{ type: "globe", link: "https://notezzz.web.app/" },
					{ type: "github", link: "https://github.com/Abban-Fahim/notezzz/" },
				],
			},
			{
				img: "/ez-mcq.png",
				title: "EZ MCQs",
				desc: "An app to help you prepare for the IGCSE/A-levels Science MCQs",
				links: [
					{ type: "globe", link: "https://mcqsite-1-c6352381.deta.app/" },
					{ type: "github", link: "https://github.com/Abban-Fahim/MCQ/" },
				],
			},
		]
	}
];

export const whatILike = [
	"music production",
	"my privacy",
	"Linux and FOSS",
	"socialism",
	"videogames",
	"math",
];

export const skills = [
	{ id: "robotics", title: "Robotics", to: ["engineering", "ros"], from: [], pos: { x: 0, y: 0 } },
	{ id: "engineering", title: "Engineering", to: [], from: ["robotics"], pos: { x: 300, y: 100 } },
	{ id: "ros", title: "ROS", to: ["python"], from: ["robotics"], pos: { x: -300, y: 100 } },
	{ id: "python", title: "Python", to: [], from: ["robotics"], pos: { x: -600, y: 100 } },
];

// Script run for generating above object

function generateUniform(start, end) {
	return Math.round(Math.random() * (end - start)) - start;
}

export function main() {
	let obj = [];
	const connections = [
		"eee,Electrical Engineering,-10,1",
		"robo,Robotics and Simulations,-3,1",
		"ros,ROS,-7,4",
		"py,Python,-5.2,5.4",
		"web,Web Dev,8,1",
		"node,Node JS,10,3",
		"react,React,8,3",
		"svelte,Svelte,9,5",
		"love,LÖVE 2D,5,4",
		"unity,Unity,4.5,6",
		"cpp,C++,-3,7",
		"rust,Rust lang,6,6",
		"matlab,MATLAB,-9,3",
		"game,Game Dev,3,1",
		"mcu,Microcontrollers,-12,4",
		"avr,Arduino Platform,-13,6",
		"esp,ESP32,-13,8",
		"pio,PlatformIO,-10,6",
		"linux,Linux,-1,3",
		"bash,Bash scripting,0,6",
		// edges defined below
		"robo->ros",
		"robo->cpp",
		"robo->linux",
		"robo->matlab",
		"robo->unity",
		"ros->py",
		"ros->cpp",
		"eee->robo",
		"eee->matlab",
		"eee->mcu",
		"mcu->avr",
		"mcu->pio",
		"mcu->esp",
		"game->love",
		"game->unity",
		"game->cpp",
		"game->py",
		"web->node",
		"web->svelte",
		"web->react",
		"web->rust",
		"linux->bash",
		"linux->rust",
	];

	// Poisson disc samppling to place all the nodes evenly
	let k = 15;
	let n = 2;
	let r = 1;
	let xSize = 20;
	let ySize = 8;
	let sampleGrid = new Array(ySize).fill(new Array(xSize).fill(-1));
	let activeList = [];
	// console.log(sampleGrid);


	connections.forEach((c) => {
		let connArray = c.split("->");
		if (connArray.length > 1) {
			obj[obj.findIndex((val) => val.id === connArray[0])].to.push(connArray[1]);
			obj[obj.findIndex((val) => val.id === connArray[1])].from.push(connArray[0]);
		} else {

			// Generate random postion according to disc sampling
			if (activeList.length != 0) {
				let i = generateUniform(0, activeList.length);
				let refX = activeList[i][1];
				let refY = activeList[i][0];
				
				
				let newX;
				let newY;
				let notAccepted = true;
				let t = 0;

				// Generate upto k points
				while (notAccepted || t < k) {
					t++;
					let newPhi = Math.random() * 2*Math.PI;
					let newR = generateUniform(r, 2*r);
					newX = refX + newR * Math.cos(newPhi);
					newY = refY + newR * Math.sin(newPhi);

					// Search if point is valid
					if (newX >= 0 && newX < xSize && newY >= 0 && newY < ySize) {
						for (let y = 0; y < ySize; y++) {
							for (let x = 0; x < xSize; y++) {
								let gridPoint = sampleGrid[y][x];
								notAccepted = false;
								if (gridPoint !== -1) {
									let gridX = activeList[gridPoint][1];
									let gridY = activeList[gridPoint][0];
									if (((gridX - newX) * (gridX - newX) + (gridY - newY) * (gridY - newY)) < (r * r)) {
										notAccepted = true;
									}
								}
							}
						}
					}
				}
				sampleGrid[Math.round(newX)][Math.round(newY)] = i;
				activeList.push([newX, newY]);
			} else {
				let x = generateUniform(0, xSize);
				let y = generateUniform(0, ySize);
				sampleGrid[y][x] = 0;
				// y is stored at index 0, x stored at 1
				activeList.push([y, x]);
			}

			let latestVal = activeList.length - 1;
			console.log(activeList[latestVal]);
			connArray = c.split(",");
			obj.push({
				id: connArray[0],
				title: connArray[1],
				to: [],
				from: [],
				pos: { x: activeList[latestVal][1] * 100, y: activeList[latestVal][1] * 100 },
			});
		}
	});
	return obj;
}