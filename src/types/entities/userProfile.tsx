//! USer'ın kendini nasıl gördüğüdür. Bizim user'daki bilgilerimizdir.
//! USer'ın profilidir. yani.
export interface UserProfile {
  id: string;
  nickname?: string | null;
  name: string;
  surname: string;
  email: string;
  image?: string | null;
  phoneNumber?: string | null;
  birthDate?: string | null;
  gender?: string | null;
  city?: string | null;
  //? BURAYA KREDİ KARTI CART CURTU ve DAHA NICELERİ GELEBİLİR.
}
