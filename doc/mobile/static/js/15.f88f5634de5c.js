(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{76:function(n,t){n.exports="## OstLoading 示例\n\n  ### 默认选中示例\n\n```jsx\n:::$demo\n\n    render() {\n       return( \n        <OstList.card>\n        <OstList title='默认选中'>\n            <div className=\"alignCenter\">\n                <OstSwitch defaultChecked onClick={ck => console.log(ck)} />\n            </div>\n        </OstList>\n        </OstList.card>\n       )\n    }\n:::$\n```\n\n### 默认未选示例\n  \n```jsx\n:::$demo\n\n    render() {\n       return( \n        <OstList.card>\n        <OstList title='默认未选'>\n            <div className=\"alignCenter\">\n                <OstSwitch defaultChecked={false} onClick={ck => console.log(ck)} />\n            </div>\n        </OstList>\n        </OstList.card>\n       )\n    }\n:::$\n```\n\n### 禁止点击示例\n\n```jsx\n:::$demo\n\n    render() {\n       return( \n        <OstList.card>\n        <OstList title='不可选择'>\n            <div className=\"alignCenter\">\n                <OstSwitch defaultChecked disabled onClick={ck => console.log(ck)} />\n            </div>\n        </OstList>\n        </OstList.card>\n       )\n    }\n:::$\n```\n\n```css\n<style>\n.alignCenter {\n    height: 100%;\n    display: flex;\n    align-items: center;\n}\n</style>\n\n```"}}]);