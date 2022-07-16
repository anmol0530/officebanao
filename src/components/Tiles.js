import { TILES } from "../config";
import '../styles/Tiles.scss';


const Tiles = ({ addCard }) => {

    return (
        <div className="tiles">
            {TILES.map(tile =>
                <div key={tile.value} className="tile" onClick={() => addCard(tile.value)}>
                    <div className="circle" style={{ background: tile.color }}></div>
                    {tile.value}
                </div>
            )}
        </div>
    )
}

export default Tiles;