import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
class MessageBox extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="text-center">珠峰留言板</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">
              张三:今天下雨  <span className="pull-right">2017年5月23日10:07:59</span>
            </li>
          </ul>
        </div>
        <div className="panel-footer">
          <form>
            <div className="form-group">
              <label htmlFor="name">姓名</label>
              <input type="text" className="form-control" id="name" placeholder="姓名"/>
            </div>
            <div className="form-group">
              <label htmlFor="content">内容</label>
              <textarea className="form-control" id="content" cols="30" rows="10"></textarea>
            </div>
            <div className="container">
              <button type="submit" className="btn btn-primary">提交</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default MessageBox;
