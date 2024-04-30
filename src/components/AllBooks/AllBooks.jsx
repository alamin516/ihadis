import React from "react";
import BookCard from "../Home/BookCard";

const getData = async () => {
  const books = await (await fetch("http://localhost:8000/books")).json();
  return books.books;
};

const AllBooks = async () => {
  const data = await getData();
  

  return (
    <div className="grid gap-4 mb-8 mt-6 xss:gap-2.5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {data.book.map((book, i) => {
        return <BookCard key={i} book={book} />;
      })}
    </div>
  );
};

export default AllBooks;
