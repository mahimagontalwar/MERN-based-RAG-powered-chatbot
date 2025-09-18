async function getPassages(query) {
  return [
    `Background info about ${query}: It is a concept often used in testing AI chatbots.`,
    `Additional details: ${query} is being used here as a placeholder to simulate retrieval from a knowledge base.`
  ];
}

module.exports = { getPassages };