import React from 'react'
import './App.css'
import List from './component/list'
import Footer from './component/footer'


export default class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      cardList:[
        {
          img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.yEH5M2URYGB8h62jG7vKGgHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.25&pid=1.7',
          name: 'Mac Book Air',
          num: 1,
          price: 8699,
          checked: false,
          id: 242332432432
        },
        {
          img: 'https://assets.ugoshop.com/proimage/e57f7e5856ad4c5aac37d5e349533bec.png!p800',
          name: 'iphone',
          num: 1,
          price: 37,
          checked: false,
          id: 242332432432421425
        }, {
          img: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.rVdqtj7tUn6PClsn8Wq7xgHaKc?w=144&h=203&c=7&r=0&o=5&dpr=1.25&pid=1.7',
          name: '周虎青',
          num: 1,
          price: 4,
          checked: false,
          id: 355345435
        },
        {
          img: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.keB_ghNAu-NyKNg7J2b0SQHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.25&pid=1.7',
          name: '苏日咕嘎',
          num: 1,
          price: 81,
          checked: false,
          id: 242332421425
        },
        {
          img: 'https://uploadfile.bizhizu.cn/2014/0217/20140217072454651.jpg',
          name: '孙志豪',
          num: 1,
          price: 99999,
          checked: false,
          id: 532325
        },
        {
          img: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.Q8fesauwGpQDaJuAQgDovAHaKR?w=146&h=203&c=7&r=0&o=5&dpr=1.25&pid=1.7',
          name: '秦明佳',
          num: 1,
          price: 88,
          checked: false,
          id: 5323255235
        }

        
      ],
      checkedAllFlag:false,
      local:[]
    }
  }
  // componentWillmount() {
  //   this.state.local = this.state.cardList
  //   this.setState({
  //     local:this.state.local
  //   })
  // }
  // 增加小计
  add = (val) => {
    this.state.cardList.forEach(item => {
      if (item.id == val.id) {
        item.num++;
      }
      this.setState({
        cardList:this.state.cardList
      })
    })
  }
  // 减少小计
  sub = (val) => {
    this.state.cardList.forEach(item => {
      if (item.id == val.id && item.num >=1) {
        item.num--;
      }
      this.setState({
        cardList:this.state.cardList
      })
    })
  }
  // 删除
  deleteData = (val) => {
    this.state.cardList = this.state.cardList.filter(item => item.id != val.id)
    this.setState({
      cardList:this.state.cardList
    })
  }
  // 勾选框
  editChecked = (val) => {
    this.state.cardList.forEach(item =>{
      if (item.id == val.id) {
        item.checked = ! item.checked
      }
    })
    this.setState({
      cardList:this.state.cardList
    })
  }
  // 更改复选框的状态
  checkedAll = (val) => {
    this.state.cardList.forEach(item => {
      item.checked = val
    })
    this.setState({
      cardList:this.state.cardList
    })
  }
  // 反选
  editCheckedFlag = () => {
    // every()为数组中的每个元素执行一次 callback 函数，直到它找到一个会使callback返回falsy的元素。如果发现了一个这样的元素，every()将会立即返回false。否则callback为每一个元素返回 true，every就会返回true。callback只会为那些已经被赋值的索引调用，不会为那些被删除或从未被赋值的索引调用。
    this.state.checkedAllFlag = this.cardList.every(item => item.checked)
    this.setState({
      checkedAllFlag:this.state.checkedAllFlag  
    })
    console.log('%c 🍷 this.state.checkedAllFlag: ', 'font-size:20px;background-color: #7F2B82;color:#fff;', this.state.checkedAllFlag);
  }
  // 搜索框
  onsearch = (val) => {
    this.state.cardList = this.state.local.filter(item => item.name.includes(val.target.value))
    this.setState({
      cardList:this.state.cardList
    })
  }
  // 批量删除
  removeChecked = () => {
    this.state.cardList = this.state.cardList.filter(item => item.checked == false)
    this.state.checkedAllFlag = false
    this.setState({
      cardList:this.state.cardList,
      checkedAllFlag:this.state.checkedAllFlag
    })
  }
  render() {
    return <div className='box'>
      {/* 头部 */}
      <div className='header'>
      <input 
      onInput={this.onsearch}
      placeholder='输入内容进行查找'
      type="text"/>
      </div>
      {/* 列表 */}
      <List 
      cardList={this.state.cardList}
      add={this.add}
      sub={this.sub}
      deleteData={this.deleteData}
      editChecked={this.editChecked}
      editCheckedFlag={this.editCheckedFlag}/>
      {/* 底部 */}
      <Footer 
      cardList={this.state.cardList}
      removeChecked ={this.removeChecked}
      checkedAll={this.checkedAll}
      editCheckedFlag={this.editCheckedFlag}
      checkedAllFlag={this.checkedAllFlag}
      />
      
    </div>
  }
}

