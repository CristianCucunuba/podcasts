const Serie = ({ serie }) => {
    return (
        <div className="serie">
            <style jsx>
                {`
                    .serie {
                        background-image: url('${serie.urls.logo_image.original}');
                        background-repeat: no-repeat;
                        background-size: cover;
                        box-shadow: 4px 7px 10px 0px rgba(0,0,0,0.25);
                    }
                `}
            </style>
        </div>
    );
};

export default Serie;
