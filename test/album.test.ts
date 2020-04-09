import request from "supertest";
import app from "../src/app";

describe("GET /api/v1/albums", () => {
    it("should return 200 OOOK", (done) => {
        return request(app).get("/api/v1/albums")
            .expect(200,done);
    });
});


describe("DELETE /api/v1/albums/5e8e49aa2ff35b1616acf601", () => {
    it("should return 200 OK", (done) => {
        return request(app).delete("/api/v1/albums/5e8e49aa2ff35b1616acf601")
            .expect(200, done)
    });
});

describe("GET /api/v1/albums/5e8e3be6b55a13023ba84cd7", () => {
    it("should return 404 Not Found", (done) => {
        return request(app).get("/api/v1/album/5e8e3be6b55a13023ba84cd7")
            .expect(404, done);
    });
});

describe("GET /api/v1/albumes/5e8e3be6b55a13023ba84cd7", () => {
    it("should return 404", (done) => {
        request(app).get("/api/v1/albumes/5e8e3be6b55a13023ba84cd7")
            .expect(404, done);
    });
});

describe("POST /api/v1/albums/", () => {
    it("should return 200 with correct parameters", (done) => {
        return request(app).post("/api/v1/albums/")
            .field("releaseDate", "12/12/2020")
            .field("rating", "5")
            .field("title", "test")
            .field("year", 2017)
            .expect(200)
            .end(() => {
                done();
            });
    });
});
