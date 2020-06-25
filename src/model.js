import { v4 as uuidv4 } from 'uuid';

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
    const currentBook = {
      id: key,
      ...value
    };

    books.push(currentBook);
  });

  return books;
};

export const getBookById = (id) => {
  const book = booksBD.get(id);
  return { id, ...book };
};

export const saveBook = (book) => {
  const id = uuidv4();
  booksBD.set(id, book);
  const savedBook = booksBD.get(id);

  return { id, ...savedBook };
};

export const removeBook = (id) => {
  const expectedBook = booksBD.get(id);
  booksBD.delete(id);
  return { id, ...expectedBook };
};

export const updateBook = (id, receivedBook) => {
  const prevBook = booksBD.get(id);
  const expectedBook = {
    ...prevBook,
    ...receivedBook
  };

  removeBook(id);

  booksBD.set(id, expectedBook);
  const savedBook = booksBD.get(id);

  return { id, ...expectedBook };
};
