const GO_URL =
  "https://pokemon-go-api.github.io/pokemon-go-api/api/pokedex.json";
// cache pour éviter trop de requêtes
const cache = {};

const specialCases = {
  "nidoran-male": "nidoran-m",
  "nidoran-female": "nidoran-f",
  "mr-mime": "mr-mime",
  "mime-jr": "mime-jr",
  farfetchd: "farfetchd",
  "deoxys-normal": "deoxys",
};

async function getPokemonGo() {
  const res = await fetch(GO_URL);
  return await res.json();
}

async function getFrenchName(name) {
  if (!name) return "UNKNOWN";

  let formattedName = name.toLowerCase();

  // 🔥 gestion cas spéciaux
  formattedName = specialCases[formattedName] || formattedName;

  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${formattedName}`,
    );

    if (!res.ok) {
      console.log("Erreur API pour :", formattedName);
      return name;
    }

    const data = await res.json();

    const fr = data.names.find((n) => n.language.name === "fr");

    return fr ? fr.name : name;
  } catch (error) {
    console.error("Erreur fetch :", name);
    return name;
  }
}
function getEnglishName(pkm) {
  return (
    pkm.pokemonName ||
    pkm.name ||
    pkm.id ||
    pkm.names?.en ||
    pkm.names?.english ||
    ""
  );
}

async function mergeData() {
  const goData = await getPokemonGo();
  const result = [];

  for (const pkm of goData) {
    const rawName = getEnglishName(pkm);

    if (!rawName) {
      console.log("Pokémon ignoré :", pkm.id);
      continue;
    }

    const name_en = rawName.toLowerCase();

    const name_fr = await getFrenchName(name_en);

    result.push({
      id: pkm.dexNr || pkm.id,
      name_en,
      name_fr,
      type1: pkm.types?.[0] || "",
      type2: pkm.types?.[1] || "",
      max_cp: pkm.stats?.maxCP || "",
    });
  }

  return result;
}

function toCSV(data) {
  if (!data || data.length === 0) {
    console.error("Aucune donnée à convertir en CSV");
    return "";
  }

  const headers = Object.keys(data[0]).join(",");

  const rows = data.map((obj) => Object.values(obj).join(","));

  return [headers, ...rows].join("\n");
}

async function main() {
  const data = await mergeData();
  const csv = toCSV(data);

  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "pokemon_go_fr.csv";
  a.click();
}

document.getElementById("generate").addEventListener("click", main);
