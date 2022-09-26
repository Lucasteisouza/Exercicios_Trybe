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

const formatedBookNames = books.map((element) => `${element.name} - ${element.genre} - ${element.author.name}`)

// console.log(formatedBookNames);

const authorsAndAges = books.map((element) => {
  const obj = {age: (element.releaseYear - element.author.birthYear),
  author: element.author.name
  }
  return obj;
}).sort((a,b) => a.age - b.age);

// console.log(authorsAndAges)

const filteredBooks = (genreParam) => books.filter((element) => element.genre === genreParam);

// console.log(filteredBooks('Fantasia'))

const olderThan60 = books.filter((element) => (2022 - element.releaseYear) >= 60).sort((a,b) => a.releaseYear - b.releaseYear);

// console.log(olderThan60)

const fantasyOrFictionAuthors = books.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica')

fantasyOrFictionAuthors.sort((a, b) => a.author.name > b.author.name ? 1 : -1)

console.log(fantasyOrFictionAuthors)
