$(document).ready(function() {
	
	var books = [ 
	{
		"id": 0, 
	  "title": "To Kill a Mockingbird",
	  "author": "Harper Lee",
	  "genre": "Fiction",
	  "price": 10.99,
	  "publication_year": 1960,
	  "photo": "assets/to-kill-a-mocking-bird.jpg"

	}, 
	{
		"id": 1,
	  "title": "1984",
	  "author": "George Orwell",
	  "genre": "Fiction",
	  "price": 12.99,
	  "publication_year": 1949,
	  "photo": "assets/george-orwell.jpg"
	},
	{
		"id": 2,
	  "title": "Becoming",
	  "author": "Michelle Obama",
	  "genre": "Biography",
	  "price": 14.99,
	  "publication_year": 2018,
	  "photo": "assets/becoming.jpg"
	},
	{
		"id": 3,
	  "title": "The Great Gatsby",
	  "author": "F. Scott Fitzgerald",
	  "genre": "Fiction",
	  "price": 11.99,
	  "publication_year": 1925,
	  "photo": "assets/the-great-gatsby.jpg"
	},
	{
		"id": 4,
	  "title": "The Catcher in the Rye",
	  "author": "J.D. Salinger",
	  "genre": "Fiction",
	  "price": 10.99,
	  "publication_year": 1951,
	  "photo": "assets/the-catcher-in-the-rye copy.jpg"
	},
	{
		"id": 5,
	  "title": "To the Lighthouse",
	  "author": "Virginia Woolf",
	  "genre": "Fiction",
	  "price": 9.99,
	  "publication_year": 1927,
	  "photo": "assets/to-the-lighthouse.jpg"
	},
	{
		"id": 6,
	  "title": "Brave New World",
	  "author": "Aldous Huxley",
	  "genre": "Fiction",
	  "price": 12.99,
	  "publication_year": 1932,
	  "photo": "assets/brave-new-world.jpg"
	},
	{
		"id": 7,
	  "title": "Moby-Dick",
	  "author": "Herman Melville",
	  "genre": "Fiction",
	  "price": 11.99,
	  "publication_year": 1851,
	  "photo": "assets/moby-dick.jpg"
	},
	{
		"id": 8,
	  "title": "The Hobbit",
	  "author": "J.R.R. Tolkien",
	  "genre": "Fantasy",
	  "price": 14.99,
	  "publication_year": 1937,
	  "photo": "assets/the-hobbit.jpg"
	},
	{
		"id": 9,
	  "title": "The Lord of the Rings",
	  "author": "J.R.R. Tolkien",
	  "genre": "Fantasy",
	  "price": 24.99,
	  "publication_year": 1954,
	  "photo": "assets/the-lord-of-the-rings.jpg"
	},
	{
		"id": 10,
	  "title": "Harry Potter and the Sorcerer's Stone",
	  "author": "J.K. Rowling",
	  "genre": "Fantasy",
	  "price": 13.99,
	  "publication_year": 1997,
	  "photo": "assets/harry-potter-and-the-sorcerer-s-stone.jpg"
	},
	{
		"id": 11,
	  "title": "The Da Vinci Code",
	  "author": "Dan Brown",
	  "genre": "Mystery",
	  "price": 10.99,
	  "publication_year": 2003,
	  "photo": "assets/the-da-vinci-code.jpg"
	  
	},
	{
		"id": 12,
	  "title": "Gone Girl",
	  "author": "Gillian Flynn",
	  "genre": "Mystery",
	  "price": 9.99,
	  "publication_year": 2012,
	  "photo": "assets/gone-girl.jpg"
	},
	{
		"id": 13,
	  "title": "The Girl with the Dragon Tattoo",
	  "author": "Stieg Larsson",
	  "genre": "Mystery",
	  "price": 11.99,
	  "publication_year": 2005,
	  "photo": "assets/the-girl-with-the-dragon-tattoo.jpg"
	},
	{
		"id": 14,
	  "title": "The Hunger Games",
	  "author": "Suzanne Collins",
	  "genre": "Science Fiction",
	  "price": 12.99,
	  "publication_year": 2008,
	  "photo": "assets/the-hunger-games-hunger-games.jpg"
	},
	{
		"id": 15,
	  "title": "Dune",
	  "author": "Frank Herbert",
	  "genre": "Science Fiction",
	  "price": 13.99,
	  "publication_year": 1965,
	  "photo": "assets/dune.jpg"
	},
	{
		"id": 16,
	  "title": "Foundation",
	  "author": "Isaac Asimov",
	  "genre": "Science Fiction",
	  "price": 10.99,
	  "publication_year": 1951,
	  "photo": "assets/foundation.jpg"
	},
	{
		"id": 17,
	  "title": "Sapiens: A Brief History of Humankind",
	  "author": "Yuval Noah Harari",
	  "genre": "Non-Fiction",
	  "price": 14.99,
	  "publication_year": 2011,
	  "photo": "assets/sapiens.jpg"
	},
	{
		"id": 18,
	  "title": "The Power of Now",
	  "author": "Eckhart Tolle",
	  "genre": "Self-Help",
	  "price": 11.99,
	  "publication_year": 1997,
	  "photo": "assets/the-power-of-now.jpg"
	},
	{
		"id": 19,
	  "title": "Educated",
	  "author": "Tara Westover",
	  "genre": "Biography",
	  "price": 12.99,
	  "publication_year": 2018,
	  "photo": "assets/educated.jpg"
    }
	]
	sessionStorage.setItem("booksData", JSON.stringify(books));
})