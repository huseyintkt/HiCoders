
let counter = 0;

let words = [
    { word: "Apple", meaning: "Elma", isActive: true },
    { word: "Banana", meaning: "Muz", isActive: true },
    { word: "Orange", meaning: "Portakal", isActive: true },
    { word: "Melon", meaning: "Kavun", isActive: true },
    { word: "Pear", meaning: "Armut", isActive: true },
    { word: "Grape", meaning: "Üzüm", isActive: true },
    { word: "Kiwi", meaning: "Kivi", isActive: true },
    { word: "Apricot", meaning: "Kayısı", isActive: true },
    { word: "Lemon", meaning: "Limon", isActive: true },
    { word: "Tangerine", meaning: "Mandalina", isActive: true },
    { word: "Cherry", meaning: "Kiraz", isActive: true },
    { word: "Strawberry", meaning: "Çilek", isActive: true },
    { word: "Fig", meaning: "İncir", isActive: true },
    { word: "Watermelon", meaning: "Karpuz", isActive: true },
    { word: "Peach", meaning: "Şeftali", isActive: true },
    { word: "Plum", meaning: "Erik", isActive: true },
    { word: "Pomegranate", meaning: "Nar", isActive: true },
    { word: "Quince", meaning: "Ayva", isActive: true },
    { word: "Mulberry", meaning: "Dut", isActive: true },
    { word: "Mango", meaning: "Mango", isActive: true },
    { word: "Pineapple", meaning: "Ananas", isActive: true },
    { word: "Computer", meaning: "Bilgisayar", isActive: true },
    { word: "After", meaning: "Sonra", isActive: true },
    { word: "Action", meaning: "Aksiyon", isActive: true },
    { word: "Against", meaning: "Karşısında", isActive: true },
    { word: "Age", meaning: "Yaş", isActive: true },
    { word: "Ago", meaning: "Önce", isActive: true },
    { word: "Army", meaning: "Ordu", isActive: true },
    { word: "Bad", meaning: "Kötü", isActive: true },
    { word: "Bed", meaning: "Yatak", isActive: true },
    { word: "Believe", meaning: "İnanmak", isActive: true }, 
    { word: "Table", meaning: "Masa", isActive: true },
    { word: "Ball", meaning: "Top", isActive: true },
    { word: "Wall", meaning: "Duvar", isActive: true  },
    { word: "Day", meaning: "Gün", isActive: true  },
    { word: "Hell", meaning: "Cehennem", isActive: true  },
    { word: "Door", meaning: "Kapı", isActive: true  },
    { word: "Phone", meaning: "Telefon", isActive: true  },
    { word: "Bag", meaning: "Çanta", isActive: true  },
    { word: "Screen", meaning: "Ekran", isActive: true  },
    { word: "Radio", meaning: "Radyo", isActive: true  },
    { word: "Book", meaning: "Kitap", isActive: true  },    
    { word: "White", meaning: "Beyaz", isActive: true  },
    { word: "Black", meaning: "Siyah", isActive: true  },
    { word: "Fruit", meaning: "Meyve", isActive: true  },
    { word: "Stone", meaning: "Taş", isActive: true  },
    { word: "Face", meaning: "Yüz", isActive: true  },
    { word: "Finger", meaning: "Parmak", isActive: true  },
    { word: "Leg", meaning: "Bacak", isActive: true  },
    { word: "Head", meaning: "Kafa", isActive: true  },
    { word: "Sour", meaning: "Ekşi", isActive: true  },
    { word: "Square", meaning: "Kare", isActive: true  },
    { word: "Nose", meaning: "Burun", isActive: true  },
    { word: "Hand", meaning: "El", isActive: true  },
    { word: "Mother", meaning: "Anne", isActive: true  },
    { word: "Brother", meaning: "Birader", isActive: true  },
    { word: "Father", meaning: "Baba", isActive: true  },
    { word: "Bridge", meaning: "Köprü", isActive: true  }
];

