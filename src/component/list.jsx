import React from "react";

export default class list extends React.Component {
    constructor(props) {
        super(props)
    }
    add = (val) => {
        const {add} = this.props
        console.log('%c 🍔 add: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', add);
        add(val)
    }
    sub = (val) => {
        const {sub} = this.props
        console.log('%c 🥓 sub: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', sub);
        sub(val)
    }
    deleteData = (val) => {
        const {deleteData} = this.props
        deleteData(val)
    }
    editChecked = (val) => {
        const {editChecked,editCheckedFlag} = this.props
        editChecked(val)
        editCheckedFlag()
    }
    render() {
        return <>
           <div className="list">
                <div>状态</div>
                <div>产品编号</div>
                <div>产品展示</div>
                <div>展示名称</div>
                <div>购买数量</div>
                <div>产品单价</div>
                <div>产品总价</div>
                <div>操作</div>
            </div> 
            {
                this.props.cardList.map((item,index) => {
                    return <div key={index} className='list'>
                        <div>
                            <input onChange={this.editChecked.bind(this,item)} type="checkbox" checked={item.checked} />
                        </div>
                        <div>{index}</div>
                        <div> <img src={item.img} alt="" /></div>
                        <div>{item.name}</div>
                        <div>
                            <button onClick={this.sub.bind(this,item)}>-</button>
                            <span>{item.num}</span>
                            <button onClick={this.add.bind(this,item)}>+</button>
                        </div>
                        <div>{item.price}元</div>
                        <div>{item.price *item.num }元</div>
                        <div>
                            <button onClick={this.deleteData.bind(this,item)}>删除</button>
                        </div>
                    </div>
                })
            }
        </>
    }
}