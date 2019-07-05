import Link from "next/link";
const Podcasts = ({ audioClips }) => {
    return (
        <div>
            <h2>Ultimos PodCasts</h2>
            {audioClips.map((clip, index) => (
                <Link href={`/podcast?id=${clip.id}`}>
                    <a key={index}>{clip.title}</a>
                </Link>
            ))}
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        background: white;
                        font-family: system-ui;
                    }
                `}
            </style>
        </div>
    );
};
export default Podcasts;
