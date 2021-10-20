import React, { Component } from 'react'
import { portfolioData } from '../../data/portfolioData'
import Project from './Project'

export default class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radios: [
            { id: 1, value: "javascript" },
            { id: 3, value: "react" },
            { id: 4, value: "discordjs" },
            { id: 5, value: "java" },
            { id: 6, value: "C#" }
        ],
        selectedRadio: 'javascript'
    };

    handleRadio = (event) => {
        let radio = event.target.value
        this.setState({ selectedRadio: radio })
    }

    render() {

        let { projects, radios, selectedRadio } = this.state;

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radios) => {
                            return (
                                <li key={radios.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radios.value === selectedRadio}
                                        value={radios.value}
                                        id={radios.value}
                                        onChange={this.handleRadio}
                                    />

                                    <label htmlFor={radios.value}>{radios.value}</label>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="projects">
                    {
                        projects.filter(item => item.languages.includes(selectedRadio)).map(item => {

                            return (
                                <Project
                                    key={item.id}
                                    item={item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
