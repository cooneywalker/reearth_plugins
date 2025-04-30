const csvUrl = "https://cooneywalker.github.io/reearth_plugins/genpatsu_location_fukui.csv";

const layerCsv = {
  type: "simple",
  data: {
    type: "csv",
    url: csvUrl,
    csv: {
      lngColumn: "lon",
      latColumn: "lat",
    },
  },
  marker: {},
  infobox: {
    blocks: [
      {
        extensionId: "reearth/text",
        property: {
          title: "{{名称}}",
          markdown: `
**発電所名:** {{名称}}  
**住所:** {{住所}}  
**設置者:** {{設置者}}  
**出力(MW):** {{出力}}  
**運転開始:** {{運転開始}}  
          `,
        },
      },
    ],
  },
  infoboxDefault: true,
};

reearth.layers.add(layerCsv);
