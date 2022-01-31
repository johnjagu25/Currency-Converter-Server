const axios = require("axios");

const restCountryApi = "https://restcountries.com/v3.1/name/";

//uncomment below code if api responds
// const exchangeRateApi =
//   "http://data.fixer.io/api/latest?access_key=65a46a3c3c9c4a87ab07b6a72500b80d";
const baseCurrency = "SEK";

// comment this code if api responds
const exchange = {
  data: {
    success: true,
    timestamp: 1643278443,
    base: "EUR",
    date: "2022-01-31",
    rates: {
      AED: 4.112355,
      AFN: 116.142743,
      ALL: 120.627636,
      AMD: 542.695393,
      ANG: 2.017936,
      AOA: 591.683911,
      ARS: 117.22176,
      AUD: 1.578076,
      AWG: 2.009697,
      AZN: 1.905122,
      BAM: 1.949402,
      BBD: 2.269917,
      BDT: 96.65041,
      BGN: 1.953707,
      BHD: 0.422052,
      BIF: 2244.768494,
      BMD: 1.119608,
      BND: 1.51149,
      BOB: 7.751142,
      BRL: 6.082839,
      BSD: 1.124243,
      BTC: 3.0580276e-5,
      BTN: 84.144776,
      BWP: 12.929544,
      BYN: 2.939707,
      BYR: 21944.321972,
      BZD: 2.266129,
      CAD: 1.418337,
      CDF: 2244.814918,
      CHF: 1.038649,
      CLF: 0.032582,
      CLP: 899.045148,
      CNY: 7.123289,
      COP: 4400.060477,
      CRC: 719.307106,
      CUC: 1.119608,
      CUP: 29.669619,
      CVE: 109.903591,
      CZK: 24.500408,
      DJF: 200.13901,
      DKK: 7.442823,
      DOP: 64.901187,
      DZD: 156.907451,
      EGP: 17.624264,
      ERN: 16.794146,
      ETB: 55.988885,
      EUR: 1,
      FJD: 2.393442,
      FKP: 0.814985,
      GBP: 0.833711,
      GEL: 3.431607,
      GGP: 0.814985,
      GHS: 6.936191,
      GIP: 0.814985,
      GMD: 58.947068,
      GNF: 10134.879661,
      GTQ: 8.642081,
      GYD: 235.196576,
      HKD: 8.723125,
      HNL: 27.665519,
      HRK: 7.531715,
      HTG: 115.695196,
      HUF: 358.84007,
      IDR: 16070.689078,
      ILS: 3.574338,
      IMP: 0.814985,
      INR: 84.062147,
      IQD: 1640.719978,
      IRR: 47303.449106,
      ISK: 145.392444,
      JEP: 0.814985,
      JMD: 175.394496,
      JOD: 0.793773,
      JPY: 128.838895,
      KES: 127.187162,
      KGS: 94.940428,
      KHR: 4573.324404,
      KMF: 488.401122,
      KPW: 1007.647613,
      KRW: 1346.625636,
      KWD: 0.338961,
      KYD: 0.936811,
      KZT: 489.236817,
      LAK: 12703.113436,
      LBP: 1711.777561,
      LKR: 228.065589,
      LRD: 170.460408,
      LSL: 16.996097,
      LTL: 3.305912,
      LVL: 0.67724,
      LYD: 5.160415,
      MAD: 10.479645,
      MDL: 20.100123,
      MGA: 4481.134269,
      MKD: 61.427452,
      MMK: 1998.860331,
      MNT: 3200.770996,
      MOP: 9.014875,
      MRO: 399.699958,
      MUR: 49.481747,
      MVR: 17.298069,
      MWK: 917.812642,
      MXN: 23.179237,
      MYR: 4.699553,
      MZN: 71.464119,
      NAD: 16.996259,
      NGN: 464.995647,
      NIO: 39.859527,
      NOK: 10.006298,
      NPR: 134.632481,
      NZD: 1.689119,
      OMR: 0.431071,
      PAB: 1.124193,
      PEN: 4.327331,
      PGK: 3.981667,
      PHP: 57.406818,
      PKR: 198.683146,
      PLN: 4.56949,
      PYG: 7903.293055,
      QAR: 4.076445,
      RON: 4.945755,
      RSD: 117.570373,
      RUB: 88.059441,
      RWF: 1167.552317,
      SAR: 4.200674,
      SBD: 9.032813,
      SCR: 14.42598,
      SDG: 493.189198,
      SEK:10.51,
      SGD: 1.512705,
      SHP: 1.542146,
      SLL: 12690.759867,
      SOS: 654.970549,
      SRD: 23.645472,
      STD: 23173.630582,
      SVC: 9.836565,
      SYP: 2812.455708,
      SZL: 17.019341,
      THB: 37.179395,
      TJS: 12.697432,
      TMT: 3.929825,
      TND: 3.260858,
      TOP: 2.539215,
      TRY: 15.241675,
      TTD: 7.632533,
      TWD: 31.142243,
      TZS: 2586.294924,
      UAH: 32.364827,
      UGX: 3962.768773,
      USD: 1.119608,
      UYU: 50.041994,
      UZS: 12161.30995,
      VEF: 239406083994.62796,
      VND: 25347.931094,
      VUV: 127.267454,
      WST: 2.924801,
      XAF: 653.830294,
      XAG: 0.047966,
      XAU: 0.000616,
      XCD: 3.025797,
      XDR: 0.803586,
      XOF: 653.830294,
      XPF: 119.098356,
      YER: 280.181855,
      ZAR: 17.077844,
      ZMK: 10077.818115,
      ZMW: 19.892994,
      ZWL: 360.513404,
    },
  },
};

module.exports = {
  Query: {
    countryDetails: async (root, { name }) => {
      try {
        const countries = await axios.get(`${restCountryApi}${name}`);
        // uncomment this code if api responds
        // const exchange = await axios.get(`${exchangeRateApi}`);
        const getCurrency = (currencies) => {
          try {
            const currencyCodes = Object.keys(currencies);
            const currencyArr = [];
            currencyCodes.forEach((code) => {
              const currencyObj = currencies[code];
              currencyArr.push({
                name: currencyObj.name,
                code: code,
                symbol: currencyObj.symbol,
                exchangeRate: exchange?.data?.rates?.[code] || 1
              });
            });
            return currencyArr;
          } catch (e) {
            return {};
          }
        };
        return countries.data
          .filter(({ region }) => region?.toLowerCase() === "europe")
          .map(({ name, region, population, currencies }) => ({
            name: name.common,
            official: name.official,
            region,
            population,
            currency: getCurrency(currencies),
            baseCurrencyValue : exchange?.data?.rates[baseCurrency]
          }));
      } catch (error) {
        throw error;
      }
    },
  },
};
