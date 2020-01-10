export default class BookstoreService{
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: '$32',
            coverImage: 'https://www.mann-ivanov-ferber.ru/assets/images/covers/01/18401/1.00x-thumb.png',
        },
        {
            id: 2,
            title: 'Realise It!',
            author: 'Michael T. Niggard',
            price: '$45',
            coverImage: 'https://www.mann-ivanov-ferber.ru/assets/images/covers/79/23279/1.00x-thumb.png',
        }

    ];
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(Math.random() > 0.75){
                    reject(new Error('Something bad happened'))
                }
                resolve(this.data)

            }, 700)
        });
    }
}