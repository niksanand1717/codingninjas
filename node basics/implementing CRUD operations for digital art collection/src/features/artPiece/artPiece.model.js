// Import the necessary modules here

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    // Retrieve all art pieces
    return this.db;
  }

  static findOne(id) {
    // Retrieve a specific art piece by its id
    return ArtPiece.db.find((data) => id == data.id);
  }

  static update(id, data) {
    // Update the details of a specific art piece
    const artPiece = this.findOne(id);
    if (artPiece) {
      Object.assign(artPiece, data);
      return artPiece;
    }
    return null; // Return null if not found
  }

  static delete(id) {
    // Delete a specific art piece
    const index = ArtPiece.db.findIndex((data) => id == data.id);
    if (index !== -1) {
      return ArtPiece.db.splice(index, 1); // Return the deleted item
    }
    return null; // Return null if not found
  }
}
