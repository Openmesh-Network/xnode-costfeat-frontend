const dataOptions = {
  NodeOperator: {
    'Solana(RPC)': {
      Equinix: {
        Cost: 1735,
        Time: '250',
      },
      Azure: {
        Cost: 1718.59,
        Time: '270',
      },
      GCP: {
        Cost: 2150.99,
        Time: '240',
      },
      AWS: {
        Cost: 1456,
        Time: '280',
      },
    },
    'Solana(Verifier)': {
      Equinix: {
        Cost: 960,
        Time: '250',
      },
      Azure: {
        Cost: 586.73,
        Time: '270',
      },
      GCP: {
        Cost: 1138.35,
        Time: '240',
      },
      AWS: {
        Cost: 757.84,
        Time: '280',
      },
    },
    'Fantom(API Node)': {
      Azure: {
        Cost: 2500,
        Time: '240',
      },
      GCP: {
        Cost: 1575.55,
        Time: '250',
      },
      AWS: {
        Cost: 1500,
        Time: '270',
      },
    },
    'Fantom(Validator Node)': {
      Equinix: {
        Cost: 2418,
        Time: '280',
      },
      Azure: {
        Cost: 699.17,
        Time: '290',
      },
      GCP: {
        Cost: 653.95,
        Time: '240',
      },
      AWS: {
        Cost: 749,
        Time: '230',
      },

    },
    'Fantom(Read Only)': {
      Equinix: {
        Cost: 2418,
        Time: '240',
      },
      Azure: {
        Cost: 699.17,
        Time: '260',
      },
      GCP: {
        Cost: 653.95,
        Time: '270',
      },
      AWS: {
        Cost: 500,
        Time: '280',
      },
    },
    'Ethereum(Full Node)': {
      Azure: {
        Cost: 503,
        Time: '250',
      },
      GCP: {
        Cost: 185,
        Time: '260',
      },
      AWS: {
        Cost: 150,
        Time: '280',
      },
    },
    'Ethereum(Archive Node)': {
      Equinix: {
        Cost: 2418,
        Time: '240',
      },
      Azure: {
        Cost: 2000,
        Time: '250',
      },
      GCP: {
        Cost: 1300,
        Time: '280',
      },
      AWS: {
        Cost: 1360,
        Time: '290',
      },
    },
    'Near(Validator)': {
      'Equinix(BareMetal)': {
        Cost: 558,
        Time: '250',
      },
      Azure: {
        Cost: 360,
        Time: '260',
      },
      GCP: {
        Cost: 220,
        Time: '270',
      },
      AWS: {
        Cost: 410,
        Time: '280',
      },
    },
=======
    },
    'Fantom(Read Only)': {
      Equinix: {
        Cost: 2418,
        Time: '240',
      },
      Azure: {
        Cost: 699.17,
        Time: '260',
      },
      GCP: {
        Cost: 653.95,
        Time: '270',
      },
      AWS: {
        Cost: 500,
        Time: '280',
      },
    },
    'Ethereum(Full Node)': {
      Azure: {
        Cost: 503,
        Time: '250',
      },
      GCP: {
        Cost: 185,
        Time: '260',
      },
      AWS: {
        Cost: 150,
        Time: '280',
      },
    },
    'Ethereum(Archive Node)': {
      Equinix: {
        Cost: 2418,
        Time: '240',
      },
      Azure: {
        Cost: 2000,
        Time: '250',
      },
      GCP: {
        Cost: 1300,
        Time: '280',
      },
      AWS: {
        Cost: 1360,
        Time: '290',
      },
    },
    'Near(Validator)': {
      'Equinix(BareMetal)': {
        Cost: 558,
        Time: '250',
      },
      Azure: {
        Cost: 360,
        Time: '260',
      },
      GCP: {
        Cost: 220,
        Time: '270',
      },
      AWS: {
        Cost: 410,
        Time: '280',
      },
    },

    'Near(RPC Node)': {
      Azure: {
        Cost: 1080,
        Time: '280',
      },
      GCP: {
        Cost: 980,
        Time: '250',
      },
      AWS: {
        Cost: 1130,
        Time: '290',
      },

    },
    'Avalanche Node': {
      Equinix: {
        Cost: 558,
        Time: '280',
      },
      Azure: {
        Cost: 221,
        Time: '270',
      },
      GCP: {
        Cost: 274,
        Time: '250',
      },
      AWS: {
        Cost: 234.8,
        Time: '240',
      },
    },
    'Tron Node': {
      Equinix: {
        Cost: 2418,
        Time: '250',
      },
      Azure: {
        Cost: 758.25,
        Time: '240',
      },
      GCP: {
        Cost: 1197,
        Time: '270',
      },
      AWS: {
        Cost: 810,
        Time: '290',
      },
    },
  },

  Data: {
    Crypto: {
      CoinGecko: {
        Cost: 129,
        Time: '120 minutes',
      },
      CoinmarketCap: {
        Cost: 29,
        Time: '150 minutes',
      },
      'Unified APIs': {
        Cost: 0,
        Time: '10 minutes',
      },
      Brave: {
        Cost: 45000,
        Time: '100 minutes',
      },
      Alchemy: {
        Cost: 75000,
        Time: '200 minutes',
      },
    },
    Financial: {
      Marketstack: {
        Cost: 10,
        Time: '120 minutes',
      },
      Polygon: {
        Cost: 29,
        Time: '150 minutes',
      },
      'Unified APIs': {
        Cost: 0,
        Time: '10 minutes',

      },
    },
  },
}

export default dataOptions
