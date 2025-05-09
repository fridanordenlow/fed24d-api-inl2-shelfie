import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
    author: {
		type: String,
		required: true
	},
    genres: {
		type: [String],
		required: true
	},
    image: {
		type: String,
		required: false
	},
	published_year: {
		type: Number,
		required: true
	},
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reviews' 
      }]
});
 
export default mongoose.model('Books', BookSchema);