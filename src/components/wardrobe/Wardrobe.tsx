import './wardrobe.scss'
import React, {CSSProperties, memo} from "react";
import {theme} from "../../themes";
import {Box, Tab, Tabs, Typography} from "@mui/material";
import {EAttributes} from "../../types";
import {useWindowDimensions} from "../../hooks";

export const Wardrobe: React.FC = memo(() => {
    const {height} = useWindowDimensions()

    const divStyle: CSSProperties = {
        height: (height - (height * 0.4) - 80 - 70) + 'px',
        backgroundColor: theme.palette.background.paper
    }

    const [value, setValue] = React.useState('cardigan');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return <div style={divStyle} className="wardrobe-container">
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="tabs"
                centered
            >
                <Tab value="cardigan" label={EAttributes.CARDIGAN} />
                <Tab value="collar" label={EAttributes.COLLAR} />
                <Tab value="pants" label={EAttributes.PANTS} />
                <Tab value="t-shirt" label={EAttributes.T_SHIRT} />
            </Tabs>
        </Box>
    </div>
})
