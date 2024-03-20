import '../ButtonGIT/ButtonGit.css';


export default function ButtonGit ({text, link}) {


    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="buttongit">
            {text}
        </a>
    )
}