let remainingWords = [
    { word: "Apple", meaning: "Elma", isActive: true },
    { word: "Banana", meaning: "Muz", isActive: true },
    { word: "Orange", meaning: "Portakal", isActive: true },
    { word: "Melon", meaning: "Kavun", isActive: true },
    { word: "Pear", meaning: "Armut", isActive: true },
    { word: "Grape", meaning: "Üzüm", isActive: true },
    { word: "Kiwi", meaning: "Kivi", isActive: true },
    { word: "Apricot", meaning: "Kayısı", isActive: true },
    { word: "Lemon", meaning: "Limon", isActive: true },
    { word: "Tangerine", meaning: "Mandalina", isActive: true },
    { word: "Cherry", meaning: "Kiraz", isActive: true },
    { word: "Strawberry", meaning: "Çilek", isActive: true },
    { word: "Fig", meaning: "İncir", isActive: true },
    { word: "Watermelon", meaning: "Karpuz", isActive: true },
    { word: "Peach", meaning: "Şeftali", isActive: true },
    { word: "Plum", meaning: "Erik", isActive: true },
    { word: "Pomegranate", meaning: "Nar", isActive: true },
    { word: "Quince", meaning: "Ayva", isActive: true },
    { word: "Mulberry", meaning: "Dut", isActive: true },
    { word: "Mango", meaning: "Mango", isActive: true },
    { word: "Pineapple", meaning: "Ananas", isActive: true },
    { word: "Computer", meaning: "Bilgisayar", isActive: true },
    { word: "After", meaning: "Sonra", isActive: true },
    { word: "Action", meaning: "Aksiyon", isActive: true },
    { word: "Against", meaning: "Karşısında", isActive: true },
    { word: "Age", meaning: "Yaş", isActive: true },
    { word: "Ago", meaning: "Önce", isActive: true },
    { word: "Army", meaning: "Ordu", isActive: true },
    { word: "Bad", meaning: "Kötü", isActive: true },
    { word: "Bed", meaning: "Yatak", isActive: true },
    { word: "Believe", meaning: "İnanmak", isActive: true }, 
    { word: "Table", meaning: "Masa", isActive: true },
    { word: "Ball", meaning: "Top", isActive: true },
    { word: "Wall", meaning: "Duvar", isActive: true  },
    { word: "Day", meaning: "Gün", isActive: true  },
    { word: "Hell", meaning: "Cehennem", isActive: true  },
    { word: "Door", meaning: "Kapı", isActive: true  },
    { word: "Phone", meaning: "Telefon", isActive: true  },
    { word: "Bag", meaning: "Çanta", isActive: true  },
    { word: "Screen", meaning: "Ekran", isActive: true  },
    { word: "Radio", meaning: "Radyo", isActive: true  },
    { word: "Book", meaning: "Kitap", isActive: true  },    
    { word: "White", meaning: "Beyaz", isActive: true  },
    { word: "Black", meaning: "Siyah", isActive: true  },
    { word: "Fruit", meaning: "Meyve", isActive: true  },
    { word: "Stone", meaning: "Taş", isActive: true  },
    { word: "Face", meaning: "Yüz", isActive: true  },
    { word: "Finger", meaning: "Parmak", isActive: true  },
    { word: "Leg", meaning: "Bacak", isActive: true  },
    { word: "Head", meaning: "Kafa", isActive: true  },
    { word: "Sour", meaning: "Ekşi", isActive: true  },
    { word: "Square", meaning: "Kare", isActive: true  },
    { word: "Nose", meaning: "Burun", isActive: true  },
    { word: "Hand", meaning: "El", isActive: true  },
    { word: "Mother", meaning: "Anne", isActive: true  },
    { word: "Brother", meaning: "Birader", isActive: true  },
    { word: "Father", meaning: "Baba", isActive: true  },
    { word: "Bridge", meaning: "Köprü", isActive: true  }
];