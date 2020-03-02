(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{76:function(n,s){n.exports='## OstMask 示例\n\n淡入淡出效果蒙层，同时可以防止移动端滚动穿透；\n\n```jsx\n:::$demo\n    constructor(props) {\n        super(props);\n        this.state = {\n            show: false\n        }\n    }\n\n    render() {\n        return (\n            <div className="ost-mask-demo">\n                <button\n                    className="ost-mask-demo-btn"\n                    onClick={()=>this.setState({show: true})} > \n                    显示蒙层\n                </button>\n\n                <OstMask \n                    show={this.state.show} \n                    onClick={e=> this.setState({show: false})} >\n                    <span className="ost-mask-demo-text" > 点击蒙层关闭 </span>\n                </OstMask>\n            </div>\n        )\n    }\n:::$\n```\n\n```css\n<style>\n.ost-mask-demo {\n    width: auto;\n    padding: 10px;\n}\n.ost-mask-demo-btn {\n    width: 100%;\n    height: 44px;\n    font-size: 14px;\n    background: #FF6D00;\n    color: #fff;\n    border-radius: 100px;\n}\n.ost-mask-demo-text {\n    color: #fff;\n    font-size: 18px;\n}\n</style>\n\n```\n\n### 组件 props 说明\n| 事件名称 | 说明 | 类型 |\n|---------|--------|---------|\n| show | 用于控制蒙层显示 | bool |\n| onClick | 蒙层的点击事件 | func |\n\n  '}}]);