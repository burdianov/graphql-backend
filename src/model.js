const initialDB = [
  [
    'ID-1',
    {
      title: 'Harry Potter',
      author: 'J.K. Rowling'
    }
  ],
  [
    'ID-2',
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton'
    }
  ]
];

const booksBD = new Map(initialDB);

export const getBooks = () => {
  const books = [];

  booksBD.forEach((value, key) => {
    console.log(key);
    console.log(value);
    const currentBook = {
      id: key,
      ...value
    };
    books.push(currentBook);
  });
  return books;
};

console.log(getBooks());
