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


18 sayısının, sıralandıktan sonra hangi case'e girdiğini belirlemek için Binary Search algoritması kullanılır. Binary Search, sıralı bir dizide aranan bir elemanı bulmak için kullanılan etkili bir algoritmadır.

Eğer 18 sayısı sıralandıktan sonra ortada yer alıyorsa, Average case'e girer. Çünkü bu durumda 18, dizinin ortasında bulunmaktadır.

Eğer 18 sayısı sıralandıktan sonra sondaysa, Worst case'e girer. Çünkü bu durumda 18, dizinin en sonunda yer almaktadır.

Eğer 18 sayısı sıralandıktan sonra dizinin en başındaysa, Best case'e girer. Çünkü bu durumda 18, dizinin en başında yer almaktadır.

Bu durumda, 18 sayısının sıralandıktan sonra Average case'e girdiği söylenebilir.

[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

Verilen dizinin Selection Sort'a göre ilk 4 adımı şu şekildedir:

1. [7, 3, 5, 8, 2, 9, 4, 15, 6] -> En küçük elemanı bulmak için dizinin tamamı taranır. En küçük eleman olan 2, dizinin ilk elemanıyla yer değiştirilir.
   [2, 3, 5, 8, 7, 9, 4, 15, 6]

2. [2, 3, 5, 8, 7, 9, 4, 15, 6] -> İkinci en küçük elemanı bulmak için dizinin ikinci elemandan sonraki kısmı taranır. En küçük eleman olan 3, dizinin ikinci elemanıyla yer değiştirilir.
   [2, 3, 5, 8, 7, 9, 4, 15, 6]

3. [2, 3, 5, 8, 7, 9, 4, 15, 6] -> İkinci en küçük elemanı bulmak için dizinin üçüncü elemandan sonraki kısmı taranır. En küçük eleman olan 4, dizinin üçüncü elemanıyla yer değiştirilir.
   [2, 3, 4, 8, 7, 9, 5, 15, 6]

4. [2, 3, 4, 8, 7, 9, 5, 15, 6] -> İkinci en küçük elemanı bulmak için dizinin dördüncü elemandan sonraki kısmı taranır. En küçük eleman olan 5, dizinin dördüncü elemanıyla yer değiştirilir.
   [2, 3, 4, 5, 7, 9, 8, 15, 6]

Bu şekilde ilk 4 adım gerçekleştirilerek dizinin sıralama işlemi devam eder.