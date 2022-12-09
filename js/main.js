// Data

const housesForSale = [
  {
    descriptions: [
      "Chính sách mua lại, cam kết lợi nhuận lên tới 35% của dự án Thới Lai chỉ kéo dài đến 31/12/2022 nhé Quý khách ơi.\nĐừng bỏ qua cơ hội đầu tư cuối năm với sản phẩm có đầy đủ điều kiện “sinh lời toàn diện” như thế này.  \n Ngay lõi trung tâm của Thị trấn Thới Lai, kết nối giao thông và tiện ích hoàn hảo.\n Hiện hữu 4 khu chợ kinh doanh đông đúc, mua vào là kinh doanh ngay.\n Ngân hàng cho vay lên đến 70% giá trị, không hết room, bàn giao nhà ngay.\n Chiết khấu và quà tặng Tết cực khủng.",
    ],
    owner: "Nguyễn Thị Như Quỳnh",
    images: [
      "./images/products/forSale/1/1.jpg",
      "./images/products/forSale/1/2.jpg",
      "./images/products/forSale/1/3.jpg",
    ],
    title: "Sở hữu ngay nhà mặt tiền với giá siêu hấp dẫn",
    address:
      "Đường Tỉnh lộ 922, Thị trấn Thới Lai, Huyện Thới Lai, TP. Cần Thơ",
    totalPrice: "3.93 tỷ",
    pricePerSquareMetre: "13.31 triệu/m²",
    area: "295.02 m²",
    length: "25m",
    width: "11.8m",
    direction: "Đông",
    bedrooms: "2",
    bathrooms: "1",
    id: 1,
  },
  {
    descriptions: [
      "Nhân dịp xuân Qúy Mão 2023, mua nhà đón xuân  với giá ưu đãi 30%\nƯU ĐÃI CỰC HẤP DẪN KHI KHÁCH HÀNG THANH TOÁN BẰNG TIỀN MẶT TRONG THÁNG 12.\n Thanh toán 30% chiết khấu 8%\n Thanh toán 50% chiết khấu 9%\n Thanh toán 70% chiết khấu 10%\nDiện Tích : 6,3m x 11m & 4,5m x 15,5m\nDTSD : 100m2 & 112m2 \nSân trước: 2,5m   \nSân sau: 2M \n Lộ giới : 10m & 16m\n Pháp Lý : Sổ Hồng Hoàn Công \n Thiết Kế : 03 Phòng Ngủ, 2 Toilet, Phòng Khách, Phòng Thờ, Bếp, Ban Công.",
      " Vị Trí: Gần Trường Cao Đẵng FPT, Cách Cầu Trần Hoàng Na 2Km, thuộc Quận Cái Răng, Cần Thơ.  Chương trình áp dụng từ ngày 01/12/2022 đến 30/12/2022",
    ],
    owner: "Hoàng Quân",
    images: [
      "./images/products/forSale/2/1.jpg",
      "./images/products/forSale/2/2.jpg",
      "./images/products/forSale/2/3.jpg",
    ],
    title: "Nhân dịp xuân Qúy Mão 2023, mua nhà đón xuân với giá ưu đãi 30%",
    address:
      "Đường Trương Vĩnh Nguyên, Phường Thường Thạnh, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "2.18 tỷ",
    pricePerSquareMetre: "31.2 triệu/m²",
    area: "70 m²",
    length: "14m",
    width: "5m",
    direction: "Bắc",
    bedrooms: "3",
    bathrooms: "2",
    id: 2,
  },
  {
    descriptions: [
      "- Giá tốt cho một sản phẩm BĐS tại Cần Thơ (chiết khấu lên đến 13%) ",
      "- Tặng sổ tiết kiệm trị giá 120 triệu đồng",
      "- Thông tin chi tiết",
      "+ Vị trí: Lê Hồng Nhi, phường Ba Láng, Cái Răng, TPCT. ",
      "+ Diện tích: 74m2 (4x18,5m). ",
      "+ Lộ giới: 9m. Hướng: Tây Bắc. ",
      "+ Pháp lý: Sổ hồng sở hữu lâu dài. ",
      "+ Nền có sẵn móng cọc kiên cố 1 trệt 2 lầu. ",
      "+ Giá 30 triệu/m2",
      "- Liên hệ ngay để đến xem sản phẩm ",
      "AN PHÚ CẦN THƠ - CƯ AN LÀNH - ĐỊA PHÚ QUÝ",
      "Văn phòng Đất Xanh Miền Bắc chi nhánh Cần Thơ - Đơn vị phân phối dự án",
      "Địa chỉ: 146E Trần Văn Hoài, Xuân Khánh, Ninh Kiều, Cần Thơ",
    ],
    owner: "Trần Hiếu Nghĩa",
    images: [
      "./images/products/forSale/3/1.jpg",
      "./images/products/forSale/3/2.jpg",
      "./images/products/forSale/3/3.jpg",
    ],
    title: "Đất nền Cần Thơ, giá chiết khấu tốt, tiện ích xung quanh đầy đủ",
    address: "Đường Lê Hồng Nhi, Phường Ba Láng, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "2.2 tỷ",
    pricePerSquareMetre: "29.73 triệu/m²",
    area: "74 m²",
    length: "18 m",
    width: "4 m",
    direction: "Tây",
    bedrooms: "2",
    bathrooms: "1",
    id: 3,
  },
  {
    descriptions: [
      "Chung cư thương mại An Phú CenterPoint Cái Răng",
      "Diện tích thông thủy: 122m2",
      "Hướng: Tây Bắc",
      "Vị Trí: Khe view vườn hoa",
      "Tiện ích nội khu: ",
      "- Công viên cây xanh",
      "- Khu vui chơi giải trí",
      "- Siêu thị",
      "- Nhà hàng",
      "Tiện ích ngoại khu:",
      "- Trường học các cấp",
      "- Bến xe trung tâm",
      "- Bệnh viện",
      "- Ngân hàng",
      "- Cây săng",
      "- Chợ",
      "- Khu du lịch",
      "- Siêu thị",
      "=> An Phú CenterPoint đường Lê Hồng Nhi, Phường Thường Thạnh, Quận Cái Răng, Thành phố Cần Thơ",
    ],
    owner: "Nguyễn Hiền",
    images: [
      "./images/products/forSale/4/1.jpg",
      "./images/products/forSale/4/2.jpg",
      "./images/products/forSale/4/3.jpg",
    ],
    title: "Shophouse khối đế trung tâm quận Cái Răng, An Phú CenterPoint",
    address: "Phường Ba Láng, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "2.74 tỷ",
    pricePerSquareMetre: "26.1 triệu/m²",
    area: "105 m²",
    length: "14",
    width: "7.5m",
    direction: "Đ.Bắc",
    bedrooms: "2",
    bathrooms: "2",
    id: 4,
  },
  {
    descriptions: [
      "‼️Nền D11- An Phú Cái Răng\nDiện tích: (4 x18m )\nLộ giới: 15m\nHướng : Tây Bắc\nPháp lý: Sổ hồng sở hữu lâu dài\nNền có sẵn móng cọc kiên cố 1 trệt 2 lầu,\nTặng bản vẽ thiết kế xây dựng.\nGiá : 2,2 tỷ\nChiết khấu lên đến 12%\n————————\nHưởng trọn tiện ích nội khu, ngoại khu của dự án An Phú Cần Thơ:\nKhu đô thị compound đầu tiên tại Miền Tây, có đơn vị quản lý, an ninh 24/7\nKhu vui chơi trẻ em, công viên cây xanh thoáng mát.\nNhà hàng, siêu thị 24h ngay bên trong dự án\nKế bên trường mầm non, cấp 2 Lê Bình, công an quận Cái Răng, Ủy ban quận...\nBán kính 2km đầy đủ hệ thống ngân hàng, chợ, siêu thị, bệnh viện, trường học các cấp...\n——————————————————",
      "KDC An Phú Center Point\n📌Địa chỉ : Đường Lê Hồng Nhi, Ba Láng, Cái Răng, TP. Cần Thơ.\n📕 Pháp lí: sổ hồng trao tay\n🔰 Hình thức thanh toán linh hoạt, lãi suất ưu đãi.\nLiên hệ sớm nhất để nhận được mức giá tốt nhất và nhiều chế độ ưu đãi.",
    ],
    owner: "Huỳnh Quốc Huy",
    images: [
      "./images/products/forSale/5/1.jpg",
      "./images/products/forSale/5/2.jpg",
      "./images/products/forSale/5/3.jpg",
    ],
    title:
      "Bán đất nền dự án tại đường Lê Hồng Nhi, Cái Răng, Cần Thơ diện tích 72m2 giá 2,2 tỉ",
    address: "Đường Lê Hồng Nhi, Phường Ba Láng, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "2.2 tỷ",
    pricePerSquareMetre: "30.56 triệu/m²",
    area: "72 m²",
    length: "18 m",
    width: "4 m",
    direction: "T.Bắc",
    bedrooms: "--",
    bathrooms: "--",
    id: 5,
  },
  {
    descriptions: [
      "Dự án khu đô thị chợ Thới Lai mới",
      'SỰ KIỆN TRI ÂN "MUA NHÀ THỚI LAI - QUÀ TẾT TRAO TAY" sẽ diễn ra vào 24/12/2022 với nhiều phần quà vô cùng hấp dẫn (điện thoại, xe SH, TV,...) đang chờ đón',
      "1. Vị trí: Thị trấn Thới Lai, huyện Thới Lai, Cần Thơ",
      "2. Thông tin sản phẩm: \n+ 1 trệt 3 lầu \n+ DT đất: 92.56m2 I DTSD: 292.28m2\n+ Giá bán: 5.501.400.000 VND\n+ Đường 12m (3-6-3)",
      "3. Dự án đã được hoàn thành và đưa vào sử dụng, chợ đông đúc tấp nập, tỉ lệ lấp dân cao.",
      "4. Có 4 khu chợ hiện hữu với đầy đủ các mặt hàng từ quần áo, hàng hóa, thực phẩm.",
      "5. Chủ đầu tư hỗ trợ bảo hành nhà lên đến 24 tháng kể từ ngày bàn giao. ",
      "6. Đang khảo sát để xây dựng siêu thị GO và cầu bắt qua khu hành chính. Giá nhà sẽ tăng chóng mặt trong thời gian sắp tới.",
      "7. Chính sách thanh toán vô cùng có lợi cho khách, mua 1 căn cũng được chiết khấu lên đến 10%.",
      "8. Chủ đầu từ cam kết lợi nhuận mua lại đến 35%",
      "9. Hỗ trợ thanh toán theo khả năng ít nhất 10 20% giá trị.",
      "10. Ngân hàng Seabank hỗ trợ vay 70%.\n+  Trường hợp: Hồ sơ đạt chuẩn cho vay + thanh toán đủ 20% (nhưng ngân hàng chưa kịp giải ngân). Chủ đầu tư hỗ trợ nhận nhà.",
    ],
    owner: "Danh Thu Thao",
    images: [
      "./images/products/forSale/6/1.jpg",
      "./images/products/forSale/6/2.jpg",
      "./images/products/forSale/6/3.jpg",
    ],
    title:
      "Bán nhà Thới Lai, căn góc 1 trệt 3 lầu, gần kênh sẻo xào và đối diện chợ",
    address:
      "Đường Tỉnh lộ 922, Thị trấn Thới Lai, Huyện Thới Lai, TP. Cần Thơ",
    totalPrice: "5.5 tỷ",
    pricePerSquareMetre: "18.84 triệu/m²",
    area: "292 m²",
    length: "5 m",
    width: "17 m",
    direction: "T.Bắc",
    bedrooms: "4",
    bathrooms: "4",
    id: 6,
  },
  {
    descriptions: [
      "CHUNG CƯ NHÀ Ở XÃ HỘI (NOXH)",
      "Cái Răng: 16tr/m2\nNinh Kiều: 20tr/2",
      "Gần Bến xe, siêu thị, trung tâm thương mại, cách quận Ninh Kiều chỉ 5 10p chạy xe.\nNgân hàng chính sách hỗ trợ vay lên đến 70% ,  lãi suất ổn định 3.5%/năm với thời hạn lên đến 20 năm.\nBàn giao nhà hoàn thiện cơ bản: Ngăn phòng, tô trát, ốp gạch, đóng trần, sơn, lắp dặt cửa, đi điện, nước.",
      "Điều kiện mua nhà \nTạm trú/thường trú tại Cần Thơ\nChưa sỡ hữu nhà tại Cần Thơ",
      "Vì đây là dự án được nhà nước hỗ trợ dành cho một số đối tượng khách hàng nhất định. Quý anh chị cần phải làm hồ sơ để xét duyệt (ít nhất 3 tháng), sau khi sở xây dựng xét duyệt thành công mới có đủ điều kiện để mua.",
      "Quý anh/chị liên hệ em để được hỗ trợ làm hồ sơ xét duyệt",
    ],
    owner: "Danh Thu Thao",
    images: [
      "./images/products/forSale/7/1.jpg",
      "./images/products/forSale/7/2.jpg",
      "./images/products/forSale/7/3.jpg",
    ],
    title: "Chung cư nhà ở xã hội với số vốn chỉ từ 250 triệu",
    address:
      "Đường Trương Vĩnh Nguyên, Phường Thường Thạnh, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "752 triệu",
    pricePerSquareMetre: "16 triệu/m²",
    area: "47 m²",
    length: "--",
    width: "--",
    direction: "T.Bắc",
    bedrooms: "2",
    bathrooms: "2",
    id: 7,
  },
  {
    descriptions: [
      "+ Vị trí: Lê Hồng Nhi, phường Ba Láng, Cái Răng, TPCT",
      "+ Diện tích: 73.5m2 (4x18.5m)",
      "+ Lộ giới: 9m",
      "+ Hướng: Tây Bắc",
      "+ Pháp lý : Sổ hồng sở hữu lâu dài",
      "+ Nền có sẵn móng cọc kiên cố",
      "+ Tặng bản vẽ thiết kế xây dựng 1 trệt 2 lầu",
      "+ Giá: 2,6 tỷ",
      "· Hưởng trọn tiện ích nội khu, ngoại khu của dự án An Phú Cần Thơ:  Khu đô thị compoun đầu tiên tại Miền Tây, có đơn vị quản lý, an ninh 24/7",
      "·  Khu vui chơi trẻ em, công viên cây xanh thoáng mát.",
      "· Nhà hàng, siêu thị 24h ngay bên trong dự án",
      "· Kế bên trường mầm non, cấp 2 Lê Bình, công an quận Cái Răng, Ủy ban quận...",
      "· Bán kính 2km đầy đủ hệ thống ngân hàng, chợ, siêu thị, bệnh viện, trường học các cấp,...",
    ],
    owner: "Thiện Phạm",
    images: [
      "./images/products/forSale/8/1.jpg",
      "./images/products/forSale/8/2.jpg",
      "./images/products/forSale/8/3.jpg",
    ],
    title: "Bán nền tặng móng cọc và sổ tiết kiệm, chiết khấu cao",
    address: "Phường Ba Láng, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "2.2 tỷ",
    pricePerSquareMetre: "29.73 triệu/m²",
    area: "74 m²",
    length: "18.5 m",
    width: "4 m",
    direction: "T.Bắc",
    bedrooms: "--",
    bathrooms: "--",
    id: 8,
  },
  {
    descriptions: [
      "Mã căn: A602",
      "Diện tích: 61m2",
      "Kết cấu: 1 phòng khách, 2 phòng ngủ, 1 wc, 1 bếp, 1 lô gia",
      "Hướng: Đông Nam    ",
      "Giá 1.495.083.604 VNĐ",
      "-----------------------------------------------------------------",
      "Vị trí: Lê Hồng Nhi, Ba Láng, Cái Răng, Cần Thơ",
      "Tiện ích nội khu: siêu thị mini, công viên, bãi đỗ xe máy, xe ô tô,…",
      "Tiện ích ngoại khu: bán kính 2km phục vụ đầy đủ nhu cầu sinh hoạt như Winmart, Bách Hóa Xanh, cafe, trường THCS Lê Bình, trường mẫu giáo, chợ Cái Răng,…",
      "---------------------------------------------------------------------",
      "AN PHÚ CENTERPOINT - CƯ AN LÀNH - ĐỊA PHÚ QUÝ ",
      "Địa chỉ văn phòng: 146E Trần Văn Hoài, Xuân Khánh, Ninh Kiều, Cần Thơ",
    ],
    owner: "Trần Hiếu Nghĩa",
    images: [
      "./images/products/forSale/9/1.jpg",
      "./images/products/forSale/9/2.jpg",
      "./images/products/forSale/9/3.jpg",
    ],
    title: "Trả trước 30% sở hữu căn chung cư nhà ở xã hội tại Cần Thơ",
    address: "Đường Lê Hồng Nhi, Phường Ba Láng, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "1.6 tỷ",
    pricePerSquareMetre: "26.23 triệu/m²",
    area: "61 m²",
    length: "--",
    width: "--",
    direction: "Nam",
    bedrooms: "2",
    bathrooms: "1",
    id: 9,
  },
  {
    descriptions: [
      "Nội dung chi tiết:",
      "Vị trí: Lê Hồng Nhi, phường Ba Láng, Cái Răng, TPCT",
      "Diện tích: 73.5m2 (4x18.5m)",
      "Lộ giới: 9m",
      "Hướng: Tây Bắc",
      "Pháp lý : Sổ hồng sở hữu lâu dài",
      "Nền có sẵn móng cọc kiên cố 1 trệt 2 lầu",
      "Tặng bản vẽ thiết kế xây dựng",
      "Giá: 2,2 tỷ ",
      "Hưởng trọn tiện ích nội khu, ngoại khu của dự án An Phú Cần Thơ: ",
      "Khu đô thị compoun đầu tiên tại Miền Tây, có đơn vị quản lý, an ninh 24/7",
      "Khu vui chơi trẻ em, công viên cây xanh thoáng mát.",
      "Nhà hàng, siêu thị 24h ngay bên trong dự án",
      "Kế bên trường mầm non, cấp 2 Lê Bình, công an quận Cái Răng, Ủy ban quận...",
      "Bán kính 2km đầy đủ hệ thống ngân hàng, chợ, siêu thị, bệnh viện, trường học các cấp...",
      "Liên hệ đặt lịch đến xem sản phẩm ngay",
      "AN PHÚ CENTER POINT - CƯ AN LÀNH - ĐỊA PHÚ QUÝ",
      "Văn phòng Cty Đất Xanh Miền Bắc Chi nhánh Cần Thơ. ",
      "Địa chỉ liên hệ: 146E Trần Văn Hoài, phường Xuân Khánh, quận Ninh Kiều, thành phố Cần T",
    ],
    owner: "Trần Hiếu Nghĩa",
    images: [
      "./images/products/forSale/10/1.jpg",
      "./images/products/forSale/10/2.jpg",
      "./images/products/forSale/10/3.jpg",
    ],
    title: "Bán đất nền khu An Phú, Cần Thơ, đầy đủ tiện ích lân cận",
    address: "Đường Lê Hồng Nhi, Phường Ba Láng, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "2.2 tỷ",
    pricePerSquareMetre: "29.73 triệu/m²",
    area: "74 m²",
    length: "18 m",
    width: "3.98 m",
    direction: "Tây",
    bedrooms: "2",
    bathrooms: "1",
    id: 10,
  },
  {
    descriptions: [
      "🔥🔥🔥NHÀ Ở XÃ HỘI CẦN THƠ🔥🔥🔥",
      "📌Điều kiện\n- Hộ khẩu/ tạm trú Cần Thơ\n- Chưa có nhà thuộc sở hữu\n- Thu nhập thấp (dưới 11 triệu)\n-----------------------\n✅Diện tích dao động từ 46-70m2\n✅Giá dự kiến: 15-20 triệu\n✅Khu vực: Cái Răng, Ninh Kiều",
    ],
    owner: "Hồng Gấm",
    images: [
      "./images/products/forSale/11/1.jpg",
      "./images/products/forSale/11/2.jpg",
      "./images/products/forSale/11/3.jpg",
    ],
    title: "Nhà ở xã hội Cần Thơ, diện tích dao động từ 46-70m2",
    address: "Đường Nguyễn Văn Cừ, Phường Cái Khế, Quận Ninh Kiều, TP. Cần Thơ",
    totalPrice: "1 tỷ",
    pricePerSquareMetre: "20 triệu/m²",
    area: "50 m²",
    length: "--",
    width: "--",
    direction: "Bắc",
    bedrooms: "2",
    bathrooms: "2",
    id: 11,
  },
  {
    descriptions: [
      "- Khu đất có các tiện ích công cộng (chỉ cách vài bước chân), xung quanh là rất nhiều doanh nghiệp và nhà hàng, gần trường học các cấp",
      "- Giá tốt cho một sản phẩm BĐS tại Cần Thơ (chiết khấu lên đến 13%) ",
      "- Thông tin chi tiết",
      "+ Vị trí: Lê Hồng Nhi, phường Ba Láng, Cái Răng, TPCT. ",
      "+ Diện tích: 74m2 (4x18,5m). ",
      "+ Lộ giới: 9m. Hướng: Tây Bắc. ",
      "+ Pháp lý: Sổ hồng sở hữu lâu dài. ",
      "+ Nền có sẵn móng cọc kiên cố 1 trệt 2 lầu. Tặng bản vẽ thiết kế xây dựng. Giá: 2,2 tỷ ",
      "- Liên hệ ngay để đến xem sản phẩm ",
      "AN PHÚ CẦN THƠ - CƯ AN LÀNH - ĐỊA PHÚ QUÝ",
      "Văn phòng Đất Xanh Miền Bắc chi nhánh Cần Thơ - Đơn vị phân phối dự án",
      "Địa chỉ: 146E Trần Văn Hoài, Xuân Khánh, Ninh Kiều, Cần Thơ",
    ],
    owner: "Trần Hiếu Nghĩa",
    images: [
      "./images/products/forSale/12/1.jpg",
      "./images/products/forSale/12/2.jpg",
      "./images/products/forSale/12/3.jpg",
    ],
    title:
      "Khu đất nền tại Cái Răng TP Cần Thơ chỉ cách giao thông công cộng vài phút",
    address: "Lê Hồng Nhi, Phường Ba Láng, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "2.2 tỷ",
    pricePerSquareMetre: "29.73 triệu/m²",
    area: "74 m²",
    length: "18.5 m",
    width: "4 m",
    direction: "Đông",
    bedrooms: "3",
    bathrooms: "2",
    id: 12,
  },
  {
    descriptions: [
      "BÁN NHÀ MẶT TIỀN CHỢ THỚI LAI - ĐƯỜNG TỈNH 922",
      "Diện tích: 5x22\nDTSD: 152 m2\nLộ giới: 13m\nTrả trước chỉ từ 340 triệu\nPháp lí: Sở hữu lâu dài, sổ hồng từng căn\nNhà mặt tiền chợ 100% nên rất thuận tiện kinh doanh mua bán tăng thu nhập\nĐẶC BIỆT KHI MUA CHỢ THỚI LAI CÓ CƠ HỘI NHẬN NGAY XE SH MODE VÀ NHIỀU PHẦN QUÀ GIÁ TRỊ KHÁC",
      "Liên hệ để biết thêm chi tiết",
    ],
    owner: "Hồng Gấm",
    images: [
      "./images/products/forSale/13/1.jpg",
      "./images/products/forSale/13/2.png",
      "./images/products/forSale/13/3.jpg",
    ],
    title:
      "Bán nhà Thới Lai, mặt tiền chợ 100%, sổ hồng từng căn, sở hữu lâu dài",
    address:
      "Đường Tỉnh lộ 922, Thị trấn Thới Lai, Huyện Thới Lai, TP. Cần Thơ",
    totalPrice: "3.39 tỷ",
    pricePerSquareMetre: "22.28 triệu/m²",
    area: "152 m²",
    length: "22 m",
    width: "5 m",
    direction: "Đ.Nam",
    bedrooms: "2",
    bathrooms: "2",
    id: 13,
  },
  {
    descriptions: [
      "Dự án khu đô thị chợ Thới Lai mới",
      "1. Vị trí: Thị trấn Thới Lai, huyện Thới Lai, Cần Thơ",
      "2. Thông tin sản phẩm: \n+ 1 trệt 3 lầu \n+ DT đất: 92.56m2 I DTSD: 292.28m2\n+ Giá bán: 5.501.400.000 VND\n+ Đường 11m (3-6-3)",
      "3. Dự án đã được hoàn thành và đưa vào sử dụng, chợ đông đúc tấp nập, tỉ lệ lấp dân cao.",
      "4. Có 4 khu chợ hiện hữu với đầy đủ các mặt hàng từ quần áo, hàng hóa, thực phẩm.",
      "5. Chủ đầu tư hỗ trợ bảo hành nhà lên đến 24 tháng kể từ ngày bàn giao. ",
      "6. Đang khảo sát để xây dựng siêu thị GO và cầu bắt qua khu hành chính. Giá nhà sẽ tăng chóng mặt trong thời gian sắp tới.",
      "7. Chính sách thanh toán vô cùng có lợi cho khách, mua 1 căn cũng được chiết khấu lên đến 10%.",
      "8. Chủ đầu từ cam kết lợi nhuận mua lại đến 35%",
      "9. Hỗ trợ thanh toán theo khả năng ít nhất 10 20% giá trị.",
      "10. Ngân hàng Seabank hỗ trợ vay 70%.\n+  Trường hợp: Hồ sơ đạt chuẩn cho vay + thanh toán đủ 20% (nhưng ngân hàng chưa kịp giải ngân). Chủ đầu tư hỗ trợ nhận nhà .",
    ],
    owner: "Danh Thu Thao",
    images: [
      "./images/products/forSale/14/1.jpg",
      "./images/products/forSale/14/2.jpg",
      "./images/products/forSale/14/3.jpg",
    ],
    title:
      "Trả trước 550 triệu nhận ngay nhà Thới Lai, căn góc 1 trệt 3 lầu đối diện chợ",
    address:
      "Đường Tỉnh lộ 922, Thị trấn Thới Lai, Huyện Thới Lai, TP. Cần Thơ",
    totalPrice: "5.5 tỷ",
    pricePerSquareMetre: "18.84 triệu/m²",
    area: "292 m²",
    length: "5 m",
    width: "17 m",
    direction: "T.Bắc",
    bedrooms: "--",
    bathrooms: "4",
    id: 14,
  },
  {
    descriptions: [
      "🔥🔥🔥KHÁCH HÀNG CÓ TIỀN NHÀN RỖI MUỐN ĐẦU TƯ 🔥🔥🔥",
      "📌Nhà mặt tiền chợ Thới Lai là lựa chọn để đầu tư\n🔸Diện tích: 5x22\n🔸Hỗ trợ trả trước chỉ từ 340 triệu \n📌Đường rộng xe 4 bánh chạy vào được => Dễ dàng di chuyển cũng như vận chuyển hàng hóa\n📌Chủ đầu tư cam kết mua lại sau 12 tháng",
    ],
    owner: "Hồng Gấm",
    images: [
      "./images/products/forSale/15/1.png",
      "./images/products/forSale/15/2.jpg",
      "./images/products/forSale/15/3.jpg",
    ],
    title: "Bán nhà mặt tiền chợ 150m2, đường tỉnh 922",
    address:
      "Đường Tỉnh lộ 922, Thị trấn Thới Lai, Huyện Thới Lai, TP. Cần Thơ",
    totalPrice: "3.36 tỷ",
    pricePerSquareMetre: "22.37 triệu/m²",
    area: "150 m²",
    length: "22 m",
    width: "5 m",
    direction: "Đ.Nam",
    bedrooms: "3",
    bathrooms: "2",
    id: 15,
  },
  {
    descriptions: [
      "Diện tích: 61m2",
      "Kết cấu: 2 Phòng Ngủ, 1Wc, 1 phòng khách, bếp, lô gia.",
      "Khu vực an ninh có bảo vệ 24/24",
      "Hướng Đông Nam, view TP, sông Cần Thơ.",
      "Di chuyển qua Ninh Kiều 5 phút",
      "Tiện ích gần Chợ, trường đại học Tây Đô, Bến xe Cần Thơ, Siêu Thị Go, Bách Hoá Xanh, Vinmart",
      "Giá 1,6tỷ ",
      "Liên hệ đi xem ngay",
      "AN PHÚ CENTERPOINT - CƯ AN LÀNH - ĐỊA PHÚ QUÝ",
      "Văn phòng CTY Đất Xanh Miền Bắc Chi nhánh Cần Thơ. ",
      "Địa chỉ liên hệ: 146E Trần Văn Hoài, phường Xuân Khánh, quận Ninh Kiều, thành phố Cần Thơ",
    ],
    owner: "Trần Hiếu Nghĩa",
    images: [
      "./images/products/forSale/16/1.png",
      "./images/products/forSale/16/2.jpg",
      "./images/products/forSale/16/3.png",
    ],
    title: "Còn một căn hộ chung cư tại An Phú Center Point",
    address: "Đường Lê Hồng Nhi, Phường Ba Láng, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "1.6 tỷ",
    pricePerSquareMetre: "26.23 triệu/m²",
    area: "61 m²",
    length: "--",
    width: "--",
    direction: "Nam",
    bedrooms: "2",
    bathrooms: "1",
    id: 16,
  },
  {
    descriptions: [
      "Thông tin chi tiết:",
      "Vị trí: Lê Hồng Nhi, phường Ba Láng, Cái Răng, TPCT",
      "Diện tích: 73.5m2 (4x18.5m)",
      "Lộ giới: 9m",
      "Hướng: Tây Bắc",
      "Pháp lý : Sổ hồng sở hữu lâu dài",
      "Nền có sẵn móng cọc kiên cố 1 trệt 2 lầu",
      "Tặng bản vẽ thiết kế xây dựng",
      "Giá: 2,2 tỷ ",
    ],
    owner: "Trần Hiếu Nghĩa",
    images: [
      "./images/products/forSale/17/1.png",
      "./images/products/forSale/17/2.jpg",
      "./images/products/forSale/17/3.jpg",
    ],
    title: "Đất nền khu dân cư an ninh yên tĩnh tại Cần Thơ",
    address: "Lê Hồng Nhi, Phường Ba Láng, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "2.2 tỷ",
    pricePerSquareMetre: "29.73 triệu/m²",
    area: "74 m²",
    length: "18.5 m",
    width: "4 m",
    direction: "Bắc",
    bedrooms: "--",
    bathrooms: "--",
    id: 17,
  },
  {
    descriptions: [
      "Đất nền Khu đô Thị An Phú Cái Răng- Cần Thơ",
      "Diện tích: 74m2 (4 x 18,5m)",
      "Lộ giới: 9m, Cơ sở hạ tầng hoàn thiện 100% và đã đưa vào sử dụng.",
      "Hướng: Đông bắc, Lộ 9m",
      "Pháp lý minh bạch, sở hữu lâu dài, sổ đỏ từng lô",
      "Vị trí: Lê Hồng Nhi, phường Ba Láng, Cái Răng, TPCT. \nDiện tích: 74m2 (4x18,5m). \nNền có sẵn móng, thiết kế 1 trệt 2 lầu",
      "Tặng bản vẽ thiết kế xây dựng",
      "Giá: 2,2 tỷ \nTiện ích nội khu, ngoại khu của dự án An Phú Cần Thơ: ",
      "Khu đô thị compoun đầu tiên tại Miền Tây, có đơn vị quản lý, an ninh 24/7",
      "Khu vui chơi trẻ em, công viên cây xanh thoáng mát.",
      "Nhà hàng, siêu thị 24h ngay bên trong dự án",
      "Kế bên trường mầm non, cấp 2 Lê Bình, công an quận Cái Răng, Ủy ban quận...",
      "Bán kính 2km đầy đủ hệ thống ngân hàng, chợ, siêu thị, bệnh viện, trường học các cấp...",
    ],
    owner: "Trần Văn Thành",
    images: [
      "./images/products/forSale/18/1.jpg",
      "./images/products/forSale/18/2.jpg",
      "./images/products/forSale/18/3.jpg",
    ],
    title: "Đất nền khu đô Thị An Phú Cái Răng, Cần Thơ",
    address: "Phường Ba Láng, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "2.2 tỷ",
    pricePerSquareMetre: "29.73 triệu/m²",
    area: "74 m²",
    length: "185 m",
    width: "4 m",
    direction: "Đ.Bắc",
    bedrooms: "--",
    bathrooms: "--",
    id: 18,
  },
];

