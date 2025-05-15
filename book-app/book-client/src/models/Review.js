export class Review {
  constructor(
    _id = "",
    bookId = "",
    name = "",
    content = "",
    rating = 0,
    created_at = new Date()
  ) {
    this._id = _id;
    this.bookId = bookId;
    this.name = name;
    this.content = content;
    this.rating = rating;
    this.created_at = created_at;
  }
}
