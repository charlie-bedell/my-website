import './style.css';
import { Remarkable } from 'remarkable';

interface MarkdownRendererProps {
  markdown: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {

	const md = new Remarkable();
	const html = md.render(markdown);
	
  return (
	  <div className="markdown" dangerouslySetInnerHTML={{__html: html}} />
	)
}

export default MarkdownRenderer;
