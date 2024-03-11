export type tabState = "Overview" | "Readme";

export type contentObject = {
		[key in tabState]: {
			contentType: tabState,
			title: string,
			content: string,
		};
	}
