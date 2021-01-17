var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Basemap_1 = new ol.layer.Tile({
            'title': 'Base map',
            'type': 'base',
            'opacity': 0.240000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DesempleopersonasCNPV2018_2 = new ol.format.GeoJSON();
var features_DesempleopersonasCNPV2018_2 = format_DesempleopersonasCNPV2018_2.readFeatures(json_DesempleopersonasCNPV2018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DesempleopersonasCNPV2018_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DesempleopersonasCNPV2018_2.addFeatures(features_DesempleopersonasCNPV2018_2);
var lyr_DesempleopersonasCNPV2018_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DesempleopersonasCNPV2018_2, 
                style: style_DesempleopersonasCNPV2018_2,
                interactive: true,
    title: 'Desempleo, personas CNPV 2018<br />\
    <img src="styles/legend/DesempleopersonasCNPV2018_2_0.png" /> <4<br />\
    <img src="styles/legend/DesempleopersonasCNPV2018_2_1.png" /> 5-9<br />\
    <img src="styles/legend/DesempleopersonasCNPV2018_2_2.png" /> 10-15<br />\
    <img src="styles/legend/DesempleopersonasCNPV2018_2_3.png" /> 16-65<br />\
    <img src="styles/legend/DesempleopersonasCNPV2018_2_4.png" /> >66<br />'
        });
var format_MixticidadusodelsuelounidadesCNPV2018_3 = new ol.format.GeoJSON();
var features_MixticidadusodelsuelounidadesCNPV2018_3 = format_MixticidadusodelsuelounidadesCNPV2018_3.readFeatures(json_MixticidadusodelsuelounidadesCNPV2018_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MixticidadusodelsuelounidadesCNPV2018_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MixticidadusodelsuelounidadesCNPV2018_3.addFeatures(features_MixticidadusodelsuelounidadesCNPV2018_3);
var lyr_MixticidadusodelsuelounidadesCNPV2018_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MixticidadusodelsuelounidadesCNPV2018_3, 
                style: style_MixticidadusodelsuelounidadesCNPV2018_3,
                interactive: true,
    title: 'Mixticidad uso del suelo, unidades CNPV 2018<br />\
    <img src="styles/legend/MixticidadusodelsuelounidadesCNPV2018_3_0.png" /> 1-2<br />\
    <img src="styles/legend/MixticidadusodelsuelounidadesCNPV2018_3_1.png" /> 3- 4<br />\
    <img src="styles/legend/MixticidadusodelsuelounidadesCNPV2018_3_2.png" /> 5-6<br />\
    <img src="styles/legend/MixticidadusodelsuelounidadesCNPV2018_3_3.png" /> 7 -8<br />\
    <img src="styles/legend/MixticidadusodelsuelounidadesCNPV2018_3_4.png" /> 8-15<br />'
        });
var format_PromedioaosdeescolaridadpersonasCNPV2018_4 = new ol.format.GeoJSON();
var features_PromedioaosdeescolaridadpersonasCNPV2018_4 = format_PromedioaosdeescolaridadpersonasCNPV2018_4.readFeatures(json_PromedioaosdeescolaridadpersonasCNPV2018_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PromedioaosdeescolaridadpersonasCNPV2018_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PromedioaosdeescolaridadpersonasCNPV2018_4.addFeatures(features_PromedioaosdeescolaridadpersonasCNPV2018_4);
var lyr_PromedioaosdeescolaridadpersonasCNPV2018_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PromedioaosdeescolaridadpersonasCNPV2018_4, 
                style: style_PromedioaosdeescolaridadpersonasCNPV2018_4,
                interactive: true,
    title: 'Promedio años de escolaridad, personas CNPV 2018<br />\
    <img src="styles/legend/PromedioaosdeescolaridadpersonasCNPV2018_4_0.png" /> 2,56 - 8,25<br />\
    <img src="styles/legend/PromedioaosdeescolaridadpersonasCNPV2018_4_1.png" /> 8,25 - 9,07<br />\
    <img src="styles/legend/PromedioaosdeescolaridadpersonasCNPV2018_4_2.png" /> 9,07 - 9,93<br />\
    <img src="styles/legend/PromedioaosdeescolaridadpersonasCNPV2018_4_3.png" /> 9,93 - 11,36<br />\
    <img src="styles/legend/PromedioaosdeescolaridadpersonasCNPV2018_4_4.png" /> 11,36 - 17,5<br />'
        });
var format_Proximidadabibliotecasymuseosdistanciaenmetros_5 = new ol.format.GeoJSON();
var features_Proximidadabibliotecasymuseosdistanciaenmetros_5 = format_Proximidadabibliotecasymuseosdistanciaenmetros_5.readFeatures(json_Proximidadabibliotecasymuseosdistanciaenmetros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proximidadabibliotecasymuseosdistanciaenmetros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proximidadabibliotecasymuseosdistanciaenmetros_5.addFeatures(features_Proximidadabibliotecasymuseosdistanciaenmetros_5);
var lyr_Proximidadabibliotecasymuseosdistanciaenmetros_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proximidadabibliotecasymuseosdistanciaenmetros_5, 
                style: style_Proximidadabibliotecasymuseosdistanciaenmetros_5,
                interactive: true,
    title: 'Proximidad a bibliotecas y museos , distancia en metros <br />\
    <img src="styles/legend/Proximidadabibliotecasymuseosdistanciaenmetros_5_0.png" /> < 300<br />\
    <img src="styles/legend/Proximidadabibliotecasymuseosdistanciaenmetros_5_1.png" /> 301 - 500<br />\
    <img src="styles/legend/Proximidadabibliotecasymuseosdistanciaenmetros_5_2.png" /> 501 - 700<br />\
    <img src="styles/legend/Proximidadabibliotecasymuseosdistanciaenmetros_5_3.png" /> 701 - 1.000<br />\
    <img src="styles/legend/Proximidadabibliotecasymuseosdistanciaenmetros_5_4.png" /> > 1.001 <br />'
        });
