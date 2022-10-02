import React, {memo} from "react";
import {Dog} from "../components";
import {Wardrobe} from "../components/wardrobe/Wardrobe";

const CheckroomPage: React.FC = memo(() => {
	return (
		<div>
			<Dog checkroom={true}/>
			<Wardrobe/>
		</div>
	)
})


export default CheckroomPage