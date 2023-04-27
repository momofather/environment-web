import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Loading {
    domNode = null;
    isExistNode = false;
    timer = null;
    constructor() {
        this.domNode = document.createElement('div');
        this.domNode.className = 'hp-loading-wrap';
        this.isExistNode = false;
    }

    show() {
        this.timer = setTimeout(()=>{
            document.body.appendChild(this.domNode);
            const children = <div className="loading-content"><div className="loading-img"></div></div>;
            ReactDOM.render(children, this.domNode);
            this.isExistNode = true;
        },100);
    }

    hide() {
        if(this.timer){
            clearTimeout(this.timer);
        }
        if(this.domNode && this.isExistNode){
            document.body.removeChild(this.domNode);
            this.isExistNode = false;
        }
    }
}

export default new Loading()