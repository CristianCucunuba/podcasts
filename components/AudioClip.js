import Link from "next/link";
const AudioClip = ({ clip }) => {
    return (
        <div>
            <Link href={`/podcast?id=${clip.id}`}>
                <a className="podcast">
                    <div className="podcast-thumbnail">
                        <img src={clip.urls.image} alt="podcast logo" />
                    </div>
                    <div className="podcast-description">
                        <p>{clip.title}</p>
                        <span>{(clip.duration / 60).toFixed(0)} minutes</span>
                    </div>
                </a>
            </Link>
            <style jsx>{`
                .podcast {
                    display: grid;
                    background-color: white;
                    border-radius: 7px;
                    grid-template-columns: 200px auto;
                    grid-gap: 10px;
                    align-items: center;
                    text-decoration: none;
                    margin-bottom: 20px;
                    box-shadow: 4px 7px 10px 0px rgba(0, 0, 0, 0.25);
                }
                .podcast-thumbnail, 
                .podcast img {
                    width: 100%;
                    height: 100%;
                }
                .podcast-description {
                    padding: 0 10px;
                }
                .podcast-description p {
                    font-size: 20px;
                    font-weight: 700;
                    color: #141414;
                }
                .podcast-description span {
                    color: #141414;
                }
            `}
            </style>
        </div>
    )
}
export default AudioClip