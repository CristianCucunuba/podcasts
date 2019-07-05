const SeriesGrid = ({ series }) => {
    return (
        <div>
            <h2>Series</h2>
            {series.map((serie, index) => (
                <div key={index}>{serie.title}</div>
            ))}
        </div>
    );
};

export default SeriesGrid;
