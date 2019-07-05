import Link from "next/link";
import Layout from "../components/Layout";
import SeriesGrid from "../components/SeriesGrid";
import Podcasts from "../components/PodcastsGrid";
import ChannelHero from "../components/ChannelHero";
const Channel = ({ channel, audioClips, series }) => {
    return (
        <Layout title={channel.title}>
            <ChannelHero channel={channel}/>
            <SeriesGrid series={series} />
            <Podcasts audioClips={audioClips} />
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

    const dataSeries = await reqSeries.json();
    const series = dataSeries.body.channels;

    return { channel, audioClips, series };
};

export default Channel;
