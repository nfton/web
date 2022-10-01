import React, {memo} from "react";
import {Card, CardContent} from "@mui/material";
import './characteristics.scss'

export const Characteristics: React.FC = memo(() => {
    return (
            <Card className="card" variant={"outlined"}>
                <CardContent sx={{padding: '1rem 1rem 2rem 2rem'}}>
                    {/*<Typography gutterBottom variant="h6" component="div">*/}
                    {/*    {CHARACTERISTICS.health}*/}
                    {/*</Typography>*/}
                    {/*<Typography gutterBottom variant="h6" component="div">*/}
                    {/*    {CHARACTERISTICS.time}*/}
                    {/*</Typography>*/}
                    {/*<Typography gutterBottom variant="h6" component="div">*/}
                    {/*    {CHARACTERISTICS.speed}*/}
                    {/*</Typography>*/}
                    {/*<Typography gutterBottom variant="h6" component="div">*/}
                    {/*    {CHARACTERISTICS.strength}*/}
                    {/*</Typography>*/}
                </CardContent>
            </Card>
    )
})