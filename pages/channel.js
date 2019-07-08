import Layout from "../components/Layout";
import SeriesGrid from "../components/SeriesGrid";
import Podcasts from "../components/PodcastsGrid";
import ChannelHero from "../components/ChannelHero";
const Channel = ({ channel, audioClips, series }) => {
    return (
        <Layout title={channel.title}>
            <ChannelHero channel={channel} />
            <div className="container">
                <Podcasts audioClips={audioClips} />
                {series.length > 0 && <SeriesGrid series={series} />}
            </div>
            <style jsx> {`
                .container {
                    background-color: #f5f5f5;
                    padding: 10px 70px;
                    display: grid;
                    grid-template-columns: minmax(350px, 800px) auto;
                    grid-gap: 20px;
                }
            `}
            </style>
        </Layout>
    );
};

Channel.getInitialProps = async ({ query }) => {
    const idChannel = query.id;
    const [reqChannel, reqAudios, reqSeries] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
    ]);
    const dataChannel = await reqChannel.json();
    const { channel } = dataChannel.body;

    const dataAudios = await reqAudios.json();
    const audioClips = dataAudios.body.audio_clips;

    const dataSeries = await reqSeries.json()
    const series = dataSeries.body.channels;

    return { channel, audioClips, series };
};

export default Channel;
