var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/shopping", { useNewUrlParser: true});
var products = [
        new Product({
        imagePath: 'https://s3.scoopwhoop.com/anj/book/d1342e0d-bd22-4e2a-8614-3489e295f589.jpg',
        title: 'The Da Vinci Code',
        description: 'The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. ... The book also refers to The Holy Blood and the Holy Grail (1982) though Dan Brown has stated that it was not used as research material. The secrets of the Grail are connected, according to the novel, to Leonardo Da Vincis work',
        price: 175
    }),
        new Product({
        imagePath: 'https://i.pinimg.com/originals/fc/ba/20/fcba20cfc23ff7dadd6df6d19e3dc420.jpg',
        title: 'Catching Fire',
        description: 'With the arena something of a big clock, they must befriend the right people in order to once again survive the Hunger Games. Katniss Everdeen and Peeta Mellark become targets of the Capitol after their victory in the 74th Hunger Games sparks a rebellion in the Districts of Panem',
        price: 200
    }),
        new Product({
        imagePath: 'https://i.pinimg.com/originals/e5/96/54/e596543d4edabc538a6caa8448cab405.jpg',
        title: 'The Lord of the Rings',
        description: 'The Lord of the Rings is an epic high fantasy novel written by English author and scholar J. R. R. Tolkien.A fellowship of hobbits, elves, dwarfs, and men is formed to destroy the ring by casting it into the volcanic fires of the Crackof Doom, where it was forged.The story began from The Hobbit',
        price: 150
    }),
    new Product({
        imagePath: 'https://images.gr-assets.com/books/1408926754l/17488.jpg',
        title: 'The Famous Five',
        description: 'The Famous Five is a series of children adventure novels written by English author Enid Blyton. The first book, Five on a Treasure Island, was published in 1942. The novels feature the adventures of a group of young children – Julian, Dick, Anne and Georgina (George) – and their dog Timmy.',
        price: 220
    }),
    new Product({
        imagePath: 'http://thebookishdilettante.com/wp-content/uploads/2015/09/6_katniss-everdeen-the-hunger-games-suzanne-collins-198x300.jpg',
        title: 'Hunger Games',
        description: 'The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America. The Capitol, a highly advanced metropolis, exercises political control over the restof the nation',
        price: 350
    }),
        new Product({
        imagePath: 'https://i.pinimg.com/originals/57/56/b7/5756b7df90f18ce1536a3c81e81ce5c7.jpg',
        title: 'The Great Gatsby',
        description: 'The Great Gatsby is a story told by Nick Carraway, who was once Gatsbys neighbor,and he tells the story sometime after 1922, when the incidents that fill the book take place. As thestory opens, Nick has just moved from the Midwest to West Egg, Long Island, seeking his fortune as a bond salesman',
        price: 250
    }),
];

var done=0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}