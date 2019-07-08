const ChannelHero = ({ channel }) => {
    return (
        <div
            className="channel-hero"
            style={{
                backgroundImage: `url(${channel.urls.banner_image.original})`
            }}
        >
            <div className="overlay">
                <h1 className="channel-title">{channel.title}</h1>
            </div>
            <style jsx>
                {`
                    .channel-hero {
                        width: 100%;
                        height: 400px;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    .overlay {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 29, 74, .5);
                    }
                    .channel-title {
                        font-size: 50px;
                        padding: 30px 60px;
                        color: white;
                        border-radius: 5px;
                        text-shadow: 1px 1px #fe4902, 
                                    2px 2px #fe4902,
                                    3px 3px #fe4902,
                                    4px 4px #fe4902,
                                    5px 5px #fe4902,
                                    6px 6px #fe4902;
                    }
                `}
            </style>
        </div>
    );
};
export default ChannelHero;
