/* ============================================
   بيانات المنتجات
   ============================================ */
const necklaces = [
    { code: "1", price: 100, material: "Plated Brass & Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_١٩٤٠١٥_Google.png" },
    { code: "2", price: 45, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/1 (1).jpg" },
    { code: "3", price: 120, material: "Crystal Chinese", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/1ad6d63ad83b9612a388bd561946dc19.jpg" },
    { code: "4", price: 88, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/261ed26c5e6fc1ebdf88361422a5e4e5-194833.jpg" },
    { code: "5", price: 39, material: "Lace & Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/2370086-1782834472.jpg" },
    { code: "6", price: 55, material: "Glass Beads & Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/1623507916_825712242-preview.jpg" },
    { code: "7", price: 255, material: "Shell Pearls & Stainless", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/b4a8ff3609b6e38baa42a3274f5fa5c9.jpg" },
    { code: "8", price: 90, material: "Cultured Pearls & Brass", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/maxresdefault.jpg" },
    { code: "9", price: 500, material: "18K Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_١٩٤٠٢٥_Google.png" },
    { code: "10", price: 1500, material: "925 Sterling Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_١٩٤١٠٣_Google.png" },
    { code: "11", price: 200, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_١٩٤٠٥٤_Google.png" },
    { code: "12", price: 80, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_١٩٤١٣٠_Google.png" },
    { code: "13", price: 550, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٠٤٤٧_Google.png" },
    { code: "14", price: 800, material: "18K Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٠٥٠٥_Google.png" },
    { code: "15", price: 800, material: "18K Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٠٥٢٩_Google.png" },
    { code: "16", price: 90, material: "18K Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٠٥٢٢_Google.png" },
    { code: "17", price: 80, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٧٤٧_Google.png" },
    { code: "18", price: 110, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٠٥٤٣_Google.png" },
    { code: "19", price: 45, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٢٨٢٠_Google.png" },
    { code: "20", price: 200, material: "18K Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٠٦٠٥_Google.png" },
    { code: "21", price: 340, material: "Gold Filled & Turquoise", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٢٩١٥_Google.png" },
    { code: "22", price: 180, material: "18K Gold Plated & Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣١٢٠_Google.png" },
    { code: "23", price: 100, material: "18K Gold Plated & Turquoise", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٢٩٢٥_Google.png" },
    { code: "24", price: 50, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣٢١٨_Google.png" },
    { code: "25", price: 30, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣٣٥٥_Google.png" },
    { code: "26", price: 120, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣٤٠٠_Google.png" },
    { code: "27", price: 80, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣١٢٣_Google.png" },
    { code: "28", price: 50, material: "Shell Pearls & Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣٦١٣_Google.png" },
    { code: "29", price: 170, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣٦٠٥_Google.png" },
    { code: "30", price: 80, material: "Shell Pearls & Stainless", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣٥٥٢_Google.png" },
    { code: "31", price: 90, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١٢٠٩_Google.png" },
    { code: "32", price: 60, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١٩٤٣_Google.png" },
    { code: "33", price: 250, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣٤٥٣_Google.png" },
    { code: "34", price: 150, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣٥٠٠_Google.png" },
    { code: "35", price: 100, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢١٣٥٢٥_Google.png" },
    { code: "36", price: 20, material: "Seed Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٩٤٠_Google.png" },
    { code: "37", price: 40, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١٠٥٠_Google.png" },
    { code: "38", price: 30, material: "Seed Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١١٠٥_Google.png" },
    { code: "39", price: 20, material: "Seed Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١١١١_Google.png" },
    { code: "40", price: 20, material: "Plastic Beads & Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١١١٦_Google.png" },
    { code: "41", price: 20, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١١٢٠_Google.png" },
    { code: "42", price: 300, material: "Plastic Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١١٢٤_Google.png" },
    { code: "43", price: 25, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١١٢٧_Google.png" },
    { code: "44", price: 20, material: "Plastic Beads & Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١١٣٠_Google.png" },
    { code: "45", price: 40, material: "Cultured Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢١٩٢٢_Google.png" },
    { code: "46", price: 90, material: "18K Gold", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٧٣٩_Google.png" },
    { code: "47", price: 120, material: "Glass Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢٤٣٢٩_Google.png" },
    { code: "48", price: 80, material: "Glass Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/Screenshot_٢٠٢٥١٢٣٠_٢٢٤٣٣٩_Google.png" },
    { code: "49", price: 80, material: "Glass Beads & Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/neckles/WhatsApp-Image-2023-01-14-at-1.08-1.jpg" },
    { code: "50", price: 190, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٩٠٤_Google.png" },
    { code: "51", price: 150, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٩١٢_Google.png" },
    { code: "52", price: 150, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٩٢٤_Google.png" },
    { code: "53", price: 200, material: "18K Gold", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_١٩٣٤٥٣_Google.png" },
    { code: "54", price: 150, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_١٩٣٥٠٧_Google.png" },
    { code: "55", price: 340, material: "925 Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_١٩٣٤٤٩_Google.png" },
    { code: "56", price: 100, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_١٩٣٤٠٩_Google.png" },
];

const bracelets = [
    { code: "B1", price: 980, material: "Shell Pearls & Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/38f8e149fb91d06540ff621048a4182b.jpg_720x720q80.jpg" },
    { code: "B2", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/7932AB2D-4122-4CCC-847A-BFF19828E3F4.jpg" },
    { code: "B3", price: 980, material: "Stainless Steel & Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/51sFHqewyyL._AC_UF1000,1000_QL80_.jpg" },
    { code: "B4", price: 980, material: "18K Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/74893a5c-a1c0-4226-b91a-4bb500ca9eff-1000x1000-8drhXzxZ4S4Mlv1Gngbb7o7tVtVE8d2zogKaIsWu (1).jpg" },
    { code: "B5", price: 980, material: "Copper & Cubic Zirconia", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/6856e0c9daee2fd4f77f0523d518720f.jpg" },
    { code: "B6", price: 980, material: "Plastic Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/a92ca990-2b54-41f0-95e7-93c0f6ac27b8-1000x1000-hKxfpytJ56zXcv602HocpMYzehtEBxUs4mVd7aq0.jpg" },
    { code: "B7", price: 980, material: "Seed Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_١٩٣٣١١_Google.png" },
    { code: "B8", price: 980, material: "Seed Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_١٩٣٣١٥_Google.png" },
    { code: "B9", price: 980, material: "Plastic & Seed Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_١٩٣٣٠٠_Google.png" },
    { code: "B10", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٠١٢_Google.png" },
    { code: "B11", price: 980, material: "Glass Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢١٢٦٥٦_Google.png" },
    { code: "B12", price: 980, material: "Glass Beads & Stainless", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٠٣٩_Google.png" },
    { code: "B13", price: 980, material: "Glass Beads & Stainless", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢١٢٦٤٦_Google.png" },
    { code: "B14", price: 980, material: "Seed Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٠٥١_Google.png" },
    { code: "B15", price: 980, material: "Velvet Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٤٣٨_Google.png" },
    { code: "B16", price: 980, material: "18K Gold Plated & Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٣٥٦_Google.png" },
    { code: "B17", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٠٥٨_Google.png" },
    { code: "B18", price: 980, material: "Seed Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠١٤٢_Google.png" },
    { code: "B19", price: 980, material: "Plastic Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٤٠٥_Google.png" },
    { code: "B20", price: 980, material: "Glass Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٤٥١_Google.png" },
    { code: "B21", price: 980, material: "Seed Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٢٠٤_Google.png" },
    { code: "B22", price: 980, material: "Glass Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٤٢٤_Google.png" },
    { code: "B23", price: 980, material: "Plastic & Glass Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٩٣٩_Google.png" },
    { code: "B24", price: 980, material: "Seed Beads", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٦٣٠_Google.png" },
    { code: "B25", price: 980, material: "Crystal Chinese", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٩٢٧_Google.png" },
    { code: "B26", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢١٠١٣_Google.png" },
    { code: "B27", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢١١٤٩_Google.png" },
    { code: "B28", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/braclet/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٩١٩_Google.png" },
];

const rings = [
    { code: "R1", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٦٥٣_Google.png" },
    { code: "R2", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٧٢٣_Google.png" },
    { code: "R3", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٥١٤٤_Google.png" },
    { code: "R4", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٥٣٥٦_Google.png" },
    { code: "R5", price: 980, material: "18K Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٠٥٢٢_Google.png" },
    { code: "R6", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٥٢٦_Google.png" },
    { code: "R7", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٥١٨_Google.png" },
    { code: "R8", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٥٤٤_Google.png" },
    { code: "R9", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٦١١_Google.png" },
    { code: "R10", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٦١٨_Google.png" },
    { code: "R11", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٦٢٧_Google.png" },
    { code: "R12", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٦٣٥_Google.png" },
    { code: "R13", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٦٤٢_Google.png" },
    { code: "R14", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٧٠٤_Google.png" },
    { code: "R15", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٧١٠_Google.png" },
    { code: "R16", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٧١٦_Google.png" },
    { code: "R17", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٧١٩_Google.png" },
    { code: "R18", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٧٣٧_Google.png" },
    { code: "R19", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٧٥٢_Google.png" },
    { code: "R20", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٨١٠_Google.png" },
    { code: "R21", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٨٢٠_Google.png" },
    { code: "R22", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٨٢٥_Google.png" },
    { code: "R23", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٨٣١_Google.png" },
    { code: "R24", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٨٤٣_Google.png" },
    { code: "R25", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٤٩٥٢_Google.png" },
    { code: "R26", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٥٠٠٨_Google.png" },
    { code: "R27", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٥١٣٥_Google.png" },
    { code: "R28", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٥٢٠٤_Google.png" },
    { code: "R29", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٥٣٤٤_Google.png" },
    { code: "R30", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٥٤٠٥_Google.png" },
    { code: "R31", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٥٤١٣_Google.png" },
    { code: "R32", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٥٤٣٩_Google.png" },
    { code: "R33", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢١٥٤٥٠_Google.png" },
    { code: "R34", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢٢١٣٠٠_Google.png" },
    { code: "R35", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢٢١٣٣٥_Google.png" },
    { code: "R36", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢٢١٣٣٧_Google.png" },
    { code: "R37", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢٢١٤٣٧_Google.png" },
    { code: "R38", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢٢١٤٤٧_Google.png" },
    { code: "R39", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢٢١٤٥٣_Google.png" },
    { code: "R40", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/ring/Screenshot_٢٠٢٥١٢٣٠_٢٢١٥٠١_Google.png" },
];

const earings = [
    { code: "E1", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٦١٨_Google.png" },
    { code: "E2", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٦٢٧_Google.png" },
    { code: "E3", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٨٥٧_Google.png" },
    { code: "E4", price: 980, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٨٠٣_Google.png" },
    { code: "E5", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٣٤٦_Google.png" },
    { code: "E6", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٧١٣_Google.png" },
    { code: "E7", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٦٥٥_Google.png" },
    { code: "E8", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٦٠٤_Google.png" },
    { code: "E9", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٦١١_Google.png" },
    { code: "E10", price: 980, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٦٣٣_Google.png" },
    { code: "E11", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٧٠١_Google.png" },
    { code: "E12", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٧٠٥_Google.png" },
    { code: "E13", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٧١٨_Google.png" },
    { code: "E14", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٧٣٠_Google.png" },
    { code: "E15", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٧٣٧_Google.png" },
    { code: "E16", price: 980, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٨٠٣_Google.png" },
    { code: "E17", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_١٩٣٨٢٨_Google.png" },
    { code: "E18", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٦٤٨_Google.png" },
    { code: "E19", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٣١٥_Google.png" },
    { code: "E20", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٣٠٠_Google.png" },
    { code: "E21", price: 980, material: "Stainless Steel", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٧٠٧_Google.png" },
    { code: "E22", price: 980, material: "Shell Pearls", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٣٠٤_Google.png" },
    { code: "E23", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٢٢٠_Google.png" },
    { code: "E24", price: 980, material: "Gold Filled", img: "c:/Users/MENNA/Desktop/project/accssesoris/earing/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٢٥٠_Google.png" },
];

const hairItems = [
    { code: "H1", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٦١١_Google.png" },
    { code: "H2", price: 980, material: "Pearl", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/O1CN01Lc3P8S272yPI4EL9L_!!1948737740.jpg_q50.jpg_.webp" },
    { code: "H3", price: 980, material: "Rhinestone", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/O1CN01gHp1FH1aZ96HFdeBp_!!2142413343.jpg" },
    { code: "H4", price: 980, material: "Flower", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/O1CN01rOY4hY1ZGzTGDje05_!!3016733168.jpg_Q75.jpg_.webp" },
    { code: "H5", price: 980, material: "Ribbon", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/O1CN01NrBzsk1qdIYMLsV3m_!!2219826775518.jpg" },
    { code: "H6", price: 980, material: "Metal Clip", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢١٤٣٢٠_Google.png" },
    { code: "H7", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢١٤٣٢٩_Google.png" },
    { code: "H8", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٦٢٠_Google.png" },
    { code: "H9", price: 980, material: "Pearl", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢١٤٣٣٩_Google.png" },
    { code: "H10", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢١٢٢٤٣_Google.png" },
    { code: "H11", price: 980, material: "Rhinestone", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٦٣٤_Google.png" },
    { code: "H12", price: 980, material: "Flower", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٧٢٨_Google.png" },
    { code: "H13", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٤٢١٦_Google.png" },
    { code: "H14", price: 980, material: "Pearl", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٦٠٤_Google.png" },
    { code: "H15", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٤٢٢٤_Google.png" },
    { code: "H16", price: 980, material: "Rhinestone", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/TP00042030000031_O_m.jpg" },
    { code: "H17", price: 980, material: "Flower", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٤٢٣٣_Google.png" },
    { code: "H18", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٧٢٨_Google.png" },
    { code: "H19", price: 980, material: "Pearl", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٧٥٣_Google.png" },
    { code: "H20", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٨٠١_Google.png" },
    { code: "H21", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٧٤٠_Google.png" },
    { code: "H22", price: 980, material: "Rhinestone", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٧٥٨_Google.png" },
    { code: "H23", price: 980, material: "Flower", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٨١٢_Google.png" },
    { code: "H24", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٧٥٠_Google.png" },
    { code: "H25", price: 980, material: "Pearl", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٧١٦_Google.png" },
    { code: "H26", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٤١٥١_Google.png" },
    { code: "H27", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٨٢٦_Google.png" },
    { code: "H28", price: 980, material: "Rhinestone", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٤٢٠٧_Google.png" },
    { code: "H29", price: 980, material: "Flower", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٩٤٦_Google.png" },
    { code: "H30", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٥٣٧_Google.png" },
    { code: "H31", price: 980, material: "Pearl", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٥٢٧_Google.png" },
    { code: "H32", price: 980, material: "Gold Plated", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٩٥٧_Google.png" },
    { code: "H33", price: 980, material: "Silver", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢١٠٧٥٠_Google.png" },
    { code: "H34", price: 980, material: "Rhinestone", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/61F90TfCswL._SL1001_.jpg" },
    { code: "H35", price: 980, material: "Flower", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/319e00b4-c055-415c-9169-76ab2c85c837-500x500-HJ9AvnEUQQFbXNFAkBT0Vo3BlhwCfGAQ9HV6E0gG.png" },
    { code: "H36", price: 980, material: "Crystal", img: "c:/Users/MENNA/Desktop/project/accssesoris/hiar/Screenshot_٢٠٢٥١٢٣٠_٢٢٤٠٠٢_Google.png" },
];

const bags = [
    { code: "BG1", price: 980, material: "Leather", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٥٣٣_Google.png" },
    { code: "BG2", price: 980, material: "Fabric", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٧٥٥_Google.png" },
    { code: "BG3", price: 980, material: "Woven", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٤٥٨_Google.png" },
    { code: "BG4", price: 980, material: "Leather", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٨٠٢_Google.png" },
    { code: "BG5", price: 980, material: "Fabric", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٨١٠_Google.png" },
    { code: "BG6", price: 980, material: "Woven", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٩١٦_Google.png" },
    { code: "BG7", price: 980, material: "Leather", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٤١٠٤_Google.png" },
    { code: "BG8", price: 980, material: "Fabric", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٩٢٠_Google.png" },
    { code: "BG9", price: 980, material: "Woven", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٤١١١_Google.png" },
    { code: "BG10", price: 980, material: "Leather", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٨٢٨_Google.png" },
    { code: "BG11", price: 980, material: "Fabric", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٨١٤_Google.png" },
    { code: "BG12", price: 980, material: "Woven", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٨٠٦_Google.png" },
    { code: "BG13", price: 980, material: "Leather", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٨٣٩_Google.png" },
    { code: "BG14", price: 980, material: "Fabric", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٨٤٨_Google.png" },
    { code: "BG15", price: 980, material: "Woven", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٩١٣_Google.png" },
    { code: "BG16", price: 980, material: "Leather", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٤٠٣٠_Google.png" },
    { code: "BG17", price: 980, material: "Fabric", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٤٠٥٩_Google.png" },
    { code: "BG18", price: 980, material: "Woven", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٤٠٥١_Google.png" },
    { code: "BG19", price: 980, material: "Leather", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٤٢٦_Google.png" },
    { code: "BG20", price: 980, material: "Fabric", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٥١٠_Google.png" },
    { code: "BG21", price: 980, material: "Woven", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٤١٤١_Google.png" },
    { code: "BG22", price: 980, material: "Leather", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٤٠١٧_Google.png" },
    { code: "BG23", price: 980, material: "Fabric", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٩٤٦_Google.png" },
    { code: "BG24", price: 980, material: "Woven", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٩٥٥_Google.png" },
    { code: "BG25", price: 980, material: "Leather", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٩٠٨_Google.png" },
    { code: "BG26", price: 980, material: "Fabric", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٣٨٣٢_Google.png" },
    { code: "BG27", price: 980, material: "Woven", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٥١٦_Google.png" },
    { code: "BG28", price: 980, material: "Leather", img: "c:/Users/MENNA/Desktop/project/accssesoris/bags/Screenshot_٢٠٢٥١٢٣٠_٢١٤٠٣٣_Google.png" },
];

const specialItems = [
    { code: "S1", price: 980, material: "Gold Plated Chain", img: "c:/Users/MENNA/Desktop/project/accssesoris/leg/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٢٠٤_Google.png" },
    { code: "S2", price: 980, material: "Silver Chain", img: "c:/Users/MENNA/Desktop/project/accssesoris/leg/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٤٠٣_Google.png" },
    { code: "S3", price: 980, material: "Belly Chain", img: "c:/Users/MENNA/Desktop/project/accssesoris/leg/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٣٥٣_Google.png" },
    { code: "S4", price: 980, material: "Anklet", img: "c:/Users/MENNA/Desktop/project/accssesoris/leg/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٤١٠_Google.png" },
    { code: "S5", price: 980, material: "Body Chain", img: "c:/Users/MENNA/Desktop/project/accssesoris/leg/Screenshot_٢٠٢٥١٢٣٠_٢٢٣١٤٩_Google.png" },
    { code: "S6", price: 980, material: "Gold Anklet", img: "c:/Users/MENNA/Desktop/project/accssesoris/leg/Screenshot_٢٠٢٥١٢٣٠_٢٢٣١٥٨_Google.png" },
    { code: "S7", price: 980, material: "Special Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_١٩٣٤١٥_Google.png" },
    { code: "S8", price: 980, material: "Gift Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٦٠٢_Google.png" },
    { code: "S9", price: 980, material: "Special Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٦٠٩_Google.png" },
    { code: "S10", price: 980, material: "Gift Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٦١٣_Google.png" },
    { code: "S11", price: 980, material: "Bridal Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٦٤٣_Google.png" },
    { code: "S12", price: 980, material: "Evening Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٩١٠_Google.png" },
    { code: "S13", price: 980, material: "Luxury Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٩٢٨_Google.png" },
    { code: "S14", price: 980, material: "Pearl Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٩١٦_Google.png" },
    { code: "S15", price: 980, material: "Crystal Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٩٣٦_Google.png" },
    { code: "S16", price: 980, material: "Gold Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٨٤٠_Google.png" },
    { code: "S17", price: 980, material: "Silver Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٦٢٩_Google.png" },
    { code: "S18", price: 980, material: "Rose Gold Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٦٣٦_Google.png" },
    { code: "S19", price: 980, material: "Antique Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٦٥٦_Google.png" },
    { code: "S20", price: 980, material: "Vintage Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٧٠٥_Google.png" },
    { code: "S21", price: 980, material: "Boho Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٧١٥_Google.png" },
    { code: "S22", price: 980, material: "Minimal Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٧٢٥_Google.png" },
    { code: "S23", price: 980, material: "Statement Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٧٣٤_Google.png" },
    { code: "S24", price: 980, material: "Charm Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٧٤٣_Google.png" },
    { code: "S25", price: 980, material: "Turquoise Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٧٤٦_Google.png" },
    { code: "S26", price: 980, material: "Gem Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٧٥٥_Google.png" },
    { code: "S27", price: 980, material: "Diamond Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢١٥٨١٤_Google.png" },
    { code: "S28", price: 980, material: "Royal Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٩٣٩_Google.png" },
    { code: "S29", price: 980, material: "Premium Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٩٥٢_Google.png" },
    { code: "S30", price: 980, material: "Elite Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٠٠٢_Google.png" },
    { code: "S31", price: 980, material: "Exclusive Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٠٠٨_Google.png" },
    { code: "S32", price: 980, material: "Limited Set", img: "c:/Users/MENNA/Desktop/project/accssesoris/spicial/Screenshot_٢٠٢٥١٢٣٠_٢٢٣٠١٤_Google.png" },
];

const others = [
    { code: "O1", price: 980, material: "Phone Strap", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٩٠٠_Google.png" },
    { code: "O2", price: 980, material: "Phone Charm", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٩٠٣_Google.png" },
    { code: "O3", price: 980, material: "Phone Case", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٨١١_Google.png" },
    { code: "O4", price: 980, material: "Phone Chain", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٨٣٧_Google.png" },
    { code: "O5", price: 980, material: "Phone Ring", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٨٢٧_Google.png" },
    { code: "O6", price: 980, material: "Phone Holder", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢٠٨٥٧_Google.png" },
    { code: "O7", price: 980, material: "Keychain", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢١٨٠١_Google.png" },
    { code: "O8", price: 980, material: "Bag Charm", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢١٨٣٠_Google.png" },
    { code: "O9", price: 980, material: "Wallet Chain", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢٢٤١٤_Google.png" },
    { code: "O10", price: 980, material: "Belt Accessory", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢١٨٤٧_Google.png" },
    { code: "O11", price: 980, material: "Brooch", img: "c:/Users/MENNA/Desktop/project/accssesoris/phone/Screenshot_٢٠٢٥١٢٣٠_٢٢١٢٣٥_Google.png" },
];

const helpImages = ["c:/Users/MENNA/Desktop/project/accssesoris/some help/جدول-مقاسات-الملابس-النسائية.jpg",
    "c:/Users/MENNA/Desktop/project/accssesoris/some help/مقاسات-الملابس-النسائية-696x398.jpg", 
    "c:/Users/MENNA/Desktop/project/accssesoris/some help/CfQ7YZhXEAAj3ij.jpg", 
    "c:/Users/MENNA/Desktop/project/accssesoris/some help/earingS.jpg", 
    "c:/Users/MENNA/Desktop/project/accssesoris/some help/F4Y1G9IePw1ZPIMZXMFR7xvDHafGnti4PNTxXTnV.jpg", 
    "c:/Users/MENNA/Desktop/project/accssesoris/some help/gpt-image-2.5-flare_اعملي_استايل_موحد_للصور_دي_وشيل_اي_اسم_او_بر-0.jpg", 
    "c:/Users/MENNA/Desktop/project/accssesoris/some help/GYDahJ7cjjIN0uIJ9UPcWWd3yFenvempMpP0xb32.jpg", 
    "c:/Users/MENNA/Desktop/project/accssesoris/some help/images (2).jpeg", 
    "c:/Users/MENNA/Desktop/project/accssesoris/some help/images (3).jpeg"
];


/* ============================================
   بناء كروت المنتجات وعرضها
   ============================================ */

// إنشاء كرت منتج
function createProductCard(item, category) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-image">
            <img src="${item.img}" alt="${item.material}" loading="lazy" onerror="this.src='https://picsum.photos/seed/${item.code}/400/400.jpg'">
        </div>
        <div class="product-info">
            <p class="product-category">Code: ${item.code}</p>
            <strong class="project-title">
                <span>${item.price} LE</span>
                <a href="#" class="more-details" onclick="event.preventDefault()">${item.material}</a>
            </strong>
        </div>
        <button class="add-cart-btn" data-code="${item.code}" data-price="${item.price}" data-material="${item.material}" data-category="${category}">
            <i class="fas fa-plus" style="margin-right:4px;font-size:0.7rem;"></i> Add to Cart
        </button>
    `;
    return card;
}

// إنشاء كرت صور مساعدة (بدون زر سلة)
function createHelpCard(imgSrc) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <div class="project-image">
            <img src="${imgSrc}" alt="Help guide" loading="lazy" onerror="this.src='https://picsum.photos/seed/help${Math.random().toString(36).substr(2,5)}/400/400.jpg'">
        </div>
    `;
    return card;
}

// ملء جميع الأقسام بالمنتجات
function renderAll() {
    const grids = [
        { id: 'necklaceGrid', data: necklaces, cat: 'Necklace' },
        { id: 'braceletGrid', data: bracelets, cat: 'Bracelet' },
        { id: 'ringGrid', data: rings, cat: 'Ring' },
        { id: 'earingGrid', data: earings, cat: 'Earring' },
        { id: 'hairGrid', data: hairItems, cat: 'Hair' },
        { id: 'bagsGrid', data: bags, cat: 'Bag' },
        { id: 'specialGrid', data: specialItems, cat: 'Special' },
        { id: 'othersGrid', data: others, cat: 'Other' },
    ];

    grids.forEach(g => {
        const el = document.getElementById(g.id);
        g.data.forEach(item => el.appendChild(createProductCard(item, g.cat)));
    });

    const helpGrid = document.getElementById('helpGrid');
    helpImages.forEach(src => helpGrid.appendChild(createHelpCard(src)));
}

renderAll();


/* ============================================
   نظام السلة
   ============================================ */
let cart = [];

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const body = document.getElementById('cartBody');
    const totalEl = document.getElementById('cartTotal');

    // تحديث العداد
    badge.textContent = cart.length;
    badge.classList.toggle('show', cart.length > 0);

    // عرض العناصر
    if (cart.length === 0) {
        body.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    } else {
        body.innerHTML = cart.map((item, i) => `
            <div class="cart-item">
                <img class="cart-item-img" src="${item.img}" alt="${item.material}" onerror="this.src='https://picsum.photos/seed/${item.code}/60/60.jpg'">
                <div class="cart-item-info">
                    <p>${item.category} — ${item.code}</p>
                    <span>${item.price} LE</span>
                </div>
                <button class="cart-item-remove" data-index="${i}" aria-label="Remove item"><i class="fas fa-trash-alt"></i></button>
            </div>
        `).join('');
    }

    // حساب المجموع
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalEl.textContent = total + ' LE';
}

// إضافة للسلة
document.addEventListener('click', function(e) {
    const btn = e.target.closest('.add-cart-btn');
    if (!btn) return;

    const code = btn.dataset.code;
    if (cart.find(c => c.code === code)) {
        showToast('Already in cart');
        return;
    }

    cart.push({
        code: code,
        price: parseInt(btn.dataset.price),
        material: btn.dataset.material,
        category: btn.dataset.category,
        img: btn.closest('.project-card').querySelector('img').src
    });

    btn.classList.add('added');
    btn.innerHTML = '<i class="fas fa-check" style="margin-right:4px;font-size:0.7rem;"></i> Added';

    updateCartUI();
    showToast('Added to cart: ' + code);
});

// حذف من السلة
document.getElementById('cartBody').addEventListener('click', function(e) {
    const btn = e.target.closest('.cart-item-remove');
    if (!btn) return;
    const index = parseInt(btn.dataset.index);
    cart.splice(index, 1);
    updateCartUI();

    // إعادة زر الإضافة لحالته الأصلية
    document.querySelectorAll('.add-cart-btn').forEach(b => {
        if (!cart.find(c => c.code === b.dataset.code)) {
            b.classList.remove('added');
            b.innerHTML = '<i class="fas fa-plus" style="margin-right:4px;font-size:0.7rem;"></i> Add to Cart';
        }
    });
});

// إرسال الطلب عبر واتساب
document.getElementById('cartOrderBtn').addEventListener('click', function() {
    if (cart.length === 0) { showToast('Cart is empty'); return; }
    
    let msg = 'Hello Mena! I want to order:\n\n';
    cart.forEach((item, i) => {
        msg += `${i + 1}. [${item.category}] Code: ${item.code} — ${item.material} — ${item.price} LE\n`;
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    msg += `\nTotal: ${total} LE`;
    
    window.open('https://wa.me/201270051033?text=' + encodeURIComponent(msg), '_blank');
});


/* ============================================
   الإشعارات
   ============================================ */
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 2700);
}


/* ============================================
   فتح وإغلاق السلة
   ============================================ */
const cartPanel = document.getElementById('cartPanel');
const cartOverlay = document.getElementById('cartOverlay');

function openCart() {
    cartPanel.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartPanel.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('cartToggle').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);


/* ============================================
   قائمة الموبايل
   ============================================ */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('open');
    });
});

navToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navToggle.click(); }
});


/* ============================================
   تأثير الهيدر عند التمرير
   ============================================ */
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
    header.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });


/* ============================================
   زر العودة للأعلى
   ============================================ */
const scrollBtn = document.getElementById('btn');
window.addEventListener('scroll', function() {
    scrollBtn.classList.toggle('show', window.scrollY > 600);
}, { passive: true });


/* ============================================
   ظهور الكروت تدريجياً عند التمرير
   ============================================ */
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = Array.from(parent.children);
            const index = siblings.indexOf(entry.target);
            const delay = Math.min(index * 60, 600);

            setTimeout(function() {
                entry.target.classList.add('visible');
            }, delay);

            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.project-card').forEach(function(card) {
    observer.observe(card);
});