export type tabState = "Overview" | "Readme";

export type contentObject = {
		[key in tabState]: {
			contentType: tabState,
			title: string,
			content: string,
		}
}

export type repoDebrief = {
	repoName: {
		[key in tabState]: string;
	};
}


// NOTE: this is the structure I'm aiming for with repoDebrief
// data: repoDebrief = {
// 	"ps-fe": {
// 		"Overview": {
// 			contentType: "Overview",
// 			title: "Where it all started..",
// 			content: "this was a project I worked on with 4 others..."
// 		},
// 		"Readme": {
// 			contentType: "Readme",
// 			title: "My Readme",
// 			content: "download from github and run `npm run dev` to start local service"
// 		}
// 	}
// }
