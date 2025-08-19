"use server"
import connectDB from "@/db/connectDB";
import Registered from "@/models/registered";

export async function POST(request) {
    try {
        await connectDB();
    
        const data = await request.json();
        const { name, festName, festFootfall, teamMembers, instagramLink, websiteLink, festBrochure, collaborationType } = data;
    
        if (!name || !festName || !festFootfall || !teamMembers || !instagramLink || !collaborationType) {
        return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
        }
    
        const newRegistration = new Registered({
        name,
        festName,
        festFootfall,
        teamMembers,
        instagramLink,
        websiteLink,
        festBrochure,
        collaborationType
        });
    
        await newRegistration.save();
    
        return new Response(JSON.stringify({ message: "Registration successful" }), { status: 201 });
    } catch (error) {
        console.error("Error in registration:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 });
    }
    }
