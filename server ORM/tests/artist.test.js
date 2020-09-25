const request = require("supertest");
const app = require("../app");
const { Artist } = require("../models");

const artistMock = [
    {
        id: 1,
        name: "Dor",
        coverImg: "img1",
        releasedAt: "2020-09-12",
    },
    {
        id: 2,
        name: "Kachlon",
        coverImg: "img2",
        releasedAt: "2020-09-12",
    },
];

describe("api v1", () => {
    beforeEach(async () => {
        await Artist.destroy({ truncate: true, force: true });
    });

    it("Can create artists and get them", async () => {
        console.log("process.env.NODE_ENV", process.env.NODE_ENV);
        await request(app).post("/api/artists").send(artistMock[0]);
        await request(app).post("/api/artists").send(artistMock[1]);
        const { body } = await request(app).get("/api/artists");
        expect(body[0].name).toBe(artistMock[0].name);
        expect(body[1].name).toBe(artistMock[1].name);
    });

    it("Can get single artist", async () => {
        await request(app).post("/api/artists").send(artistMock[0]);
        await request(app).post("/api/artists").send(artistMock[1]);
        const { body: getSingleArtistResponseBody } = await request(app).get(
            `/api/artists/2`
        );
        expect(getSingleArtistResponseBody.name).toBe(artistMock[1].name);
        expect(getSingleArtistResponseBody.id).toBe(artistMock[1].id);
    });
});
