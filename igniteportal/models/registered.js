import mongoose from 'mongoose';
const registeredSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    festName: {
        type: String,
        required: true,
        trim: true,
    },
    festFootfall: {
        type: Number,
        required: true,
    },
    teamMembers: {
        type: Number,
        required: true,
    },
    instagramLink: {
        type: String,
        required: true,
        trim: true,
    },
    websiteLink: {
        type: String,
        required: false,
        trim: true,
    },

    festBrochure: {
        type: String,
        required: false,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    collaborationType: {
        type: String,
        required: true,
        trim: true,
    },
});
const Registered =mongoose.models.Registered || mongoose.model("Registered", registeredSchema);

export default Registered;
  