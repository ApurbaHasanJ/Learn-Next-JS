const { default: mongoose } = require("mongoose");

export const mongoConnect = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/test-db")
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.log("MongoDB Error: " + err));
};
