import React from 'react';
import axios from 'axios';
import Header from "components/layout/Header";
import Container from "components/layout/Container";
import { NONE, COMPLETE } from "components/legend/LegendItem";
import { AppContext } from "store/context";
import parsing from 'utils/parsing';

export default class App extends React.Component {
    state = {
        data: [],
        complete: 0,
        total: 0,
        selected: 0,
        onSelect: index => {
            this.setState({
                ...this.state,
                selected: index
            })
        },
        matches: false,
    }

    mq = window.matchMedia("(max-width: 767px)")

    handleMatched = mq => {
        this.setState({
            ...this.state,
            matches: mq.matches
        })

        console.log(this.state);
    }

    componentDidMount() {
        axios.get("data.json").then(({ data }, err) => {
            if(err) throw err;
            
            const [complete, total] = parsing([], data).reduce((a, { state }) => {
                state === COMPLETE && a[0]++;
                a[1]++;
                state === NONE && a[1]--;
                return a;
            }, [0, 0]);

            this.setState(() => {
                return {
                    ...this.state,
                    data,
                    complete,
                    total
                }
            })
        })
        this.handleMatched(this.mq);
        this.mq.addListener(this.handleMatched);
    }

    componentWillUnmount() {
        this.mq.removeListener(this.handleMatched);
    }

    render() {
        return (
            <div id="wrap" className="l-app">
                <div className="l-inner">
                    <AppContext.Provider value={this.state}>
                        <Header title="WSG 가이드"/>
                        <Container />
                    </AppContext.Provider>
                </div>
            </div>
        )
    }
}

