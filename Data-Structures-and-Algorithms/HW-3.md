# [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

## Cevap
Verilen dizinin Binary Search Tree'e (BST) dönüşüm aşamaları şu şekildedir:

1. İlk eleman olan 7, ağacın kök düğümü olur.
   - root: 7

2. İkinci eleman olan 5, root (7) düğümünden daha küçük olduğu için sol tarafa yerleştirilir.
   - root: 7
     - sol: 5

3. Üçüncü eleman olan 1, root (7) düğümünden daha küçük olduğu için sol tarafa yerleştirilir.
   - root: 7
     - sol: 5
        - sol: 1

4. Dördüncü eleman olan 8, root (7) düğümünden daha büyük olduğu için sağ tarafa yerleştirilir.
   - root: 7
     - sol: 5
        - sol: 1
     - sağ: 8

5. Beşinci eleman olan 3, root (7) düğümünden daha küçük olduğu için sol tarafa yerleştirilir.
   - root: 7
     - sol: 5
        - sol: 1
           - sağ: 3
     - sağ: 8

6. Altıncı eleman olan 6, root (7) düğümünden daha büyük olduğu için sağ tarafa yerleştirilir.
   - root: 7
     - sol: 5
        - sol: 1
           - sağ: 3
        - sağ: 6
     - sağ: 8

7. Yedinci eleman olan 0, root (7) düğümünden daha küçük olduğu için sol tarafa yerleştirilir.
   - root: 7
     - sol: 5
        - sol: 1
           - sol: 0
           - sağ: 3
        - sağ: 6
     - sağ: 8

8. Sekizinci eleman olan 9, root (7) düğümünden daha büyük olduğu için sağ tarafa yerleştirilir.
   - root: 7
     - sol: 5
        - sol: 1
           - sol: 0
           - sağ: 3
        - sağ: 6
     - sağ: 8
        - sağ: 9

9. Dokuzuncu eleman olan 4, root (7) düğümünden daha küçük olduğu için sol tarafa yerleştirilir.
   - root: 7
     - sol: 5
        - sol: 1
           - sol: 0
           - sağ: 3
           - sol: 4
        - sağ: 6
     - sağ: 8
        - sağ: 9

10. Onuncu ve son eleman olan 2, root (7) düğümünden daha küçük olduğu için sol tarafa yerleştirilir.
   - root: 7
     - sol: 5
        - sol: 1
           - sol: 0
           - sağ: 3
              - sol: 2
           - sol: 4
        - sağ: 6
     - sağ: 8
        - sağ: 9

Bu şekilde, verilen dizinin Binary Search Tree'e dönüşüm aşamaları tamamlanmış olur.