var format_ViviendaadecuadaviviendasCNPV2018_6 = new ol.format.GeoJSON();
var features_ViviendaadecuadaviviendasCNPV2018_6 = format_ViviendaadecuadaviviendasCNPV2018_6.readFeatures(json_ViviendaadecuadaviviendasCNPV2018_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendaadecuadaviviendasCNPV2018_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendaadecuadaviviendasCNPV2018_6.addFeatures(features_ViviendaadecuadaviviendasCNPV2018_6);
var lyr_ViviendaadecuadaviviendasCNPV2018_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendaadecuadaviviendasCNPV2018_6, 
                style: style_ViviendaadecuadaviviendasCNPV2018_6,
                interactive: true,
    title: 'Vivienda adecuada, viviendas CNPV 2018<br />\
    <img src="styles/legend/ViviendaadecuadaviviendasCNPV2018_6_0.png" /> < 15<br />\
    <img src="styles/legend/ViviendaadecuadaviviendasCNPV2018_6_1.png" /> 16 -35<br />\
    <img src="styles/legend/ViviendaadecuadaviviendasCNPV2018_6_2.png" /> 36- 65<br />\
    <img src="styles/legend/ViviendaadecuadaviviendasCNPV2018_6_3.png" /> 66 -85<br />\
    <img src="styles/legend/ViviendaadecuadaviviendasCNPV2018_6_4.png" /> > 86<br />'
        });
var format_ProximidadaEspaciospblicosdistanciaenmetros_7 = new ol.format.GeoJSON();
var features_ProximidadaEspaciospblicosdistanciaenmetros_7 = format_ProximidadaEspaciospblicosdistanciaenmetros_7.readFeatures(json_ProximidadaEspaciospblicosdistanciaenmetros_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProximidadaEspaciospblicosdistanciaenmetros_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProximidadaEspaciospblicosdistanciaenmetros_7.addFeatures(features_ProximidadaEspaciospblicosdistanciaenmetros_7);
var lyr_ProximidadaEspaciospblicosdistanciaenmetros_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProximidadaEspaciospblicosdistanciaenmetros_7, 
                style: style_ProximidadaEspaciospblicosdistanciaenmetros_7,
                interactive: true,
    title: 'Proximidad a Espacios públicos, distancia en metros<br />\
    <img src="styles/legend/ProximidadaEspaciospblicosdistanciaenmetros_7_0.png" /> < 300<br />\
    <img src="styles/legend/ProximidadaEspaciospblicosdistanciaenmetros_7_1.png" /> 300 - 500<br />\
    <img src="styles/legend/ProximidadaEspaciospblicosdistanciaenmetros_7_2.png" /> 500 - 700<br />\
    <img src="styles/legend/ProximidadaEspaciospblicosdistanciaenmetros_7_3.png" /> 700 - 1.000<br />\
    <img src="styles/legend/ProximidadaEspaciospblicosdistanciaenmetros_7_4.png" /> > 1.001<br />'
        });
var format_ProximidadaequipamientosdeEducacindistanciaenmetros_8 = new ol.format.GeoJSON();
var features_ProximidadaequipamientosdeEducacindistanciaenmetros_8 = format_ProximidadaequipamientosdeEducacindistanciaenmetros_8.readFeatures(json_ProximidadaequipamientosdeEducacindistanciaenmetros_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProximidadaequipamientosdeEducacindistanciaenmetros_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProximidadaequipamientosdeEducacindistanciaenmetros_8.addFeatures(features_ProximidadaequipamientosdeEducacindistanciaenmetros_8);
var lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProximidadaequipamientosdeEducacindistanciaenmetros_8, 
                style: style_ProximidadaequipamientosdeEducacindistanciaenmetros_8,
                interactive: true,
    title: 'Proximidad a equipamientos de Educación, distancia en metros<br />\
    <img src="styles/legend/ProximidadaequipamientosdeEducacindistanciaenmetros_8_0.png" /> < 300<br />\
    <img src="styles/legend/ProximidadaequipamientosdeEducacindistanciaenmetros_8_1.png" /> 301 - 500<br />\
    <img src="styles/legend/ProximidadaequipamientosdeEducacindistanciaenmetros_8_2.png" /> 501 - 700<br />\
    <img src="styles/legend/ProximidadaequipamientosdeEducacindistanciaenmetros_8_3.png" /> 7001 - 1.000<br />\
    <img src="styles/legend/ProximidadaequipamientosdeEducacindistanciaenmetros_8_4.png" /> >1.001<br />'
        });
