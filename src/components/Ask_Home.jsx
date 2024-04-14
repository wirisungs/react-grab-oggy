import { useState } from "react";

const HR = <hr className="border-[#F7F7F7]" ></hr>
function Title({content}){
    return(
        <h1 className="font-bold text-2xl w-full mb-4 mt-10">{content}</h1>
    );
}

export default function Ask_Home(){
    const [hidden,setHidden] = useState(true);

    return(
        <div>
            <div>
                <h1 className="font-bold text-4xl w-full mb-4 mt-10">Câu hỏi thường gặp</h1>
                <Title content={'GrabFood là gì?'}></Title>
                <p className="text-sm">Lunch, Bún Cá Chấm Gốc Đa - Vũ Thạnh for Dinner! We are here to satisfy your hunger with a wide selection of merchant partners in Vietnam. GrabFood là dịch vụ Giao đồ ăn nhanh nhất tại Việt Nam. Chúng tôi đã sắp xếp tất cả các món ăn, nhà hàng và thực phẩm yêu thích của bạn một cách hợp lý để giúp bạn tìm được đồ ăn dễ dàng và nhanh chóng nhất có thể. Tìm và đặt món ăn yêu thích trên khắp Việt Nam - đặt đồ ăn trực tuyến chỉ bằng vài thao tác, từ món Lifted Coffee & Brunch cho bữa sáng, đến Maazi Indian – Nhà Hàng Ấn Độ cho bữa trưa, đến Bún Cá Chấm Gốc Đa – Vũ Thạnh cho bữa tối! Hãy để chúng tôi xua tan cơn đói của bạn nhờ một loạt đối tác bán đồ ăn ở Việt Nam. 
                </p>
                <p>


                </p>
                <button onClick={ () => setHidden(!hidden)} className={!hidden ? 'hidden' : 'p-3 text-[#676767]  border-[1px] rounded-md border-[#676767] font-bold mt-3 mb-3 hover:border-green-grab hover:text-green-grab w-full'}>Read more</button>
            </div>
            <div className={hidden ? 'hidden' : undefined}>
                {HR}
                <Title content={'Làm cách nào để dùng GrabFood?'}></Title>
                <p className="text-sm">Sau đây là cách đơn giản nhất để đặt đồ ăn qua GrabFood khi bạn ở Việt Nam:
</p>
                <ol className="text-sm">
                    <li className="p-3"><span className="font-bold ">1.Tìm kiếm nhà hàng hoặc món ăn yêu thích - </span><span>Nhập địa chỉ của bạn vào trang chủ. Xem các Nhà hàng và điểm ăn uống gần chỗ bạn trong danh sách của GrabFood. Chọn nhà hàng yêu thích, duyệt hết thực đơn và chọn món ăn bạn muốn đặt.</span></li>
                    <li className="p-3"><span className="font-bold">2.Kiểm tra & Thanh toán - </span><span>Sau khi chắc chắn rằng bạn đã đặt đầy đủ các món theo nhu cầu, hãy nhấp vào tab “ORDER NOW” (ĐẶT MÓN NGAY) và nhập địa chỉ giao đồ ăn cuối cùng. Chọn phương thức thanh toán phù hợp nhất với bạn và thanh toán.</span></li>
                    <li className="p-3"><span className="font-bold">3.Giao hàng - </span><span>GrabFood đã thiết kế một hành trình phục vụ khách hàng liền mạch để bạn có thể thưởng thức món ăn một cách trọn vẹn. Chúng tôi sẽ gửi cho bạn email và tin nhắn SMS tức thời xác nhận đơn đặt hàng của bạn và thời gian giao hàng dự kiến. Sau đó chúng tôi sẽ giao ngay đồ ăn cho bạn.
</span></li>

                </ol>
                {HR}
                <Title content={'GrabFood có cung cấp dịch vụ giao đồ ăn 24x7 không?'}></Title>
                <p className="text-sm">Chúng tôi chỉ biết một điều duy nhất, đó là "đồ ăn", vậy nên tất nhiên chúng tôi cung cấp dịch vụ này rồi. Xin lưu ý, mặc dù chúng tôi là đối tác giao đồ ăn phục vụ 24x7, nhưng một số nhà hàng trong danh mục của chúng tôi có thể hạn chế giao đồ ăn khuya hoặc có thể không phục vụ đối với các đơn đặt hàng. Tuy nhiên, chúng tôi đã liệt kê danh sách những nhà hàng phục vụ nhu cầu ăn khuya của bạn trong mục Late Night Delivery (Giao hàng khuya).</p>
                <Title content={'GrabFood có chấp nhận tiền mặt không?'}></Title>
                <p className="text-sm">Tất nhiên là có! GrabFood chấp nhận mọi hình thức thanh toán cho dịch vụ giao đồ ăn, bao gồm cả tiền mặt khi giao hàng tại Việt Nam.</p>
                <Title content={'Tôi có thể thanh toán trực tuyến trên GrabFood cho đơn hàng của mình không?'}></Title>
                <p className="text-sm">GrabFood chấp nhận nhiều hình thức thanh toán cho các đơn đặt đồ ăn trực tuyến, bao gồm cả thanh toán trực tuyến tại Việt Nam bằng thẻ tín dụng, thẻ ghi nợ, PayPal hoặc trả tiền lúc nhận hàng. Hãy nhớ sử dụng Moca để tích điểm thưởng mà bạn có thể sử dụng để được giảm giá cho đơn hàng tiếp theo và cho các dịch vụ khác của Grab nhé.</p>
                <Title content={'Tôi có thể đặt đồ ăn trên GrabFood cho người khác không?'}></Title>
                <p className="text-sm">Tất nhiên rồi, hãy chăm sóc những người thân yêu của mình bằng cách gửi những món ăn mà họ yêu thích đến tận nhà. Bạn chỉ cần cập nhật địa chỉ giao hàng và tên người nhận trước khi đặt đơn hàng của bạn.</p>
                <Title content={'GrabFood tính phí giao đồ ăn như thế nào?'}></Title>
                <p className="text-sm">Phí giao hàng của chúng tôi phụ thuộc vào nhiều yếu tố hoạt động như khoảng cách từ vị trí của bạn đến nhà hàng. Bạn có thể kiểm tra phí giao hàng chính xác cần phải trả trước khi thanh toán tại mục thanh toán trên ứng dụng Grab. Ngoài ra còn có phần “Free Delivery” (Giao hàng miễn phí) liệt kê các nhà hàng gần chỗ bạn mà không tính phí giao hàng.</p>
                <Title content={'GrabFood có áp dụng giá trị đơn hàng tối thiểu không?'}></Title>
                <p className="text-sm">Có! Nhưng bạn có thể trả số tiền chênh lệch nếu giá trị đơn hàng của bạn nhỏ hơn số tiền đặt hàng tối thiểu.</p>
            </div>
        </div>
    );
}