/**
 * Function to prepare pagination properties
 * 
 * @param {Number} page Number of the page to be queried
 * @param {Number} count Number of records requested
 */
const getPaginationProperties = (page, count) => {
  const startFrom = (page - 1) * count;
  const upTo = (page * count) - (page === 1 ? 0 : 1);

  return { startFrom, upTo };
};

module.exports = getPaginationProperties;