const housesForRent = [
  {
    descriptions: [
      "Cho thuê mặt bằng ngang 4m, dài 8m đối diện công viên Lưu Hữu Phước trung tâm quận Ninh Kiều.",
      "Thích hợp làm văn phòng, phòng vé máy bay, du lịch, văn phòng luật sư, trưng bày mỹ phẩm, điện thoại, laptop, quần áo hoặc mở cửa hàng nhỏ.",
      "Giá thuê: 14 triệu/tháng",
    ],
    owner: "Anh Khôi Lê",
    images: [
      "./images/products/forRent/1/1.jpg",
      "./images/products/forRent/1/2.jpg",
      "./images/products/forRent/1/3.jpg",
    ],
    title: "Mặt bằng đối diện công viên Lưu Hữu Phước, Cần Thơ",
    address: "Phan Văn Trị, Phường An Phú, Quận Ninh Kiều, TP. Cần Thơ",
    totalPrice: "14 triệu",
    pricePerSquareMetre: "14 triệu",
    area: "32 m²",
    length: "8 m",
    width: "4 m",
    direction: "--",
    bedrooms: "--",
    bathrooms: "--",
    id: 1,
  },
  {
    descriptions: [
      "- Diện tích văn phòng:125m²",
      "- Kết cấu:",
      "+ Văn phòng riêng biệt",
      "+ Có nhà vệ sinh riêng từng tầng",
      "+ Có bãi đậu xe",
      "+ Có bảo vệ trông xe, có vệ sinh bên ngoài văn phòng",
      "+ Đi bằng thang máy",
      "+ 01 sân thượng + bếp (sử dụng chung)",
      "+ Có lắp đặt máy lạnh, wifi (tùy theo nhu cầu)",
      "- Toà nhà nằm ngay mặt tiền Võ Nguyên Giáp, trước mặt tiền KDC 586, dân cư đông đúc, kinh doanh mua bán sầm uất, thích hợp văn phòng công ty lớn, đông nhân viên… - Giá thuê mỗi tầng: 7 triệu/tháng (Cọc 02 tháng, HĐ lâu dài).",
      "Điện 4.500VND/kWh, Nước 30k/tháng, tiền thu gom rác 40k/tháng ",
    ],
    owner: "RIVERLIFE CTY",
    images: [
      "./images/products/forRent/2/1.jpg",
      "./images/products/forRent/2/2.jpg",
      "./images/products/forRent/2/3.jpg",
    ],
    title: "Cho thuê văn phòng mặt tiền đường Võ Nguyên Giáp giá rẻ",
    address: "Đường Võ Nguyên Giáp, Phường Phú Thứ, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "7 triệu",
    pricePerSquareMetre: "7 triệu",
    area: "125 m²",
    length: "12.5 m",
    width: "10 m",
    direction: "T.Nam",
    bedrooms: "--",
    bathrooms: "--",
    id: 2,
  },
  {
    descriptions: [
      "Cho thuê căn hộ kdc Hưng Phú 70m2, 2PN, TP Cần Thơ Giá 5 Triệu/Tháng\n- Hướng cửa: Đông Bắc, ban công: Tây Nam\n- Thiết kế: 2 phòng ngủ, 1 phòng khách, 1 bếp, 1WC, 1 ban công, lối thông tầng,...\n- Tiện ích: cách trung tâm thành phố chỉ 1km, gần trường học từ mầm non đến cấp 3, Siêu thị, nhà hàng, phòng Gym, bệnh viện,...\n- Thời hạn: Cần cho thuê dài hạn\n- Liên hệ  ngay để xem nhà",
    ],
    owner: "Nguyễn Bá Lộc",
    images: [
      "./images/products/forRent/3/1.jpg",
      "./images/products/forRent/3/2.jpg",
      "./images/products/forRent/3/3.jpg",
    ],
    title:
      "Cho thuê căn hộ kdc Hưng Phú 70m2, 2PN, TP Cần Thơ giá 5 triệu/tháng",
    address: "Lý Thái Tổ, Phường Hưng Phú, Quận Cái Răng, TP. Cần Thơ",
    totalPrice: "5 triệu",
    pricePerSquareMetre: "5 triệu",
    area: "70 m²",
    length: "--",
    width: "--",
    direction: "Đ.Bắc",
    bedrooms: "2",
    bathrooms: "1",
    id: 3,
  },
  {
    descriptions: [
      "Cho thuê Nhà Mặt Tiền đường Trần Đại Nghĩa trung tâm thành phố Cần Thơ khu vực sầm uất thích hợp kinh doanh, Văn Phòng. ",
      "- Diện tích 5mx20m ( DTSD 150m2) ",
      "- Nhà Trệt lửng có 02 PN, 01 WC. Có sẵn 03 máy lạnh",
      "- Hướng Tây Nam",
      "- Trong bán kính  500m xung quanh có Khu Trung tâm thương mại, chợ, nhiều nhà hàng, quán ăn, khu vui chơi giải trí, công viên, bến ninh kiều và khu vực hành chính.",
      "- Ưu tiên khách hàng thuê dài hạn ( có thể thương lượng giá nếu thuê trên 2 năm) ",
      "- Cọc 03 Tháng ",
      "- Liên hệ để xem nhà",
    ],
    owner: "Nguyễn Bá Lộc",
    images: [
      "./images/products/forRent/4/1.jpg",
      "./images/products/forRent/4/2.jpg",
      "./images/products/forRent/4/3.jpg",
    ],
    title:
      "Cho thuê nhà mặt tiền đường Trần Đại Nghĩa trung tâm thành phố Cần Thơ 150m2 giá 15 triệu/ tháng",
    address: "Trần Đại Nghĩa, Phường Cái Khế, Quận Ninh Kiều, TP. Cần Thơ",
    totalPrice: "15 triệu",
    pricePerSquareMetre: "15 triệu",
    area: "150 m²",
    length: "20 m",
    width: "5 m",
    direction: "Đ.Nam",
    bedrooms: "2",
    bathrooms: "1",
    id: 4,
  },
  {
    descriptions: [
      "Cho thuê đất mặt tiền đường Lò Mổ (Hoa viên Thành Đạt), phường An Khánh, quận Ninh Kiều, Cần Thơ.",
      "Diện tích: 297 m2 = Ngang 9m x Dài 33m",
      "– vị trí đất Cách đường Nguyễn Văn Cừ 150m, cách Hoa viên Thành Đạt 150m.",
      "– Đường nhựa 15m đã làm xong, giao thông đi lại thuận tiện",
      "– Xung quanh dân cư đông, an ninh tốt, buôn bán sầm uất",
      "– Thích hợp cho ac thuê Mở quán, Kinh doanh…",
      "Giá: 9tr/tháng",
      "Xem mặt bằng vui lòng call trước 30 phút. CHO THUÊ DÀI HẠN",
    ],
    owner: "Viet",
    images: [
      "./images/products/forRent/5/1.jpg",
      "./images/products/forRent/5/2.jpg",
      "./images/products/forRent/5/3.jpg",
    ],
    title:
      "Cho thuê đất mặt tiền đường Lò Mổ (Hoa viên Thành Đạt), phường An Khánh, quận Ninh Kiều, Cần",
    address: "Đường Nguyễn Văn Cừ An Khánh, Ninh Kiều, Cần Thơ",
    totalPrice: "9 triệu",
    pricePerSquareMetre: "9 triệu",
    area: "289 m²",
    length: "33 m",
    width: "9 m",
    direction: "--",
    bedrooms: "--",
    bathrooms: "--",
    id: 5,
  },
];

