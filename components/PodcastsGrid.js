import AudioClip from "./AudioClip";

const Podcasts = ({ audioClips }) => {
    return (
        <div className="podcasts-container">
            <h2>Ultimos PodCasts</h2>
            <div className="grid-podcasts">
                {audioClips.map((clip, index) => (
                    <AudioClip index={index} clip={clip} />
                ))}

            </div>
        </div>
    );
};
export default Podcasts;
