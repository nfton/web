import React, {memo} from "react";
import {Typography} from "@mui/material";
import './characteristics.scss'

interface CharacteristicProps {
    char: any;
    charNumber: number;
}

export const Characteristic: React.FC<CharacteristicProps> = memo(({char, charNumber}) => {
    return (
        <div className="characteristic-container">
            <div className="characteristic">
            <div style={ { color: char.color } }
                 className="char"
                 key={ char.title }
            >
                { char.icon}
            </div>
            <Typography className="charNumber" variant="h6" component="div">
                {charNumber}
            </Typography>
            </div>
        </div>
    )
})