import React, {CSSProperties, memo} from "react";
import {IconButton, InputAdornment, InputBase, TextField, Typography} from "@mui/material";
import {theme} from "../themes";
import {pattern0} from "../icons";
import './marketplace.scss'
import {EAttributes} from "../types";
import NFTCard from "../components/nft_card/NFTCard";
import nextId from "react-id-generator";
import {useTypedSelector, useWindowDimensions} from "../hooks";
import SearchIcon from '@mui/icons-material/Search';

const MarketplacePage: React.FC = memo(() => {
    const { checkroom } = useTypedSelector(state => state.player)
    return (
        <div
             className="marketplace-container">
            <div className="search">
                <TextField
                    className="searchInput"
                    fullWidth
                    variant="outlined"
                    sx={{backgroundColor: theme.palette.background.paper}}
                    label="Search"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon sx={{fill: theme.palette.background.paper === '#1C1C1C' ? "white" : "black"}}/>
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </div>
            <div className="all">
                    { Object.values(EAttributes).map((value) =>
                            <div>
                                { checkroom[value as EAttributes]?.length! > 0 &&
                                    <Typography className="value" sx={{color: theme.palette.background.paper === '#1C1C1C' ? theme.palette.text.primary : "#1C1C1C" }}>{value === 'tShirt' ? "T-shirt" : value.charAt(0).toUpperCase() + value.slice(1)}</Typography>}
                                <div className="cards">
                                    { checkroom[value as EAttributes]?.map((item) =>
                                            <NFTCard
                                                { ...item}
                                                key={nextId('marketplace-card-')}
                                                marketplace={true}
                                                selected={ false }
                                            />
                                    )}
                            </div>
                            </div>
                        )}
            </div>
        </div>
    )
})


export default MarketplacePage