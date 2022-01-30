console.log('JS OK');
console.log('Vue OK', Vue);

/* 
Partendo dal markup fornito in allegato, implementare la logica per far funzionare lo slider:
Deve essere possibile scorrere le immagini cliccando sulle freccette.
I pallini in basso devono illuminarsi in base all'immagine che sto visualizzando.
Far si che cliccando i pallini, venga selezionata l'immagine corrispondente.
Note:  scegliamo una delle due seguenti soluzioni per le freccette:
Se stiamo visualizzando la prima immagine, la freccetta di sinistra può:
scomparire
passare all'ultima immagine
Se stiamo visualizzando l'ultima immagine, la freccetta  a destra può:
scomparire
passare alla prima immagine
Siate coerenti: o scompaiono o continuano a navigare, no a soluzioni miste!!
*/

const root = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        images: [
            'images/image1.jpg',
            'images/image2.jpg',
            'images/image3.jpg',
            'images/image4.jpg',
        ]
    },
    methods: {
        isActive(index) {
            return index === this.currentIndex;
        },

        setPic(index) {
            this.currentIndex = index;
        },

        prevPic() {
            if (this.currentIndex === 0) this.currentIndex = this.images.length - 1;
            else this.currentIndex--;
        },

        nextPic() {
            if (this.currentIndex === this.images.length - 1) this.currentIndex = 0;
            else this.currentIndex++;
        },
    }

});