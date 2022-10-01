import './wardrobe.scss'
import React, {CSSProperties, memo} from "react";
import {theme} from "../../themes";
import {Box, Tab, Tabs, Typography} from "@mui/material";
import {EAtributes} from "../../types";
import {GAMES} from "../../data";

export const Wardrobe: React.FC = memo(() => {
    const divStyle: CSSProperties = {
        backgroundColor: theme.palette.background.paper
    }

    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return <div style={divStyle} className="wardrobe-container">
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
            >
                <Tab value="one" label={EAtributes.HATS} />
                <Tab value="two" label={EAtributes.COLLAR} />
                <Tab value="three" label={EAtributes.PANTS} />
                <Tab value="three" label={EAtributes.TSHIRT} />
            </Tabs>
        </Box>
    </div>
})
