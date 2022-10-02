import React, {memo} from "react";
import {Card, CardContent} from "@mui/material";
import './characteristics.scss'
import {CHARACTERISTICS} from "../../data";
import {ECharacteristics, ICharacteristics} from "../../types";
import {Characteristic} from "./Characteristic";

const CHARS: ICharacteristics = {
    [ECharacteristics.HEALTH]: 2,
    [ECharacteristics.SPEED]: 1,
    [ECharacteristics.STRENGTH]: 3,
    [ECharacteristics.TIME]: 1,
}

export const Characteristics: React.FC = memo(() => {
    const chars = [ECharacteristics.HEALTH, ECharacteristics.TIME, ECharacteristics.SPEED, ECharacteristics.STRENGTH];

    return (
            <Card className="card" variant={"outlined"}>
                <CardContent sx={{minHeight: "100%", padding: '1rem 1rem 2rem 2rem'}}>
                        {chars.map((char) =>
                            <Characteristic char={CHARACTERISTICS[char]} charNumber={CHARS[char]}/>
                        )}
                </CardContent>
            </Card>
    )
})