const users = [
  {
    email: "user@gmail.com",
    password: "user12345678",
    name: "Nguyễn Văn A",
    phone: "0796863758",
    createdDate: "26/11/2022",
    favorites: {
      sale: [],
      rent: [],
    },
  },
];

const districtsOfCanTho = [
  {
    Id: "916",
    Name: "Quận Ninh Kiều",
    Wards: [
      {
        Id: "31117",
        Name: "Phường Cái Khế",
        Level: "Phường",
      },
      {
        Id: "31120",
        Name: "Phường An Hòa",
        Level: "Phường",
      },
      {
        Id: "31123",
        Name: "Phường Thới Bình",
        Level: "Phường",
      },
      {
        Id: "31126",
        Name: "Phường An Nghiệp",
        Level: "Phường",
      },
      {
        Id: "31129",
        Name: "Phường An Cư",
        Level: "Phường",
      },
      {
        Id: "31135",
        Name: "Phường Tân An",
        Level: "Phường",
      },
      {
        Id: "31141",
        Name: "Phường An Phú",
        Level: "Phường",
      },
      {
        Id: "31144",
        Name: "Phường Xuân Khánh",
        Level: "Phường",
      },
      {
        Id: "31147",
        Name: "Phường Hưng Lợi",
        Level: "Phường",
      },
      {
        Id: "31149",
        Name: "Phường An Khánh",
        Level: "Phường",
      },
      {
        Id: "31150",
        Name: "Phường An Bình",
        Level: "Phường",
      },
    ],
  },
  {
    Id: "917",
    Name: "Quận Ô Môn",
    Wards: [
      {
        Id: "31153",
        Name: "Phường Châu Văn Liêm",
        Level: "Phường",
      },
      {
        Id: "31154",
        Name: "Phường Thới Hòa",
        Level: "Phường",
      },
      {
        Id: "31156",
        Name: "Phường Thới Long",
        Level: "Phường",
      },
      {
        Id: "31157",
        Name: "Phường Long Hưng",
        Level: "Phường",
      },
      {
        Id: "31159",
        Name: "Phường Thới An",
        Level: "Phường",
      },
      {
        Id: "31162",
        Name: "Phường Phước Thới",
        Level: "Phường",
      },
      {
        Id: "31165",
        Name: "Phường Trường Lạc",
        Level: "Phường",
      },
    ],
  },
  {
    Id: "918",
    Name: "Quận Bình Thuỷ",
    Wards: [
      {
        Id: "31168",
        Name: "Phường Bình Thủy",
        Level: "Phường",
      },
      {
        Id: "31169",
        Name: "Phường Trà An",
        Level: "Phường",
      },
      {
        Id: "31171",
        Name: "Phường Trà Nóc",
        Level: "Phường",
      },
      {
        Id: "31174",
        Name: "Phường Thới An Đông",
        Level: "Phường",
      },
      {
        Id: "31177",
        Name: "Phường An Thới",
        Level: "Phường",
      },
      {
        Id: "31178",
        Name: "Phường Bùi Hữu Nghĩa",
        Level: "Phường",
      },
      {
        Id: "31180",
        Name: "Phường Long Hòa",
        Level: "Phường",
      },
      {
        Id: "31183",
        Name: "Phường Long Tuyền",
        Level: "Phường",
      },
    ],
  },
  {
    Id: "919",
    Name: "Quận Cái Răng",
    Wards: [
      {
        Id: "31186",
        Name: "Phường Lê Bình",
        Level: "Phường",
      },
      {
        Id: "31189",
        Name: "Phường Hưng Phú",
        Level: "Phường",
      },
      {
        Id: "31192",
        Name: "Phường Hưng Thạnh",
        Level: "Phường",
      },
      {
        Id: "31195",
        Name: "Phường Ba Láng",
        Level: "Phường",
      },
      {
        Id: "31198",
        Name: "Phường Thường Thạnh",
        Level: "Phường",
      },
      {
        Id: "31201",
        Name: "Phường Phú Thứ",
        Level: "Phường",
      },
      {
        Id: "31204",
        Name: "Phường Tân Phú",
        Level: "Phường",
      },
    ],
  },
  {
    Id: "923",
    Name: "Quận Thốt Nốt",
    Wards: [
      {
        Id: "31207",
        Name: "Phường Thốt Nốt",
        Level: "Phường",
      },
      {
        Id: "31210",
        Name: "Phường Thới Thuận",
        Level: "Phường",
      },
      {
        Id: "31212",
        Name: "Phường Thuận An",
        Level: "Phường",
      },
      {
        Id: "31213",
        Name: "Phường Tân Lộc",
        Level: "Phường",
      },
      {
        Id: "31216",
        Name: "Phường Trung Nhứt",
        Level: "Phường",
      },
      {
        Id: "31217",
        Name: "Phường Thạnh Hoà",
        Level: "Phường",
      },
      {
        Id: "31219",
        Name: "Phường Trung Kiên",
        Level: "Phường",
      },
      {
        Id: "31227",
        Name: "Phường Tân Hưng",
        Level: "Phường",
      },
      {
        Id: "31228",
        Name: "Phường Thuận Hưng",
        Level: "Phường",
      },
    ],
  },
  {
    Id: "924",
    Name: "Huyện Vĩnh Thạnh",
    Wards: [
      {
        Id: "31211",
        Name: "Xã Vĩnh Bình",
        Level: "Xã",
      },
      {
        Id: "31231",
        Name: "Thị trấn Thanh An",
        Level: "Thị trấn",
      },
      {
        Id: "31232",
        Name: "Thị trấn Vĩnh Thạnh",
        Level: "Thị trấn",
      },
      {
        Id: "31234",
        Name: "Xã Thạnh Mỹ",
        Level: "Xã",
      },
      {
        Id: "31237",
        Name: "Xã Vĩnh Trinh",
        Level: "Xã",
      },
      {
        Id: "31240",
        Name: "Xã Thạnh An",
        Level: "Xã",
      },
      {
        Id: "31241",
        Name: "Xã Thạnh Tiến",
        Level: "Xã",
      },
      {
        Id: "31243",
        Name: "Xã Thạnh Thắng",
        Level: "Xã",
      },
      {
        Id: "31244",
        Name: "Xã Thạnh Lợi",
        Level: "Xã",
      },
      {
        Id: "31246",
        Name: "Xã Thạnh Qưới",
        Level: "Xã",
      },
      {
        Id: "31252",
        Name: "Xã Thạnh Lộc",
        Level: "Xã",
      },
    ],
  },
  {
    Id: "925",
    Name: "Huyện Cờ Đỏ",
    Wards: [
      {
        Id: "31222",
        Name: "Xã Trung An",
        Level: "Xã",
      },
      {
        Id: "31225",
        Name: "Xã Trung Thạnh",
        Level: "Xã",
      },
      {
        Id: "31249",
        Name: "Xã Thạnh Phú",
        Level: "Xã",
      },
      {
        Id: "31255",
        Name: "Xã Trung Hưng",
        Level: "Xã",
      },
      {
        Id: "31261",
        Name: "Thị trấn Cờ Đỏ",
        Level: "Thị trấn",
      },
      {
        Id: "31264",
        Name: "Xã Thới Hưng",
        Level: "Xã",
      },
      {
        Id: "31273",
        Name: "Xã Đông Hiệp",
        Level: "Xã",
      },
      {
        Id: "31274",
        Name: "Xã Đông Thắng",
        Level: "Xã",
      },
      {
        Id: "31276",
        Name: "Xã Thới Đông",
        Level: "Xã",
      },
      {
        Id: "31277",
        Name: "Xã Thới Xuân",
        Level: "Xã",
      },
    ],
  },
  {
    Id: "926",
    Name: "Huyện Phong Điền",
    Wards: [
      {
        Id: "31299",
        Name: "Thị trấn Phong Điền",
        Level: "Thị trấn",
      },
      {
        Id: "31300",
        Name: "Xã Nhơn Ái",
        Level: "Xã",
      },
      {
        Id: "31303",
        Name: "Xã Giai Xuân",
        Level: "Xã",
      },
      {
        Id: "31306",
        Name: "Xã Tân Thới",
        Level: "Xã",
      },
      {
        Id: "31309",
        Name: "Xã Trường Long",
        Level: "Xã",
      },
      {
        Id: "31312",
        Name: "Xã Mỹ Khánh",
        Level: "Xã",
      },
      {
        Id: "31315",
        Name: "Xã Nhơn Nghĩa",
        Level: "Xã",
      },
    ],
  },
  {
    Id: "927",
    Name: "Huyện Thới Lai",
    Wards: [
      {
        Id: "31258",
        Name: "Thị trấn Thới Lai",
        Level: "Thị trấn",
      },
      {
        Id: "31267",
        Name: "Xã Thới Thạnh",
        Level: "Xã",
      },
      {
        Id: "31268",
        Name: "Xã Tân Thạnh",
        Level: "Xã",
      },
      {
        Id: "31270",
        Name: "Xã Xuân Thắng",
        Level: "Xã",
      },
      {
        Id: "31279",
        Name: "Xã Đông Bình",
        Level: "Xã",
      },
      {
        Id: "31282",
        Name: "Xã Đông Thuận",
        Level: "Xã",
      },
      {
        Id: "31285",
        Name: "Xã Thới Tân",
        Level: "Xã",
      },
      {
        Id: "31286",
        Name: "Xã Trường Thắng",
        Level: "Xã",
      },
      {
        Id: "31288",
        Name: "Xã Định Môn",
        Level: "Xã",
      },
      {
        Id: "31291",
        Name: "Xã Trường Thành",
        Level: "Xã",
      },
      {
        Id: "31294",
        Name: "Xã Trường Xuân",
        Level: "Xã",
      },
      {
        Id: "31297",
        Name: "Xã Trường Xuân A",
        Level: "Xã",
      },
      {
        Id: "31298",
        Name: "Xã Trường Xuân B",
        Level: "Xã",
      },
    ],
  },
];

