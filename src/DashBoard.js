import logo from './logo.svg';
import './DashBoard.css';

function DashBoard() {
    return (
        <div className='DashBoard'>
            <ul class = "displayPlants">
            <li class = "plantInfo" >
                <div class = "plantImg">
                    <img src='https://dsk4t6ov5vq8n.cloudfront.net/uploads/PBS-Articles/2022/The-Green-Planet/Episode-4-photos/Sized-photos/The_Green_Planet_04_004.jpg'/>
                </div>
                <br/>
                <h2>
                    Cactus
                </h2>
            </li>
            </ul>
        </div>
    );
}

export default DashBoard;
