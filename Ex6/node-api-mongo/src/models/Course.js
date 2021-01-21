const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        reuquired: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

CourseSchema.plugin(mongoosePaginate);
mongoose.model('Course', CourseSchema);