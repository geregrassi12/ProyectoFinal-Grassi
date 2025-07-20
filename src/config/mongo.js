import mongoose from "mongoose";

export const connectMongo = async () => {
    try {
        await mongoose.connect("mongodb+srv://geremiasgrassi:pol456ik@cluster0.cy63mao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conectado a MongoDB!");        
    } catch (error) {
        console.log("Error al conectarse a MongoDB", error);
        
    }
}