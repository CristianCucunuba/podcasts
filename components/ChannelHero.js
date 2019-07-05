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
                        height: 300px;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                    .overlay {
                        display: flex;
                        justify-content: center;
                        align-items: flex-end;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0, 29, 74, .5);
                    }
                    .channel-title {
                        padding: 10px;
                        background-color: rgba(0,0,0,.75);
                        color: white;
                        border-radius: 5px;
                    }
                `}
            </style>
        </div>
    );
};
export default ChannelHero;
