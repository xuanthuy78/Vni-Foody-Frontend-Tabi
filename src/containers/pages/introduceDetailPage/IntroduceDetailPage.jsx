import React, { Component } from 'react'
import { MasterLayout } from '../../../components/layout'
import './IntroduceDetailPage.scss'
import { Link } from 'react-router-dom'
import { Partner } from '../../../components/product/partner/Partner'
import SidebarIntroduce from '../../../components/introduce/sidebarIntroduce/SidebarIntroduce'

export class IntroduceDetailPage extends Component {
  render() {
    return (
      <MasterLayout>
        <div className="container">
          <div className="introduce-detail">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                <SidebarIntroduce />
              </div>
              <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="introduce-content">
                  <div className="introduce-content-menu">
                    <div className="menu-title">
                      <ul className="nav">
                        <li className="nav-item">
                          <Link className="nav-link" to="/">
                            Trang chủ
                          </Link>
                        </li>
                        <li className="nav-item icon-link">
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          ></i>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/introduce">
                            <span>Giới thiệu</span>
                          </Link>
                        </li>
                        <li className="nav-item icon-link">
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          ></i>
                        </li>
                        {this.props &&
                          this.props.match &&
                          this.props.match.params &&
                          this.props.match.params.title === 'about-us' && (
                            <li className="nav-item active">
                              <Link className="nav-link" to="#">
                                <span>Về chúng tôi</span>
                              </Link>
                            </li>
                          )}
                        {this.props &&
                          this.props.match &&
                          this.props.match.params &&
                          this.props.match.params.title ===
                            'scope-activities' && (
                            <li className="nav-item active">
                              <Link className="nav-link" to="#">
                                <span>Lĩnh vực kinh doanh</span>
                              </Link>
                            </li>
                          )}
                      </ul>
                    </div>
                  </div>
                  {/*nội dung về chúng tôi*/}
                  {this.props &&
                    this.props.match &&
                    this.props.match.params &&
                    this.props.match.params.title === 'about-us' && (
                      <div className="introduct-content-block">
                        <h6>Về chúng tôi</h6>
                        <div className="writer">
                          <p>
                            <strong>Mua hàng giảm giá</strong> qua mạng từ lâu
                            đã như là một thói quen, một cách sống của người
                            Việt Nam. Cuộc sống ngày càng phát triển, nhu cầu
                            ngày càng cao hơn, Thì viêc mua sắm đó như là một xu
                            hướng tấc yếu. Thế nhưng, đôi khi thời gian của bạn
                            eo hẹp, bạn không có nhiều thì giờ để có thể lang
                            thang qua từng con đường, dạo quanh từng con chợ hay
                            những shop thời trang để tìm và chọn cho mình một
                            sản phẩm ưng ý.
                          </p>
                          <p>
                            Nắm bắt được nhu cầu đó chúng tôi đã cho ra đời một
                            trang thương mại điện tử nhằm đáp ứng được lượng lớn
                            nhu cầu của khách hàng trong cuộc sống hằng ngày. Đó
                            chính là Dealtop1 Đến với <strong>Dealtop1</strong>{' '}
                            bạn chỉ cần một chiếc điện thoai hay một máy tính có
                            kết nối internet , chỉ cần một Click bạn cũng có thể
                            tìm mua cho mình một sản phẩm phù hợp vừa rẻ và chất
                            lượng. Không những thế, bạn sẽ tiết kiệm được một
                            lượng lớn thời gian để có thể làm những công việc
                            khác .
                          </p>
                          <p>
                            Mục tiêu của <strong>Dealtop1</strong> là mang lại
                            những sản phẩm và dịch vụ tuyệt vời nhất, giảm giá
                            lên đến 90% cho các thành viên của{' '}
                            <strong>Dealtop1</strong> và cho cộng đồng tại Thành
                            phố Hồ Chí Minh. Ưu điểm lớn nhất khi bạn đến với{' '}
                            <strong>Dealtop1</strong> là sự hỗ trợ nhiệt tình,
                            thân thiện của đội ngũ nhân viên và đống thời đó là
                            hàng loạt sản phẩm chất lương được giảm với mức giá
                            rất ưu đãi, Hơn thế nữa đó là bạn được giao hàng tận
                            nơi miễn phí trong nội thành khu vực TP Hồ Chí Minh.
                            Trong thời gian ngắn thành lập{' '}
                            <strong>Dealtop1</strong>
                            đã có được những bước thành công đang kể và nhận
                            được sự tín nhiệm đông đảo của lượng lớn khách hàng,
                            Và cũng nắm bắt được nhu cầu chung,{' '}
                            <strong>Dealtop1</strong> tiếp tục mở rộng hình thức
                            giao hàng tận nơi trên toàn quốc với giá rẻ phù hợp
                            nhằm đẩy mạnh hơn nữa, khẳng định thương hiệu hơn
                            nữa trong thời gian tới.
                          </p>
                          <p>
                            <strong>Cam kết đối với khách hàng</strong>
                            <br /> Với phương châm “ Khách hàng là thượng đế”
                            thì không có gì quan trọng hơn với chúng tôi là nhận
                            được sự tin tưởng và hợp tác lâu dài với khách hàng,
                            để Dealtop1 có thể vươn xa hơn nữa, tạo nên một khối
                            cộng đống Dealtop1 đoàn kết và phát triển vũng mạnh.
                            Vì thế, nhiệm vụ của chúng tôi không đơn thuần chỉ
                            là mua – bán, trao- đổi mà hơn thế nữa chúng tôi
                            muốn hướng đến một mối quan hệ dài lâu. Chúng tôi
                            không chỉ dừng lại ở việc làm cho đồng tiền của bạn
                            có giá trị hơn mà còn phải có nhiệm vụ bảo vệ nó an
                            toàn tuyệt đối trong từng giao dịch. Dealtop1 sẽ bảo
                            đảm an toàn cho mọi thanh toán cũng như chất lượng
                            dịch vụ sản phẩm đã được lên sàn.
                          </p>
                          <p>
                            <strong>Niềm tự hào</strong>
                            <br /> Sức mạnh của Dealtop1 đến từ đội ngủ nhân
                            viên chăm sóc khách hàng chuyên nghiệp. Vì vậy, Qúy
                            khách cần hỗ trợ hoặc giải đáp thắc mắc xin hãy đến
                            với chúng tôi qua tổng đài 08 6299 7046 Qúy khách sẽ
                            được giải đáp về dịch vụ, sản phậm và thông tin
                            khuyến mãi Thới gian làm việc từ thứ 2 - thứ 6: 8h00
                            - 17h00 (Nghỉ trưa: 12h00 - 13h30)Thứ 7: 8h30 -
                            12h00. Nhằm giải đáp mọi thắc mắc của khách hàng mọi
                            lúc mọi nơi. Đội ngủ nhân viên chăm sóc khách hàng
                            nhiệt tình của Dealtop1 chắc chắn sẽ làm cho quý
                            khách hài lòng và tín dùng. Ngoài ra, hình thức Chat
                            Yahoo giúp khách hàng đang online tiết kiệm được chi
                            phí điện thoại. Các nhân viên cũng sẽ chăm sóc khách
                            hàng qua diễn đan, email hoặc khi khách hàng yêu cầu
                            sản phẩm mới, hoặc thắc mắc, hoặc thắc mắc về cách
                            thức mua hàng, các vấn đề liên quan đến Dealtop1
                          </p>
                          <p>
                            Tiếp đến là đội ngủ nhân viên giao hàng nhanh nhẹn,
                            chuyên nghiệp, luôn mỉm cười đó là một ưu thế của
                            Dealtop1 so với các công ty còn lại.
                          </p>
                          <p>
                            Khách hàng sẽ được nhận sản phẩm trong một thời gian
                            sớm nhất đồng thời đối với các mặt hàng điện tử hay
                            gia dụng sẽ được bảo hàng trong thơi gian gian từ 3
                            tháng đến 1 năm. Với phong cách làm việc nhanh
                            chóng, kỷ luật và hiểu quả quý khách hàng hãy yên
                            tâm đến với chúng tôi trong từng giao dịch. Chung
                            tôi tin rằng, luôn đem lại nhũng giá trị thật nhất
                            cho khách hàng, một khi khách hàng đã tin tưởng và
                            sử dụng dịch vụ của Dealtop1
                          </p>
                          <p>
                            <strong>
                              Yên tâm đến với Dealtop1 để trở thành người tiêu
                              dùng thông minh bạn nhé!
                            </strong>
                          </p>
                        </div>
                      </div>
                    )}
                  {/*nội dung về lĩnh vực kinh doanh*/}
                  {this.props &&
                    this.props.match &&
                    this.props.match.params &&
                    this.props.match.params.title === 'scope-activities' && (
                      <div className="introduct-content-block">
                        <h6>Lĩnh vực kinh doanh</h6>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          <Partner />
        </div>
      </MasterLayout>
    )
  }
}

export default IntroduceDetailPage
