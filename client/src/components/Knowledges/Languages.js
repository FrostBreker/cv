import React, { Component } from 'react'

import ProgressBar from './ProgressBar';

export default class Languages extends Component {
    state = {
        langages: [
            { id: 1, value: "Javascript", xp: 0.3 },
            { id: 2, value: "Java", xp: 1.8 },
            { id: 3, value: "C#", xp: 1 },
            { id: 4, value: "Batch", xp: 4 }
        ],
        frameworks: [
            { id: 1, value: "React", xp: 0.2 },
            { id: 2, value: "Sass", xp: 0.2 },
            { id: 3, value: "DiscordJS", xp: 1.5 },
            { id: 4, value: "Gradle", xp: 2 }
        ]
    }
    render() {
        let { langages, frameworks } = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={langages}
                    className="languagesDisplay"
                    title="langages"
                />
                <ProgressBar
                    languages={frameworks}
                    className="frameworksDisplay"
                />
            </div>
        )
    }
}
