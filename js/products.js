const products = [
  // Running Category
  {
    id: "run-1",
    name: "AeroGlide Elite",
    category: "running",
    categoryName: "跑步鞋區",
    price: 5400,
    image: "assets/images/run-1.jpg",
    description: "專為長距離路跑設計的輕量化跑鞋。採用最新一代高回彈中底泡沫與流線型工程網眼鞋面，提供極致的緩震性能與透氣性，助您輕鬆突破個人極限。",
    features: [
      "極輕量化工程網眼鞋面，透氣舒適",
      "高回彈超臨界發泡中底，能量反饋提升 15%",
      "耐磨橡膠大底，提供多路面優異抓地力",
      "人體工學鞋跟設計，減少阿基里斯腱壓力"
    ],
    specs: {
      "重量": "220g (單隻 US 8.5)",
      "足跟差": "8mm",
      "適合路面": "公路、跑道",
      "材質": "工程網布 / TPU / 高性能橡膠"
    },
    rating: 4.8,
    reviews: 124
  },
  {
    id: "run-2",
    name: "ApexTrail V1",
    category: "running",
    categoryName: "跑步鞋區",
    price: 4800,
    image: "assets/images/run-2.jpg",
    description: "無懼崎嶇，征服野外。ApexTrail V1 是一款專業越野跑鞋，搭載加厚防護鞋頭與多向抓地齒紋，在濕滑泥底或碎石山路上皆能展現穩定非凡的運動表現。",
    features: [
      "防潑水抗撕裂網面，防沙防塵",
      "Vibram Megagrip 黃金大底，抓地力強悍",
      "中底內嵌防石板，保護腳掌免受銳物傷害",
      "快速綁帶系統，穩定貼合腳背"
    ],
    specs: {
      "重量": "290g (單隻 US 8.5)",
      "足跟差": "6mm",
      "適合路面": "越野山路、泥地、碎石路",
      "材質": "抗撕裂合成纖維 / Vibram 大底"
    },
    rating: 4.9,
    reviews: 98
  },
  {
    id: "run-3",
    name: "CarbonPace Pro",
    category: "running",
    categoryName: "跑步鞋區",
    price: 7500,
    image: "assets/images/run-3.jpg",
    description: "競速之王，碳板加持。CarbonPace Pro 專為馬拉松選手與追求極致速度的跑者打造，全掌鏟型碳纖維板與極限輕量中底，帶給您強烈的推動力與靈敏的反饋感。",
    features: [
      "全掌鏟型碳纖維板，增強向前推進力",
      "頂級 PEBA 泡棉中底，超強能量回饋",
      "極簡 Mono 紗鞋面，貼合如第二層肌膚",
      "競速型耐磨橡膠，兼顧輕量與耐磨"
    ],
    specs: {
      "重量": "195g (單隻 US 8.5)",
      "足跟差": "5mm",
      "適合路面": "公路、田徑場、馬拉松賽道",
      "材質": "Mono紗 / 碳纖維板 / PEBA 泡沫"
    },
    rating: 4.7,
    reviews: 86
  },
  {
    id: "run-4",
    name: "NovaCushion",
    category: "running",
    categoryName: "跑步鞋區",
    price: 4200,
    image: "assets/images/run-4.jpg",
    description: "如履雲端，日常首選。NovaCushion 跑鞋以極致緩震為核心，加厚中底能有效吸收落地衝擊力，非常適合每日晨跑、恢復跑與長時間站立行走者。",
    features: [
      "雙密度緩震中底，腳感如雲端般柔軟",
      "環繞式後跟穩定片，防止內翻與側翻",
      "柔軟透氣針織鞋面，溫柔包裹雙足",
      "全掌耐磨橡膠，延長使用壽命"
    ],
    specs: {
      "重量": "260g (單隻 US 8.5)",
      "足跟差": "10mm",
      "適合路面": "公路、跑步機",
      "材質": "彈性針織面料 / EVA / 橡膠"
    },
    rating: 4.9,
    reviews: 142
  },

  // Casual Category
  {
    id: "casual-1",
    name: "UrbanWalk Classic",
    category: "casual",
    categoryName: "休閒鞋區",
    price: 3600,
    image: "assets/images/casual-1.jpg",
    description: "簡約極致，都會日常。這款經典白皮革休閒鞋採用義大利進口頭層牛皮打造，無多餘線條與裝飾，百搭各種正裝與休閒服飾，展現低調儒雅的都會風範。",
    features: [
      "精選優質頭層牛皮，手感細膩且耐穿",
      "手工縫製杯狀橡膠大底，堅固不脫膠",
      "可拆卸式緩衝鞋墊，貼合腳弓形狀",
      "細緻真皮內裡，赤足穿著亦不磨腳"
    ],
    specs: {
      "鞋面材質": "頂級頭層牛皮",
      "內裡": "天然豬皮 / 透氣織物",
      "鞋底": "防滑耐磨天然橡膠",
      "產地": "手工打造"
    },
    rating: 4.6,
    reviews: 210
  },
  {
    id: "casual-2",
    name: "RetroCanvas",
    category: "casual",
    categoryName: "休閒鞋區",
    price: 2500,
    image: "assets/images/casual-2.jpg",
    description: "復古經典，永不過時。RetroCanvas 採用高磅數有機棉帆布與硫化橡膠鞋底，傳承上世紀經典街頭剪裁，越穿越有獨特的陳舊質感，是您每日隨性出門的靈魂伴侶。",
    features: [
      "12oz 高磅數防潑水帆布，結實耐磨",
      "經典硫化橡膠大底，抗折防滑",
      "復古金屬鞋眼扣，點綴細節質感",
      "加厚海綿鞋口，舒適貼合踝部"
    ],
    specs: {
      "鞋面材質": "高磅數有機帆布",
      "內裡": "親膚帆布",
      "鞋底": "耐磨硫化橡膠",
      "風格": "經典街頭 / 復古休閒"
    },
    rating: 4.5,
    reviews: 185
  },
  {
    id: "casual-3",
    name: "MetroKnit",
    category: "casual",
    categoryName: "休閒鞋區",
    price: 3300,
    image: "assets/images/casual-3.jpg",
    description: "一體針織，零感貼合。MetroKnit 採用無縫 3D 飛織技術，輕如羽毛。一體鞋舌與提帶設計，方便快速穿脫，是現代快節奏城市生活的理想通勤鞋款。",
    features: [
      "3D 一體飛織鞋面，透氣排汗",
      "襪套式領口設計，360度貼合雙腳",
      "超輕量 EVA 發泡鞋底，減輕行走負擔",
      "後跟織帶拉環，方便快速穿脫"
    ],
    specs: {
      "鞋面材質": "3D 飛織纖維",
      "內裡": "無內裡（一體飛織）",
      "鞋底": "超輕發泡橡膠",
      "特點": "極輕量、超透氣、易折疊"
    },
    rating: 4.7,
    reviews: 130
  },
  {
    id: "casual-4",
    name: "TerraLoafer",
    category: "casual",
    categoryName: "休閒鞋區",
    price: 4350,
    image: "assets/images/casual-4.jpg",
    description: "雅痞隨性，紳士格調。TerraLoafer 採用細緻牛麂皮，搭配高彈生膠鞋底。不論是商務半休閒或是假日度假，都能為您的整體穿搭增添一份慵懶且優雅的氣息。",
    features: [
      "奢華進口牛麂皮，絨面均勻細緻",
      "經典莫卡辛手工馬克縫線",
      "天然生膠大底，腳感Q彈止滑",
      "無鞋帶設計，優雅一腳蹬"
    ],
    specs: {
      "鞋面材質": "進口牛麂皮 (Suede)",
      "內裡": "柔軟羊皮",
      "鞋底": "純天然生膠底",
      "保養說明": "建議使用麂皮防水噴霧與專用刷"
    },
    rating: 4.8,
    reviews: 95
  },

  // Lady Category
  {
    id: "lady-1",
    name: "EleganceHeel",
    category: "lady",
    categoryName: "淑女鞋區",
    price: 5700,
    image: "assets/images/lady-1.jpg",
    description: "優雅尖頭，自信搖曳。經典的 5cm 尖頭中低跟鞋，符合人體工學的鞋弓弧度與後跟減壓設計，即使整日通勤行走依然平穩舒適，是現代女性職場與約會的氣質代表作。",
    features: [
      "優雅俐落的尖頭鞋型，視覺修飾腿部線條",
      "5cm 粗小跟，平穩好走，兼顧高度與舒適度",
      "鞋墊內置高彈乳膠墊，舒緩前掌站立壓力",
      "真皮鞋底邊緣封邊，高奢質感一覽無遺"
    ],
    specs: {
      "鞋面材質": "頂級羊皮 / 漆皮",
      "內裡": "天然小羊皮 (吸汗不黏膩)",
      "跟高": "5.0 cm",
      "鞋底": "高密度防滑美耐底"
    },
    rating: 4.8,
    reviews: 112
  },
  {
    id: "lady-2",
    name: "GraceFlat",
    category: "lady",
    categoryName: "淑女鞋區",
    price: 3900,
    image: "assets/images/lady-2.jpg",
    description: "溫柔浪漫，優雅起舞。GraceFlat 法式優雅芭蕾舞鞋，以超柔軟羊皮包裹雙足，精緻細蝴蝶結繫帶可微調鬆緊，完美的包覆感與極簡設計，散發法式慵懶美學。",
    features: [
      "超柔軟整張羊皮製作，可任意彎折",
      "圓頭鞋頭，給予腳趾充足活動空間",
      "鞋口彈性鬆緊帶收邊，貼合不易掉腳",
      "0.8cm 平跟設計，回歸最自然的行走姿態"
    ],
    specs: {
      "鞋面材質": "細膩羊皮 / 軟牛皮",
      "內裡": "透氣純棉帆布織物",
      "跟高": "0.8 cm",
      "版型": "正常 (寬腳建議大半碼)"
    },
    rating: 4.9,
    reviews: 167
  },
  {
    id: "lady-3",
    name: "SiennaMule",
    category: "lady",
    categoryName: "淑女鞋區",
    price: 4650,
    image: "assets/images/lady-3.jpg",
    description: "慵懶穆勒，意式極簡。SiennaMule 揉合半正式皮鞋與拖鞋的便利性，復古馬鞍金屬扣點綴，搭配露跟剪裁。無論搭配闊腿褲或法式洋裝，皆能隨性展現高雅氣場。",
    features: [
      "精緻馬鞍復古金屬環，增添英倫質感",
      "露跟半包鞋型，隨穿隨走，通透清爽",
      "3cm 寬扁跟，走路沉穩無聲",
      "寬版鞋頭剪裁，完美容納各種腳型"
    ],
    specs: {
      "鞋面材質": "拋光小牛皮",
      "內裡": "頭層豬皮",
      "跟高": "3.0 cm",
      "風格": "中性復古 / 簡約通勤"
    },
    rating: 4.7,
    reviews: 78
  },
  {
    id: "lady-4",
    name: "VelvetStrap",
    category: "lady",
    categoryName: "淑女鞋區",
    price: 5200,
    image: "assets/images/lady-4.jpg",
    description: "絲絨瑪麗珍，復古華麗。這款經典瑪麗珍鞋採用奢華天鵝絨材質，散發溫潤典雅的光澤感。經典細皮帶扣搭配復古圓頭，在每一步間漫步奢華優雅。",
    features: [
      "進口高奢天鵝絨鞋面，光澤細膩迷人",
      "經典瑪麗珍單條扣帶，復古優雅",
      "真皮包覆式中底，親膚柔軟",
      "耐磨橡膠防滑大底，行走安心"
    ],
    specs: {
      "鞋面材質": "奢華絲絨 (Velvet)",
      "內裡": "柔軟真皮",
      "跟高": "1.5 cm",
      "搭扣": "金屬扣 (可調節)"
    },
    rating: 4.9,
    reviews: 64
  },

  // Hiking Category
  {
    id: "hike-1",
    name: "SummitPeak Waterproof",
    category: "hiking",
    categoryName: "登山鞋區",
    price: 6300,
    image: "assets/images/hike-1.jpg",
    description: "重裝徒步，極限守護。SummitPeak 專為多日中重裝登山健行打造。鞋面由一整張防水牛巴戈皮裁製，搭配高科技透氣防水薄膜，徹底隔絕雨水與泥濘，守護雙足安全。",
    features: [
      "SympaTex 高效防水透氣薄膜，乾爽無比",
      "全包覆式耐磨橡膠護邊 (Rand)，防刮防撞",
      "3D 重裝支強中底，支撐沉重背包負荷",
      "Vibram 登山專用橡膠大底，泥地止滑出色"
    ],
    specs: {
      "鞋面材質": "2.2mm 頂級Nubuck防水皮革",
      "內裡": "防水透氣薄膜襪套",
      "中底": "高剛性支撐PU中底",
      "重量": "620g (單隻 US 9.5)"
    },
    rating: 4.9,
    reviews: 105
  },
  {
    id: "hike-2",
    name: "RidgeCruiser Light",
    category: "hiking",
    categoryName: "登山鞋區",
    price: 4500,
    image: "assets/images/hike-2.jpg",
    description: "輕量健行，靈敏穿梭。RidgeCruiser 是一款低幫輕量化健行鞋，完美兼顧越野跑鞋的靈活性與登山鞋的抓地支撐，是單日輕裝郊山徒步與戶外旅行的完美首選。",
    features: [
      "透氣防砂網眼鞋面，搭配無縫TPU熱壓加固",
      "EVA 減震中底，腳感舒適回彈",
      "Gore-Tex Invisible Fit 防水技術，輕量舒適",
      "獨家山地止滑齒紋，提供全方位抓地力"
    ],
    specs: {
      "鞋面材質": "耐磨織物 / TPU加固",
      "內裡": "Gore-Tex 防水膜",
      "重量": "360g (單隻 US 8.5)",
      "款式": "低幫健行鞋"
    },
    rating: 4.7,
    reviews: 118
  },
  {
    id: "hike-3",
    name: "AlpineTrek Extreme",
    category: "hiking",
    categoryName: "登山鞋區",
    price: 8400,
    image: "assets/images/hike-3.jpg",
    description: "高山遠征，無懼冰雪。AlpineTrek 是一款專業高海拔攀登鞋，具備極佳的抗寒保暖性能與剛性，鞋底相容半自動冰爪，助您在極寒大雪山脊上踏出堅實的一步。",
    features: [
      "Kevlar 防刺穿耐磨鞋面，抵禦尖銳冰石",
      "Primaloft 黃金保暖棉內裡，抗寒零下20度",
      "全掌碳纖維支撐內底，高強度剛性不變形",
      "相容半自動冰爪 (Crampon-compatible) 的後跟卡槽"
    ],
    specs: {
      "鞋面材質": "Kevlar 凱夫拉高強度纖維 / 皮革",
      "內裡": "Primaloft 保暖膜 / 防水膜",
      "重量": "780g (單隻 US 9.0)",
      "適合環境": "雪山攀登、混合地形、極限探險"
    },
    rating: 5.0,
    reviews: 42
  },
  {
    id: "hike-4",
    name: "EcoTrail Explorer",
    category: "hiking",
    categoryName: "登山鞋區",
    price: 4050,
    image: "assets/images/hike-4.jpg",
    description: "綠色探索，環保先行。EcoTrail Explorer 採用 100% 回收塑料瓶製成的環保防潑水鞋面，以及含有回收橡膠的環保大底，讓我們踏出的每一步，都在實踐對大自然的關懷。",
    features: [
      "100% Repreve 環保回收纖維鞋面，透氣防潑水",
      "無氟 (PFC-Free) 防潑水塗層，環境友善",
      "30% 回收橡膠製成的 Vibram Ecostep 大底",
      "軟木混合發泡鞋墊，天然防臭吸震"
    ],
    specs: {
      "鞋面材質": "回收寶特瓶環保面料",
      "內裡": "吸濕排汗網布",
      "重量": "410g (單隻 US 8.5)",
      "環保認證": "Bluesign / GRS 認證"
    },
    rating: 4.8,
    reviews: 92
  }
];

// Export database for browser usage
window.productDatabase = products;
