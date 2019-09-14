const moment = require("moment");

exports.username = [
  {
    usernameId: 1,
    name: "Satoshi Nakamoto"
  },
  {
    usernameId: 2,
    name: "Vitalik Buterin"
  }
];

exports.performance = [
  {
    // Informações referentes a Satoshi
    performanceId: 1,
    usernameId: 1,
    date: moment()
      .subtract(1, "days")
      .format("DD/MM/YYYY"),
    performance: 3
  },

  {
    performanceId: 2,
    usernameId: 1,
    date: moment()
      .subtract(2, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },

  {
    performanceId: 3,
    usernameId: 1,
    date: moment()
      .subtract(3, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },

  {
    performanceId: 4,
    usernameId: 1,
    date: moment()
      .subtract(4, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },

  {
    performanceId: 5,
    usernameId: 1,
    date: moment()
      .subtract(5, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },

  {
    performanceId: 6,
    usernameId: 1,
    date: moment()
      .subtract(6, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },

  //Informações referentes ao Vitalik
  {
    performanceId: 1,
    usernameId: 2,
    date: moment()
      .subtract(1, "days")
      .format("DD/MM/YYYY"),
    performance: 2
  },

  {
    performanceId: 2,
    usernameId: 2,
    date: moment()
      .subtract(2, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },

  {
    performanceId: 3,
    usernameId: 2,
    date: moment()
      .subtract(3, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },

  {
    performanceId: 4,
    usernameId: 2,
    date: moment()
      .subtract(4, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },

  {
    performanceId: 5,
    usernameId: 2,
    date: moment()
      .subtract(5, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  },

  {
    performanceId: 6,
    usernameId: 2,
    date: moment()
      .subtract(6, "days")
      .format("DD/MM/YYYY"),
    performance: Math.random()
  }
];

exports.portfolio = [
  //Portólio referente a Satoshi
  {
    portfolioId: 1,
    usernameId: 1,
    coin: "Bitcoin",
    amount: 1
  },

  {
    portfolioId: 2,
    usernameId: 1,
    coin: "Ethereum",
    amount: 1.5
  },

  {
    portfolioId: 3,
    usernameId: 1,
    coin: "Dogecoin",
    amount: 0.5
  },

  {
    portfolioId: 4,
    usernameId: 1,
    coin: "Decred",
    amount: 2
  },

  //Portólio referente ao Vitalik
  {
    portfolioId: 1,
    usernameId: 2,
    coin: "IOTA",
    amount: 2
  },

  {
    portfolioId: 2,
    usernameId: 2,
    coin: "Tether",
    amount: 3.9
  },

  {
    portfolioId: 3,
    usernameId: 2,
    coin: "EOS",
    amount: 0.6
  },

  {
    portfolioId: 4,
    usernameId: 2,
    coin: "Stellar",
    amount: 5
  }
];