// Handle go to top ==========================

const goToTopBtn = document.querySelector(".go-to-top");

window.onscroll = () => {
  if (goToTopBtn)
    goToTopBtn.style.display =
      document.documentElement.scrollTop >= 200 ? "flex" : "none";
};

function handleOnClickGoToTop() {
  document.documentElement.scrollTop = 0;
}

if (goToTopBtn) goToTopBtn.addEventListener("click", handleOnClickGoToTop);

//======================================================================

const currentLocation = window.location.pathname;

function generateRandom(min, max, exclude) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return exclude === num ? generateRandom(min, max) : num;
}

function renderHousesInMainPage(element, housesList, amount, type) {
  let html = "";
  let currentUser;
  if (localStorage["currentUser"]) {
    currentUser = JSON.parse(localStorage["currentUser"]);
  }
  for (let i = 0; i < amount; i++) {
    const item = housesList[i];
    html += `<div class="col-lg-3 mt-3">
    <div class="rounded product-info-container shadow hover-outline position-relative">
      <a href="chitietsanpham.html?type=${type}&id=${
      item.id
    }"><img class="w-100" src="${item.images[0]}" alt="" /></a>
      <a href="chitietsanpham.html?type=${type}&id=${item.id}">
      <div class="product-info border p-2 pb-3">
      <p class="product-price mb-2">
        <span class="me-2">${item.totalPrice}</span> ${item.pricePerSquareMetre}
      </p>
      <div class="product-detail">
        <span><i class="me-1 fa-solid fa-chart-area"></i>${item.area}</span>
        <span><i class="me-1 fa-solid fa-bed"></i>${item.bedrooms}</span>
        <span><i class="me-1 fa-solid fa-bath"></i>${item.bathrooms}</span>
        <span><i class="me-1 fa-solid fa-compass"></i>${item.direction}</span>
      </div>
      <a href="chitietsanpham.html?type=${type}&id=${
      item.id
    }" class="product-name text-limit-2 mb-2">
        ${item.title}
      </a>
        <div class="product-address">
          <i class="fa-solid fa-location-dot"></i>
          <span class="ms-2 text-limit-1">
            ${item.address}
          </span>
        </div>
      </div>
      </a>
      <i
      data-type="${type}"
      data-id="${item.id}"
      class="${
        currentUser?.favorites[type].includes(item.id)
          ? "fa-solid"
          : "fa-regular"
      } fa-heart position-absolute fs-4 text-danger js-toggle-like-btn"
      style="top: 10px; right: 10px; cursor: pointer"
    ></i>
    </div>
  </div>`;
  }

  element.innerHTML = html;
}

