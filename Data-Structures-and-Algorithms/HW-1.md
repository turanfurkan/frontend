Verilen dizinin Insertion Sort'a göre sıralanması için aşamalar şu şekildedir:

[22, 27, 16, 2, 18, 6]
1. İlk eleman (22) zaten sıralı olduğu kabul edilir.

[22, 27, 16, 2, 18, 6]
2. İkinci eleman (27), önceki sıralı elemandan (22) daha büyük olduğu için yer değiştirir.
   [22, 27, 16, 2, 18, 6]

[22, 27, 16, 2, 18, 6]
3. Üçüncü eleman (16), önceki sıralı elemandan (27) daha küçük olduğu için doğru konumuna yerleşene kadar sola doğru kaydırılır.
   [16, 22, 27, 2, 18, 6]

[16, 22, 27, 2, 18, 6]
4. Dördüncü eleman (2), önceki sıralı elemanlardan daha küçük olduğu için doğru konumuna yerleşene kadar sola doğru kaydırılır.
   [2, 16, 22, 27, 18, 6]

[2, 16, 22, 27, 18, 6]
5. Beşinci eleman (18), önceki sıralı elemanlardan daha küçük olduğu için doğru konumuna yerleşene kadar sola doğru kaydırılır.
   [2, 16, 18, 22, 27, 6]

[2, 16, 18, 22, 27, 6]
6. Altıncı eleman (6), önceki sıralı elemanlardan daha küçük olduğu için doğru konumuna yerleşene kadar sola doğru kaydırılır.
   [2, 6, 16, 18, 22, 27]

Sıralama işlemi tamamlandığında verilen dizi, [2, 6, 16, 18, 22, 27] şeklinde sıralanmış olur.

Insertion Sort için en kötü durumda, yani tamamen ters sıralı bir dizide Big-O gösterimi O(n^2) olur. Ancak en iyi durumda, yani zaten sıralı bir dizide veya neredeyse sıralı bir dizide (az sayıda yer değiştirme gerektiren) Big-O gösterimi O(n) olabilir. Ortalama durumda da Insertion Sort'un Big-O gösterimi O(n^2) olarak kabul edilir.