var format_Proximidadaequipamientosdesaluddistanciaenmetros_9 = new ol.format.GeoJSON();
var features_Proximidadaequipamientosdesaluddistanciaenmetros_9 = format_Proximidadaequipamientosdesaluddistanciaenmetros_9.readFeatures(json_Proximidadaequipamientosdesaluddistanciaenmetros_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proximidadaequipamientosdesaluddistanciaenmetros_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proximidadaequipamientosdesaluddistanciaenmetros_9.addFeatures(features_Proximidadaequipamientosdesaluddistanciaenmetros_9);
var lyr_Proximidadaequipamientosdesaluddistanciaenmetros_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proximidadaequipamientosdesaluddistanciaenmetros_9, 
                style: style_Proximidadaequipamientosdesaluddistanciaenmetros_9,
                interactive: true,
    title: 'Proximidad a equipamientos de salud, distancia en metros<br />\
    <img src="styles/legend/Proximidadaequipamientosdesaluddistanciaenmetros_9_0.png" /> <300<br />\
    <img src="styles/legend/Proximidadaequipamientosdesaluddistanciaenmetros_9_1.png" /> 301 - 500<br />\
    <img src="styles/legend/Proximidadaequipamientosdesaluddistanciaenmetros_9_2.png" /> 501 - 700<br />\
    <img src="styles/legend/Proximidadaequipamientosdesaluddistanciaenmetros_9_3.png" /> 701 - 1.001<br />\
    <img src="styles/legend/Proximidadaequipamientosdesaluddistanciaenmetros_9_4.png" /> >1.001 <br />'
        });
var format_reaurbanaCcutayVilladelRosario_10 = new ol.format.GeoJSON();
var features_reaurbanaCcutayVilladelRosario_10 = format_reaurbanaCcutayVilladelRosario_10.readFeatures(json_reaurbanaCcutayVilladelRosario_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaurbanaCcutayVilladelRosario_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaurbanaCcutayVilladelRosario_10.addFeatures(features_reaurbanaCcutayVilladelRosario_10);
var lyr_reaurbanaCcutayVilladelRosario_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaurbanaCcutayVilladelRosario_10, 
                style: style_reaurbanaCcutayVilladelRosario_10,
                interactive: true,
                title: '<img src="styles/legend/reaurbanaCcutayVilladelRosario_10.png" /> Área urbana Cúcuta y Villa del Rosario'
            });
var format_ComunasCcutaVilladelRosario_11 = new ol.format.GeoJSON();
var features_ComunasCcutaVilladelRosario_11 = format_ComunasCcutaVilladelRosario_11.readFeatures(json_ComunasCcutaVilladelRosario_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunasCcutaVilladelRosario_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunasCcutaVilladelRosario_11.addFeatures(features_ComunasCcutaVilladelRosario_11);
var lyr_ComunasCcutaVilladelRosario_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ComunasCcutaVilladelRosario_11, 
                style: style_ComunasCcutaVilladelRosario_11,
                interactive: false,
                title: '<img src="styles/legend/ComunasCcutaVilladelRosario_11.png" /> Comunas Cúcuta -  Villa del Rosario'
            });
var format_LmitefornterizoconVenezuela_12 = new ol.format.GeoJSON();
var features_LmitefornterizoconVenezuela_12 = format_LmitefornterizoconVenezuela_12.readFeatures(json_LmitefornterizoconVenezuela_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitefornterizoconVenezuela_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitefornterizoconVenezuela_12.addFeatures(features_LmitefornterizoconVenezuela_12);
var lyr_LmitefornterizoconVenezuela_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LmitefornterizoconVenezuela_12, 
                style: style_LmitefornterizoconVenezuela_12,
                interactive: false,
                title: '<img src="styles/legend/LmitefornterizoconVenezuela_12.png" /> Límite fornterizo con Venezuela'
            });
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_ESRISatellite_0,lyr_Basemap_1,],
                                title: "Base Map"});

lyr_ESRISatellite_0.setVisible(true);lyr_Basemap_1.setVisible(true);lyr_DesempleopersonasCNPV2018_2.setVisible(false);lyr_MixticidadusodelsuelounidadesCNPV2018_3.setVisible(false);lyr_PromedioaosdeescolaridadpersonasCNPV2018_4.setVisible(false);lyr_Proximidadabibliotecasymuseosdistanciaenmetros_5.setVisible(false);lyr_ViviendaadecuadaviviendasCNPV2018_6.setVisible(false);lyr_ProximidadaEspaciospblicosdistanciaenmetros_7.setVisible(false);lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_8.setVisible(false);lyr_Proximidadaequipamientosdesaluddistanciaenmetros_9.setVisible(false);lyr_reaurbanaCcutayVilladelRosario_10.setVisible(true);lyr_ComunasCcutaVilladelRosario_11.setVisible(true);lyr_LmitefornterizoconVenezuela_12.setVisible(true);
var layersList = [group_BaseMap,lyr_DesempleopersonasCNPV2018_2,lyr_MixticidadusodelsuelounidadesCNPV2018_3,lyr_PromedioaosdeescolaridadpersonasCNPV2018_4,lyr_Proximidadabibliotecasymuseosdistanciaenmetros_5,lyr_ViviendaadecuadaviviendasCNPV2018_6,lyr_ProximidadaEspaciospblicosdistanciaenmetros_7,lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_8,lyr_Proximidadaequipamientosdesaluddistanciaenmetros_9,lyr_reaurbanaCcutayVilladelRosario_10,lyr_ComunasCcutaVilladelRosario_11,lyr_LmitefornterizoconVenezuela_12];
lyr_DesempleopersonasCNPV2018_2.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'Comuna', 'ESTRATO': 'Estrato', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'Tasa de desempleo, CNPV 2018', 'DESEM_JUV': 'Desempleo Juvenil, CNPV 2018', 'EMP_IN_E': 'Empleo informal, CNPV 2018', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_MixticidadusodelsuelounidadesCNPV2018_3.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'Comuna', 'ESTRATO': 'Estrato', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'Unidades con uso mixto', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_PromedioaosdeescolaridadpersonasCNPV2018_4.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'Comuna', 'ESTRATO': 'Estrato', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'Promedio años de escolaridad', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_Proximidadabibliotecasymuseosdistanciaenmetros_5.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'Comuna', 'ESTRATO': 'Estrato', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'Proximidad a bibliotecas y museos, distancia en mts', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_ViviendaadecuadaviviendasCNPV2018_6.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'Comuna', 'ESTRATO': 'Estrato', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'Aceso a agua mejorada, CNPV 2018', 'SANEAMIENT': 'Acceso a saneamiento adecuado CNPV 2018', 'ELECTRICI': 'Acceso a electricidad CNPV 2018', 'INTERNET': 'Acceso a internet', 'R_R_SOL': 'Recolección de residuos sólidos', 'VIV_ADE': 'Vivienda adecuada', 'VIV_TUG': 'Viviendas en tugurios CNPV 2018', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'Amenza por remoción en masa', 'INUNDACIÓ': 'Amenaza por inundación', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_ProximidadaEspaciospblicosdistanciaenmetros_7.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'Comuna', 'ESTRATO': 'Estrato', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'Proximidad a espacios público, distancia en mts', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_8.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'Comuna', 'ESTRATO': 'Estrato', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'Proximidad a equpamiento de educación, distancia en mts', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_Proximidadaequipamientosdesaluddistanciaenmetros_9.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'Comuna', 'ESTRATO': 'Estrato', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'Proximidad a equipamientos de salud, distancia en mts', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_reaurbanaCcutayVilladelRosario_10.set('fieldAliases', {'ID_MANZA_1': 'Manzana', 'ID_MANZANA': 'ID_MANZANA', 'COMUNA_1': 'Comuna', 'Comuna': 'Comuna', 'Estra_MAX': 'Estrato', 'ipm': 'Índice de pobreza multidimencional - IPM', 'DENSI_POB': 'Densidad de población', 'Venezolano': 'Total personas con nacionalidad Venezolana', 'TOT_VIV_OC': 'Total viviendas ocupadas', 'TOT_HOGARE': 'Total hogares', 'HA_TOT_PER': 'total personas', 'T_DESEMPLE': 'Tasa de desempleo', 'E_INFOR_F': 'Empleo informal', 'E_INFOR_E': 'Empleo informal (e)', 'DESE_JUVE': 'Desempleo juvenil', 'DEPEND_3_E': 'Dependencia de mayores', 'P_ALFA': 'Tasa de alfabetización', 'PROMEDIO_A': 'Promedio años de escolaridad', 'PROMEDIO_1': 'Promedio años de escolaridad hombres ', 'PROMEDIO_2': 'Promedio años de escolaridad mujeres ', 'DIF_M_H': 'Paridad de género', 'E_VITA_SUF': 'Hacinamiento', 'V_TUGU': 'Vivienda en tugurios', 'VIV_DURABL': 'Vivienda durable', 'P_ACU': 'Acceso a agua mejorada', 'P_ALC': 'Acceso a saneamiento', 'P_ELEC': 'Acceso a electricidad', 'P_INTER': 'Acceso a internet', 'P_RECO_RES': 'Recolección de residuos sólidos', 'Shanon_Est': 'Índice de shannon- mixticidad del suelo', 'U_Industri': 'Unidades con uso industrial', 'U_Servici': 'Unidades con uso de servicios', 'U_Comercia': 'Unidades con uso de comercial', 'U_Mixto': 'Unidades con uso de mixto', 'U_Resid': 'Unidades con uso residencial', 'U_PAR_ZVER': 'Unidades con uso de parques o áreas verdes', 'Salud': 'Proximidad a equipamientos de salud, distancia en mts', 'Educacion': 'Proximidad a equipamientos de educación, distancia en mts', 'Biblio_Mus': 'Proximidad a bibliotecas y museos, distancia en mts', 'EP': 'Proximidad a espacios públicos, distancia en mts', 'R_Masa_': 'Amenaza por remoción en masa', 'Innundac': 'Amenaza por inundación', 'RIESGO': 'RIESGO', });
lyr_ComunasCcutaVilladelRosario_11.set('fieldAliases', {'Id': 'Id', 'area': 'area', 'ID_1': 'ID_1', 'Comuna': 'Comuna', 'Indic_Vial': 'Indic_Vial', });
lyr_LmitefornterizoconVenezuela_12.set('fieldAliases', {'FID_Fronte': 'FID_Fronte', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_CCNCT': 'MPIO_CCNCT', 'MPIO_NANO': 'MPIO_NANO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Mun_Div': 'Mun_Div', });
lyr_DesempleopersonasCNPV2018_2.set('fieldImages', {'ID_MANZANA': 'Hidden', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'Hidden', 'IPM': 'Hidden', 'AGUA_MEJOR': 'Hidden', 'SANEAMIENT': 'Hidden', 'ELECTRICI': 'Hidden', 'INTERNET': 'Hidden', 'R_R_SOL': 'Hidden', 'VIV_ADE': 'Hidden', 'VIV_TUG': 'Hidden', 'HACINAMI': 'Hidden', 'MIXTICIDAD': 'Hidden', 'DEPENDENCI': 'Hidden', 'P_ALFAB': 'Hidden', 'PRO_A_ESCO': 'Hidden', 'A_ESCO_HOM': 'Hidden', 'A_ESCO_MUJ': 'Hidden', 'PARIDAD': 'Hidden', 'T_DESEMPL': 'TextEdit', 'DESEM_JUV': 'TextEdit', 'EMP_IN_E': 'TextEdit', 'EMP_IN_IMP': 'Hidden', 'VIVI_OCU': 'Hidden', 'HOGARES': 'Hidden', 'PERSONAS': 'Hidden', 'VENEZOLANO': 'Hidden', 'U_INDUSTRI': 'Hidden', 'U_SERVICIO': 'Hidden', 'U_COMERCIO': 'Hidden', 'U_MIXTO': 'Hidden', 'U_VIVIENDA': 'Hidden', 'U_PAR_ZVER': 'Hidden', 'DIS_SALUD': 'Hidden', 'DIS_EDUCA': 'Hidden', 'DIS_BIBLIO': 'Hidden', 'DIS_EP': 'Hidden', 'REMOCIÓN': 'Hidden', 'INUNDACIÓ': 'Hidden', 'ID_MANZA_1': 'Hidden', 'COMUNA_1': 'Hidden', 'RIESGO': 'Hidden', });
lyr_MixticidadusodelsuelounidadesCNPV2018_3.set('fieldImages', {'ID_MANZANA': 'Hidden', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'Hidden', 'IPM': 'Hidden', 'AGUA_MEJOR': 'Hidden', 'SANEAMIENT': 'Hidden', 'ELECTRICI': 'Hidden', 'INTERNET': 'Hidden', 'R_R_SOL': 'Hidden', 'VIV_ADE': 'Hidden', 'VIV_TUG': 'Hidden', 'HACINAMI': 'Hidden', 'MIXTICIDAD': 'Hidden', 'DEPENDENCI': 'Hidden', 'P_ALFAB': 'Hidden', 'PRO_A_ESCO': 'Hidden', 'A_ESCO_HOM': 'Hidden', 'A_ESCO_MUJ': 'Hidden', 'PARIDAD': 'Hidden', 'T_DESEMPL': 'Hidden', 'DESEM_JUV': 'Hidden', 'EMP_IN_E': 'Hidden', 'EMP_IN_IMP': 'Hidden', 'VIVI_OCU': 'Hidden', 'HOGARES': 'Hidden', 'PERSONAS': 'Hidden', 'VENEZOLANO': 'Hidden', 'U_INDUSTRI': 'Hidden', 'U_SERVICIO': 'Hidden', 'U_COMERCIO': 'Hidden', 'U_MIXTO': 'TextEdit', 'U_VIVIENDA': 'Hidden', 'U_PAR_ZVER': 'Hidden', 'DIS_SALUD': 'Hidden', 'DIS_EDUCA': 'Hidden', 'DIS_BIBLIO': 'Hidden', 'DIS_EP': 'Hidden', 'REMOCIÓN': 'Hidden', 'INUNDACIÓ': 'Hidden', 'ID_MANZA_1': 'Hidden', 'COMUNA_1': 'Hidden', 'RIESGO': 'Hidden', });
lyr_PromedioaosdeescolaridadpersonasCNPV2018_4.set('fieldImages', {'ID_MANZANA': 'Hidden', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'Hidden', 'IPM': 'Hidden', 'AGUA_MEJOR': 'Hidden', 'SANEAMIENT': 'Hidden', 'ELECTRICI': 'Hidden', 'INTERNET': 'Hidden', 'R_R_SOL': 'Hidden', 'VIV_ADE': 'Hidden', 'VIV_TUG': 'Hidden', 'HACINAMI': 'Hidden', 'MIXTICIDAD': 'Hidden', 'DEPENDENCI': 'Hidden', 'P_ALFAB': 'Hidden', 'PRO_A_ESCO': 'TextEdit', 'A_ESCO_HOM': 'Hidden', 'A_ESCO_MUJ': 'Hidden', 'PARIDAD': 'Hidden', 'T_DESEMPL': 'Hidden', 'DESEM_JUV': 'Hidden', 'EMP_IN_E': 'Hidden', 'EMP_IN_IMP': 'Hidden', 'VIVI_OCU': 'Hidden', 'HOGARES': 'Hidden', 'PERSONAS': 'Hidden', 'VENEZOLANO': 'Hidden', 'U_INDUSTRI': 'Hidden', 'U_SERVICIO': 'Hidden', 'U_COMERCIO': 'Hidden', 'U_MIXTO': 'Hidden', 'U_VIVIENDA': 'Hidden', 'U_PAR_ZVER': 'Hidden', 'DIS_SALUD': 'Hidden', 'DIS_EDUCA': 'Hidden', 'DIS_BIBLIO': 'Hidden', 'DIS_EP': 'Hidden', 'REMOCIÓN': 'Hidden', 'INUNDACIÓ': 'Hidden', 'ID_MANZA_1': 'Hidden', 'COMUNA_1': 'Hidden', 'RIESGO': 'Hidden', });
lyr_Proximidadabibliotecasymuseosdistanciaenmetros_5.set('fieldImages', {'ID_MANZANA': 'Hidden', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'Hidden', 'IPM': 'Hidden', 'AGUA_MEJOR': 'Hidden', 'SANEAMIENT': 'Hidden', 'ELECTRICI': 'Hidden', 'INTERNET': 'Hidden', 'R_R_SOL': 'Hidden', 'VIV_ADE': 'Hidden', 'VIV_TUG': 'Hidden', 'HACINAMI': 'Hidden', 'MIXTICIDAD': 'Hidden', 'DEPENDENCI': 'Hidden', 'P_ALFAB': 'Hidden', 'PRO_A_ESCO': 'Hidden', 'A_ESCO_HOM': 'Hidden', 'A_ESCO_MUJ': 'Hidden', 'PARIDAD': 'Hidden', 'T_DESEMPL': 'Hidden', 'DESEM_JUV': 'Hidden', 'EMP_IN_E': 'Hidden', 'EMP_IN_IMP': 'Hidden', 'VIVI_OCU': 'Hidden', 'HOGARES': 'Hidden', 'PERSONAS': 'Hidden', 'VENEZOLANO': 'Hidden', 'U_INDUSTRI': 'Hidden', 'U_SERVICIO': 'Hidden', 'U_COMERCIO': 'Hidden', 'U_MIXTO': 'Hidden', 'U_VIVIENDA': 'Hidden', 'U_PAR_ZVER': 'Hidden', 'DIS_SALUD': 'Hidden', 'DIS_EDUCA': 'Hidden', 'DIS_BIBLIO': 'TextEdit', 'DIS_EP': 'Hidden', 'REMOCIÓN': 'Hidden', 'INUNDACIÓ': 'Hidden', 'ID_MANZA_1': 'Hidden', 'COMUNA_1': 'Hidden', 'RIESGO': 'Hidden', });
lyr_ViviendaadecuadaviviendasCNPV2018_6.set('fieldImages', {'ID_MANZANA': 'Hidden', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'Hidden', 'IPM': 'Hidden', 'AGUA_MEJOR': 'TextEdit', 'SANEAMIENT': 'TextEdit', 'ELECTRICI': 'TextEdit', 'INTERNET': 'TextEdit', 'R_R_SOL': 'TextEdit', 'VIV_ADE': 'TextEdit', 'VIV_TUG': 'TextEdit', 'HACINAMI': 'Hidden', 'MIXTICIDAD': 'Hidden', 'DEPENDENCI': 'Hidden', 'P_ALFAB': 'Hidden', 'PRO_A_ESCO': 'Hidden', 'A_ESCO_HOM': 'Hidden', 'A_ESCO_MUJ': 'Hidden', 'PARIDAD': 'Hidden', 'T_DESEMPL': 'Hidden', 'DESEM_JUV': 'Hidden', 'EMP_IN_E': 'Hidden', 'EMP_IN_IMP': 'Hidden', 'VIVI_OCU': 'Hidden', 'HOGARES': 'Hidden', 'PERSONAS': 'Hidden', 'VENEZOLANO': 'Hidden', 'U_INDUSTRI': 'Hidden', 'U_SERVICIO': 'Hidden', 'U_COMERCIO': 'Hidden', 'U_MIXTO': 'Hidden', 'U_VIVIENDA': 'Hidden', 'U_PAR_ZVER': 'Hidden', 'DIS_SALUD': 'Hidden', 'DIS_EDUCA': 'Hidden', 'DIS_BIBLIO': 'Hidden', 'DIS_EP': 'Hidden', 'REMOCIÓN': 'TextEdit', 'INUNDACIÓ': 'TextEdit', 'ID_MANZA_1': 'Hidden', 'COMUNA_1': 'Hidden', 'RIESGO': 'Hidden', });
lyr_ProximidadaEspaciospblicosdistanciaenmetros_7.set('fieldImages', {'ID_MANZANA': 'Hidden', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'Hidden', 'IPM': 'Hidden', 'AGUA_MEJOR': 'Hidden', 'SANEAMIENT': 'Hidden', 'ELECTRICI': 'Hidden', 'INTERNET': 'Hidden', 'R_R_SOL': 'Hidden', 'VIV_ADE': 'Hidden', 'VIV_TUG': 'Hidden', 'HACINAMI': 'Hidden', 'MIXTICIDAD': 'Hidden', 'DEPENDENCI': 'Hidden', 'P_ALFAB': 'Hidden', 'PRO_A_ESCO': 'Hidden', 'A_ESCO_HOM': 'Hidden', 'A_ESCO_MUJ': 'Hidden', 'PARIDAD': 'Hidden', 'T_DESEMPL': 'Hidden', 'DESEM_JUV': 'Hidden', 'EMP_IN_E': 'Hidden', 'EMP_IN_IMP': 'Hidden', 'VIVI_OCU': 'Hidden', 'HOGARES': 'Hidden', 'PERSONAS': 'Hidden', 'VENEZOLANO': 'Hidden', 'U_INDUSTRI': 'Hidden', 'U_SERVICIO': 'Hidden', 'U_COMERCIO': 'Hidden', 'U_MIXTO': 'Hidden', 'U_VIVIENDA': 'Hidden', 'U_PAR_ZVER': 'Hidden', 'DIS_SALUD': 'Hidden', 'DIS_EDUCA': 'Hidden', 'DIS_BIBLIO': 'Hidden', 'DIS_EP': 'TextEdit', 'REMOCIÓN': 'Hidden', 'INUNDACIÓ': 'Hidden', 'ID_MANZA_1': 'Hidden', 'COMUNA_1': 'Hidden', 'RIESGO': 'Hidden', });
lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_8.set('fieldImages', {'ID_MANZANA': 'Hidden', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'Hidden', 'IPM': 'Hidden', 'AGUA_MEJOR': 'Hidden', 'SANEAMIENT': 'Hidden', 'ELECTRICI': 'Hidden', 'INTERNET': 'Hidden', 'R_R_SOL': 'Hidden', 'VIV_ADE': 'Hidden', 'VIV_TUG': 'Hidden', 'HACINAMI': 'Hidden', 'MIXTICIDAD': 'Hidden', 'DEPENDENCI': 'Hidden', 'P_ALFAB': 'Hidden', 'PRO_A_ESCO': 'Hidden', 'A_ESCO_HOM': 'Hidden', 'A_ESCO_MUJ': 'Hidden', 'PARIDAD': 'Hidden', 'T_DESEMPL': 'Hidden', 'DESEM_JUV': 'Hidden', 'EMP_IN_E': 'Hidden', 'EMP_IN_IMP': 'Hidden', 'VIVI_OCU': 'Hidden', 'HOGARES': 'Hidden', 'PERSONAS': 'Hidden', 'VENEZOLANO': 'Hidden', 'U_INDUSTRI': 'Hidden', 'U_SERVICIO': 'Hidden', 'U_COMERCIO': 'Hidden', 'U_MIXTO': 'Hidden', 'U_VIVIENDA': 'Hidden', 'U_PAR_ZVER': 'Hidden', 'DIS_SALUD': 'Hidden', 'DIS_EDUCA': 'TextEdit', 'DIS_BIBLIO': 'Hidden', 'DIS_EP': 'Hidden', 'REMOCIÓN': 'Hidden', 'INUNDACIÓ': 'Hidden', 'ID_MANZA_1': 'Hidden', 'COMUNA_1': 'Hidden', 'RIESGO': 'Hidden', });
lyr_Proximidadaequipamientosdesaluddistanciaenmetros_9.set('fieldImages', {'ID_MANZANA': 'Hidden', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'Hidden', 'IPM': 'Hidden', 'AGUA_MEJOR': 'Hidden', 'SANEAMIENT': 'Hidden', 'ELECTRICI': 'Hidden', 'INTERNET': 'Hidden', 'R_R_SOL': 'Hidden', 'VIV_ADE': 'Hidden', 'VIV_TUG': 'Hidden', 'HACINAMI': 'Hidden', 'MIXTICIDAD': 'Hidden', 'DEPENDENCI': 'Hidden', 'P_ALFAB': 'Hidden', 'PRO_A_ESCO': 'Hidden', 'A_ESCO_HOM': 'Hidden', 'A_ESCO_MUJ': 'Hidden', 'PARIDAD': 'Hidden', 'T_DESEMPL': 'Hidden', 'DESEM_JUV': 'Hidden', 'EMP_IN_E': 'Hidden', 'EMP_IN_IMP': 'Hidden', 'VIVI_OCU': 'Hidden', 'HOGARES': 'Hidden', 'PERSONAS': 'Hidden', 'VENEZOLANO': 'Hidden', 'U_INDUSTRI': 'Hidden', 'U_SERVICIO': 'Hidden', 'U_COMERCIO': 'Hidden', 'U_MIXTO': 'Hidden', 'U_VIVIENDA': 'Hidden', 'U_PAR_ZVER': 'Hidden', 'DIS_SALUD': 'TextEdit', 'DIS_EDUCA': 'Hidden', 'DIS_BIBLIO': 'Hidden', 'DIS_EP': 'Hidden', 'REMOCIÓN': 'Hidden', 'INUNDACIÓ': 'Hidden', 'ID_MANZA_1': 'Hidden', 'COMUNA_1': 'Hidden', 'RIESGO': 'Hidden', });
lyr_reaurbanaCcutayVilladelRosario_10.set('fieldImages', {'ID_MANZA_1': 'TextEdit', 'ID_MANZANA': 'Hidden', 'COMUNA_1': 'TextEdit', 'Comuna': 'Hidden', 'Estra_MAX': 'TextEdit', 'ipm': 'TextEdit', 'DENSI_POB': 'Hidden', 'Venezolano': 'Hidden', 'TOT_VIV_OC': 'Hidden', 'TOT_HOGARE': 'Hidden', 'HA_TOT_PER': 'Hidden', 'T_DESEMPLE': 'TextEdit', 'E_INFOR_F': 'Hidden', 'E_INFOR_E': 'TextEdit', 'DESE_JUVE': 'TextEdit', 'DEPEND_3_E': 'Hidden', 'P_ALFA': 'Hidden', 'PROMEDIO_A': 'TextEdit', 'PROMEDIO_1': 'Hidden', 'PROMEDIO_2': 'Hidden', 'DIF_M_H': 'Hidden', 'E_VITA_SUF': 'Hidden', 'V_TUGU': 'Hidden', 'VIV_DURABL': 'TextEdit', 'P_ACU': 'TextEdit', 'P_ALC': 'TextEdit', 'P_ELEC': 'TextEdit', 'P_INTER': 'TextEdit', 'P_RECO_RES': 'Hidden', 'Shanon_Est': 'Hidden', 'U_Industri': 'Hidden', 'U_Servici': 'Hidden', 'U_Comercia': 'Hidden', 'U_Mixto': 'TextEdit', 'U_Resid': 'Hidden', 'U_PAR_ZVER': 'Hidden', 'Salud': 'TextEdit', 'Educacion': 'TextEdit', 'Biblio_Mus': 'TextEdit', 'EP': 'TextEdit', 'R_Masa_': 'TextEdit', 'Innundac': 'TextEdit', 'RIESGO': 'Hidden', });
lyr_ComunasCcutaVilladelRosario_11.set('fieldImages', {'Id': 'Hidden', 'area': 'Hidden', 'ID_1': 'Hidden', 'Comuna': 'TextEdit', 'Indic_Vial': 'Hidden', });
lyr_LmitefornterizoconVenezuela_12.set('fieldImages', {'FID_Fronte': 'Hidden', 'DPTO_CCDGO': 'Hidden', 'MPIO_CCDGO': 'Hidden', 'MPIO_CNMBR': 'Hidden', 'MPIO_CRSLC': 'Hidden', 'MPIO_NAREA': 'Hidden', 'MPIO_CCNCT': 'Hidden', 'MPIO_NANO': 'Hidden', 'DPTO_CNMBR': 'Hidden', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'Mun_Div': 'Hidden', });
lyr_DesempleopersonasCNPV2018_2.set('fieldLabels', {'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'T_DESEMPL': 'header label', 'DESEM_JUV': 'header label', 'EMP_IN_E': 'header label', });
lyr_MixticidadusodelsuelounidadesCNPV2018_3.set('fieldLabels', {'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'U_MIXTO': 'header label', });
lyr_PromedioaosdeescolaridadpersonasCNPV2018_4.set('fieldLabels', {'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'PRO_A_ESCO': 'header label', });
lyr_Proximidadabibliotecasymuseosdistanciaenmetros_5.set('fieldLabels', {'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'DIS_BIBLIO': 'header label', });
lyr_ViviendaadecuadaviviendasCNPV2018_6.set('fieldLabels', {'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'AGUA_MEJOR': 'inline label', 'SANEAMIENT': 'inline label', 'ELECTRICI': 'inline label', 'INTERNET': 'inline label', 'R_R_SOL': 'inline label', 'VIV_ADE': 'inline label', 'VIV_TUG': 'inline label', 'REMOCIÓN': 'inline label', 'INUNDACIÓ': 'inline label', });
lyr_ProximidadaEspaciospblicosdistanciaenmetros_7.set('fieldLabels', {'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'DIS_EP': 'header label', });
lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_8.set('fieldLabels', {'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'DIS_EDUCA': 'header label', });
lyr_Proximidadaequipamientosdesaluddistanciaenmetros_9.set('fieldLabels', {'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'DIS_SALUD': 'header label', });
lyr_reaurbanaCcutayVilladelRosario_10.set('fieldLabels', {'ID_MANZA_1': 'header label', 'COMUNA_1': 'header label', 'Estra_MAX': 'header label', 'ipm': 'header label', 'T_DESEMPLE': 'header label', 'E_INFOR_E': 'header label', 'DESE_JUVE': 'header label', 'PROMEDIO_A': 'header label', 'VIV_DURABL': 'header label', 'P_ACU': 'header label', 'P_ALC': 'header label', 'P_ELEC': 'header label', 'P_INTER': 'header label', 'U_Mixto': 'header label', 'Salud': 'header label', 'Educacion': 'header label', 'Biblio_Mus': 'header label', 'EP': 'header label', 'R_Masa_': 'header label', 'Innundac': 'header label', });
lyr_ComunasCcutaVilladelRosario_11.set('fieldLabels', {'Comuna': 'header label', });
lyr_LmitefornterizoconVenezuela_12.set('fieldLabels', {});
lyr_LmitefornterizoconVenezuela_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});