function renderRecommendList(element, housesList, randomIds, type) {
  let currentUser;
  if (localStorage["currentUser"]) {
    currentUser = JSON.parse(localStorage["currentUser"]);
  }
  function renderHouse(house) {
    return `<div class="rounded product-info-container position-relative">
    <a href="chitietsanpham.html?type=${type}&id=${
      house.id
    }"><img class="w-100" src="${house.images[0]}" alt="" /></a>
      <a href="chitietsanpham.html?type=${type}&id=${house.id}">
      <div class="product-info border p-2 pb-3">
      <p class="product-price mb-2">
        <span class="me-2">${house.totalPrice}</span> ${
      house.pricePerSquareMetre
    }
      </p>
      
      <a href="chitietsanpham.html?type=${type}&id=${
      house.id
    }" class="product-name text-limit-2 mb-2">
        ${house.title}
      </a>
        <div class="product-address">
          <i class="fa-solid fa-location-dot"></i>
          <span class="ms-2 text-limit-1">
            ${house.address}
          </span>
        </div>
      </div>
      </a>
      <i
      data-type="${type}"
      data-id="${house.id}"
      class="${
        currentUser?.favorites[type].includes(house.id)
          ? "fa-solid"
          : "fa-regular"
      } fa-heart position-absolute fs-4 text-danger js-toggle-like-btn"
      style="top: 10px; right: 10px; cursor: pointer"
    ></i>
  </div>`;
  }
  element.innerHTML = `<div class="col">${renderHouse(
    housesList[randomIds[0]]
  )}</div>
  <div class="col hidden-sm">${renderHouse(housesList[randomIds[1]])}</div>
  <div class="col hidden-md">${renderHouse(housesList[randomIds[2]])}</div>`;
}

