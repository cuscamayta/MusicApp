import request from "supertest";
import app from "../src/app";

describe("GET /api/v1/artists", () => {
    it("should return 200 OoooK", (done) => {
        return request(app).get("/api/v1/artists")
            .expect(200, done);
    });
});


describe("DELETE /api/v1/artists/5e8e49aa2ff35b1616acf601", () => {
    it("should return 200 OK", (done) => {
        return request(app).delete("/api/v1/artists/5e8e49aa2ff35b1616acf601")
            .expect(200, done);
    });
});


describe("POST /api/v1/artists", () => {
    it("should return 200 with correct parameters", (done) => {
        return request(app).post("/api/v1/artists")
            .field("firstName", "chalos")
            .field("lastName", "chelos")
            .field("birthDate", "12/12/2014")
            .expect(200)
            .end(function () {
                done();
            });
    });
});
