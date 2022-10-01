import React, {memo} from "react";
import {Dog} from "../components";
import {Wardrobe} from "../components/wardrobe/Wardrobe";

const CheckroomPage: React.FC = memo(() => {

    return (
        <div className="checkroom-container">
            <div className="topPane">
                <div className="dog">
                    <Dog checkroom={true}/>
                </div>
            </div>

            <div className="bottomPane">
                <Wardrobe/>
            </div>
        </div>
    )
})


export default CheckroomPage