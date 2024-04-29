import express from "express";
import bodyParser from "body-parser";
import {
  AreaNameGenerator,
  TavernPatronGenerator,
  PotionDescriptionGenerator,
  ArenaGamesGenerator,
  BrothelGenerator,
  CastleGenerator,
  HarlotGenerator,
  DnD35CharacterGenerator,
  PrytzCritialHitCharts,
  GuildhouseTreasureGenerator,
  personalCharacteristicsGenerator,
  sidePlotGenerator,
  dungeonRoomDescriptionGenerator,
} from "./generators";
import {
  PlayerRepository,
  CharacterRepository,
  AttributesRepository,
  SkillsRepository,
  SpecializationsRepository,
} from "./repositories";
import { getBaseUrl } from "./utils/Helpers";

const app = express();
app.use(bodyParser.json());

// /api/players
app.get("/api/players/:id", (req, res) => {
  let id: number = Number(req.params.id);

  let repo = new PlayerRepository();
  let result = repo.getSingle(id);

  res.send(result);
});

app.get("/api/players/", (req, res) => {
  let repo = new PlayerRepository();
  let result = repo.getAll();

  res.send(result);
});

app.get("/api/players/:id/characters", (req, res) => {
  let id: number = Number(req.params.id);

  let repo = new CharacterRepository();
  let result = repo.getCharacters(id);

  res.send(result);
});

// /api/characters
app.get("/api/characters/", (req, res) => {
  let repo = new CharacterRepository();
  let result = repo.getAll();

  res.send(result);
});

app.get("/api/characters/:id", (req, res) => {
  let id: number = Number(req.params.id);

  let repo = new CharacterRepository();
  let result = repo.getSingle(id);
  if (result == null) return res.send();

  let model = {
    Id: result.Id,
    PlayerId: result.PlayerId,
    Name: result.Name,
    Nickname: result.Nickname,
    Homeworld: result.Homeworld,
    Concept: result.Concept,
    Age: result.Age,
    Hair: result.Hair,
    Eyes: result.Eyes,
    Skin: result.Skin,
    Height: result.Height,
    Weight: result.Weight,
    Birthmarks: result.Birthmarks,
    Tattoos: result.Tattoos,
    Other: result.Other,
    AttributesPath: `${getBaseUrl(req)}/api/characters/${result.Id}/attributes`,
    SkillsPath: `${getBaseUrl(req)}/api/characters/${result.Id}/skills`,
    SpecializationsPath: `${getBaseUrl(req)}/api/characters/${
      result.Id
    }/specializations`,
  };

  res.send(model);
});

app.get("/api/characters/:id/attributes", (req, res) => {
  let id: number = Number(req.params.id);

  let repo = new AttributesRepository();
  let result = repo.getByCharacterId(id);

  res.send(result);
});

app.get("/api/characters/:id/skills", (req, res) => {
  let id: number = Number(req.params.id);

  let repo = new SkillsRepository();
  let result = repo.getByCharacterId(id);

  res.send(result);
});

app.get("/api/characters/:id/specializations", (req, res) => {
  let id: number = Number(req.params.id);

  let repo = new SpecializationsRepository();
  let result = repo.getByCharacterId(id);

  res.send(result);
});

// /api/attributes
app.get("/api/attributes/", (req, res) => {
  let repo = new AttributesRepository();
  let result = repo.getAll();

  res.send(result);
});

app.get("/api/attributes/:id", (req, res) => {
  let id: number = Number(req.params.id);

  let repo = new CharacterRepository();
  let result = repo.getSingle(id);

  res.send(result);
});

// /api/skills
app.get("/api/skills/:id", (req, res) => {
  let id: number = Number(req.params.id);

  let repo = new SkillsRepository();
  let result = repo.getSingle(id);

  res.send(result);
});

app.get("/api/skills/", (req, res) => {
  let repo = new SkillsRepository();
  let result = repo.getAll();

  res.send(result);
});

// /api/specializations
app.get("/api/specializations/:id", (req, res) => {
  let id: number = Number(req.params.id);

  let repo = new SpecializationsRepository();
  let result = repo.getSingle(id);

  res.send(result);
});

app.get("/api/specializations/", (req, res) => {
  let repo = new SpecializationsRepository();
  let result = repo.getAll();

  res.send(result);
});

// /api/random
app.get("/api/random/potion", (req, res) => {
  let potion = new PotionDescriptionGenerator().getPotionDescription();
  let result = { result: potion };
  res.send(result);
});

app.get("/api/random/areaname", (req, res) => {
  let areaName = new AreaNameGenerator().generate();
  let result = { result: areaName };
  res.send(result);
});

app.listen(3000, () => console.log("API Server listening on port 3000!"));
