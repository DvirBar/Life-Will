import axios from "axios";

export const assicuationService = {
  getAssociations,
  getAssociationsData
};

async function getAssociations(term) {
  try {
    return await axios.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=be5b7935-3922-45d4-9638-08871b17ec95&q=${term}`);
    // return await axios.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=be5b7935-3922-45d4-9638-08871b17ec95&limit=5`); // first 5 associations
  } catch (err) {
    console.log("Error", err);
  }
}

async function getAssociationsData(associations) {
  if (!associations || !associations.length) return null
  const associationsId = associations.map(association => association["שם עמותה בעברית"])
  return associationsId
}