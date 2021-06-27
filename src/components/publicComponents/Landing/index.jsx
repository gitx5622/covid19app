import React, { useEffect, useState } from 'react';
import Topbar from "./Topbar/Topbar";
import "../../../styles/Landing/Landing.scss";
import { Button, CircularProgress, Typography, Box, Avatar} from "@material-ui/core";
import {useDispatch, useSelector } from "react-redux";
import {covidSummary} from "../../../dataStore/actions/covidSummary";

const Landing = (props) => {
    const [progress, setProgress] = useState(10);
    const orderSelector = useSelector(state => state.summaryState);
    const {
        data: {
            Global: {
                NewConfirmed: NewConfirmedCases,
                TotalConfirmed: TotalConfirmedCases,
                NewDeaths: NewDeathsCases,
                TotalDeaths: TotalDeathsCases,
                NewRecovered: NewRecoveredCases,
                TotalRecovered: TotalRecoveredCases
            }
        }
    } = orderSelector;

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        covidSummary(dispatch)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

    return (
        <div>
            <Topbar/>
            <div className="covid-banner">
                <div className="covid1">
                    <div><img src="/images/Topbar/covid1.png" alt="covid1" width="45%"/></div>
                    <div className="description">
                        <h3>Covid-19 Summary</h3><br/>
                        <p>A summary of new and total cases per country updated daily.</p></div>
                </div>
                <div className="covid2">
                    <div className="statistics">
                        <img src="/images/Topbar/trace.png" alt="trace" width="100%"/>
                    </div>
                    <div>
                        <center>
                            <div><Button variant="contained" color="secondary">Total Recoveries</Button>
                            <br/><span>{NewRecoveredCases}</span></div><br/>
                            <div><Button variant="contained" color="primary">Total Deaths</Button>
                            <br/><span>{TotalDeathsCases}</span></div>
                        </center>
                    </div>
                </div>
            </div>
            <div className="dashboard">
                <div className="covid-sidebar">
                    <div>
                        <h3 className="covid-title">COVID-19 PANDEMIC</h3>
                    </div>
                    <div>
                        <h3>Summary</h3>
                    </div>
                    <div>
                        <h3>Countries</h3>
                    </div>
                    <div>
                        <h3>Worldwide</h3>
                    </div>
                    <div>
                        <h3>Worldwide</h3>
                    </div>
                    <div>
                        <h3>Worldwide</h3>
                    </div>
                </div>
                <div className="main-area">
                    <div>
                        <h3>Total Confirmed</h3>
                        <div>
                            <Avatar variant="circular">{TotalConfirmedCases}</Avatar>
                        </div>
                    </div>
                    <div>
                        New Confirmed
                        <div>
                            <p>{NewConfirmedCases}</p>
                        </div>
                    </div>
                    <div>
                        <Box position="relative" display="inline-flex">
                            <CircularProgress color="primary" variant="determinate" value={progress} />
                            <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                                    progress,
                                )}%`}</Typography>
                            </Box>
                        </Box>
                    </div>
                    <div>Review</div>
                    <div>
                        Total Deaths
                        <div>
                            <p>{TotalDeathsCases}</p>
                        </div>
                    </div>
                    <div>
                        New Deaths
                        <div>
                            <p>{NewDeathsCases}</p>
                        </div>
                    </div>
                    <div>
                        <Box position="relative" display="inline-flex">
                            <CircularProgress color="secondary" variant="determinate" value={progress} />
                            <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                                    progress,
                                )}%`}</Typography>
                            </Box>
                        </Box>
                    </div>
                    <div>Review</div>
                    <div>Total Recovered
                        <div>
                            <p>{TotalRecoveredCases}</p>
                        </div>
                    </div>
                    <div>New Recovered
                        <div>
                            <p>{NewRecoveredCases}</p>
                        </div>
                    </div>
                    <div>
                        <Box position="relative" display="inline-flex">
                            <CircularProgress color="inherit" variant="determinate" value={progress} />
                            <Box
                                top={0}
                                left={0}
                                bottom={0}
                                right={0}
                                position="absolute"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                                    progress,
                                )}%`}</Typography>
                            </Box>
                        </Box>
                    </div>
                    <div>Review</div>
                </div>
            </div>
        </div>
    );
};

export default Landing;