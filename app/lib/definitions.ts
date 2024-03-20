export type tabState = "Overview" | "Readme";

export interface contentObject {
	contentType: tabState,
	title: string,
	content: string
}

export type contentData = {
	// eslint-disable-next-line no-unused-vars
	[key in tabState]: contentObject
}

export interface repoObject {
	id: number,
	name: string,
	description: string,
	readme: string
}

export interface repoData {
	[id: string]: repoObject
}
