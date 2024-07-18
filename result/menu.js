export const Myeongdong = {
    foodimage:'food_image/m.jpg',
    foodTitle: '명동칼국수',
    menuInfo: '상암동 | 가츠동, 덮밥',
    foodMap: '서울특별시 마포구 월드컵북로 434',
    foodMapAPI: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6323.749587514659!2d126.87650649357906!3d37.581565900000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9945d535ba15%3A0x2dd862812d6e520d!2z66qF64-ZIOy5vOq1reyImCbtlbTrrLw!5e0!3m2!1sko!2skr!4v1721201631766!5m2!1sko!2skr',
    phone: '02-6922-2005',
    menuTime: '10:00 ~ 22:00',
    menuBreakTime: '15:00 ~ 17:00',
    menuItems: [
      '모밀비빔국수 - 10,000원',
      '모밀국수 - 9,000원',
      '명동칼국수 - 8,500원',
      '얼큰칼국수 - 9,000원',
    ],
  };
  
  // Kimchi 객체 정의
  export const Kimchi = {
    foodimage: 'food_image/kimchi.jpg',
    foodTitle: '김치도가',
    menuInfo: '상암동 | 김치찌개, 고기',
    foodMap: '서울 마포구 월드컵북로 434 상암IT센터 1층 116호',
    foodMapAPI: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.8821697915237!2d126.88362847538701!3d37.581392223277014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c99064a67722d%3A0xc3960357c6f7e569!2z6rmA7LmY64-E6rCAIOyDgeyVlOygkA!5e0!3m2!1sko!2skr!4v1721203542329!5m2!1sko!2skr',
    phone: '02-6922-2046',
    menuTime: '11:00 ~ 22:00',
    menuBreakTime: null,
    menuItems: [
      '고기듬뿍김치찌개 - 9,000원',
      '묵은지오겹살 - 14,000원',
      '계란말이 - 8,000원',
    ],
  };
  
  export const teacher = {
    foodimage: 'food_image/lee.jpg',
    foodTitle: '이선생 짜글이',
    menuInfo: '상암동 | 짜글이, 김치찌개',
    foodMap: '서울 마포구 월드컵북로 434 112호',
    foodMapAPI: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202613.70949388144!2d126.76327796720602!3d37.48812052800547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9984f821beeb%3A0xb6d1e0dd00d020fa!2z7J207ISg7IOd7Kec6riA7J20!5e0!3m2!1sko!2skr!4v1721203915928!5m2!1sko!2skr',
    phone: '070-4015-2938',
    menuTime: '10:30 ~ 22:00',
    menuBreakTime: '15:00 ~ 17:00',
    menuItems: [
      '짜글이 - 8,000원',
      '김치찌개 - 14,000원',
    ],
  };
  
  export const Kingkong = {
    foodimage: 'food_image/kingkong.jpg',
    foodTitle: '킹콩부대찌개',
    menuInfo: '상암동 | 부대찌개',
    foodMap: '서울특별시 마포구 상암동 1597 사보이 시티 지하 1 층 118 호',
    foodMapAPI: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.8864210157303!2d126.88633717538701!3d37.58129212328257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9972b9defe55%3A0x61408f9c93bf88a0!2z7YK57L2p67aA64yA7LCM6rCcIOuniO2PrOyDgeyVlOygkA!5e0!3m2!1sko!2skr!4v1721204390185!5m2!1sko!2skr',
    phone: '02-372-2009',
    menuTime: '10:30 ~ 21:30',
    menuBreakTime: '16:00 ~ 17:00',
    menuItems: [
      '부대찌개 - 10,000원',
    ],
  };
  // 메뉴 객체 배열 정의
  export const menu = [
    { m: Myeongdong },
    { k: Kimchi },
    { lee: teacher },
    { k: Kingkong },
  ];
  
  export default menu