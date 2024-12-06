import '../../assets/css/rule.prefixed.css'
const RulePage = () => {

    return (
        <>
            <div className="RulePage">
                <div className="container pt-5" >
                    <div className="">
                        <h5>QUY ĐỊNH VÀ CHÍNH SÁCH</h5>
                        <ol>
                            <li><a href="#quy-dinh-chung">1. Quy định chung</a></li>
                            <li><a href="#dieu-khoan-giao-dich">2. Điều khoản giao dịch</a></li>
                            <li><a href="#quy-dinh-tai-rap-chieu-phim">3. Quy định tại rạp chiếu phim</a></li>
                            <li><a href="#chinh-sach-bao-mat">4. Chính sách bảo mật</a></li>
                        </ol>
                    </div>

                    <div id="quy-dinh-chung">
                        <div className="widget block block-static-block">
                            {/* <style>
                #html-body [data-pb-style=LAID436] {
                    justify-content: flex-start;
                    display: flex;
                    flex-direction: column;
                    background-position: left top;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-attachment: scroll
                }

                #html-body [data-pb-style=M7HM8BU] {
                    text-align: center
                }
                </style> */}
                            <div data-content-type="row" data-appearance="contained" data-element="main">
                                <div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}"
                                    data-background-type="image" data-video-loop="true" data-video-play-only-visible="true"
                                    data-video-lazy-load="true" data-video-fallback-src="" data-element="inner" data-pb-style="LAID436">
                                    <h3 className="font-bold" data-content-type="heading" data-appearance="default" data-element="main"
                                        data-pb-style="M7HM8BU">Quy định chung</h3>
                                    <div data-content-type="text" data-appearance="default" data-element="main">
                                        <p>​</p>
                                        <p>Chào mừng và cảm ơn Quý Khách Hàng đến với website: <a tabIndex={-1}
                                            href="https://www.cinestar.com.vn">cinestar.com.vn</a> thuộc quyền sở hữu và quản lý của Công ty
                                            Cổ phần Giải trí – Phát hành phim – Rạp chiếu phim Bảy (7 Cinema) tại địa chỉ: 135 Hai
                                            Bà Trưng, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh.&nbsp;</p>
                                        <p>Website này được sử dụng cho các hoạt động của 7 Cinema, các chi nhánh phụ thuộc, các công
                                            ty con, công ty thành viên và các tổ chức liên quan do 7 Cinema góp vốn đầu tư (được gọi
                                            chung là 7 Cinema trong quy định chung này).</p>
                                        <p>Khi truy cập vào đường dẫn: <a tabIndex={-1}
                                            href="https://www.cinestar.com.vn">http://www.cinestar.com.vn</a>, Quý Khách Hàng phải có độ tuổi
                                            phù hợp theo quy định của pháp luật. Trường hợp Quý Khách Hàng là trẻ em, người chưa thành niên, vui
                                            lòng chỉ truy cập website sau khi có sự đồng ý của người giám hộ hợp pháp.</p>
                                        <p>Bằng việc truy cập, sử dụng, thao tác trên website, Quý Khách Hàng đã chấp nhận toàn bộ nội dung
                                            của Quy Định Chung và các chính sách bổ sung liên tục cập nhật của 7 Cinema. Trường hợp Quý
                                            Khách Hàng không đồng ý với các điều khoản chung này, vui lòng không sử dụng website.&nbsp;</p>
                                        <p>Xin Quý Khách Hàng vui lòng đọc kỹ những Quy Định Chung, Quy Định Chung bao gồm các quy định sau
                                            đây:</p>
                                        <p>&nbsp; &nbsp; &nbsp;1.Điều Kiện và Điều Khoản Giao Dịch;<br />&nbsp; &nbsp; &nbsp;2.Quy định tại Rạp
                                            chiếu phim 7 Cinema; và<br />&nbsp; &nbsp; &nbsp;3.Chính Sách Bảo Mật Thông Tin.</p>
                                        <p>Khi dẫn chiếu đến Quy Định Chung được hiểu là toàn bộ nội dung hoặc bất kỳ phần nào của nội dung
                                            như được quy định; và bất kỳ sửa đổi, bổ sung nào của nó tại từng thời điểm.</p>
                                        <p><strong>1. MIỄN TRỪ TRÁCH NHIỆM</strong></p>
                                        <p>Khi truy cập, sử dụng website, Quý Khách Hàng đồng ý chấp nhận mọi rủi ro. 7 Cinema không
                                            chịu trách nhiệm về bất kỳ tổn thất nào có thể phát sinh trực tiếp hoặc gián tiếp do việc truy cập
                                            website hoặc khi tải dữ liệu về thiết bị cá nhân.</p>
                                        <p><strong>2. TRÁCH NHIỆM CỦA NGƯỜI SỬ DỤNG</strong></p>
                                        <p>7 Cinema kính mong Quý Khách Hàng tôn trọng và chấp hành nghiêm túc các quy định pháp luật
                                            về việc khai thác, sử dụng website thương mại điện tử và những Quy Định Chung của 7 Cinema
                                            đề cập tại đây.&nbsp;</p>
                                        <p>Trường hợp Quý Khách Hàng được yêu cầu cung cấp thông tin cá nhân tại website thì thông tin được
                                            cung cấp phải là đảm bảo tính chính xác, phản ánh đúng thông tin thực tế của Quý Khách Hàng.
                                            7 Cinema không chịu trách nhiệm nếu Quý Khách Hàng cung cấp thông tin sai sự thật hoặc không
                                            đúng dù vô ý hay cố ý.</p>
                                        <p><strong>3. NỘI DUNG WEBSITE</strong></p>
                                        <p>Tất cả những thông tin được đăng tải trên website được cung cấp cho Quý Khách Hàng một cách trung
                                            thực, tuy nhiên, 7 Cinema không kèm theo bất kỳ cam kết nào. 7 Cinema không bảo đảm,
                                            hay có bất kỳ tuyên bố nào liên quan đến tính chính xác, độ xác thực, độ tin cậy của việc sử dụng
                                            hay kết quả của việc sử dụng nội dung trên website này. 7 Cinema luôn cố gắng cập nhật toàn
                                            bộ thông tin một cách thường xuyên, kịp thời nhưng 7 Cinema không bảo đảm rằng những nội
                                            dung hiện tại là mới nhất, chính xác hay đầy đủ nhất.&nbsp;</p>
                                        <p>Tất cả các nội dung website có thể được thay đổi bất kỳ lúc nào. 7 Cinema bảo lưu quyền
                                            thay đổi, chỉnh sửa và loại bỏ thông tin vào bất kỳ thời điểm nào. Quý Khách Hàng vui lòng cập nhật
                                            thường xuyên website để biết những thay đổi mới nhất.</p>
                                        <p>Tất cả thông tin, bao gồm nhưng không giới hạn: nội dung, hình ảnh, phần mềm, dữ liệu… được đăng
                                            tải lên website và các sản phẩm liên quan của 7 Cinema đều thuộc bản quyền của Cinestar
                                            Cinemas, Quý Khách Hàng có thể tải về và sử dụng trong phạm vi pháp luật cho phép.</p>
                                        <p>Quý Khách Hàng có thể tải về, chuyển tiếp hoặc phương thức khác nhằm sử dụng những thông tin được
                                            đăng tải trên website của 7 Cinema để chia sẻ, phổ biến đến công chúng với điều kiện phải
                                            trích rõ nguồn và chủ sở hữu thông tin.</p>
                                        <p>Cá nhân và tổ chức không được phép sử dụng nội dung trên website này với mục đích thương mại mà
                                            không có sự chấp thuận của 7 Cinema bằng văn bản.</p>
                                        <p><strong>4. BẢO MẬT THÔNG TIN</strong></p>
                                        <p>Việc thu thập, sử dụng, bảo mật thông tin của Quý Khách Hàng được quy định cụ thể tại Chính Sách
                                            Bảo Mật Thông Tin được đăng tải trên website này.</p>
                                        <p>7 Cinema cam kết không bán, chuyển nhượng, chuyển giao, trao đổi để nhận lại lợi ích khác,
                                            hoặc thực hiện các hành vi nhằm chuyển quyền sở hữu thông tin cá nhân của Quý Khách Hàng.</p>
                                        <p><strong>5. NỘI DUNG TẢI LÊN CỦA KHÁCH HÀNG</strong></p>
                                        <p>7 Cinema không chịu trách nhiệm sàng lọc, chỉnh sửa hoặc giám sát nội dung được Quý Khách
                                            Hàng đăng tải lên website và các sản phẩm liên quan (nếu có), cũng như không thể đảm bảo tính chính
                                            xác của những ý kiến, bình luận này. Nếu nhận được thông tin về những vi phạm, gây tổn hại hoặc bất
                                            hợp pháp, 7 Cinema có quyền xác minh và quyết định chấm dứt cung cấp dịch vụ đối với thành
                                            viên vi phạm.</p>
                                        <p>Quý Khách Hàng không được đưa lên, hoặc chuyển tải lên website những hình ảnh, từ ngữ khiêu dâm,
                                            thô tục, xúc phạm, phỉ báng, bôi nhọ, đe dọa, những thông tin không hợp pháp hoặc những thông tin có
                                            thể đưa đến việc vi phạm pháp luật, trách nhiệm pháp lý. 7 Cinema không chịu trách nhiệm
                                            hoặc có nghĩa vụ pháp lý đối với những phát sinh từ nội dung do quý khách hàng tải lên
                                            website.&nbsp;</p>
                                        <p>Mặc dù đã có những quy định nêu trên, 7 Cinema không thể bảo đảm chỉnh sửa hoặc xoá bỏ lập
                                            tức những nội dung vi phạm. Cũng như 7 Cinema không phải chịu trách nhiệm pháp lý đối với
                                            những nội dung do Quý Khách Hàng đăng tải trên website của 7 Cinema. Đồng thời, quý khách
                                            hàng cũng có trách nhiệm cho mối liên hệ giữa quý khách hàng và những người dùng khác. Cinestar
                                            Cinemas có quyền, nhưng không có nghĩa vụ theo dõi các tranh chấp giữa các người dùng với
                                            nhau.&nbsp;</p>
                                        <p><strong>6. BẢN QUYỀN WEBSITE</strong></p>
                                        <p>7 Cinema là chủ sở hữu duy nhất bản quyền của website này và các sản phẩm liên quan.
                                            7 Cinema có quyền chỉnh sửa, thay đổi, sắp xếp lại nội dung website và các sản phẩm liên
                                            quan. Việc chỉnh sửa, thay đổi, sắp xếp lại hoặc tái sử dụng những nội dung trong website này vì bất
                                            kỳ mục đích nào khác mà không có sự đồng ý của 7 Cinema đều là vi phạm quyền lợi hợp pháp
                                            của 7 Cinema.&nbsp;</p>
                                        <p>7 Cinema luôn tôn trọng sở hữu trí tuệ của người khác, và 7 Cinema kính mong Quý
                                            Khách Hàng của 7 Cinema cũng làm như vậy. 7 Cinema luôn cố gắng đảm bảo những dữ
                                            liệu trên website và các sản phẩm liên quan đều là hợp pháp, tuy nhiên, 7 Cinema không chắc
                                            chắn có thể kiểm soát tất cả thông tin trên website và các sản phẩm liên quan. Khi phát hiện được
                                            bất kỳ hành vi vi phạm bản quyền nào trên website và các sản phẩm liên quan, 7 Cinema sẽ xoá
                                            nội dung đó khỏi website trong một thời hạn hợp lý</p>
                                        <p><strong>7. LIÊN KẾT ĐẾN WEBSITE KHÁC</strong></p>
                                        <p>Website này có thể được liên kết với những website khác, 7 Cinema không trực tiếp hay gián
                                            tiếp quản lý những website liên kết. 7 Cinema không hợp tác, tài trợ, xác thực, đứng sau hay
                                            sát nhập với những website đó, trừ khi sự hợp tác đó được công bố rõ ràng. Khi truy cập vào website,
                                            7 Cinema hy vọng quý khách hàng có thể hiểu rằng 7 Cinema không kiểm soát, quản lý
                                            những trang liên kết và không chịu trách nhiệm về nội dung của bất kỳ website liên kết nào.&nbsp;
                                        </p>
                                        <p><strong>8. LUẬT ÁP DỤNG VÀ GIẢI QUYẾT TRANH CHẤP</strong></p>
                                        <p>Quy Định Chung sẽ được phân tích, diễn giải và giải thích theo quy định của pháp luật nước Cộng Hòa
                                            Xã Hội Chủ Nghĩa Việt Nam.&nbsp;</p>
                                        <p>Mọi tranh chấp, khác biệt, khiếu nại phát sinh từ/hoặc liên quan đến nội dung tại website này sẽ
                                            được ưu tiên giải quyết thông qua thương lượng, hòa giải. Trường hợp các bên không tự giải quyết,
                                            tranh chấp sẽ được đưa ra giải quyết tại Tòa án có thẩm quyền tại Thành phố Hồ Chí Minh.&nbsp;</p>
                                        <p><strong>9. TÍNH RIÊNG LẺ</strong>&nbsp; &nbsp; &nbsp;&nbsp;</p>
                                        <p>Nếu bất kì điều khoản nào trong Quy Định Chung này không hợp pháp, bị bãi bỏ, hoặc vì bất kỳ lý do
                                            nào không thể thực thi theo pháp luật, thì điều khoản đó sẽ được tách ra khỏi các điều khoản và điều
                                            kiện này và sẽ không ảnh hưởng tới hiệu lực cũng như tính thi hành của bất kỳ điều khoản còn lại nào
                                            cũng như không ảnh hưởng tới hiệu lực cũng như tính thi hành của điều khoản sẽ được xem xét theo
                                            luật.</p>
                                        <p><strong>10. &nbsp;THÔNG TIN LIÊN HỆ</strong></p>
                                        <p>Bất kỳ lúc nào Quý Khách Hàng có bất kỳ câu hỏi, cần hỗ trợ, cần giải thích, khiếu nại hoặc quan
                                            tâm về việc Quy Định Chung của 7 Cinema hoặc các giao dịch của Quý Khách Hàng với Cinestar
                                            Cinemas, xin vui lòng liên hệ 7 Cinema theo thông tin sau:</p>
                                        <p>CÔNG TY CỔ PHẦN GIẢI TRÍ - PHÁT HÀNH PHIM - Rạp chiếu phim Bảy</p>
                                        <p>Mã số thuế: 0312742744</p>
                                        <p>Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM</p>
                                        <p>Hotline: 028.7300 8881</p>
                                        <p>Email: <a tabIndex={-1} href="mailto:marketing.cinestar@gmail.com">marketing.cinestar@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="dieu-khoan-giao-dich">
                        <div className="widget block block-static-block">
                            {/* <style>
                #html-body [data-pb-style=V4Q1QX9] {
                    justify-content: flex-start;
                    display: flex;
                    flex-direction: column;
                    background-position: left top;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-attachment: scroll
                }
                </style> */}
                            <div data-content-type="row" data-appearance="contained" data-element="main">
                                <div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}"
                                    data-background-type="image" data-video-loop="true" data-video-play-only-visible="true"
                                    data-video-lazy-load="true" data-video-fallback-src="" data-element="inner" data-pb-style="V4Q1QX9">
                                    <div data-content-type="text" data-appearance="default" data-element="main">
                                        <h2>Điều khoản giao dịch</h2>
                                        <p style={{ textAlign: 'justify' }}>​</p>
                                        <p>Chào mừng và cảm ơn Quý Khách Hàng đến với website: <a tabIndex={-1}
                                            href="https://www.cinestar.com.vn">cinestar.com.vn</a> thuộc quyền sở hữu và quản lý của Công ty
                                            Cổ phần Giải trí – Phát hành phim – Rạp chiếu phim Bảy (7 Cinema) tại địa chỉ: 135 Hai
                                            Bà Trưng, phường Bến Nghé, Quận 1, thành phố Hồ Chí Minh.&nbsp;</p>
                                        <p>Khi truy cập vào đường dẫn:<a tabIndex={-1} href="https://www.cinestar.com.vn">
                                            http://www.cinestar.com.vn</a>, Quý Khách Hàng đã chấp nhận toàn bộ nội dung của Điều Khoản Giao
                                            Dịch và các chính sách bổ sung liên tục cập nhật của 7 Cinema. Trường hợp Quý Khách Hàng
                                            không đồng ý với các điều khoản này, vui lòng không sử dụng website.</p>
                                        <p>Quý Khách Hàng lưu ý đọc kỹ các nội dung trước khi thực hiện giao dịch tại website</p>
                                        <p style={{ textAlign: 'justify' }}><strong>&nbsp;</strong></p>
                                        <p style={{ textAlign: 'justify' }}><strong>1. PHẠM VI ÁP DỤNG</strong></p>
                                        <p>Điều Khoản Giao Dịch được áp dụng cho toàn bộ các chức năng giao dịch trực tuyến tại website, Quý
                                            Khách Hàng mặc nhiên đã chấp thuận và tuân thủ tất cả các chỉ dẫn, điều khoản, điều kiện và lưu ý
                                            đăng tải trên website, bao gồm nhưng không giới hạn bởi: Quy Định Chung, Điều Khoản Giao Dịch nêu ở
                                            đây.</p>
                                        <p>Trường hợp Quý Khách Hàng không có ý định giao dịch trực tuyến hay không đồng ý với bất kỳ điều
                                            khoản hay điều kiện nào nêu trong Điều Khoản Giao Dịch thì xin vui lòng không sử dụng chức năng này.
                                        </p>
                                        <p style={{ textAlign: 'justify' }}><strong>2. TÀI KHOẢN CỦA KHÁCH HÀNG</strong></p>
                                        <p>Để sử dụng dịch vụ của 7 Cinema tại website, Quý Khách Hàng phải đăng ký tài khoản với
                                            thông tin xác thực về bản thân và phải cập nhật liên tục nếu có bất kỳ thay đổi nào.</p>
                                        <p>Việc thu thập và xử lý dữ liệu cá nhân của Quý Khách Hàng được thực hiện theo Chính Sách Bảo Mật
                                            Thông Tin được đăng tải trên website.</p>
                                        <p>Quý Khách Hàng phải có trách nhiệm duy trì sự bảo mật tài khoản và mật khẩu của mình. Quý khách
                                            hàng có trách nhiệm thông báo ngay lập tức cho 7 Cinema về những bất thường như hành vi truy
                                            cập, sử dụng và/hoặc chiếm giữ trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên đăng ký và mật khẩu
                                            của bên thứ ba để 7 Cinema có biện pháp giải quyết phù hợp. 7 Cinema không chịu bất
                                            kỳ trách nhiệm nào, dù trực tiếp hay gián tiếp, đối với những thiệt hại hoặc mất mát gây ra do quý
                                            khách hàng khi quý khách hàng không tuân thủ những quy định này.</p>
                                        <p>Quý khách hàng có trách nhiệm đảm bảo các dịch vụ mà Quý Khách Hàng giao dịch từ 7 Cinema
                                            phù hợp với mong muốn, năng lực của Quý Khách Hàng. 7 Cinema có quyền từ chối cung cấp dịch
                                            vụ, đóng tài khoản cá nhân, xóa bỏ hoặc thay đổi nội dung, hoặc hủy đơn hàng của quý khách hàng khi
                                            phát hiện quý khách hàng có những vi phạm các quy định tại Quy Định Chung và Điều Khoản Giao Dịch
                                            này mà không chịu bất kỳ chế tài nào.</p>
                                        <p>Trong suốt quá trình đăng ký tài khoản, Quý Khách Hàng đồng ý nhận email quảng cáo từ website. Dù
                                            vậy, nếu không muốn tiếp tục nhận email quảng cáo, quý khách có thể từ chối bằng cách tắt chức năng
                                            này.</p>
                                        <p style={{ textAlign: 'justify' }}><strong>3. GIAO DỊCH TRỰC TUYẾN</strong></p>
                                        <p style={{ textAlign: 'justify' }}>Tính năng đặt vé xem phim trực tuyến hiện chỉ áp dụng cho thành viên
                                            của 7 Cinema. Quý khách hàng vui lòng tham khảo thông tin đăng ký thành viên trên website
                                            hoặc liên hệ trực tiếp 7 Cinema để được hướng dẫn.</p>
                                        <p style={{ textAlign: 'justify' }}><strong>3.1 Mua vé trực tuyến</strong></p>
                                        <p>7 Cinema mở bán vé trực tuyến trước ngày chiếu phim, tuy nhiên điều này phụ thuộc vào lịch
                                            chiếu mỗi phim, mỗi rạp. Nếu suất chiếu Quý Khách Hàng muốn đặt chưa được hiển thị trên website vào
                                            thời điểm quý khách hàng đặt vé, xin vui lòng quay lại sau, hoặc liên hệ trực tiếp với Cinestar
                                            Cinemas để biết thêm thông tin chi tiết.</p>
                                        <p>Thời gian đóng chức năng mua vé trực tuyến là 30 phút trước giờ chiếu phim hoặc khi suất chiếu đã
                                            được bán hết vé. Sau thời gian này, quý khách hàng có thể đến liên hệ trực tiếp tại quầy bán vé của
                                            rạp chiếu phim để mua vé.</p>
                                        <p>7 Cinema không cam kết giữ chỗ ngồi cho Quý Khách Hàng cho đến khi Quý Khách Hàng hoàn tất
                                            thanh toán cho đơn hàng của mình.</p>
                                        <p>Quý Khách Hàng có thể đặt chỗ cho tối đa 10 vé xem phim trong mỗi giao dịch.</p>
                                        <p><strong>3.2 Thanh toán trực tuyến</strong></p>
                                        <p>Trước khi tiến hành thanh toán, Quý Khách Hàng phải rà soát toàn bộ các thông tin hiển thị trên
                                            website về rạp chiếu phim, tên phim, ngày chiếu, suất chiếu, giá thành, chỗ ngồi và đồ ăn (nếu có),
                                            thông tin email, số điện thoại di động…</p>
                                        <p>Quý Khách Hàng thanh toán giao dịch đặt vé/hàng hóa trước khi nhận mã đặt vé của giao dịch đó. Khi
                                            quý khách hàng nhấn (click) vào ô “Thanh toán” để tiến hành thanh toán đơn hàng có nghĩa là quý
                                            khách hàng xác nhận đã rà soát thông tin đơn hàng và không có bất kỳ khiếu nại nào về thông tin dịch
                                            vụ do 7 Cinema cung cấp.</p>
                                        <p><strong>3.3 Xác nhận đặt vé</strong></p>
                                        <p>Email và tin nhắn (SMS) xác nhận đặt vé/hàng hóa: sau khi hoàn thành việc thanh toán vé/hàng hóa
                                            trực tuyến, Quý Khách Hàng sẽ nhận được thư xác nhận thông tin chi tiết vé/hàng hóa đã thanh toán
                                            thông qua địa chỉ thư điện tử (email) và/hoặc số điện thoại di động mà Quý Khách Hàng đã cung cấp
                                            cho 7 Cinema. Email xác nhận thông tin đặt vé/hàng hóa có thể đi vào hộp thư rác (spam mail)
                                            của quý khách hàng, vì vậy hãy kiểm tra chúng thật kỹ trước khi liên lạc với 7 Cinema.</p>
                                        <p>Bằng việc thanh toán qua website, quý khách hàng chấp nhận toàn bộ nội dung dịch vụ mà khách hàng
                                            đã đặt. Quý Khách Hàng đồng ý rằng, trong những trường hợp có sự thay đổi về chương trình phim hoặc
                                            bất khả kháng, 7 Cinema có quyền hoàn trả lại bất kỳ vé nào từ việc mua bán qua website này
                                            với giá trị tương đương hoặc thực hiện việc chuyển vé cho Quý Khách Hàng qua suất chiếu khác theo
                                            yêu cầu của Quý Khách Hàng.</p>
                                        <p style={{ textAlign: 'justify' }}><strong>4. GIAO DỊCH HỢP LỆ</strong></p>
                                        <p>Mọi thông tin về phim/hàng hóa đưa ra trên website trong bất kỳ trường hợp nào không được hiểu là
                                            đề nghị giao kết hợp đồng của 7 Cinema tới Quý Khách Hàng.</p>
                                        <p>Các bước hình thành giao dịch hợp lệ gồm các bước như sau:</p>
                                        <p>Bước 1: Quý Khách Hàng đăng nhập thông tin thành viên 7 Cinema tại website;</p>
                                        <p>Bước 2: Quý Khách Hàng lựa chọn dịch vụ, thực hiện lựa chọn các thông tin đặt hàng;</p>
                                        <p>Bước 3: Quý Khách Hàng kiểm tra thông tin và thực hiện thanh toán trên website;</p>
                                        <p>Tại thời điểm này, 7 Cinema và Quý Khách Hàng sẽ hình thành một đơn đặt chỗ/hàng hóa tạm
                                            thời ("Đơn hàng")</p>
                                        <p>Bước 4: 7 Cinema đối chiếu và gửi xác nhận mã xác nhận Đơn hàng thông qua một trong các
                                            phương thức sau:</p>
                                        <p>- Qua địa chỉ email mà Quý Khách Hàng đã đăng ký tại Website; hoặc</p>
                                        <p>- Qua tin nhắn (SMS) tới số điện thoại di động của Quý Khách Hàng với nội dung: mã đơn hàng, xác
                                            nhận xử lý thành công, thông tin liên lạc.</p>
                                        <p>Giao dịch giữa 7 Cinema và Quý Khách Hàng chỉ xác lập và có hiệu lực kể từ thời điểm khách
                                            hàng nhận được xác nhận từ 7 Cinema tại Bước 4 nêu trên.</p>
                                        <p>Lưu ý: Trong quá trình xử lý Đơn hàng của Quý Khách Hàng, 7 Cinema có quyền không xác nhận
                                            Đơn hàng trong một số trường hợp bao gồm nhưng không giới hạn: Đơn hàng không thể đáp ứng các điều
                                            kiện giao dịch vì lý do vi phạm Quy Định Chung, Điều Khoản Giao Dịch, do nguyên nhân khách quan, do
                                            lỗi kỹ thuật từ hệ thống hoặc do sự kiện bất khả kháng.</p>
                                        <p>7 Cinema sẽ cập nhật thông tin trạng thái Đơn hàng trong hệ thống quản lý tài khoản của Quý
                                            Khách Hàng trên website để Quý Khách Hàng tiện theo dõi.</p>
                                        <p style={{ textAlign: 'justify' }}><strong>5. QUY TRÌNH THỰC HIỆN GIAO DỊCH</strong></p>
                                        <p>Quý Khách Hàng khi có nhu cầu mua vé/hàng hóa trực tuyến tại website này phải đăng nhập tài khoản
                                            thành viên 7 Cinema và thực hiện các thao tác theo trình tự sau:</p>
                                        <p>Bước 1: Lựa chọn phim, rạp chiếu phim, ngày chiếu, suất chiếu.</p>
                                        <p>Bước 2: Lựa chọn loại vé, số lượng vé.</p>
                                        <p>Bước 3: Chọn vị trí ghế, chọn đồ ăn, nước uống (nếu có).</p>
                                        <p>Bước 4: Kiểm tra lại toàn bộ thông tin đã lựa chọn.</p>
                                        <p>Bước 5: Lựa chọn hình thức thanh toán phù hợp bao gồm: thẻ thanh toán nội địa và quốc tế, ví điện
                                            tử, các cổng thanh toán trung gian,...</p>
                                        <p>Trừ một số trường hợp có ghi chú riêng, thông thường Quý Khách Hàng có thể lựa chọn một trong các
                                            hình thức thanh toán trên khi tiến hành đặt vé.</p>
                                        <p>Lưu ý: 7 Cinema có quyền từ chối chấp nhận việc thanh toán bằng thẻ tín dụng của Quý Khách
                                            Hàng trong một số trường hợp theo quyết định của 7 Cinema, miễn là 7 Cinema tuân
                                            thủ các hướng dẫn của ngân hàng liên quan.</p>
                                        <p>Bước 6: Nhận mã đặt chỗ (xác nhận Đơn hàng) qua email và tin nhắn (SMS).</p>
                                        <p>Bước 7: Quý Khách Hàng cung cấp mã đặt vé (xác nhận Đơn hàng) và các thông tin tài khoản thành viên
                                            7 Cinema dùng để đặt vé để nhận vé/hàng hóa tại Quầy bán vé của rạp chiếu phim. Quý Khách
                                            Hàng chỉ có thể nhận vé/hàng hóa tại rạp chiếu phim đã đặt vé xem phim. Nếu Quý Khách Hàng không
                                            cung cấp được thông tin tài khoản 7 Cinema và mã đặt vé (xác nhận Đơn hàng), Cinestar
                                            Cinemas có quyền từ chối xuất vé/giao hàng hóa cho Quý Khách Hàng.</p>
                                        <p style={{ textAlign: 'justify' }}><strong>6. THÔNG TIN DỊCH VỤ</strong></p>
                                        <p>7 Cinema cung cấp cho Quý Khách Hàng toàn bộ thông tin về hàng hóa, dịch vụ trên website
                                            chính thức.&nbsp;</p>
                                        <p>Trừ khi có ghi chú khác bằng văn bản, mức giá được hiển thị cho mỗi loại sản phẩm trên website của
                                            7 Cinema là mức giá bán lẻ cuối cùng của sản phẩm đã bao gồm thuế Giá trị gia tăng (VAT).
                                        </p>
                                        <p>Giá vé có thể thay đổi tùy thời điểm và chương trình khuyến mãi kèm theo và sẽ được hiển thị rõ tại
                                            website khi quý khách hàng tiến hành đặt hàng.</p>
                                        <p>7 Cinema không cam kết mức giá của chỗ ngồi quý khách hàng đặt sẽ không thay đổi cho đến
                                            khi Quý Khách Hàng đặt vé. Tuy nhiên, đối với những chỗ ngồi bị sai giá, nếu như mức giá của chỗ
                                            ngồi trên thực tế cao hơn mức giá hiển thị trên 7 Cinema, thì 7 Cinema sẽ liên lạc
                                            trực tiếp với quý khách hàng về vấn đề này.</p>
                                        <p style={{ textAlign: 'justify' }}><strong>7. QUY ĐỊNH HOÀN TRẢ</strong></p>
                                        <p>7 Cinema không chịu trách nhiệm trong trường hợp Quý Khách Hàng lựa chọn sai hoặc có nhầm
                                            lẫn khi thực hiện giao dịch dù là vô ý hay cố ý.</p>
                                        <p>Trong trường hợp vé, hàng hóa của Quý Khách Hàng nhận trực tiếp được không tương ứng với chỗ ngồi
                                            hay đúng như mô tả trong phần thông tin sản phẩm khi đặt mua trên website do lỗi của Cinestar
                                            Cinemas, Quý Khách Hàng vui lòng liên hệ với Bộ phận chăm sóc khách hàng của 7 Cinema tại
                                            quầy vé trong thời gian sớm nhất kể từ khi nhận vé, hàng hóa, nhưng phải trước giờ chiếu phim ít
                                            nhất 30 phút, đồng thời đảm bảo sản phẩm trong tình trạng chưa qua sử dụng để được hỗ trợ đổi trả.
                                        </p>
                                        <p>Hiện tại, 7 Cinema chưa có dịch vụ và chính sách hủy/đổi trả/hoàn tiền hoặc thay đổi thông
                                            tin vé/hàng hóa sau khi đã thanh toán trực tuyến thành công.</p>
                                        <p>Hệ thống đặt vé trực tuyến của 7 Cinema có liên kết với rất nhiều đối tác khác, bao gồm
                                            cổng thanh toán, các ngân hàng, tổ chức tín dụng nội địa và quốc tế. Việc thanh toán thành công hay
                                            không phụ thuộc rất nhiều vào kết nối mạng của quý khách hàng, việc truyền dẫn, nhận và trả tín hiệu
                                            của các tổ chức đối tác trên.</p>
                                        <p>7 Cinema chỉ thực hiện hoàn tiền trong trường hợp khi giao dịch, tài khoản của quý khách
                                            hàng đã bị trừ tiền nhưng hệ thống của 7 Cinema không ghi nhận việc đặt vé của Quý Khách
                                            Hàng và Quý Khách Hàng không nhận được xác nhận đặt vé thành công. Khi đó, Quý Khách Hàng vui lòng
                                            liên hệ với 7 Cinema số điện thoại hotline: 028.7300 8881 và đồng thời gửi thông tin qua
                                            email: cskh@cinestar.com.vn để được hỗ trợ và xử lý.</p>
                                        <p>Sau khi đã xác nhận các thông tin của Quý Khách Hàng cung cấp về giao dịch không thành công, tùy
                                            theo từng loại tài khoản Quý Khách Hàng đã sử dụng để thanh toán mà thời gian hoàn tiền sẽ khác
                                            nhau:</p>
                                        <p>Thẻ ATM của các ngân hàng (nội địa): hoàn tiền trong 07 ngày làm việc.<br />Thẻ VISA/ MasterCard (Nội
                                            địa): hoàn tiền từ 30 đến 45 ngày làm việc.<br />Lưu ý: Thời gian hoàn tiền không tính các ngày Thứ 7,
                                            Chủ nhật và Lễ, Tết</p>
                                        <p style={{ textAlign: 'justify' }}><strong>8. TÌNH TRẠNG CHỖ NGỒI</strong></p>
                                        <p>7 Cinema không cam kết chỗ ngồi Quý Khách Hàng đang chọn chưa được khách hàng khác đặt cho
                                            đến khi Quý Khách Hàng bắt đầu thanh toán cho Đơn hàng của mình. Tuy nhiên, nếu Quý Khách Hàng không
                                            nhận được đúng số ghế mà quý khách hàng đã đặt, quý khách hàng vui lòng liên lạc với với Bộ phận
                                            chăm sóc khách hàng của 7 Cinema tại Quầy vé hoặc số điện thoại hotline: 028.7300.8881 hoặc
                                            qua email: cskh@cinestar.com.vn.</p>
                                        <p style={{ textAlign: 'justify' }}><strong>9. THƯ VÀ TIN NHẮN XÁC NHẬN ĐẶT VÉ</strong></p>
                                        <p>Trong vòng 30 phút kể từ khi thanh toán thành công hoặc một thời hạn hợp lý, 7 Cinema sẽ
                                            nhận được thư xác nhận thông tin chi tiết vé đã thanh toán thông qua địa chỉ thư điện tử (email) mà
                                            Quý Khách Hàng đã cung cấp cho 7 Cinema. Ngoài ra, 7 Cinema cũng sẽ gửi một tin nhắn
                                            (SMS) miễn phí, xác nhận mã số đặt vé/hàng hóa (đơn hàng) đến số điện thoại di động của Quý Khách
                                            Hàng đã cung cấp cho 7 Cinema. Lưu ý rằng tin nhắn này chỉ có tính chất dự phòng và Cinestar
                                            Cinemas chỉ chấp nhận số điện thoại di động hợp lệ tại Việt Nam.</p>
                                        <p>7 Cinema không chịu trách nhiệm trong trường hợp các thông tin về địa chỉ email/số điện
                                            thoại di động Quý Khách Hàng nhập không chính xác dẫn đến không nhận được thư xác nhận của Cinestar
                                            Cinemas. Quý Khách Hàng vui lòng kiểm tra kỹ lại các thông tin này trước khi thực hiện thanh toán.
                                        </p>
                                        <p>Nếu Quý Khách Hàng cần hỗ trợ hay thắc mắc, khiếu nại về thư xác nhận mã đặt vé (mã Đơn hàng) thì
                                            vui lòng gọi đến số điện thoại hotline: 028.7300 8881 và/hoặc gửi email đến địa chỉ:
                                            cskh@cinestar.com.vn để được xử lý.&nbsp;</p>
                                        <p>Đối với khiếu nại thì phương thức giải quyết khiếu nại là thông qua email. 7 Cinema chỉ
                                            chấp nhận khi khiếu nại được gửi từ email. Vì vậy, nếu Quý Khách Hàng có bất kỳ khiếu nại gì liên
                                            quan đến thư xác nhận mã đặt vé (mã Đơn hàng) thì ngoài việc gọi điện thoại đến số hotline, quý
                                            khách hàng vui lòng gửi email đến địa chỉ email nêu trên để được xử lý. Sau 60 phút kể từ khi giao
                                            dịch thanh toán thành công, nếu 7 Cinema không nhận được email nào từ phía quý khách hàng
                                            thì coi như mọi trách nhiệm của 7 Cinema đã hoàn thành. 7 Cinema không chấp nhận
                                            giải quyết bất kỳ khiếu nại, khiếu kiện nào sau khoảng thời gian trên.</p>
                                        <p>7 Cinema không hỗ trợ xử lý và sẽ không chịu trách nhiệm trong trường hợp đã gửi thư xác
                                            nhận mã vé đến địa chỉ email của Quý Khách Hàng nhưng vì bất kỳ lý do gì mà Quý Khách Hàng không sử
                                            dụng dịch vụ.</p>
                                        <p>Email xác nhận thông tin đặt vé có thể đi vào hộp thư rác (spam mail) của Quý Khách Hàng, vì vậy
                                            hãy kiểm tra chúng thật kỹ trước khi liên lạc với 7 Cinema.</p>
                                        <p style={{ textAlign: 'justify' }}><strong>10. NHẬN VÉ, HÀNG HÓA</strong></p>
                                        <p>7 Cinema chỉ cung cấp dịch vụ của mình tại địa điểm kinh doanh hợp pháp được đăng tải trên
                                            website. 7 Cinema không bàn giao vé/hàng hóa hoặc cung cấp dịch vụ, hàng hóa đến địa chỉ của
                                            Quý Khách Hàng.</p>
                                        <p><br />Quý Khách Hàng vui lòng kiểm tra lại những xác nhận trực tuyến, trong email và/hoặc trên thiết
                                            bị di động của Quý Khách Hàng một cách cẩn thận vì chúng sẽ cung cấp cho Quý Khách Hàng những thông
                                            tin quan trọng để nhận vé cho suất chiếu hoặc hàng hóa mà Quý Khách Hàng đã chọn.</p>
                                        <p>Khi tới Quầy vé của rạp chiếu phim tương ứng, Quý Khách Hàng hãy tìm các bảng chỉ dẫn tới khu vực
                                            Quầy bán vé để đổi vé cứng (vé được in trên giấy). Bên cạnh đó, Quý Khách Hàng cần mang theo giấy tờ
                                            tùy thân có dán ảnh như: CMND, Hộ chiếu, Bằng lái xe, Thẻ sinh viên, Thẻ học sinh … để kiểm tra, đối
                                            chiếu khi cần thiết.</p>
                                        <p style={{ textAlign: 'justify' }}><strong>11. CHĂM SÓC KHÁCH HÀNG VÀ XỬ LÝ KHIẾU NẠI</strong></p>
                                        <p>Trong trường hợp Quý Khách Hàng có bất kỳ thắc mắc hay khiếu nại nào về giao dịch trực tuyến, kể cả
                                            về chất lượng hàng hóa/dịch vụ, việc giao vé/hàng hóa, thái độ của nhân viên,… Quý khách hàng có thể
                                            liên hệ với Bộ Phận Chăm Sóc Khách Hàng của 7 Cinema theo số điện thoại hotline: 028.7300
                                            8881 hoặc email: <a tabIndex={-1}
                                                href="mailto:mail:cskh@cinestar.com.vn">cskh@cinestar.com.vn</a>.&nbsp;</p>
                                        <p>Khi liên hệ với Bộ Phận Chăm Sóc Khách Hàng của 7 Cinema, Quý Khách Hàng phải cung cấp mã
                                            số Đơn hàng ghi trong email hoặc tin nhắn (SMS) xác nhận mã Đơn hàng mà 7 Cinema gửi cho quý
                                            khách hàng. Bộ Phận Chăm Sóc Khách Hàng sẽ tiếp nhận và phản hồi lại cho quý khách hàng trong thời
                                            gian sớm nhất.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="quy-dinh-tai-rap-chieu-phim">
                        <div className="widget block block-static-block">
                            {/* <style>
                #html-body [data-pb-style=M9GEO4R] {
                    justify-content: flex-start;
                    display: flex;
                    flex-direction: column;
                    background-position: left top;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-attachment: scroll
                }
                </style> */}
                            <div data-content-type="row" data-appearance="contained" data-element="main">
                                <div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}"
                                    data-background-type="image" data-video-loop="true" data-video-play-only-visible="true"
                                    data-video-lazy-load="true" data-video-fallback-src="" data-element="inner" data-pb-style="M9GEO4R">
                                    <div data-content-type="text" data-appearance="default" data-element="main">
                                        <h2>QUY ĐỊNH TẠI RẠP CHIẾU PHIM</h2>
                                        <p><strong>QUY ĐỊNH TẠI RẠP CHIẾU PHIM</strong></p>
                                        <p>7 Cinema luôn trân trọng tình cảm yêu mến của khách hàng và mong muốn đem đến những giây
                                            phút giải trí tuyệt vời với chất lượng dịch vụ tốt nhất. Quý Khách Hàng xin vui lòng đọc kỹ các quy
                                            định sau trước khi sử dụng dịch vụ.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>1. NỘI QUY CHUNG TẠI RẠP CHIẾU PHIM</strong></p>
                                        <p>1. 7 Cinema có quyền từ chối phục vụ khách hàng có một hoặc nhiều các hành vi như được liệt
                                            kê sau đây:</p>
                                        <p>- Quay phim, chụp ảnh, sao chép, ghi âm, ghi hình, truyền phát phim trái phép;</p>
                                        <p>- Gây rối, mất trật tự tại rạp chiếu phim; Cản trở, sách nhiễu, gây phiền hà cho khách hàng khác
                                            hoặc hoạt động kinh doanh 7 Cinema;</p>
                                        <p>- Sử dụng chất cấm, chất kích thích dưới mọi hình thức (bao gồm cả thuốc lá và thuốc lá điện tử);
                                        </p>
                                        <p>- Mang vũ khí, vật liệu gây cháy, nổ, chất phóng xạ, chất độc hại, chất cấm, chất kích thích vào
                                            rạp chiếu phim;</p>
                                        <p>- Quấy rối tình dục, sàm sỡ, khiêu dâm, kích dục;</p>
                                        <p>- Sử dụng kẹo cao su, rượu, bia, thức uống có cồn;</p>
                                        <p>- Mang theo thú cưng vào rạp chiếu phim;</p>
                                        <p>- Mang theo và/hoặc sử dụng thức ăn và nước uống mà không phải do 7 Cinema cung cấp đến
                                            khách hàng hoặc không được sự cho phép của 7 Cinema;</p>
                                        <p>- Tổ chức thổi nến, đốt pháo hoa, cúng kính, hoạt động khác có nguy cơ gây cháy nổ, gây mất an toàn
                                            phòng cháy chữa cháy;</p>
                                        <p>- Cố ý vào các khu vực hạn chế, khu vực cấm, khu vực giới hạn mà không được sự cho phép của
                                            7 Cinema;</p>
                                        <p>- Hành vi không phù hợp khác theo thông báo, hướng dẫn cụ thể tại rạp chiếu phim 7 Cinema.
                                        </p>
                                        <p>Trường hợp 7 Cinema phát hiện có hành vi vi phạm nêu trên, 7 Cinema có quyền yêu
                                            cầu khách hàng vi phạm rời khỏi rạp chiếu phim và/ hoặc kiến nghị với cơ quan, người có thẩm quyền
                                            xử lý theo quy định pháp luật.</p>
                                        <p>2. Lưu ý</p>
                                        <p>Rạp chiếu phim là địa điểm công cộng theo quy định của pháp luật, do đó 7 Cinema thông tin
                                            đến khách hàng nhằm đảm bảo an ninh trật tự tại khu vực rạp chiếu phim như sau:</p>
                                        <p>- Khách hàng thực hiện nếp sống văn minh, văn hóa xếp hàng, thực hiện theo hướng dẫn của các bảng
                                            chỉ dẫn, hướng dẫn của nhân viên 7 Cinema (nếu có);</p>
                                        <p>- Khách hàng bảo quản tư trang, tài sản cá nhân cẩn thận nhằm tránh xảy ra mất cắp, thất lạc không
                                            đáng có;</p>
                                        <p>- Không vứt rác bừa bãi; viết, vẽ, dán, gắn hình ảnh, nội dung lên tường, nội thất, ấn phẩm truyền
                                            thông và các vị trí khác mà không được phép.</p>
                                        <p>- 7 Cinema có trang bị camera an ninh giám sát trong khu vực rạp chiếu phim.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>2. PHÂN LOẠI PHIM THEO ĐỘ TUỔI</strong></p>
                                        <p>1. Phân loại Phim</p>
                                        <p>Căn cứ quy định tại Luật Điện ảnh năm 2022 do Quốc hội ban hành, 7 Cinema thông báo tiêu
                                            chí phân loại phim phù hợp với độ tuổi của người xem như sau:</p>
                                        <table style={{ borderCollapse: 'collapse', width: '100%' }} border={1}>
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: '49.96%' }}><strong>PHÂN LOẠI</strong></td>
                                                    <td style={{ width: '49.96%' }}><strong>NỘI DUNG CHI TIẾT</strong></td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: '49.96%' }}>Loại P</td>
                                                    <td style={{ width: '49.96%' }}>Phim được phép phổ biến đến người xem ở mọi độ tuổi</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: '49.96%' }}>Loại T18 (18+)</td>
                                                    <td style={{ width: '49.96%' }}>Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: '49.96%' }}>Loại T16 (16+)</td>
                                                    <td style={{ width: '49.96%' }}>Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: '49.96%' }}>Loại T13 (13+)</td>
                                                    <td style={{ width: '49.96%' }}>Phim được phổ biến đến người xem từ đủ 13 tuổi trở lên</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: '49.96%' }}>Loại K</td>
                                                    <td style={{ width: '49.96%' }}>Phim được phổ biến đến người xem dưới 13 tuổi với điều kiện xem cùng
                                                        cha, mẹ hoặc người giám hộ</td>
                                                </tr>
                                                <tr>
                                                    <td style={{ width: '49.96%' }}>Loại C</td>
                                                    <td style={{ width: '49.96%' }}>Phim không được phép phổ biến</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p>&nbsp;</p>
                                        <p>2. Lưu ý</p>
                                        <p>- Nhằm đảm bảo khách hàng xem phim đúng với độ tuổi theo phân loại phim, khách hàng vui lòng mang
                                            theo giấy tờ tùy thân có ảnh nhận diện và ngày tháng năm sinh để đảm bảo tuân thủ quy định của pháp
                                            luật.</p>
                                        <p>- Giấy tờ tùy thân được chấp nhận là giấy tờ do cơ quan có thẩm quyền cấp, còn giá trị sử dụng
                                            (chưa hết hạn) và không có tẩy, xóa, không bị mờ, nhòe; bao gồm nhưng không giới hạn: Giấy khai
                                            sinh, Căn cước công dân, Hộ chiếu, Thẻ học sinh, Thẻ sinh viên, bằng lái xe, hoặc các giấy tờ tùy
                                            thân khác để xác định độ tuổi.</p>
                                        <p>- 7 Cinema có quyền yêu cầu khách hàng xuất trình, kiểm tra và từ chối phục vụ khách hàng
                                            nếu không đúng quy định về độ tuổi.</p>
                                        <p>3. Miễn trừ trách nhiệm</p>
                                        <p>Trường hợp khách hàng có hành vi gian dối hoặc sử dụng các giấy tờ giả, giấy tờ không phù hợp để
                                            xem phim không đúng với phân loại tuổi của mình, 7 Cinema được miễn trừ mọi trách nhiệm phát
                                            sinh từ hoặc liên quan đến hành vi đó.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>3. KHUNG GIỜ CHIẾU PHIM</strong></p>
                                        <p>Căn cứ theo quy định tại Nghị định số 131/2022/NĐ-CP do Chính phủ ban hành, 7 Cinema thông
                                            báo về Khung giờ chiếu phim như sau:</p>
                                        <p>1. Khung giờ ưu tiên chiếu phim Việt Nam</p>
                                        <p>- Ưu tiên suất chiếu Phim Việt Nam vào khung thời gian từ 18 đến 22 giờ.</p>
                                        <p>- Ưu tiên suất chiếu Phim Việt Nam vào các đợt phim kỷ niệm các ngày lễ lớn của đất nước, phục vụ
                                            nhiệm vụ chính trị, xã hội, đối ngoại theo yêu cầu của cơ quan nhà nước có thẩm quyền.</p>
                                        <p>2. Khung giờ chiếu phim cho trẻ em</p>
                                        <p>- Giờ chiếu phim cho khách hàng dưới 13 tuổi tại rạp kết thúc trước 22 giờ;</p>
                                        <p>- Giờ chiếu phim cho khách hàng dưới 16 tuổi tại rạp kết thúc trước 23 giờ.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>4. CHÍNH SÁCH GIÁ VÉ ĐỐI VỚI CÁC ĐỐI TƯỢNG ĐẶC BIỆT</strong></p>
                                        <p>1. Giải thích từ ngữ</p>
                                        <p>Trừ khi ngữ cảnh hoặc tình huống có quy định khác đi, các từ và cụm từ ngay bên dưới sẽ được hiểu
                                            như sau:</p>
                                        <p>a) Trẻ em: là khách hàng dưới 16 tuổi;</p>
                                        <p>b) Người cao tuổi: là khách hàng trên 60 tuổi;</p>
                                        <p>c) Người có công với cách mạng: là khách hàng có xác nhận là người có công với cách mạng;</p>
                                        <p>d) Người có hoàn cảnh khó khăn: là khách hàng có xác nhận là người có hoàn cảnh khó khăn (hoặc thỏa
                                            mãn điều kiện về chuẩn hộ cận nghèo và chuẩn hộ nghèo theo quy định pháp luật);</p>
                                        <p>e) Người khuyết tật nặng: là khách hàng khuyết tật nặng hoặc chứng minh được người khuyết tật nặng:
                                            là những người do khuyết tật dẫn đến một phần hoặc suy giảm chức năng, không tự kiểm soát hoặc thực
                                            hiện được một số hoạt động cơ bản;</p>
                                        <p>f) Người khuyết tật đặc biệt nặng: là khách hàng khuyết tật đặc biệt nặng hoặc chứng minh được
                                            người khuyết tật đặc biệt nặng: là những người do khuyết tật dẫn đến mất hoàn toàn chức năng, không
                                            tự kiểm soát hoặc thực hiện được các hoạt động cơ bản;</p>
                                        <p>2. Cách thức áp dụng</p>
                                        <p>- Giá Vé Xem Phim Tiêu Chuẩn áp dụng cho khách hàng thuộc đối tượng người cao tuổi, có công với
                                            cách mạng, người có hoàn cảnh khó khăn: sẽ luôn đảm bảo tỷ lệ tối thiểu thấp hơn 20% so với Giá Vé
                                            Xem Phim Cơ Sở áp dụng cho từng Cụm Rạp Chiếu Phim 7 Cinema.</p>
                                        <p>- Giá Vé Xem Phim Tiêu Chuẩn áp dụng cho khách hàng thuộc đối tượng người khuyết tật nặng: sẽ luôn
                                            đảm bảo tỷ lệ tối thiểu thấp hơn 50% so với Giá Vé Xem Phim Cơ Sở áp dụng cho từng Cụm Rạp Chiếu
                                            Phim 7 Cinema.</p>
                                        <p>- Giá Vé Xem Phim Tiêu Chuẩn áp dụng cho khách hàng thuộc đối tượng người khuyết tật đặc biệt nặng:
                                            miễn Giá vé.</p>
                                        <p>3. Lưu ý</p>
                                        <p>- Xuất trình giấy tờ tùy thân hoặc tài liệu phù hợp, có liên quan để chứng minh chính xác thông tin
                                            hoặc tình trạng của khách hàng theo quy định của pháp luật.</p>
                                        <p>- Giới hạn áp dụng: 01 đối tượng/ 01 vé/ 01 giao dịch. Không giới hạn số lượng giao dịch trong một
                                            ngày.</p>
                                        <p>- Các ưu đãi trên sẽ không được áp dụng khi khách hàng đặt vé xem phim trực tuyến qua Ứng Dụng của
                                            7 Cinema (app 7 Cinema hoặc website: 7 Cinema.com.vn), ưu đãi chỉ có thể
                                            được thực hiện bằng giao dịch trực tiếp tại các cụm rạp chiếu phim 7 Cinema trên toàn quốc.
                                        </p>
                                        <p>- Giá Vé Xem Phim Tiêu Chuẩn sẽ có sự khác biệt giữa các Cụm Rạp Chiếu Phim 7 Cinema trên
                                            toàn quốc.</p>
                                        <p>&nbsp;</p>
                                        <p><strong>5. THÔNG TIN LIÊN HỆ</strong></p>
                                        <p>Quý khách hàng có thắc mắc về các quy định nêu trên hoặc cần hỗ trợ, tư vấn về dịch vụ và các vấn
                                            đề có liên quan, vui lòng liên hệ với Bộ phận chăm sóc khách hàng của 7 Cinema tại Quầy vé
                                            hoặc số điện thoại hotline: 028.7300.8881 hoặc qua email: cskh@cinestar.com.vn.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="chinh-sach-bao-mat">
                        <div className="widget block block-static-block">
                            {/* <style>
                #html-body [data-pb-style=U3LYQ3Q] {
                    justify-content: flex-start;
                    display: flex;
                    flex-direction: column;
                    background-position: left top;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-attachment: scroll
                }
                </style> */}
                            <div data-content-type="row" data-appearance="contained" data-element="main">
                                <div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}"
                                    data-background-type="image" data-video-loop="true" data-video-play-only-visible="true"
                                    data-video-lazy-load="true" data-video-fallback-src="" data-element="inner" data-pb-style="U3LYQ3Q">
                                    <div data-content-type="text" data-appearance="default" data-element="main">
                                        <h2>Chính sách bảo mật</h2>
                                        <p ><strong>CHÍNH SÁCH BẢO MẬT THÔNG TIN</strong></p>
                                        <p>Chúng tôi, Công ty Cổ phần Giải trí - Phát hành phim - Rạp chiếu phim Bảy (sau đây gọi là
                                            “Cinestar Cinemas”, hay “chúng tôi”) hiểu rằng Khách Hàng quan tâm đến toàn bộ cách thức chúng tôi
                                            xử lý và bảo vệ dữ liệu cá nhân của Khách Hàng ra sao trong khuôn khổ pháp luật cũng như chuẩn mực
                                            bảo mật tại 7 Cinema. Chúng tôi rất coi trọng sự tin tưởng của Khách Hàng, vì vậy Cinestar
                                            Cinemas sẽ sử dụng những dữ liệu mà Khách Hàng cung cấp một cách cẩn thận và hợp lý, phù hợp với
                                            quy định của pháp luật.</p>
                                        <p>Website:<a tabIndex={-1} href="https://www.cinestar.com.vn"> www.cinestar.com.vn</a> và ứng dụng
                                            Cinestar (sau đây gọi chung là “website”) thuộc quyền sở hữu của Công ty Cổ phần Giải trí – Phát
                                            hành phim – Rạp chiếu phim Bảy, địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, thành phố
                                            Hồ Chí Minh. Website này được sử dụng cho các hoạt động thương mại điện tử của 7 Cinema bao
                                            gồm cả các chi nhánh trực thuộc, địa điểm kinh doanh, các công ty thành viên, công ty do Cinestar
                                            Cinemas góp vốn và các tổ chức liên quan.</p>
                                        <p>7 Cinema sẽ xử lý dữ liệu cá nhân từ Khách Hàng với mục đích đúng đắn theo thỏa thuận, tuân
                                            thủ yêu cầu của pháp luật hay các mục đích khác được nêu tại chính sách bảo mật dữ liệu cá nhân dưới
                                            đây.</p>
                                        <p>Chính sách bảo mật dữ liệu cá nhân (sau đây gọi tắt là "Chính Sách Bảo Mật" hay "Chính Sách")
                                            được tạo ra nhằm cung cấp các thông tin tổng quát về việc xử lý dữ liệu cá nhân bao gồm việc:
                                            thu thập, ghi, phân tích, xác nhận, lưu trữ, chỉnh sửa, công khai, kết hợp, truy cập, truy xuất, thu
                                            hồi, mã hóa, giải mã, sao chép, chia sẻ, truyền đưa, cung cấp, chuyển giao, xóa, hủy dữ liệu cá nhân
                                            hoặc các hành động khác có liên quan mà Khách Hàng đã cung cấp cho chúng tôi khi tham gia truy cập,
                                            giao dịch, cung cấp thông tin trên website của 7 Cinema như thế nào, cho dù ở hiện tại hay
                                            trong tương lai; cũng như cách mà chúng tôi sẽ hỗ trợ Khách Hàng trước khi đưa ra bất cứ quyết định
                                            nào liên quan đến việc cung cấp dữ liệu cá nhân của Khách Hàng cho 7 Cinema.</p>
                                        <p>"Dữ liệu cá nhân" là các thông tin dưới dạng ký hiệu, chữ viết, chữ số, hình ảnh, âm thanh hoặc
                                            dạng tương tự trên môi trường điện tử gắn liền với một con người cụ thể hoặc giúp xác định một con
                                            người cụ thể. Dữ liệu cá nhân bao gồm dữ liệu cá nhân cơ bản và dữ liệu cá nhân nhạy cảm. Dữ liệu cá
                                            nhân của Khách Hàng sau đây được gọi chung là “Thông Tin Khách Hàng”.</p>
                                        <p>Bằng cách sử dụng dịch vụ, đăng ký tài khoản với 7 Cinema, ghé thăm website của Cinestar
                                            Cinemas, hoặc truy cập vào dịch vụ, thực hiện giao dịch trên website của 7 Cinema hoặc các
                                            sản phẩm liên quan của chúng tôi được hiểu là Khách Hàng đã được đọc, hiểu, thừa nhận và đồng ý các
                                            yêu cầu, và/hoặc các Chính Sách, thực tiễn áp dụng nêu trong Chính Sách Bảo Mật này (kể cả các phiên
                                            bản sửa đổi, bổ sung của Chính Sách), và Khách Hàng đồng ý với 7 Cinema về việc xử lý dữ
                                            liệu cá nhân của Khách Hàng theo cách được mô tả trong tài liệu này.</p>
                                        <p>Quý Khách Hàng có thể đồng ý một phần hoặc với điều kiện kèm theo. Trong khả năng của mình,
                                            7 Cinema chỉ có thể bắt đầu xử lý dữ liệu của Khách hàng khi nhận được đồng ý toàn bộ mà
                                            không có điều kiện kèm theo. Vì vậy, khi chúng tôi cần sự đồng ý từ Khách Hàng để bắt đầu xử lý dữ
                                            liệu, điều này nghĩa là chúng tôi cần sự đồng ý toàn bộ từ Khách Hàng.</p>
                                        <p>Quý Khách Hàng có thể rút lại sự đồng ý theo luật định, trừ trường hợp 7 Cinema được xử lý
                                            dữ liệu mà không cần sự đồng ý của Khách Hàng. Việc Khách Hàng rút lại sự đồng ý không ảnh hưởng đến
                                            tính hợp pháp của việc xử lý dữ liệu của chúng tôi đã được Khách Hàng đồng ý trước khi rút lại sự
                                            đồng ý. Tuy nhiên, khi Khách Hàng rút lại sự đồng ý xử lý dữ liệu cá nhân theo Chính Sách Bảo Mật,
                                            chúng tôi có thể không thực hiện được các hành động cần thiết để đạt mục đích xử lý thông tin, hoặc
                                            rằng Khách Hàng không thể tiếp tục sử dụng sản phẩm, dịch vụ, thực hiện hợp đồng với chúng tôi. Khi
                                            đó, chúng tôi vẫn có thể tiếp tục xử lý dữ liệu cá nhân của Khách Hàng trong phạm vi được yêu cầu
                                            hoặc theo pháp luật hiện hành.</p>
                                        <p>&nbsp;</p>
                                        <p style={{ textAlign: 'center' }}><strong>A. TỔNG QUAN VỀ CHÍNH SÁCH BẢO MẬT</strong></p>
                                        <p>&nbsp;</p>
                                        <p>Chính Sách Bảo Mật này là một phần trong cam kết bảo vệ và xử lý dữ liệu cá nhân của Công ty Cổ
                                            phần Giải trí - Phát hành phim - Rạp chiếu phim Bảy.&nbsp;</p>
                                        <p>Bảo vệ và xử lý dữ liệu cá nhân luôn mang ý nghĩa hết sức quan trọng đối với chúng tôi. Do đó,
                                            thông qua Chính Sách này, chúng tôi muốn giải thích minh bạch về toàn bộ cách thức chúng tôi bảo vệ
                                            và xử lý dữ liệu cá nhân, bao gồm nhưng không giới hạn về mục đích, loại dữ liệu và cách thức chúng
                                            tôi xử lý, thu thập, lưu trữ, chia sẻ và sử dụng dữ liệu cá nhân của bạn để đảm bảo thông tin đó
                                            luôn riêng tư và an toàn.</p>
                                        <p>Chúng tôi luôn duy trì nỗ lực để gửi Chính Sách Bảo Mật này đến bạn để đọc, hiểu, và biết rõ trước
                                            khi thực hiện một phần hay toàn bộ hoạt động xử lý dữ liệu cá nhân. Chính Sách này giải đáp cho bạn,
                                            bao gồm nhưng không giới hạn, về:</p>
                                        <p>1. Phạm vi xử lý và cách thức thu thập dữ liệu cá nhân;</p>
                                        <p>2. Mục đích xử lý dữ liệu cá nhân;</p>
                                        <p>3. Lưu giữ và bảo mật dữ liệu cá nhân;</p>
                                        <p>4. Thời gian lưu giữ dữ liệu cá nhân;</p>
                                        <p>5. Tổ chức, cá nhân được xử lý dữ liệu cá nhân;</p>
                                        <p>6. Quyền và nghĩa vụ của Khách Hàng;</p>
                                        <p>7. Hậu quả, thiệt hại không mong muốn có thể xảy ra;</p>
                                        <p>8. Chính sách Cookie;</p>
                                        <p>9. Chính sách Hệ thống giám sát (CCTV);</p>
                                        <p>10. Cam kết chung;</p>
                                        <p>11. Thông tin liên hệ.</p>
                                        <p>Trường hợp chúng tôi thay đổi Chính Sách Bảo Mật, chúng tôi sẽ cập nhật thay đổi hoặc sửa đổi đó
                                            trên website của 7 Cinema. Phiên bản sửa đổi, bổ sung Chính Sách này (nếu có) sẽ có hiệu lực
                                            kể từ ngày việc sửa đổi, bổ sung Chính Sách được đăng tải trên website. Vì vậy, chúng tôi khuyến
                                            nghị Khách hàng nên định kỳ kiểm tra Chính Sách Bảo Mật trên trang điện tử chính thức của chúng tôi.
                                        </p>
                                        <p>7 Cinema kính mong Khách Hàng vui lòng đọc Chính Sách Bảo Mật một cách cẩn thận. Nếu Khách
                                            Hàng có bất kỳ câu hỏi liên quan đến các thông tin này hoặc thực tiễn bảo mật của 7 Cinema,
                                            xin vui lòng liên hệ với 7 Cinema theo thông tin ở phần cuối của Chính Sách Bảo Mật này.</p>
                                        <p><strong>1. PHẠM VI XỬ LÝ VÀ CÁCH THỨC THU THẬP DỮ LIỆU CÁ NHÂN</strong></p>
                                        <p><strong>A. PHẠM VI XỬ LÝ</strong></p>
                                        <p>Dữ liệu cá nhân (hay “thông tin”) do Khách Hàng cung cấp: 7 Cinema thu thập tất cả những
                                            thông tin, dữ liệu cá nhân mà Khách Hàng đăng tải hoặc các thao tác mà Khách Hàng thực hiện trên
                                            website của 7 Cinema, các thông tin này có thể dưới dạng ký hiệu, chữ viết, chữ số, hình
                                            ảnh, âm thanh hoặc dạng tương tự trên môi trường điện tử gắn liền với Khách Hàng.</p>
                                        <p>Dữ liệu cá nhân được thu thập trong phạm vi thực hiện Chính Sách này là “Dữ liệu cá nhân
                                            cơ bản” theo quy định pháp luật bao gồm 09 thông tin cá nhân được liệt kê sau đây:</p>
                                        <p>1. Họ và tên;</p>
                                        <p>2. Ngày, tháng, năm sinh;</p>
                                        <p>3. Giới tính</p>
                                        <p>4. Địa chỉ cư trú;</p>
                                        <p>5. Số điện thoại;</p>
                                        <p>6. Số chứng minh nhân dân, số định danh cá nhân, số hộ chiếu, số giấy phép lái xe;</p>
                                        <p>7. Thông tin về tài khoản số thanh toán của cá nhân; và</p>
                                        <p>8. Địa chỉ email.</p>
                                        <p>Khách Hàng cam kết cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý với Chính
                                            Sách Bảo Mật này. Trong trường hợp (các) dữ liệu được cung cấp không chính xác thì
                                            Khách Hàng tự chịu trách nhiệm đối với mọi thiệt hại phát sinh cho 7 Cinema
                                            và/hoặc bên thứ ba bất kỳ và tự chịu trách nhiệm trước pháp luật.</p>
                                        <p><strong>B. CÁCH THỨC THU THẬP</strong></p>
                                        <p>7 Cinema thu thập dữ liệu cá nhân của Khách Hàng từ các nguồn chung sau:</p>
                                        <p>- Trực tiếp từ Khách Hàng và bất kỳ thông tin nào từ các thành viên gia đình, người giám hộ hợp
                                            pháp, cộng sự hoặc người thụ hưởng sản phẩm và dịch vụ;</p>
                                        <p>- Thông tin về Khách Hàng được tạo ra khi sử dụng các sản phẩm và dịch vụ của chúng tôi;</p>
                                        <p>- Từ một nhà môi giới hoặc một bên trung gian khác (ví dụ: đại lý, nhà phân phối, đối tác kinh
                                            doanh), các bên mà chúng tôi có hợp tác để cung cấp sản phẩm hoặc dịch vụ hoặc cung cấp báo giá cho
                                            Khách Hàng;</p>
                                        <p>- Các công ty con, công ty thành viên, công ty do chúng tôi góp vốn nếu Khách Hàng đã từng đăng ký
                                            thành viên hoặc sử dụng dịch vụ từ các công ty này;</p>
                                        <p>- Cookie, dịch vụ định vị, địa chỉ IP khi Khách Hàng truy cập website của chúng tôi hoặc khi bạn
                                            điền vào biểu mẫu trong trang mạng xã hội website của chúng tôi;</p>
                                        <p>- Hệ thống giám sát (CCTV) để ghi âm, ghi hình tại nơi chúng tôi thực hiện hoạt động kinh doanh như
                                            các cụm rạp chiếu phim, phòng giao dịch, nơi phục vụ và chăm sóc khách hàng;</p>
                                        <p>- Các bên thứ ba như đại lý, nhà cung cấp, tổ chức tài chính, cá nhân y tế, tòa án, cơ quan thi
                                            hành án hoặc hồ sơ thông tin đã được công bố công khai;</p>
                                        <p>- Bảng câu hỏi, bảng thông tin liên lạc chi tiết khi Khách Hàng tham gia khảo sát, các sự kiện, họp
                                            báo hoặc khi Khách Hàng cập nhật thông tin liên lạc với chúng tôi trên trang mạng, biểu mẫu của
                                            chúng tôi, bao gồm cả khi bạn ra vào cụm rạp chiếu phim, văn phòng làm việc, nơi hoạt động kinh
                                            doanh của chúng tôi;</p>
                                        <p>- Từ các nguồn khác như các cơ quan nhà nước, các thông tin đã được công bố công khai (ví dụ: danh
                                            bạ điện thoại, phương tiện truyền thông xã hội, các trang mạng, các bài báo) và thông tin từ các cơ
                                            quan thực thi pháp luật.</p>
                                        <p>Lưu ý: Khi Khách Hàng cung cấp cho chúng tôi dữ liệu cá nhân về người khác (hoặc nhiều người khác),
                                            chúng tôi hiểu rằng bạn là người giám hộ hoặc đã được ủy quyền hợp pháp, hợp lệ bởi (những) người đó
                                            để cung cấp dữ liệu cá nhân thay họ. Điều này bao gồm cung cấp sự đồng ý để:</p>
                                        <p>- Chúng tôi xử lý dữ liệu cá nhân của (những) người đó theo đúng Chính Sách mà chúng tôi đã giải
                                            thích tại đây; và</p>
                                        <p>- Khách Hàng có thể sẽ nhận được các thông báo bảo vệ thông tin thay mặt họ.</p>
                                        <p>Nếu vì bất kỳ lý do nào Quý Khách Hàng quan tâm đến việc liệu có được phép cung cấp cho chúng tôi
                                            thông tin về người khác hay không, vui lòng liên hệ với chúng tôi theo thông tin Liên hệ bên dưới
                                            trước khi gửi cho chúng tôi bất cứ thông tin gì.</p>
                                        <p><strong>2. MỤC ĐÍCH XỬ LÝ DỮ LIỆU CÁ NHÂN</strong></p>
                                        <p>Mục đích thu thập, xử lý Thông Tin Khách Hàng bao gồm các hoạt động sau đây:</p>
                                        <p>1. Cung cấp, thực hiện, duy trì, quản lý các hợp đồng, dịch vụ, sản phẩm theo nhu cầu của Khách
                                            Hàng (bao gồm cả việc cho phép 7 Cinema thực hiện nghĩa vụ của chúng tôi với Khách Hàng và
                                            cung cấp mọi dịch vụ liên quan như đã thảo luận với Khách Hàng trước khi mua sản phẩm hoặc dịch vụ);
                                        </p>
                                        <p>2. Liên hệ xác nhận khi Khách Hàng đăng ký sử dụng dịch vụ, xác lập giao dịch trên website;</p>
                                        <p>3. Thực hiện việc quản lý website, gửi thông tin cập nhật về website, các chương trình khuyến mại,
                                            ưu đãi/tri ân tới Khách Hàng;</p>
                                        <p>4. Bảo đảm quyền lợi của Khách Hàng khi phát hiện các hành động giả mạo, phá hoại tài khoản, lừa
                                            đảo Khách Hàng;</p>
                                        <p>5. Cung cấp dịch vụ chăm sóc khách hàng như liên lạc, hỗ trợ, giải quyết với Khách Hàng, giải quyết
                                            thắc mắc, xử lý sự cố trong các trường hợp đặc biệt.</p>
                                        <p>6. Tự động ra quyết định hoặc tạo hồ sơ cá nhân. 7 Cinema và các đối tác kinh doanh, đối
                                            tác tiếp thị của chúng tôi có thể sử dụng dữ liệu cá nhân để đưa ra quyết định tự động ảnh hưởng đến
                                            Khách Hàng hoặc tạo hồ sơ cá nhân khác cho Khách Hàng (ví dụ: hồ sơ tiếp thị)</p>
                                        <p>7. Lưu giữ thông tin và thực hiện các công việc quản lý nội bộ khác.</p>
                                        <p>8. Tuân thủ với các yêu cầu pháp luật có liên quan điều chỉnh một phần hoặc toàn bộ hoạt động của
                                            chúng tôi, ví dụ như pháp luật về Thuế, Phòng, chống rửa tiền, quy định về lưu trữ dữ liệu hay như
                                            tranh chấp, tố tụng.</p>
                                        <p>9. Thiết kế, tùy chỉnh và cung cấp cho Khách Hàng các sản phẩm và dịch vụ phù hợp.</p>
                                        <p>10. Tiến hành nghiên cứu và phân tích thống kê.</p>
                                        <p>11. Gửi các ưu đãi tiếp thị, giới thiệu sản phẩm, quảng cáo và khuyến mãi bằng phương tiện điện tử
                                            và phi điện tử bao gồm qua đường bưu điện, cũng như gửi thông tin giới thiệu các sản phẩm và dịch vụ
                                            từ các bên thứ ba đã được chọn lọc kỹ lưỡng.</p>
                                        <p>7 Cinema chỉ sử dụng Thông Tin Khách Hàng cho các mục đích nêu trên hoặc mục đích khác (nếu
                                            có) với điều kiện đã thông báo và được sự đồng ý của Khách Hàng.</p>
                                        <p>Khách Hàng hiểu và đồng ý rằng 7 Cinema có nghĩa vụ phải cung cấp Thông Tin Khách Hàng theo
                                            yêu cầu/quyết định của Cơ quan nhà nước có thẩm quyền và/hoặc quy định pháp luật. 7 Cinema
                                            sẽ được miễn trừ mọi trách nhiệm liên quan đến bảo mật thông tin trong trường hợp này.</p>
                                        <p>Để tránh nghi ngờ, trong quá trình giao dịch thanh toán tại website, 7 Cinema chỉ lưu giữ
                                            thông tin chi tiết về đơn hàng đã thanh toán của khách hàng, các thông tin về tài khoản ngân hàng
                                            của khách hàng sẽ không được lưu giữ.</p>
                                        <p><strong>3. LƯU GIỮ VÀ BẢO MẬT DỮ LIỆU CÁ NHÂN</strong></p>
                                        <p>Thông Tin Khách Hàng, cũng như các thông tin trao đổi giữa Khách Hàng và 7 Cinema, đều được
                                            lưu giữ và bảo mật bởi hệ thống của 7 Cinema.</p>
                                        <p>7 Cinema sẽ lưu trữ Thông Tin Khách Hàng theo quy định pháp luật hiện hành. Nếu Khách Hàng
                                            ngừng sử dụng website, hoặc việc cho phép Khách Hàng sử dụng website và/hoặc các dịch vụ bị chấm
                                            dứt, 7 Cinema có thể tiếp tục lưu trữ, sử dụng và/hoặc tiết lộ Thông Tin Khách Hàng phù hợp
                                            với Chính Sách Bảo Mật và nghĩa vụ của 7 Cinema theo quy định của pháp luật.</p>
                                        <p>Khách Hàng tuyệt đối không được có bất kỳ hành vi sử dụng công cụ, chương trình để can thiệp trái
                                            phép vào hệ thống hay làm thay đổi cấu trúc dữ liệu của 7 Cinema, cũng như bất kỳ hành vi
                                            nào khác nhằm phát tán, cổ vũ cho các hoạt động với mục đích can thiệp, phá hoại hay xâm nhập vào dữ
                                            liệu của hệ thống 7 Cinema, cũng như các các hành vi mà pháp luật Việt Nam nghiêm cấm. Trong
                                            trường hợp 7 Cinema phát hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán các
                                            thông tin trái phép,… 7 Cinema có quyền chuyển Thông Tin Khách Hàng theo yêu cầu của cơ
                                            quan có thẩm quyền để xử lý theo quy định pháp luật.</p>
                                        <p><strong>4. THỜI GIAN LƯU TRỮ DỮ LIỆU CÁ NHÂN</strong></p>
                                        <p>Thông Tin Khách Hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và
                                            thực hiện đóng tài khoản. Đối với các tài khoản đã đóng, 7 Cinema vẫn lưu trữ Thông Tin
                                            Khách Hàng và truy cập của Khách Hàng để phục vụ cho mục đích phòng chống gian lận, điều tra, giải
                                            đáp thắc mắc ...</p>
                                        <p>Các thông tin này sẽ được 7 Cinema lưu trữ trong hệ thống máy chủ tối đa mười hai (12)
                                            tháng kể từ ngày Khách Hàng đóng tài khoản trên 7 Cinema. Sau khi thời hạn này kết thúc,
                                            7 Cinema có thể tiến hành xóa vĩnh viễn thông tin cá nhân của Khách Hàng.</p>
                                        <p><strong>5. TỔ CHỨC, CÁ NHÂN ĐƯỢC XỬ LÝ THÔNG TIN</strong></p>
                                        <p>7 Cinema sẽ thực hiện xử lý dữ liệu thông tin cá nhân của Khách Hàng theo các
                                            mục nêu trên. 7 Cinema không cung cấp Thông Tin Khách Hàng cho bất kỳ bên thứ ba nào khác
                                            trừ các trường hợp ngoại lệ không cần sự đồng ý của Khách Hàng theo quy định của pháp
                                            luật.</p>
                                        <p>Các tổ chức, cá nhân được liệt kê sau đây có thể được xử lý dữ liệu cá nhân sau khi
                                            được sự đồng ý của Khách Hàng:</p>
                                        <p>- Nhà thầu, đại lý, nhà cung cấp dịch vụ và các bên thứ ba khác mà 7 Cinema sử dụng để hỗ
                                            trợ hoạt động kinh doanh của 7 Cinema (bao gồm nhưng không giới hạn các công ty đốc tác,
                                            luật sư, ngân hàng, kế toán, tổ chức tài chính, bên ủy thác và các nhà cung cấp dịch vụ là bên thứ
                                            ba khác cung cấp dịch vụ quản lý, viễn thông, máy tính, thanh toán, in ấn, mua lại hoặc các dịch vụ
                                            khác để cho phép chúng tôi thực hiện hoạt động kinh doanh).</p>
                                        <p>- Các đối tác có ký kết thỏa thuận liên kết chăm sóc khách hàng với 7 Cinema. Việc chia sẻ
                                            này giúp 7 Cinema có thể cung cấp cho Khách Hàng các thông tin về các sản phẩm và dịch vụ,
                                            liên quan đến hàng hóa, dịch vụ và vấn đề khác mà Khách Hàng có thể quan tâm. Trong trường hợp các
                                            chi nhánh, công ty thành viên của 7 Cinema và các công ty liên kết của 7 Cinema được
                                            cấp quyền truy cập Thông Tin Khách Hàng, họ sẽ phải tuân thủ nghiêm ngặt các quy định được mô tả
                                            trong Chính Sách Bảo Mật này.</p>
                                        <p>- Các bên thứ ba là đối tác, đại lý của 7 Cinema: 7 Cinema có thể chuyển Thông Tin
                                            Khách Hàng cho các đại lý và nhà thầu phụ để làm phân tích dữ liệu, tiếp thị, quảng cáo và hỗ trợ
                                            dịch vụ khách hàng.</p>
                                        <p>- Các đơn vị kinh doanh khác mà 7 Cinema có kế hoạch sáp nhập hoặc mua lại: Trong trường
                                            hợp này, 7 Cinema sẽ yêu cầu những đơn vị đó tuân thủ nghiêm ngặt theo Chính Sách Bảo Mật
                                            này.</p>
                                        <p>Chính Sách Bảo Mật này không phải là một lời hứa rằng dữ liệu cá nhân của Khách Hàng sẽ không bao
                                            giờ được tiết lộ, ngoại trừ như được mô tả trong Chính Sách Bảo Mật này. Nếu được yêu cầu, chúng tôi
                                            cũng có thể chuyển dữ liệu cá nhân của bạn cho các cơ quan phòng chống tội phạm tài chính, bất kỳ cơ
                                            quan lập pháp, tư pháp hoặc hành pháp nào khác</p>
                                        <p><strong>6. QUYỀN VÀ NGHĨA VỤ CỦA KHÁCH HÀNG</strong></p>
                                        <p>Trừ trường hợp pháp luật có quy định khác, quyền và nghĩa vụ của Khách Hàng đối
                                            với dữ liệu cá nhân được quy định chi tiết như sau:</p>
                                        <p><strong>A. Quyền của Khách Hàng</strong></p>
                                        <p>1. Quyền được biết</p>
                                        <p>Khách Hàng được biết về hoạt động xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy định
                                            khác.</p>
                                        <p>2. Quyền đồng ý</p>
                                        <p>Khách Hàng được đồng ý hoặc không đồng ý cho phép xử lý dữ liệu cá nhân của mình, trừ trường hợp
                                            pháp luật cho phép 7 Cinema xử lý mà không cần có sự đồng ý của Khách Hàng.
                                        </p>
                                        <p>3. Quyền truy cập</p>
                                        <p>Khách Hàng được truy cập để xem, chỉnh sửa hoặc yêu cầu chỉnh sửa dữ liệu cá nhân của mình, trừ
                                            trường hợp luật có quy định khác.</p>
                                        <p>4. Quyền rút lại sự đồng ý</p>
                                        <p>Khách Hàng được quyền rút lại sự đồng ý của mình, trừ trường hợp luật có quy định khác.</p>
                                        <p>5. Quyền xóa dữ liệu</p>
                                        <p>Khách Hàng được xóa hoặc yêu cầu xóa dữ liệu cá nhân của mình, trừ trường hợp luật có quy định
                                            khác.</p>
                                        <p>6. Quyền hạn chế xử lý dữ liệu</p>
                                        <p>a) Khách Hàng được yêu cầu hạn chế xử lý dữ liệu cá nhân của mình, trừ trường hợp luật có quy
                                            định khác;</p>
                                        <p>b) Việc hạn chế xử lý dữ liệu được thực hiện trong 72 giờ sau khi có yêu cầu của Khách Hàng, với
                                            toàn bộ dữ liệu cá nhân mà chủ thể dữ liệu yêu cầu hạn chế, trừ trường hợp luật có quy định khác.
                                        </p>
                                        <p>7. Quyền cung cấp dữ liệu</p>
                                        <p>Khách Hàng được yêu cầu 7 Cinema và các bên liên quan cung cấp cho bản thân dữ liệu cá
                                            nhân của mình, trừ trường hợp luật có quy định khác.</p>
                                        <p>8. Quyền phản đối xử lý dữ liệu</p>
                                        <p>a) Khách Hàng được phản đối 7 Cinema và các bên liên quan nhằm ngăn chặn hoặc hạn chế
                                            tiết lộ dữ liệu cá nhân hoặc sử dụng cho mục đích quảng cáo, tiếp thị, trừ trường hợp luật có quy
                                            định khác;</p>
                                        <p>b) 7 Cinema và các bên liên quan thực hiện yêu cầu của Khách Hàng trong 72 giờ sau khi
                                            nhận được yêu cầu, trừ trường hợp luật có quy định khác.</p>
                                        <p>9. Quyền khiếu nại, tố cáo, khởi kiện</p>
                                        <p>Khách Hàng có quyền khiếu nại, tố cáo hoặc khởi kiện theo quy định của pháp luật.</p>
                                        <p>10. Quyền yêu cầu bồi thường thiệt hại</p>
                                        <p>Khách Hàng có quyền yêu cầu bồi thường thiệt hại theo quy định của pháp luật khi xảy ra vi phạm
                                            quy định về bảo vệ dữ liệu cá nhân của mình, trừ trường hợp các bên có thỏa thuận khác hoặc luật có
                                            quy định khác.</p>
                                        <p>11. Quyền tự bảo vệ</p>
                                        <p>Khách Hàng có quyền tự bảo vệ theo quy định của Bộ luật Dân sự, luật khác có liên quan, hoặc yêu
                                            cầu cơ quan, tổ chức có thẩm quyền thực hiện các phương thức bảo vệ quyền dân sự theo quy định tại
                                            Điều 11 Bộ luật Dân sự.</p>
                                        <p><strong>B. Nghĩa vụ của Khách Hàng</strong></p>
                                        <p>1. Tự bảo vệ dữ liệu cá nhân của mình; yêu cầu các tổ chức, cá nhân khác có liên quan bảo vệ dữ
                                            liệu cá nhân của mình.</p>
                                        <p>2. Tôn trọng, bảo vệ dữ liệu cá nhân của người khác.</p>
                                        <p>3. Cung cấp đầy đủ, chính xác dữ liệu cá nhân khi đồng ý cho phép xử lý dữ liệu cá nhân.</p>
                                        <p>4. Tham gia tuyên truyền, phổ biến kỹ năng bảo vệ dữ liệu cá nhân.</p>
                                        <p>5. Thực hiện quy định của pháp luật về bảo vệ dữ liệu cá nhân và tham gia phòng, chống các hành vi
                                            vi phạm quy định về bảo vệ dữ liệu cá nhân.</p>
                                        <p>6. Nghĩa vụ khác theo quy định pháp luật có liên quan</p>
                                        <p><strong>C. Xử lý dữ liệu cá nhân của trẻ em</strong></p>
                                        <p>7 Cinema hiểu rất rõ tầm quan trọng của việc bảo vệ dữ liệu cá nhân của trẻ em. Trẻ em là
                                            người dưới 16 tuổi theo pháp luật hiện hành tại Việt Nam.</p>
                                        <p>Chúng tôi đã, đang và sẽ luôn áp dụng các quy trình và biện pháp bảo vệ bổ sung, phù hợp để góp
                                            phần đảm bảo an toàn cho dữ liệu cá nhân của trẻ em trên nguyên tắc bảo vệ các quyền và vì lợi ích
                                            tốt nhất của trẻ em.</p>
                                        <p>Trước khi xử lý dữ liệu của trẻ em, chúng tôi cần có sự đồng ý của trẻ em trong trường hợp trẻ em
                                            từ đủ 07 tuổi trở lên (đến dưới 16 tuổi), và có sự đồng ý của cha, mẹ, hoặc người giám hộ theo quy
                                            định pháp luật, trừ khi pháp luật quy định khác đi.</p>
                                        <p>Chúng tôi sẽ thực hiện biện pháp cần thiết, theo yêu cầu của luật, nhằm xác minh tuổi của trẻ em
                                            trước khi xử lý dữ liệu cá nhân của trẻ em. Khách Hàng cần hiểu rằng, nếu cung cấp cho chúng tôi dữ
                                            liệu cá nhân về trẻ em, Khách Hàng phải, và chứng minh được, là cha, mẹ hoặc người giám hộ hợp pháp
                                            của trẻ em hoặc có sự chấp thuận của cha, mẹ, người giám hộ hợp pháp của trẻ em trước khi làm như
                                            vậy.</p>
                                        <p>Chúng tôi sẽ ngừng xử lý dữ liệu cá nhân của trẻ em, xóa hoặc hủy dữ liệu cá nhân của trẻ em trong
                                            các trường hợp luật định, ví dụ như (i) khi cha, mẹ hoặc người giám hộ của trẻ em rút lại sự đồng ý
                                            cho phép xử lý dữ liệu cá nhân của trẻ em hay (ii) theo yêu cầu của cơ quan chức năng có thẩm quyền.
                                        </p>
                                        <p>7 Cinema được quyền miễn trừ mọi hậu quả pháp lý phát sinh (nếu có) trong
                                            trường hợp phát hiện có sự gian dối, không trung thực từ phía Khách Hàng.</p>
                                        <p><strong>D. Xử lý dữ liệu cá nhân của người bị tuyên bố mất tích, đã chết</strong></p>
                                        <p>Trước khi xử lý dữ liệu cá nhân liên quan đến dữ liệu cá nhân của người bị tuyên bố mất tích, người
                                            đã chết, chúng tôi sẽ cần có sự đồng ý của vợ, chồng, hoặc con thành niên của người đó, trừ trường
                                            hợp pháp luật quy định khác đi, ví dụ như những trường hợp chúng tôi được xử lý dữ liệu cá nhân mà
                                            không cần sự đồng ý của chủ thể dữ liệu.</p>
                                        <p><strong>7. HẬU QUẢ, THIỆT HẠI KHÔNG MONG MUỐN CÓ THỂ XẢY RA</strong></p>
                                        <p><strong>A. Khi xử lý yêu cầu về quyền:</strong></p>
                                        <p>Như đã đề cập trước đó, Khách Hàng có những quyền theo luật định và yêu cầu chúng tôi thực hiện
                                            trong khi đang xử lý dữ liệu cá nhân. Lúc này, 7 Cinema có thể cần thời gian hợp lý (tùy
                                            thuộc vào mức độ phức tạp và sự ảnh hưởng của yêu cầu đối với mối quan hệ giữa chúng tôi và Khách
                                            Hàng) để xử lý yêu cầu của Khách Hàng và/hoặc để thông báo cho Khách Hàng biết hậu quả, thiệt hại
                                            không mong muốn có thể xảy ra nếu yêu cầu được thực hiện.</p>
                                        <p>7 Cinema mong Khách Hàng lưu ý rằng:</p>
                                        <p>- Căn cứ vào bản chất và phạm vi yêu cầu, chúng tôi có thể sẽ không thể tiếp tục cung cấp dịch vụ,
                                            và theo yêu cầu của pháp luật tùy từng trường hợp, chúng tôi cũng sẽ thông báo cho Khách Hàng trước
                                            khi hoàn tất việc xử lý yêu cầu.</p>
                                        <p>- Trong một số trường hợp nhất định, chúng tôi không thể chấp nhận yêu cầu của Khách Hàng. Ví dụ
                                            như, nếu yêu cầu chúng tôi xóa dữ liệu cá nhân, giao dịch trong khi về mặt pháp lý, 7 Cinema
                                            có nghĩa vụ phải lưu trữ hồ sơ về cá nhân, hợp đồng, giao dịch đó để tuân thủ và cung cấp theo quy
                                            định pháp luật.</p>
                                        <p>- Hay như trong trường hợp, chúng tôi không thể thực hiện yêu cầu rút lại sự đồng ý của bạn trong
                                            khi 7 Cinema đang thực hiện nghĩa vụ theo hợp đồng giữa chúng tôi với Khách Hàng; hay cần xử
                                            lý ngay dữ liệu cá nhân có liên quan để bảo vệ tính mạng, sức khỏe của chủ thể dữ liệu hoặc người
                                            khác theo luật định.</p>
                                        <p><strong>B. Khi xử lý dữ liệu:</strong></p>
                                        <p>Chúng tôi sử dụng các biện pháp bảo vệ và xử lý dữ liệu cá nhân của Khách Hàng theo quy định của
                                            pháp luật. Trong trường hợp hạn hữu, những hành vi vi phạm khi xử lý dữ liệu cá nhân (như sự mất
                                            mát, phá hủy hoặc thiệt hại do sự cố, sử dụng các biện pháp kỹ thuật) có thể xảy ra, và nó hoàn toàn
                                            không phải những điều mà chúng tôi mong muốn. Trong khuôn khổ pháp luật, chúng tôi sẽ tiến hành
                                            thông báo hành vi vi phạm đến các bên liên quan trong thời hạn luật định. Việc bồi thường thiệt hại,
                                            nếu có, khi xảy ra hành vi vi phạm quy định về bảo vệ dữ liệu cá nhân cũng sẽ được thực hiện theo
                                            thỏa thuận hoặc theo luật định.</p>
                                        <p><strong>8. CHÍNH SÁCH COOKIE</strong></p>
                                        <p>Website của chúng tôi sử dụng cookie để phân biệt Khách Hàng với những người dùng khác. Điều này
                                            giúp chúng tôi cung cấp trải nghiệm tốt khi Khách Hàng sử dụng website và cũng cho phép chúng tôi
                                            cải thiện trang mạng của mình. Cookie là một tệp nhỏ gồm các chữ cái và số mà chúng tôi lưu trữ trên
                                            trình duyệt hoặc ổ cứng máy tính của Khách Hàng. Cookie chứa thông tin được lưu trữ trên ổ cứng máy
                                            tính. Khách Hàng có khả năng chấp nhận hoặc từ chối cookie bằng cách sửa đổi cài đặt trong trình
                                            duyệt. Nếu muốn làm điều này, xin vui lòng xem mục trợ giúp trong trình duyệt đang sử dụng.</p>
                                        <p>Chúng tôi sử dụng các loại cookie sau:</p>
                                        <p>- Cookie cần thiết cho trang mạng. Đây là các cookie cần phải có để phục vụ hoạt động của trang
                                            mạng của chúng tôi. Ví dụ, các cookie cho phép bạn đăng nhập vào trang mạng của chúng tôi một cách
                                            an toàn;</p>
                                        <p>- Cookie phân tích/quản lý hoạt động. Các cookie này cho phép chúng tôi nhận ra và đếm số lượng
                                            người dùng truy cập vào trang mạng của chúng tôi và theo dõi cách người dùng truy cập di chuyển xung
                                            quanh trang mạng của chúng tôi khi họ đang sử dụng nó. Điều này giúp chúng tôi cải thiện cách thức
                                            hoạt động của trang mạng, ví dụ, cải tiến để giúp người dùng tìm kiếm những thứ họ cần một cách dễ
                                            dàng; và</p>
                                        <p>- Cookie chức năng. Chúng được sử dụng để nhận ra Khách Hàng khi quay lại website của chúng tôi.
                                            Điều này cho phép chúng tôi cá nhân hóa nội dung, chào Khách Hàng bằng tên và ghi nhớ sở thích (ví
                                            dụ: lựa chọn ngôn ngữ hoặc khu vực địa lý).</p>
                                        <p>Bằng cách tiếp tục sử dụng trang mạng của chúng tôi, Khách Hàng chấp nhận chúng tôi sử dụng các
                                            loại cookie như đã nêu ở trên.</p>
                                        <p><strong>9. CHÍNH SÁCH HỆ THỐNG GIÁM SÁT (CCTV)</strong></p>
                                        <p>Tại các cụm rạp chiếu phim, phòng giao dịch, nơi phục vụ và chăm sóc khách hàng và các nơi khác
                                            thực hiện một phần hay toàn bộ hoạt động kinh doanh, nơi làm việc của chúng tôi (sau đây gọi tắt là
                                            “Nơi hoạt động”), chúng tôi có thể sẽ sử dụng hệ thống giám sát CCTV (như máy quay phim). Những máy
                                            quay phim CCTV của chúng tôi có thể được đặt tại một vài vị trí công cộng của Nơi hoạt động nhằm ghi
                                            âm, ghi hình theo thời gian thực với mục đích góp phần bảo vệ trật tự, an toàn xã hội; bảo vệ quyền
                                            và lợi ích hợp pháp của Nơi hoạt động, của nhân viên, của chúng tôi và của Khách Hàng theo quy định
                                            pháp luật; phòng, chống, xác định và điều tra những hành vi vi phạm tại Nơi hoạt động.</p>
                                        <p>Bằng cách tiếp tục hoạt động tại Nơi hoạt động của chúng tôi, Khách Hàng chấp nhận để chúng tôi
                                            thực hiện giám sát qua hệ thống CCTV và xử lý dữ liệu theo đúng mục đích đã được đề cập ở trên.</p>
                                        <p><strong>10. CAM KẾT CHUNG</strong></p>
                                        <p>Mọi thông tin cá nhân của Khách Hàng thu thập được từ website sẽ được lưu giữ an toàn, chỉ có Khách
                                            Hàng mới có thể truy cập vào tài khoản cá nhân của mình bằng tên đăng nhập và mật khẩu do Khách Hàng
                                            chọn.</p>
                                        <p>7 Cinema cam kết bảo mật thông tin, không chia sẻ, tiết lộ, chuyển giao Thông Tin Khách
                                            Hàng, thông tin giao dịch trực tuyến trên website trái với Chính Sách Bảo Mật này, trừ các trường
                                            hợp pháp luật cho phép 7 Cinema xử lý thông tin mà không cần đến sự đồng ý của
                                            Khách Hàng.</p>
                                        <p>7 Cinema, bằng nỗ lực tốt nhất của mình, sẽ áp dụng các giải pháp công nghệ để ngăn chặn
                                            các hành vi đánh cắp hoặc tiếp cận thông tin trái phép; sử dụng, thay đổi hoặc phá hủy thông tin
                                            trái phép. Tuy nhiên, 7 Cinema không thể cam kết sẽ ngăn chặn được tất cả các hành vi xâm
                                            phạm, sử dụng thông tin cá nhân trái phép nằm ngoài khả năng kiểm soát của 7 Cinema.
                                            7 Cinema sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với bất kỳ khiếu nại, tranh
                                            chấp hoặc thiệt hại nào phát sinh từ hoặc liên quan đến việc truy cập, xâm nhập, sử dụng thông tin
                                            trái phép như vậy.</p>
                                        <p>Trường hợp máy chủ lưu trữ thông tin bị tấn công dẫn đến mất mát Thông Tin Khách Hàng, gây ảnh
                                            hưởng xấu đến Khách Hàng, 7 Cinema sẽ ngay lập tức thông báo cho Khách Hàng và trình vụ việc
                                            cho cơ quan chức năng điều tra xử lý.</p>
                                        <p>Khách Hàng có nghĩa vụ bảo mật tên đăng ký, mật khẩu và hộp thư điện tử của mình. 7 Cinema
                                            sẽ không chịu trách nhiệm dưới bất kỳ hình thức nào đối với các thiệt hại, tổn thất (nếu có) do
                                            Khách Hàng không tuân thủ quy định bảo mật này.</p>
                                        <p>Khách Hàng tuyệt đối không được có các hành vi sử dụng công cụ, chương trình để can thiệp trái phép
                                            vào hệ thống hay làm thay đổi dữ liệu của 7 Cinema. Trong trường hợp 7 Cinema phát
                                            hiện Khách Hàng có hành vi cố tình giả mạo, gian lận, phát tán thông tin cá nhân trái phép… Cinestar
                                            Cinemas có quyền chuyển thông tin cá nhân của Khách Hàng cho các cơ quan có thẩm quyền để xử lý theo
                                            quy định của pháp luật.</p>
                                        <p><strong>11. THÔNG TIN LIÊN HỆ</strong></p>
                                        <p>Bất kỳ lúc nào Khách Hàng có bất kỳ câu hỏi, cần hỗ trợ, cần giải thích, khiếu nại hoặc quan tâm về
                                            việc Chính Sách Bảo Mật của 7 Cinema hoặc các giao dịch của Khách Hàng với 7 Cinema,
                                            xin vui lòng liên hệ 7 Cinema theo thông tin sau:</p>
                                        <p>CÔNG TY CỔ PHẦN GIẢI TRÍ - PHÁT HÀNH PHIM - Rạp chiếu phim Bảy</p>
                                        <p>Mã số thuế: 0312742744</p>
                                        <p>Địa chỉ: 135 Hai Bà Trưng, phường Bến Nghé, Quận 1, TP.HCM</p>
                                        <p>Hotline: 028.7300 8881</p>
                                        <p>Email: <a tabIndex={-1} href="mailto:mail:cskh@cinestar.com.vn">cskh@cinestar.com.vn</a></p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default RulePage;