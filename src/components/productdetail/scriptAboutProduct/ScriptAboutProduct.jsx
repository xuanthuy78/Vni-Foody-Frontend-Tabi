import React, { Component } from 'react'
import './ScriptAboutProduct.scss'

export class ScriptAboutProduct extends Component {
  render() {
    return (
      <div className="script-product">
        <div className="script-title">
          <h3 className="title">Chi tiết sản phẩm</h3>
        </div>
        <div className="script-content">
          <div className="script">
            <p>Món salad Nga luôn tươi ngon và hấp dẫn những ai thưởng thức.</p>
            <p>Cách làm:</p>
            <p>
              - Luộc chín hạt đậu Hà Lan, khoai tây và cà rốt rồi vớt ra, để ráo
              nước, cho chung vào một bát to.
            </p>
            <p>- Trút dưa chuột muối vào</p>
            <p>
              - Lần lượt cho dấm, dầu ô liu, muối và hạt tiêu để tăng hương vị,
              trộn đều. Lưu ý, làm việc này khi các loại rau củ vẫn còn đang ấm
              nhé!
            </p>
            <p>
              - Bạn có thể cho thêm trứng sắt hạt lựu vào lúc này, hoặc trứng
              chỉ để trang trí. Cho mayonnaise vào trộn đều
            </p>
            <p>- Bọc bát salad Nga lại và cho vào tủ lạnh để trong 1 giờ.</p>
            <p>
              - Sau đó, cho salad Nga ra đĩa, trang trí với trứng, dưa chuột
              muối rồi thưởng thức.
            </p>
          </div>
          <div className="photo">
            <img
              className="card-img-top"
              src={'assets/images/sup_cua_large.jpg'}
              alt=""
            />
          </div>
        </div>
        <div className="comment">
          <form>
            <div className="form-group">
              <label>
                Viết bình luận...
                <i className="fa fa-pencil" aria-hidden="true"></i>
              </label>
              <textarea className="form-control" rows="3"></textarea>
            </div>
          </form>
          <button className="btn btn-default" type="submit">
            Gửi đi
          </button>
        </div>
        <div className="content-comment">
          <i className="fa fa-user" aria-hidden="true"></i>
          <div className="info-comment">
            <div className="info-user">
              <span>User</span> 15.06.2020
            </div>
            <div className="content">Very Good</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScriptAboutProduct
