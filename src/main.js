import esriConfig from "@arcgis/core/config";
import "@arcgis/map-components/components/arcgis-editor";
import "@arcgis/map-components/components/arcgis-layer-list";
import "@arcgis/map-components/components/arcgis-map";
import "@arcgis/map-components/components/arcgis-zoom";
import "./style.css";

// Set the API key or portal URL if needed
//esriConfig.apiKey= "Your-Access-Token";
// esriConfig.apiKeys = {
//   scopes: [
//     {
//       // The API key value.
//       token: "YOUR_ACCESS_TOKEN",
//       // An array of URLs that the API key applies to.
//       urls: ["https://basemaps.arcgis.com", "https://services3.arcgis.com"],
//     },
//     // More scopes can be added here...
//   ],
// };
esriConfig.portalUrl = "https://jsapi.maps.arcgis.com/";
