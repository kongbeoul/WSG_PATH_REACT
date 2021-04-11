import React from 'react';
import axios from 'axios';
import Header from "components/layout/Header";
import Toolbar from "components/toolbar";
import Tree from "components/Tree";
import { NONE, COMPLETE } from "components/legend/LegendItem";
import { AppContext } from "components/context";
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
        }
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

            this.setState({
                ...this.state,
                data,
                complete,
                total
            })
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div id="wrap" className="l-app">
                <div className="l-inner">
                    <Header title="WSG 가이드"/>
                    <div id="container" className="l-container">
                        <AppContext.Provider value={this.state}>
                            <Toolbar items={["전체", ...data.map(v => v.title)]}/>
                            <Tree />
                        </AppContext.Provider>
                    </div>
                </div>
            </div>
        )
    }
}