function renderDetailHouse(housesList, id, type) {
  const currentHouse = housesList.find((house) => house.id === +id);
  let currentUser;
  if (localStorage["currentUser"]) {
    currentUser = JSON.parse(localStorage["currentUser"]);
  }
  const houseFullInformation = document.querySelector(
    ".js-house-full-information"
  );
  const imagesModalWrapper = document.querySelector(".modal-images-wrapper");
  const columnImagesWrapper = document.querySelector(".column-images-wrapper");

  imagesModalWrapper.innerHTML = `<div class="mySlides">
    <div class="numbertext">1 / 3</div>
    <img
      src="${currentHouse.images[0]}"
      style="width: 100%"
    />
  </div>

  <div class="mySlides">
    <div class="numbertext">2 / 3</div>
    <img
      src="${currentHouse.images[1]}"
      style="width: 100%"
    />
  </div>
  <div class="mySlides">
    <div class="numbertext">3 / 3</div>
    <img
      src="${currentHouse.images[2]}"
      style="width: 100%"
    />
  </div>`;

  columnImagesWrapper.innerHTML = `<div class="column-img">
  <img
    class="demo"
    src="${currentHouse.images[0]}"
    onclick="currentSlide(1)"
    alt="Hình 1"
  />
</div>

<div class="column-img">
  <img
    class="demo"
    src="${currentHouse.images[1]}"
    onclick="currentSlide(2)"
    alt="Hình 2"
  />
</div>

<div class="column-img">
  <img
    class="demo"
    src="${currentHouse.images[2]}"
    onclick="currentSlide(3)"
    alt="Hình 3"
  />
</div>`;

  let descriptionHtml = "";
  currentHouse.descriptions.forEach((des) => {
    descriptionHtml += `<p>${des}</p>`;
  });

  houseFullInformation.innerHTML = `<div class="row js-images-wrapper">
  <div class="col-md-8 position-relative">
    <!-- Hình mô tả chính  -->
    <div class="img-title">
      <img src="${currentHouse.images[0]}" onclick="openModal();currentSlide(1)"
      class="hover-shadow"/>
    </div>
    <div class="heart-button" data-id="${currentHouse.id}" data-type="${type}">
      ${
        currentUser?.favorites[type].includes(currentHouse.id)
          ? "<button type='button'  class='btn btn-light'><i class='fa-solid fa-heart' style='color:red;'></i> Đã lưu</button>"
          : " <button type='button' class='btn active btn-outline-danger'  > <i class=' fa-regular fa-heart '></i> Lưu tin</button>"
      }
    </div>
  </div>
  <div class="col-md-4 img-right">
    <!-- Hình với like và chia sẻ -->
    <div class="like-and-share">
      <img src="${currentHouse.images[1]}" onclick="openModal();currentSlide(2)"
      class="hover-shadow"/>
    </div>

    <!-- More hình pls -->

    <div class="front-image">
      <img
        src="${currentHouse.images[2]}"
        onclick="openModal();currentSlide(3)"
        class="hover-shadow"
      />
    </div>
  </div>
</div>

<div class="row">
  <div class="cot-8 col-lg-8">
    <!-- Thông tin về mảnh đất từ tiêu đề -->
    <h2 class="name mt-3">
      ${currentHouse.title}
    </h2>

    <!-- Thông tin về vị trí và icon bản đồ -->
    <div class="location align-items-between">
      <div class="diadiem d-flex align-items-center">
        <i class="fa-solid fa-location-crosshairs me-2"></i>
        <p class="text-limit-1">
          ${currentHouse.address}
        </p>
      </div>
      <div class="onmap">
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
        data-bs-target="#notifyModal">
          <i class="fa-solid fa-map-location-dot"></i> Bản đồ
        </button>
      </div>
    </div>
    <!-- THông tin về giá diện tích và ngày hết hạn -->
    <div class="notice">
      <div class="read">
        <span class="pricea"><b>${currentHouse.totalPrice}</b></span>
        ${
          type === "sale"
            ? '<span class="ms-2 text-secondary totalarea">' +
              currentHouse.pricePerSquareMetre +
              "</span>"
            : "/tháng"
        }
      </div>
      <div class="notice-info">
        <span class="not-name"><b>Mã tin: </b>000001</span>
        <div class="not-expire"><b>Hết hạn: </b>30/12/2023</div>
      </div>
    </div>
  </div>
  <div class="cot-4 col-lg-4">
  <div
  class="user-info row rounded border box-shadow mb-2 pt-3 pb-3 mt-4 ms-3"
>
  <div class="row align-items-center">
    <div class="col-4">
      <div class="avatar avatar-md" data-label="${
        currentHouse.owner.split(" ")[
          currentHouse.owner.split(" ").length - 1
        ][0]
      }"></div>
    </div>
    <div class="name col">
      <h4>${currentHouse.owner}</h4>
      <p>0 người theo dõi</p>
      <h6>1000 tin nhà đất đã đăng</h6>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <a href="tel:0796863758" class="btn btn-outline-success w-100 rounded-pill">
        <i class="fa-solid fa-phone"></i> <span>0776885295</span>
      </a>
    </div>
    <div class="col">
      <button class="btn btn-outline-primary w-100 rounded-pill" data-bs-toggle="modal"
      data-bs-target="#notifyModal">
      <i class="fa-brands fa-facebook-messenger"></i> Nhắn tin
      </button>
    </div>
  </div>
</div>
  </div>
</div>

<div class="row mt-4">
  <div class="owner-intro col-lg-8 mb-4">
    <h3>Giới thiệu</h3>
    <div class="owner-description">
      ${descriptionHtml}
    </div>
  </div>
  <!-- Chi tiết nhà đất một lần nữa (liệt kê và ko có link) -->
  <div class="etc-detail col-lg-4">
    <h3>Chi tiết</h3>
    <div class="etc-info-list mt-3">
      <ul class="list-group shadow">
        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Diện tích</div>
            <div class="etc-name">${currentHouse.area}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Chiều dài</div>
            <div class="etc-name">${currentHouse.length}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Chiều rộng</div>
            <div class="etc-name">${currentHouse.width}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Phòng ngủ</div>
            <div class="etc-name">${currentHouse.bedrooms}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Phòng tắm</div>
            <div class="etc-name">${currentHouse.bathrooms}</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Hướng</div>
            <div class="etc-name">${currentHouse.direction}</div>
          </div>
        </li>
      </ul>
      <ul class="list-group shadow">
        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Giấy tờ pháp lý</div>
            <div class="etc-name">Sổ hồng</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Vị trí</div>
            <div class="etc-name">Mặt tiền</div>
          </div>
        </li>

        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Số tầng</div>
            <div class="etc-name">2</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Hiện trạng nhà</div>
            <div class="etc-name">Đầy đủ nội thất</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="etclist">
            <div class="etc-info">Trạng thái sử dụng</div>
            <div class="etc-name">Chưa sử dụng</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>`;
}

function renderHousesInProductPage(element, housesList, type) {
  const limit = 6;
  const pageNum = Number.parseInt(housesList.length / limit);
  const paginationWrapper = document.querySelector(".pagination-wrapper");
  const currentPage = new URL(window.location).searchParams.get("page") || 1;
  const offset = (+currentPage - 1) * limit;
  let html = "";
  let currentUser;
  if (localStorage["currentUser"]) {
    currentUser = JSON.parse(localStorage["currentUser"]);
  }
  for (let i = offset; i < offset + limit; i++) {
    const item = housesList[i];
    if (item) {
      let carouselHtml = "";
      item.images.forEach((imgSrc, index) => {
        carouselHtml += `<div class="carousel-item ${index === 0 && "active"}">
                          <img
                            src="${imgSrc}"
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>`;
      });

      html += `<div class="col-lg-4 my-2">
    <div class="rounded product-info-container hover-outline position-relative">
      <a
        href="chitietsanpham.html?type=${type}&id=${item.id}"
        id="carousel${item.id}"
        class="carousel slide "
        data-bs-ride="true"
        data-interval="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carousel${item.id}"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel${item.id}"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carousel${item.id}"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          ${carouselHtml}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carousel${item.id}"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carousel${item.id}"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </a>
      <div class="product-info border p-2 pb-3">
        <div class="product-price mb-2 d-flex justify-content-between">
          <span class="me-2">${item.totalPrice}</span>
          <div class="product-detail">
            <span class="me-3"
              ><i class="me-1 fa-solid fa-chart-area"></i>${item.area}</span
            >
            <span class="me-3"
              ><i class="me-1 fa-solid fa-bed"></i>${item.bedrooms}</span
            >
            <span class="me-3"
              ><i class="me-1 fa-solid fa-bath"></i>${item.bathrooms}</span
            >
            <span class=""
              ><i class="me-1 fa-solid fa-compass"></i>${item.direction}</span
            >
          </div>
        </div>

        <a href="chitietsanpham.html?type=${type}&id=${
        item.id
      }" class="product-name text-limit-2 mb-2 text-uppercase">
          ${item.title}
        </a>
        <div class="product-address">
        <i class="fa-solid fa-location-dot"></i>
          <span class="ms-2 text-limit-1">
            ${item.address}
          </span>
        </div>
      </div>
      <i
      data-type="${type}"
      data-id="${item.id}"
      class="${
        currentUser?.favorites[type].includes(item.id)
          ? "fa-solid"
          : "fa-regular"
      } fa-heart position-absolute fs-4 text-danger js-toggle-like-btn"
      style="top: 10px; right: 10px; cursor: pointer;z-index:100;"
    ></i>
    </div>
  </div>`;
    }
  }

  element.innerHTML = html;

  if (pageNum >= 2) {
    let pageItemHtml = "";

    for (let i = 1; i <= pageNum; i++) {
      pageItemHtml += `<li class="page-item ${
        currentPage == i ? "active" : ""
      }"><a class="page-link" href="${currentLocation}?page=${i}">${i}</a></li>`;
    }
    paginationWrapper.innerHTML = `<nav
    aria-label="Page navigation example"
    class="d-flex justify-content-center algiin-items-center my-4"
  >
    <ul class="pagination">
      <li class="page-item ${currentPage == 1 ? "disabled" : ""}">
        <a class="page-link " href="${currentLocation}?page=${
      +currentPage - 1
    }" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      ${pageItemHtml}

      <li class="page-item  ${currentPage == pageNum ? "disabled" : ""}">
        <a class="page-link" href="${currentLocation}?page=${
      +currentPage + 1
    }" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>`;
  }
}

