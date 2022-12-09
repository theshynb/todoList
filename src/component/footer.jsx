import React from "react";

export default class footer extends React.Component {
    constructor (props) {
        super(props)
    }
    checkedAll = (e) => {
        const {checkedAll,editcheckedFlag} = this.props
        checkedAll(e.target.checked)
        editcheckedFlag()
    }
    // reduce是forEach的加强版，
    subNum = () => {
        return this.props.cardList.reduce((num,item) => num += item.checked && item.num * item.price, 0)
    }
    Num = () => {
        return this.props.cardList.reduce((num,item) => num += item.checked && item.num , 0)
    }
    // 删除列表
    removeChecked = (e) => {
      const {removeChecked} = this.props
      removeChecked()
    }
    render() {
        return <div className="footer">
            <input onChange={this.checkedAll} checked={this.props.checkedAllFlag} type="checkbox"/>
            <div>总计:{this.subNum()}元 共{this.Num()}件商品 <button onClick={this.removeChecked.bind(this)}>批量删除</button></div>
        </div>
    }
}