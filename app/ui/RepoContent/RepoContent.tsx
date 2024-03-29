import React from 'react';
import MarkdownRenderer from "../MarkdownRenderer/MarkdownRenderer";

interface RepoContentProps {
	contentType: "Overview" | "Readme",
	title: string,
	content: string,
}

const RepoContent: React.FC<RepoContentProps> = ({ contentType, title, content}) => {

return (
		<div>
			<article className="text-black flex flex-col gap-1 m-2 p-4 pt-2 bg-slate-500">
				<h1 className="font-bold">{title}</h1>
				{contentType === 'Readme'
					? <MarkdownRenderer markdown={content}/>
					: <p>{content}</p>}
			</article>
		</div>
	)
}

export default RepoContent;