function initUser() {
  if (!localStorage["users"])
    localStorage.setItem("users", JSON.stringify(users));
}

function logout() {
  localStorage.removeItem("currentUser");
  navigate("dangnhap.html");
}

function navigate(url) {
  window.location.href = url;
}

function checkLogin() {
  const headerRightMenu = document.querySelector(".js-right-menu");

  if (localStorage["currentUser"]) {
    const currentUser = JSON.parse(localStorage["currentUser"]);
    headerRightMenu.innerHTML = `<li class="nav-item">
    <a href="trangcanhan.html">
    <div class="avatar avatar-sm" data-label="${
      currentUser.name.split(" ")[currentUser.name.split(" ").length - 1][0]
    }"></div>
    </a>
      
    </li>
    <li class="nav-item">
      <button class="btn btn-danger" onclick="logout()">Đăng xuất</button>
    </li>`;
  } else {
    headerRightMenu.innerHTML = `<li class="nav-item">
                <a class="nav-link" href="dangnhap.html">Đăng nhập</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="dangky.html">Đăng ký</a>
              </li>`;
  }
}

function showHide(inputId, eyeOpenId, eyeCloseId) {
  let password = document.getElementById(inputId);
  let eyeOpen = document.getElementById(eyeOpenId);
  let eyeClose = document.getElementById(eyeCloseId);
  if (password.type === "password") {
    password.setAttribute("type", "text");
    eyeOpen.classList.add("hide");
    eyeClose.classList.remove("hide");
  } else {
    password.setAttribute("type", "password");
    eyeOpen.classList.remove("hide");
    eyeClose.classList.add("hide");
  }
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function handleDeletePost(id) {
  console.log(id);
  const confirm = window.confirm("Bạn thật sự muốn xóa bài đăng này không!");
  if (confirm) document.getElementById(`${id}`).remove();

  if (document.querySelector(".post-list")?.childElementCount === 0) {
    document.querySelector(".post-list").innerHTML = `<div class="alert">
                                                        Bạn chưa có bài đăng nào.
                                                        <span
                                                          class="link-primary"
                                                          data-bs-toggle="modal"
                                                          data-bs-target="#formModal"
                                                          >Đăng tin ngay</span
                                                        >
                                                      </div>`;
  }
}

// Routes

function app() {
  initUser();
  checkLogin();

  console.log(new Intl.DateTimeFormat("vn-VN").format(new Date()));

  if (currentLocation.includes("index") || currentLocation === "/") {
    const forSaleLists = document.querySelector(".js-forSale-list");
    const forRentLists = document.querySelector(".js-forRent-list");
    renderHousesInMainPage(forSaleLists, housesForSale, 4, "sale");
    renderHousesInMainPage(forRentLists, housesForRent, 4, "rent");
  }

  if (currentLocation.includes("chitietsanpham")) {
    const url = new URL(window.location);
    const houseId = url.searchParams.get("id");
    const type = url.searchParams.get("type");
    const housesList = type === "sale" ? housesForSale : housesForRent;
    renderDetailHouse(housesList, houseId, type);
    const heartBtn = document.querySelector(".heart-button");
    const recommentLists = document.querySelectorAll(".recommend-list");

    recommentLists.forEach((list) => {
      const randomId = [];
      for (let i = 0; i < 3; i++) {
        randomId.push(generateRandom(0, housesList.length - 1, +houseId));
      }
      renderRecommendList(list, housesList, randomId, type);
    });

    heartBtn.onclick = () => {
      if (!localStorage["currentUser"]) {
        alert("Vui lòng đăng nhập để tiếp tục");
        return;
      }
      const currentUser = JSON.parse(localStorage["currentUser"]);
      const id = heartBtn.dataset.id;
      const type = heartBtn.dataset.type;
      console.log(currentUser.favorites[type].includes(+id));
      if (currentUser.favorites[type].includes(+id)) {
        currentUser.favorites[type].splice(
          currentUser.favorites[type].indexOf(+id),
          1
        );
        heartBtn.innerHTML =
          "<button type='button' class='btn active btn-outline-danger' > <i class=' fa-regular fa-heart '></i> Lưu tin</button>";
      } else {
        currentUser.favorites[type].push(+id);
        heartBtn.innerHTML =
          "<button type='button'  class='btn btn-light'><i class='fa-solid fa-heart' style='color:red;'></i> Đã lưu</button>";
      }
      localStorage["currentUser"] = JSON.stringify(currentUser);
    };
  }

  if (currentLocation.includes("dat.html")) {
    const productList = document.querySelector(".js-product-list");
    let housesList, type;
    if (currentLocation.includes("muabandat")) {
      housesList = housesForSale;
      type = "sale";
    } else {
      housesList = housesForRent;
      type = "rent";
    }

    renderHousesInProductPage(productList, housesList, type);
  }

  if (currentLocation.includes("dangtin")) {
    if (!localStorage["currentUser"]) {
      alert("Vui lòng đăng nhập để tiếp tục!");
      navigate("dangnhap.html");
    }
    const postList = document.querySelector(".post-list");

    const postForm = document.querySelector(".js-post-form");
    const tinhInput = document.querySelector("select#tinh");
    const quanInput = document.querySelector("select#quan");
    const phuongInput = document.querySelector("select#phuong");
    const diachiInput = document.querySelector("input[name=diachi]");
    const myModal = new bootstrap.Modal(document.getElementById("formModal"), {
      keyboard: false,
    });

    function renderDistricts() {
      districtsOfCanTho.forEach((district) => {
        quanInput.options[quanInput.options.length] = new Option(
          district.Name,
          district.Name
        );
      });
    }

    function renderWards(wards) {
      phuongInput.options.length = 1;
      wards.forEach((ward) => {
        phuongInput.options[phuongInput.options.length] = new Option(
          ward.Name,
          ward.Name
        );
      });
    }

    const handleAddressChange = () => {
      diachiInput.value = `${phuongInput.value}${phuongInput.value && ","} ${
        quanInput.value
      }${quanInput.value && ", "}${tinhInput.value}`;
    };

    tinhInput.addEventListener("change", () => {
      renderDistricts();
      handleAddressChange();
    });
    quanInput.addEventListener("change", () => {
      phuongInput.querySelector("option[value='']").selected = true;
      const currentDistrict = districtsOfCanTho.find(
        (district) => district.Name === quanInput.value
      );
      renderWards(currentDistrict.Wards);
      handleAddressChange();
    });
    phuongInput.addEventListener("change", handleAddressChange);

    postForm.onsubmit = (e) => {
      e.preventDefault();
      const loaiGD = document.querySelector(
        "input[name=loaigiaodich]:checked"
      ).value;
      const loaiBDS = document.querySelector("input[name=loaiBDS]").value;
      const tinh = tinhInput.value;
      const quan = quanInput.value;
      const phuong = phuongInput.value;

      const dientich = document.querySelector("input[name=dientich]").value;
      const giaban = document.querySelector("input[name=giaban]").value;
      const phongngu = document.querySelector(
        "input[name=phong-ngu]:checked"
      ).value;
      const phongtam = document.querySelector(
        "input[name=phong-tam]:checked"
      ).value;
      const huong = document.querySelector("select#huong").value;
      const anh = document.querySelector("input[type=file]").files[0];

      const tieude = document.querySelector("input[name=tieude]").value;
      const gioithieu = document.querySelector(
        "textarea[name=gioithieu]"
      ).value;

      const alert = document.querySelector(".alert");

      if (postForm.checkValidity()) {
        const newPostContainer = document.createElement("div");
        const id = generateId();
        newPostContainer.classList.add(
          "col-lg-12",
          "col-md-6",
          "position-relative"
        );
        newPostContainer.id = id;
        newPostContainer.innerHTML = `
        <div class="p-3 border rounded mb-4 shadow">
          <div class="row">
            <div class="col-md-12 col-lg-4 position-relative post-thumb">
              <img
                src="${URL.createObjectURL(anh)}"
                class="rounded w-100"
                alt=""
              />
            </div>
    
            <div class="col-lg-7">
              <a
                class="link-secondary fw-bold fs-4 text-limit-2 my-2"
                href="#"
                >${tieude}</a
              >
    
              <div class="text-secondary my-1">
                <i class="fa-solid fa-location-dot me-2"></i>${
                  diachiInput.value
                }
              </div>
    
              <div class="d-flex gap-5 my-2">
                <div class="fw-semibold">${loaiGD} ${loaiBDS}</div>
                <div class="fw-semibold">
                  <span class="text-secondary fs-6 fw-normal">Giá: </span>${giaban} triệu
                </div>
                <div class="fw-semibold">
                  <span class="text-secondary fs-6 fw-normal"
                    >Diện tích: </span
                  >${dientich} m²
                </div>
              </div>

              <div class="d-flex gap-5 my-2">
                <div class="fw-semibold">
                  <span class="text-secondary fs-6 fw-normal"
                    >Phòng ngủ: </span
                  >${phongngu}
                </div>
                <div class="fw-semibold">
                  <span class="text-secondary fs-6 fw-normal"
                    >Phòng tắm: </span
                  >${phongtam}
                </div>
                <div class="fw-semibold">
                  <span class="text-secondary fs-6 fw-normal">Hướng: </span
                  >${huong}
              </div>
              </div>
    
              <div class="fw-semibold my-2">
                <span class="text-secondary fs-6 fw-normal">Ngày đăng: </span
                >${new Date().toLocaleDateString("vn")}
              </div>
              <div class="fw-semibold my-2">
                <span class="text-secondary fs-6 fw-normal"
                  >Vị trí tin đăng: </span
                >${loaiGD} ${loaiBDS} ${tinh}
              </div>

              

            </div>
            
          </div>

          <i
            class="fa-solid fa-circle-xmark delete-btn"
            onclick="handleDeletePost('${id}')"
          ></i>
        </div>`;
        postList.appendChild(newPostContainer);
        if (alert) alert.remove();
        myModal.hide();
        postForm.reset();
      }
    };
  }

  if (currentLocation.includes("dangky")) {
    const name = document.querySelector("input[name=name]");
    const email = document.querySelector("input[name=email]");
    const phone = document.querySelector("input[name=phone]");
    const password = document.querySelector("input[name=password]");
    const comfirmPassword = document.querySelector(
      "input[name=confirmPassword]"
    );
    const registerForm = document.querySelector(".register-form");

    function checkForm(e) {
      e.preventDefault();

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
      const pwReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      console.log(phone.value);
      if (!phoneRegex.test(phone.value)) {
        alert("Số điện thoại không hợp lệ!");
        return false;
      }

      if (emailRegex.test(email.value) == false) {
        alert("Email không hợp lệ! Vui lòng nhập lại email!");
        return false;
      }
      if (
        JSON.parse(localStorage["users"]).find(
          (user) => user.email === email.value
        )
      ) {
        alert("Email đã tồn tại! Vui lòng nhập lại email khác!");
        return false;
      }

      if (!pwReg.test(password.value)) {
        /*mã xử lý dữ liệu không hợp lệ*/
        alert("Mật khẩu phải dài trên 8 kí tự, bao gồm chữ và số");
        return false;
      }

      if (comfirmPassword.value != password.value) {
        alert("Password không khớp, vui lòng nhập lại");
        return false;
      }

      users.push({
        email: email.value,
        password: password.value,
        phone: phone.value,
        name: name.value,
        favorites: {
          sale: [],
          rent: [],
        },
        createdDate: new Intl.DateTimeFormat("vn-VN").format(new Date()),
      });

      localStorage.setItem("users", JSON.stringify(users));

      alert("Đăng ký thành công");
      navigate("dangnhap.html");
      return true;
    }

    registerForm.addEventListener("submit", checkForm);
  }

  if (currentLocation.includes("dangnhap")) {
    function checkForm(e) {
      e.preventDefault();
      let email = document.getElementById("email");
      let emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailReg.test(email.value) == false) {
        alert("Email không hợp lệ! Vui lòng nhập lại Email");
        email.focus();
        return false;
      }
      let password = document.getElementById("password");

      const users = JSON.parse(localStorage.getItem("users"));
      const currentUser = users.find((user) => user.email === email.value);

      if (!currentUser) {
        alert("Email không tồn tại, vui lòng thử lại!");
        return false;
      }

      if (currentUser.password !== password.value) {
        alert("Mật khẩu không đúng");
        return false;
      }

      alert("Đăng nhập thành công");
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      navigate("index.html");
      return true;
    }

    const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", checkForm);
  }

  if (currentLocation.includes("trangcanhan")) {
    let currentUser;
    if (localStorage["currentUser"]) {
      currentUser = JSON.parse(localStorage["currentUser"]);
    }
    const userInfoWrapper = document.querySelector(".js-info-wrapper");
    const changeInfoForm = document.getElementById("change-info-form");
    const openChangeInfoBtn = document.getElementById("open-changeInfo-btn");
    const favoriteWrapper = document.querySelector(".js-favorite-wrapper");

    userInfoWrapper.innerHTML = `<div class="col-md-6 d-flex p-3">
    <div class="avatar avatar-lg me-4" data-label="${
      currentUser.name.split(" ")[currentUser.name.split(" ").length - 1][0]
    }"></div>
    <div >
      <h3>${currentUser.name}</h3>
      <div class="fw-semibold my-1">
        <span class="text-secondary fw-normal">Số điện thoại: </span>
        ${currentUser.phone}
      </div>
      <div class="fw-semibold my-1">
        <span class="text-secondary fw-normal">Email: </span>
        ${currentUser.email}
      </div>
      <div class="fw-semibold my-1">
        <span class="text-secondary fw-normal">Địa chỉ: </span>${
          currentUser.address && currentUser.address != ""
            ? currentUser.address
            : "Chưa cung cấp"
        }
      </div>
    </div>
  </div>
  <div class="col-md-6 p-3">
    <div class="fw-semibold my-1">
      <img
        src="https://static.chotot.com/storage/marketplace/common/pf_rating_icon.svg"
      />
      <span class="text-secondary fw-normal">Đánh giá: </span>
      chưa có đánh giá
    </div>
    <div class="fw-semibold my-1">
      <img
        class=""
        src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/calendar.png"
        height="16"
        alt=""
      />
      <span class="text-secondary fw-normal">Ngày tham gia: </span>
      ${currentUser.createdDate}
    </div>
    <div class="fw-semibold my-1">
      <img
        class=""
        src="https://static.chotot.com/storage/CT_WEB_UNI_PUBLIC_PROFILE/user/static/img/chat.png"
        height="16"
        alt=""
      />
      <span class="text-secondary fw-normal">Phản hồi chat: </span>Chưa có
      thông tin
    </div>
  </div>`;
    let housesList = housesForSale;
    let type = "sale";
    for (let i = 0; i < 2; i++) {
      housesList.forEach((item) => {
        if (currentUser.favorites[type].includes(item.id)) {
          const div = document.createElement("div");
          div.classList.add("col-lg-4", "my-2");
          let carouselHtml = "";
          item.images.forEach((imgSrc, index) => {
            carouselHtml += `<div class="carousel-item ${
              index === 0 && "active"
            }">
                            <img
                              src="${imgSrc}"
                              class="d-block w-100"
                              alt="..."
                            />
                          </div>`;
          });

          let html = `
      <div class="rounded product-info-container hover-outline position-relative">
        <a
          href="chitietsanpham.html?type=${type}&id=${item.id}"
          id="carousel${item.id}"
          class="carousel slide "
          data-bs-ride="true"
          data-interval="false"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carousel${item.id}"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel${item.id}"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel${item.id}"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            ${carouselHtml}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carousel${item.id}"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carousel${item.id}"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </a>
        <div class="product-info border p-2 pb-3">
          <div class="product-price mb-2 d-flex justify-content-between">
            <span class="me-2">${item.totalPrice}</span>
            <div class="product-detail">
              <span class="me-3"
                ><i class="me-1 fa-solid fa-chart-area"></i>${item.area}</span
              >
              <span class="me-3"
                ><i class="me-1 fa-solid fa-bed"></i>${item.bedrooms}</span
              >
              <span class="me-3"
                ><i class="me-1 fa-solid fa-bath"></i>${item.bathrooms}</span
              >
              <span class=""
                ><i class="me-1 fa-solid fa-compass"></i>${item.direction}</span
              >
            </div>
          </div>
  
          <a href="chitietsanpham.html?type=${type}&id=${
            item.id
          }" class="product-name text-limit-2 mb-2 text-uppercase">
            ${item.title}
          </a>
          <div class="product-address">
          <i class="fa-solid fa-location-dot"></i>
            <span class="ms-2 text-limit-1">
              ${item.address}
            </span>
          </div>
        </div>
        <i
        data-type="${type}"
        data-id="${item.id}"
        class="${
          currentUser?.favorites[type].includes(item.id)
            ? "fa-solid"
            : "fa-regular"
        } fa-heart position-absolute fs-4 text-danger js-toggle-like-btn"
        style="top: 10px; right: 10px; cursor: pointer;z-index:100;"
      ></i>
      </div>
    `;
          div.innerHTML = html;
          favoriteWrapper.appendChild(div);
        }
      });
      housesList = housesForRent;
      type = "rent";
    }

    const handleAddressChange = () => {
      changeInfoForm.address.value = `${changeInfoForm.quan.value}${
        changeInfoForm.quan.value && ","
      } ${changeInfoForm.tinh.value}`;
    };

    changeInfoForm.tinh.onchange = handleAddressChange;
    changeInfoForm.quan.onchange = handleAddressChange;

    openChangeInfoBtn.onclick = () => {
      changeInfoForm.name.value = currentUser.name;
      changeInfoForm.phone.value = currentUser.phone;
      changeInfoForm.address.value = currentUser.address || "";
    };

    changeInfoForm.onsubmit = (e) => {
      e.preventDefault();
      if (changeInfoForm.checkValidity()) {
        const newUserInfo = {
          name: changeInfoForm.name.value,
          email: currentUser.email,
          phone: changeInfoForm.phone.value,
          address: changeInfoForm.address.value,
        };

        localStorage["currentUser"] = JSON.stringify({
          ...currentUser,
          ...newUserInfo,
        });
        let users = JSON.parse(localStorage["users"]);
        users = users.map((user) =>
          user.email === newUserInfo.email ? { ...user, ...newUserInfo } : user
        );
        localStorage["users"] = JSON.stringify(users);
        window.location.reload();
      }
    };
  }

  // handle for favorite
  const toggleLikes = document.querySelectorAll(".js-toggle-like-btn");

  if (toggleLikes) {
    toggleLikes.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        if (!localStorage["currentUser"]) {
          alert("Vui lòng đăng nhập để tiếp tục");
          return;
        }

        const type = e.target.dataset.type;
        const id = e.target.dataset.id;
        const currentUser = JSON.parse(localStorage["currentUser"]);
        if (Array.from(e.target.classList).includes("fa-regular")) {
          e.target.classList.remove("fa-regular");
          e.target.classList.add("fa-solid");
          currentUser.favorites[type].push(+id);
        } else {
          e.target.classList.remove("fa-solid");
          e.target.classList.add("fa-regular");
          currentUser.favorites[type].splice(
            currentUser.favorites[type].indexOf(+id),
            1
          );
        }
        localStorage["currentUser"] = JSON.stringify(currentUser);
      });
    });
  }
}

app();
