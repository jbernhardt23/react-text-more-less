import React, { Component } from 'react';
import './App.css';
import ReactTextMoreLess from './ReactTextMoreLess';

class App extends Component {

    state = {
        collapsed: true,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="app">
                <h1 className="title">English example:</h1>
                <div className="example">
                    <ReactTextMoreLess
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mi nulla, ornare in ultricies vitae, dictum et velit. Aenean eget neque sit amet purus pretium accumsan sed vel magna. Sed efficitur laoreet consequat. Integer molestie maximus vulputate. Proin id tincidunt urna. Proin sed diam feugiat, viverra magna non, cursus metus. Cras tristique ipsum vestibulum, tempor ligula pharetra, imperdiet turpis. Nullam feugiat sollicitudin elit a facilisis. Fusce sagittis sed nisl vel luctus"
                        lessHeight={48}
                    />
                </div>
                <h1 className="title">Chinese example:</h1>
                <div className="example">
                    <ReactTextMoreLess
                        text="1926年1—6月，他一连发表了四篇论文，题目都是《量子化就是本征值问题》，系统地阐明了波动力学理论。在此以前，德国物理学家W.K.海森堡、M.玻恩和E.P.约旦于1925年7—9月通过另一途径建立了矩阵力学。1926年3月，薛定谔发现波动力学和矩阵力学在数学上是等价的，是量子力学的两种形式，可以通过数学变换,从一个理论转到另一个理论。薛定谔起初试图把波函数解释为三维空间中的振动，把振幅解释为电荷密度，把粒子解释为波包。但他无法解决“波包扩散”的困难。最后物理学界普遍接受了玻恩提出的波函数的几率解释。"
                        lessHeight={72}
                    />
                </div>
                <h1 className="title">Custom show more text example:</h1>
                <div className="example">
                    <ReactTextMoreLess
                        text="1926年1—6月，他一连发表了四篇论文，题目都是《量子化就是本征值问题》，系统地阐明了波动力学理论。在此以前，德国物理学家W.K.海森堡、M.玻恩和E.P.约旦于1925年7—9月通过另一途径建立了矩阵力学。1926年3月，薛定谔发现波动力学和矩阵力学在数学上是等价的，是量子力学的两种形式，可以通过数学变换,从一个理论转到另一个理论。薛定谔起初试图把波函数解释为三维空间中的振动，把振幅解释为电荷密度，把粒子解释为波包。但他无法解决“波包扩散”的困难。最后物理学界普遍接受了玻恩提出的波函数的几率解释。"
                        lessHeight={72}
                        showMoreText="... 更多"
                    />
                </div>
                <h1 className="title">Custom show more text with styles example:</h1>
                <div className="example">
                    <ReactTextMoreLess
                        text="1926年1—6月，他一连发表了四篇论文，题目都是《量子化就是本征值问题》，系统地阐明了波动力学理论。在此以前，德国物理学家W.K.海森堡、M.玻恩和E.P.约旦于1925年7—9月通过另一途径建立了矩阵力学。1926年3月，薛定谔发现波动力学和矩阵力学在数学上是等价的，是量子力学的两种形式，可以通过数学变换,从一个理论转到另一个理论。薛定谔起初试图把波函数解释为三维空间中的振动，把振幅解释为电荷密度，把粒子解释为波包。但他无法解决“波包扩散”的困难。最后物理学界普遍接受了玻恩提出的波函数的几率解释。"
                        lessHeight={72}
                        showMoreText="... 展示更多"
                        showMoreElement={(
                            <span>
                                ... <span className="show-more-text">展示更多</span>
                            </span>
                        )}
                    />
                </div>
                <h1 className="title">Collapse and expand example:</h1>
                <div className="example">
                    <ReactTextMoreLess
                        collapsed={this.state.collapsed}
                        text="1926年1—6月，他一连发表了四篇论文，题目都是《量子化就是本征值问题》，系统地阐明了波动力学理论。在此以前，德国物理学家W.K.海森堡、M.玻恩和E.P.约旦于1925年7—9月通过另一途径建立了矩阵力学。1926年3月，薛定谔发现波动力学和矩阵力学在数学上是等价的，是量子力学的两种形式，可以通过数学变换,从一个理论转到另一个理论。薛定谔起初试图把波函数解释为三维空间中的振动，把振幅解释为电荷密度，把粒子解释为波包。但他无法解决“波包扩散”的困难。最后物理学界普遍接受了玻恩提出的波函数的几率解释。"
                        lessHeight={72}
                        showMoreText="... 展示更多"
                        showMoreElement={(
                            <span>
                                ... <span className="show-more-text">展示更多</span>
                            </span>
                        )}
                        showLessElement={(
                            <span className="show-more-text">收起</span>
                        )}
                        onClick={this.toggle}
                    />
                </div>
            </div>
        );
    }
}

export default App;
