import Serie from "./Serie";

const SeriesGrid = ({ series }) => {
    return (
        <div>
            <h2>Series</h2>
            <div className="SeriesGrid">
                {series.map((serie, index) => (
                    <Serie index={index} serie={serie} />
                ))}
            </div>
            <style jsx>
            {`
                .SeriesGrid {
                    display: grid;
                    grid-template-columns: repeat(2, 200px);
                    grid-template-rows: 200px;
                    grid-auto-rows: 200px;
                    grid-gap: 20px;
                }
            `}
            </style>
        </div>
    );
};

export default SeriesGrid;
