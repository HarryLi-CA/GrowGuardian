import './PlantControl.css';

function PlantControl() {
    return (
        
        <div className='PlantControl'>
            <body class="All">
                <h1 class="plantName">
                    Cactus 
                </h1> 
                <div class = "plantImg">
                    <img src='https://dsk4t6ov5vq8n.cloudfront.net/uploads/PBS-Articles/2022/The-Green-Planet/Episode-4-photos/Sized-photos/The_Green_Planet_04_004.jpg'/>
                </div>
                <table>
                    <tr class="title">
                        <th>Watering Cycles</th>
                        <th>Amount</th>
                    </tr>
                    <tr class="points">
                        <td>Weekly</td>
                        <td>1/4 cups</td>
                    </tr>
                </table>
                <div >
                    <button class = "waterButton" >Water Plant</button>
                </div>
    
                <h1 class="plantName">
                    Arugula 
                </h1> 
                <div class = "plantImg">
                    <img src='https://dsk4t6ov5vq8n.cloudfront.net/uploads/PBS-Articles/2022/The-Green-Planet/Episode-4-photos/Sized-photos/The_Green_Planet_04_004.jpg'/>
                </div>
                <table>
                    <tr class="title">
                        <th>Watering Cycles</th>
                        <th>Amount</th>
                    </tr>
                    <tr class="points">
                        <td>Daily</td>
                        <td>1/2 cups</td>
                    </tr>
                </table>
                <div >
                    <button class = "waterButton" >Water Plant</button>
                </div>

                <h1 class="plantName">
                    Arugula 
                </h1> 
                <div class = "plantImg">
                    <img src='https://dsk4t6ov5vq8n.cloudfront.net/uploads/PBS-Articles/2022/The-Green-Planet/Episode-4-photos/Sized-photos/The_Green_Planet_04_004.jpg'/>
                </div>
                <table>
                    <tr class="title">
                        <th>Watering Cycles</th>
                        <th>Amount</th>
                    </tr>
                    <tr class="points">
                        <td>Daily</td>
                        <td>1/2 cups</td>
                    </tr>
                </table>
                <div >
                    <button class = "waterButton" >Water Plant</button>
                </div>
            </body>
        </div>
    );
}

export default PlantControl;
