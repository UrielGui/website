import React from "react";

export default function Loading() {
    return (
        <div id="page-loading">
            <div className="mainContainer-loading">
                <div className="boxColor-loading">
                    <div className="box-loading" />
                </div>
                <h1 className="loader">
                    <span>C</span>
                    <span>A</span>
                    <span>R</span>
                    <span>R</span>
                    <span>E</span>
                    <span>G</span>
                    <span>A</span>
                    <span>N</span>
                    <span>D</span>
                    <span>O</span>
                </h1>
                <div className="progress-loading">
                    <div className="progress-loading-value" />
                </div>
            </div>
        </div>
    )
}