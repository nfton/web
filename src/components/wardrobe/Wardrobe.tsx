import './wardrobe.scss'
import React, {CSSProperties, memo} from "react";
import {theme} from "../../themes";
import {Box, Tab, Tabs, Typography} from "@mui/material";
import {EAtributes} from "../../types";

export const Wardrobe: React.FC = memo(() => {
    const divStyle: CSSProperties = {
        backgroundColor: theme.palette.background.paper
    }

    const [value, setValue] = React.useState('hats');

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
                aria-label="tabs"
            >
                <Tab value="hats" label={EAtributes.HATS} />
                <Tab value="collar" label={EAtributes.COLLAR} />
                <Tab value="pants" label={EAtributes.PANTS} />
                <Tab value="tshirt" label={EAtributes.TSHIRT} />
            </Tabs>
        </Box>
    </div>
})
