export default function Project({ project }) {
    return (
        <>
            <h1 className="font-['Comic_Sans_MS']">{project.name}</h1>
            <img src={project.image}/>
            <h1 className="font-sans">{project.description}</h1>
            <h1>{project.languages.join(", ")}</h1>
            <h1>{project.github}</h1>
        </>
    )
}