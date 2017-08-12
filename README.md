# react-text-more-less

Initialized by [vivaxy/gt-npm-package](https://github.com/vivaxy/gt-npm-package).

Based on [dollarshaveclub/shave](https://github.com/dollarshaveclub/shave).

See [demo](https://vivaxy.github.io/react-text-more-less/demo/build/index.html).

## Installation

`npm install react-text-more-less`

`yarn add react-text-more-less`

## Usage

```js
import React, { Component } from 'react';
import ReactTextMoreLess from 'react-text-more-less';

class Demo extends Component {
    state = {
        collapsed: true,
    };
    
    render() {
        const { collapsed } = this.state;
        return (
            <ReactTextMoreLess
                collapsed={collapsed}
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
                onClick={() => {this.setState({ collapsed: !collapsed })}}
            />
        );
    }
}
```

## Props

| name              | type      | isRequired    | default       | description                                               |
| ---               | ---       | ---           | ---           | ---                                                       |
| `text`            | string    | ✔             | N/A           | text in the container                                     |
| `lessHeight`      | number    | ✔             | N/A           | container collapsed height                                |
| `collapsed`       | bool      | ✖             | true          | is the container collapsed according to the `lessHeight`  |
| `className`       | string    | ✖             | undefined     | className of the container                                |
| `showMoreText`    | string    | ✖             | ...           | the ellipse text to show more                             |
| `showMoreElement` | element   | ✖             | undefined     | the element to show when container collapsed              |
| `showLessElement` | element   | ✖             | undefined     | the element to show when container expanded               |
| `onClick`         | func      | ✖             | () => {}      | container click handler                                   |

If `showMoreElement` supplied, `showMoreText` will be replaced, this props is useful when you want to custom `showMoreText` style or to use a more complex dom structure to display `showMoreText`.