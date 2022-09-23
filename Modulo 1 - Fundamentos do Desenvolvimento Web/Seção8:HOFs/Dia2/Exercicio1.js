const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// const authorBornInYear = (year) => books.find((element) => element.author.birthYear === year).author.name;

// console.log(authorBornInYear(1947))

// function smallerName() {
//   let nameBook = books[0].name;
//   let titleSize = 0;
//   // escreva aqui o seu código
//   books.forEach((element) => {
//     if (element.name.length < nameBook.length) {
//       nameBook = element.name;
//     }
//   })

//   // Variável nameBook que receberá o valor do menor nome;
//   return nameBook;
// }
// console.log (smallerName())

// books.sort((a, b) => a.releaseYear - b.releaseYear)

// // console.log(books)

// const everyAuthorWasBornInXXCentury = () => books.every((element) => element.author.birthYear > 1901 && element.author.birthYear < 2001)

// console.log (everyAuthorWasBornInXXCentury())

const authorUniqueBirth = () => {
  let notBornInSameYear = true;
  books.forEach((element) => {
    let currentAuthor = element.author;
    const test = books.some((element2) => element2.author.birthYear === currentAuthor.birthYear && element2.author.name !== currentAuthor.name);
    if (test) {
      notBornInSameYear = false;
    }
  })
  return notBornInSameYear
}

console.log(authorUniqueBirth())