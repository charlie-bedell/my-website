interface RepoContentProps {
  contentType: "Overview" | "Readme",
	title: string,
	content: string,
}

const RepoContent: React.FC<RepoContentProps> = ({ type, title, content}) => {
  return (
		<div>
			<article>
				<h1>{title}</h1>
				<p>{content}</p>
			</article>
		</div>
	)
}

export default RepoContent;
