const request = require("supertest");
const app = require("../app");
const { Artist } = require("../models");
const { generateToken } = require("./utils");
const { usersMocks, artistsMocks } = require("./mocks");

describe("api artist", () => {
  beforeEach(async () => {
    await Artist.destroy({ truncate: true, force: true });
  });

  it("Can create artists and get them", async () => {
    await request(app)
      .post("/api/artists")
      .send(artistsMocks[0])
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    await request(app)
      .post("/api/artists")
      .send(artistsMocks[1])
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    const { body } = await request(app)
      .get("/api/artists")
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    expect(body[0].name).toBe(artistsMocks[0].name);
    expect(body[1].name).toBe(artistsMocks[1].name);
  });

  it("Can get single artist", async () => {
    await request(app)
      .post("/api/artists")
      .send(artistsMocks[0])
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    await request(app)
      .post("/api/artists")
      .send(artistsMocks[1])
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    const { body: getSingleArtistResponseBody } = await request(app)
      .get(`/api/artists/2`)
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    expect(getSingleArtistResponseBody.name).toBe(artistsMocks[1].name);
    expect(getSingleArtistResponseBody.id).toBe(artistsMocks[1].id);
  });

  it("Can update single artist", async () => {
    await request(app)
      .post("/api/artists")
      .send(artistsMocks[0])
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    await request(app)
      .put("/api/artists/1")
      .send({ name: "newName" })
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    const { body: getSingleArtistResponseBody } = await request(app)
      .get(`/api/artists/1`)
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    expect(getSingleArtistResponseBody.name).toBe("newName");
  });

  it("Can delete single artist", async () => {
    await request(app)
      .post("/api/artists")
      .send(artistsMocks[0])
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    await request(app)
      .post("/api/artists")
      .send(artistsMocks[1])
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    const { body } = await request(app)
      .get(`/api/artists/`)
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    await request(app)
      .delete(`/api/artists/${body[0].id}`)
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    const { body: newBody } = await request(app)
      .get(`/api/artists/`)
      .set("authorization", `bearer ${generateToken(usersMocks[0])}`);
    expect(newBody.length).toBe(1);
  });
});
