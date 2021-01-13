var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Base map',
            'type': 'base',
            'opacity': 0.240000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LmitefornterizoconVenezuela_1 = new ol.format.GeoJSON();
var features_LmitefornterizoconVenezuela_1 = format_LmitefornterizoconVenezuela_1.readFeatures(json_LmitefornterizoconVenezuela_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitefornterizoconVenezuela_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitefornterizoconVenezuela_1.addFeatures(features_LmitefornterizoconVenezuela_1);
var lyr_LmitefornterizoconVenezuela_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LmitefornterizoconVenezuela_1, 
                style: style_LmitefornterizoconVenezuela_1,
                interactive: true,
                title: '<img src="styles/legend/LmitefornterizoconVenezuela_1.png" /> Límite fornterizo con Venezuela'
            });
var format_ComunasCcutaVilladelRosario_2 = new ol.format.GeoJSON();
var features_ComunasCcutaVilladelRosario_2 = format_ComunasCcutaVilladelRosario_2.readFeatures(json_ComunasCcutaVilladelRosario_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ComunasCcutaVilladelRosario_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunasCcutaVilladelRosario_2.addFeatures(features_ComunasCcutaVilladelRosario_2);
var lyr_ComunasCcutaVilladelRosario_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ComunasCcutaVilladelRosario_2, 
                style: style_ComunasCcutaVilladelRosario_2,
                interactive: true,
                title: '<img src="styles/legend/ComunasCcutaVilladelRosario_2.png" /> Comunas Cúcuta -  Villa del Rosario'
            });
var format_Proximidadabibliotecasymuseosdistanciaenmetros_3 = new ol.format.GeoJSON();
var features_Proximidadabibliotecasymuseosdistanciaenmetros_3 = format_Proximidadabibliotecasymuseosdistanciaenmetros_3.readFeatures(json_Proximidadabibliotecasymuseosdistanciaenmetros_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proximidadabibliotecasymuseosdistanciaenmetros_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proximidadabibliotecasymuseosdistanciaenmetros_3.addFeatures(features_Proximidadabibliotecasymuseosdistanciaenmetros_3);
var lyr_Proximidadabibliotecasymuseosdistanciaenmetros_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proximidadabibliotecasymuseosdistanciaenmetros_3, 
                style: style_Proximidadabibliotecasymuseosdistanciaenmetros_3,
                interactive: true,
    title: 'Proximidad a bibliotecas y museos , distancia en metros <br />\
    <img src="styles/legend/Proximidadabibliotecasymuseosdistanciaenmetros_3_0.png" /> < 300<br />\
    <img src="styles/legend/Proximidadabibliotecasymuseosdistanciaenmetros_3_1.png" /> 301 - 500<br />\
    <img src="styles/legend/Proximidadabibliotecasymuseosdistanciaenmetros_3_2.png" /> 501 - 700<br />\
    <img src="styles/legend/Proximidadabibliotecasymuseosdistanciaenmetros_3_3.png" /> 701 - 1.000<br />\
    <img src="styles/legend/Proximidadabibliotecasymuseosdistanciaenmetros_3_4.png" /> > 1.001 <br />'
        });
var format_ProximidadaequipamientosdeEducacindistanciaenmetros_4 = new ol.format.GeoJSON();
var features_ProximidadaequipamientosdeEducacindistanciaenmetros_4 = format_ProximidadaequipamientosdeEducacindistanciaenmetros_4.readFeatures(json_ProximidadaequipamientosdeEducacindistanciaenmetros_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProximidadaequipamientosdeEducacindistanciaenmetros_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProximidadaequipamientosdeEducacindistanciaenmetros_4.addFeatures(features_ProximidadaequipamientosdeEducacindistanciaenmetros_4);
var lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProximidadaequipamientosdeEducacindistanciaenmetros_4, 
                style: style_ProximidadaequipamientosdeEducacindistanciaenmetros_4,
                interactive: true,
    title: 'Proximidad a equipamientos de Educación, distancia en metros<br />\
    <img src="styles/legend/ProximidadaequipamientosdeEducacindistanciaenmetros_4_0.png" /> < 300<br />\
    <img src="styles/legend/ProximidadaequipamientosdeEducacindistanciaenmetros_4_1.png" /> 301 - 500<br />\
    <img src="styles/legend/ProximidadaequipamientosdeEducacindistanciaenmetros_4_2.png" /> 501 - 700<br />\
    <img src="styles/legend/ProximidadaequipamientosdeEducacindistanciaenmetros_4_3.png" /> 7001 - 1.000<br />\
    <img src="styles/legend/ProximidadaequipamientosdeEducacindistanciaenmetros_4_4.png" /> >1.001<br />'
        });
var format_Proximidadaequipamientosdesaluddistanciaenmetros_5 = new ol.format.GeoJSON();
var features_Proximidadaequipamientosdesaluddistanciaenmetros_5 = format_Proximidadaequipamientosdesaluddistanciaenmetros_5.readFeatures(json_Proximidadaequipamientosdesaluddistanciaenmetros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Proximidadaequipamientosdesaluddistanciaenmetros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Proximidadaequipamientosdesaluddistanciaenmetros_5.addFeatures(features_Proximidadaequipamientosdesaluddistanciaenmetros_5);
var lyr_Proximidadaequipamientosdesaluddistanciaenmetros_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Proximidadaequipamientosdesaluddistanciaenmetros_5, 
                style: style_Proximidadaequipamientosdesaluddistanciaenmetros_5,
                interactive: true,
    title: 'Proximidad a equipamientos de salud, distancia en metros<br />\
    <img src="styles/legend/Proximidadaequipamientosdesaluddistanciaenmetros_5_0.png" /> <300<br />\
    <img src="styles/legend/Proximidadaequipamientosdesaluddistanciaenmetros_5_1.png" /> 301 - 500<br />\
    <img src="styles/legend/Proximidadaequipamientosdesaluddistanciaenmetros_5_2.png" /> 501 - 700<br />\
    <img src="styles/legend/Proximidadaequipamientosdesaluddistanciaenmetros_5_3.png" /> 701 - 1.001<br />\
    <img src="styles/legend/Proximidadaequipamientosdesaluddistanciaenmetros_5_4.png" /> >1.001 <br />'
        });
var format_DensidadpoblacionalCNPV2018HabMt2_6 = new ol.format.GeoJSON();
var features_DensidadpoblacionalCNPV2018HabMt2_6 = format_DensidadpoblacionalCNPV2018HabMt2_6.readFeatures(json_DensidadpoblacionalCNPV2018HabMt2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadpoblacionalCNPV2018HabMt2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadpoblacionalCNPV2018HabMt2_6.addFeatures(features_DensidadpoblacionalCNPV2018HabMt2_6);
var lyr_DensidadpoblacionalCNPV2018HabMt2_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DensidadpoblacionalCNPV2018HabMt2_6, 
                style: style_DensidadpoblacionalCNPV2018HabMt2_6,
                interactive: true,
    title: 'Densidad poblacional CNPV 2018, Hab/Mt2<br />\
    <img src="styles/legend/DensidadpoblacionalCNPV2018HabMt2_6_0.png" /> <0,007<br />\
    <img src="styles/legend/DensidadpoblacionalCNPV2018HabMt2_6_1.png" /> 0,008 - 0,014<br />\
    <img src="styles/legend/DensidadpoblacionalCNPV2018HabMt2_6_2.png" /> 0,015 valor ideal<br />\
    <img src="styles/legend/DensidadpoblacionalCNPV2018HabMt2_6_3.png" /> 0,016 - 0,050<br />\
    <img src="styles/legend/DensidadpoblacionalCNPV2018HabMt2_6_4.png" /> 0,051 - 0,080<br />\
    <img src="styles/legend/DensidadpoblacionalCNPV2018HabMt2_6_5.png" /> > 0,081<br />'
        });
var group_Convenciones = new ol.layer.Group({
                                layers: [lyr_LmitefornterizoconVenezuela_1,lyr_ComunasCcutaVilladelRosario_2,],
                                title: "Convenciones"});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_Basemap_0,],
                                title: "Base Map"});

lyr_Basemap_0.setVisible(true);lyr_LmitefornterizoconVenezuela_1.setVisible(true);lyr_ComunasCcutaVilladelRosario_2.setVisible(true);lyr_Proximidadabibliotecasymuseosdistanciaenmetros_3.setVisible(false);lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_4.setVisible(false);lyr_Proximidadaequipamientosdesaluddistanciaenmetros_5.setVisible(false);lyr_DensidadpoblacionalCNPV2018HabMt2_6.setVisible(false);
var layersList = [group_BaseMap,group_Convenciones,lyr_Proximidadabibliotecasymuseosdistanciaenmetros_3,lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_4,lyr_Proximidadaequipamientosdesaluddistanciaenmetros_5,lyr_DensidadpoblacionalCNPV2018HabMt2_6];
lyr_LmitefornterizoconVenezuela_1.set('fieldAliases', {'FID_Fronte': 'FID_Fronte', 'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_CCNCT': 'MPIO_CCNCT', 'MPIO_NANO': 'MPIO_NANO', 'DPTO_CNMBR': 'DPTO_CNMBR', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Mun_Div': 'Mun_Div', });
lyr_ComunasCcutaVilladelRosario_2.set('fieldAliases', {'Id': 'Id', 'area': 'area', 'ID_1': 'ID_1', 'Comuna': 'Comuna', 'Indic_Vial': 'Indic_Vial', });
lyr_Proximidadabibliotecasymuseosdistanciaenmetros_3.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'COMUNA', 'ESTRATO': 'ESTRATO', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_4.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'COMUNA', 'ESTRATO': 'ESTRATO', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_Proximidadaequipamientosdesaluddistanciaenmetros_5.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'COMUNA', 'ESTRATO': 'ESTRATO', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_DensidadpoblacionalCNPV2018HabMt2_6.set('fieldAliases', {'ID_MANZANA': 'ID_MANZANA', 'COMUNA': 'COMUNA', 'ESTRATO': 'ESTRATO', 'DENSIDAD': 'DENSIDAD', 'IPM': 'IPM', 'AGUA_MEJOR': 'AGUA_MEJOR', 'SANEAMIENT': 'SANEAMIENT', 'ELECTRICI': 'ELECTRICI', 'INTERNET': 'INTERNET', 'R_R_SOL': 'R_R_SOL', 'VIV_ADE': 'VIV_ADE', 'VIV_TUG': 'VIV_TUG', 'HACINAMI': 'HACINAMI', 'MIXTICIDAD': 'MIXTICIDAD', 'DEPENDENCI': 'DEPENDENCI', 'P_ALFAB': 'P_ALFAB', 'PRO_A_ESCO': 'PRO_A_ESCO', 'A_ESCO_HOM': 'A_ESCO_HOM', 'A_ESCO_MUJ': 'A_ESCO_MUJ', 'PARIDAD': 'PARIDAD', 'T_DESEMPL': 'T_DESEMPL', 'DESEM_JUV': 'DESEM_JUV', 'EMP_IN_E': 'EMP_IN_E', 'EMP_IN_IMP': 'EMP_IN_IMP', 'VIVI_OCU': 'VIVI_OCU', 'HOGARES': 'HOGARES', 'PERSONAS': 'PERSONAS', 'VENEZOLANO': 'VENEZOLANO', 'U_INDUSTRI': 'U_INDUSTRI', 'U_SERVICIO': 'U_SERVICIO', 'U_COMERCIO': 'U_COMERCIO', 'U_MIXTO': 'U_MIXTO', 'U_VIVIENDA': 'U_VIVIENDA', 'U_PAR_ZVER': 'U_PAR_ZVER', 'DIS_SALUD': 'DIS_SALUD', 'DIS_EDUCA': 'DIS_EDUCA', 'DIS_BIBLIO': 'DIS_BIBLIO', 'DIS_EP': 'DIS_EP', 'REMOCIÓN': 'REMOCIÓN', 'INUNDACIÓ': 'INUNDACIÓ', 'ID_MANZA_1': 'ID_MANZA_1', 'COMUNA_1': 'COMUNA_1', 'RIESGO': 'RIESGO', });
lyr_LmitefornterizoconVenezuela_1.set('fieldImages', {'FID_Fronte': 'TextEdit', 'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_CCNCT': 'TextEdit', 'MPIO_NANO': 'Range', 'DPTO_CNMBR': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Mun_Div': 'TextEdit', });
lyr_ComunasCcutaVilladelRosario_2.set('fieldImages', {'Id': 'TextEdit', 'area': 'TextEdit', 'ID_1': 'TextEdit', 'Comuna': 'TextEdit', 'Indic_Vial': 'TextEdit', });
lyr_Proximidadabibliotecasymuseosdistanciaenmetros_3.set('fieldImages', {'ID_MANZANA': 'TextEdit', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'TextEdit', 'IPM': 'TextEdit', 'AGUA_MEJOR': 'TextEdit', 'SANEAMIENT': 'TextEdit', 'ELECTRICI': 'TextEdit', 'INTERNET': 'TextEdit', 'R_R_SOL': 'TextEdit', 'VIV_ADE': 'TextEdit', 'VIV_TUG': 'TextEdit', 'HACINAMI': 'TextEdit', 'MIXTICIDAD': 'TextEdit', 'DEPENDENCI': 'TextEdit', 'P_ALFAB': 'TextEdit', 'PRO_A_ESCO': 'TextEdit', 'A_ESCO_HOM': 'TextEdit', 'A_ESCO_MUJ': 'TextEdit', 'PARIDAD': 'TextEdit', 'T_DESEMPL': 'TextEdit', 'DESEM_JUV': 'TextEdit', 'EMP_IN_E': 'TextEdit', 'EMP_IN_IMP': 'TextEdit', 'VIVI_OCU': 'TextEdit', 'HOGARES': 'TextEdit', 'PERSONAS': 'TextEdit', 'VENEZOLANO': 'TextEdit', 'U_INDUSTRI': 'TextEdit', 'U_SERVICIO': 'TextEdit', 'U_COMERCIO': 'TextEdit', 'U_MIXTO': 'TextEdit', 'U_VIVIENDA': 'TextEdit', 'U_PAR_ZVER': 'TextEdit', 'DIS_SALUD': 'TextEdit', 'DIS_EDUCA': 'TextEdit', 'DIS_BIBLIO': 'TextEdit', 'DIS_EP': 'TextEdit', 'REMOCIÓN': 'TextEdit', 'INUNDACIÓ': 'TextEdit', 'ID_MANZA_1': 'TextEdit', 'COMUNA_1': 'TextEdit', 'RIESGO': 'TextEdit', });
lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_4.set('fieldImages', {'ID_MANZANA': 'TextEdit', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'TextEdit', 'IPM': 'TextEdit', 'AGUA_MEJOR': 'TextEdit', 'SANEAMIENT': 'TextEdit', 'ELECTRICI': 'TextEdit', 'INTERNET': 'TextEdit', 'R_R_SOL': 'TextEdit', 'VIV_ADE': 'TextEdit', 'VIV_TUG': 'TextEdit', 'HACINAMI': 'TextEdit', 'MIXTICIDAD': 'TextEdit', 'DEPENDENCI': 'TextEdit', 'P_ALFAB': 'TextEdit', 'PRO_A_ESCO': 'TextEdit', 'A_ESCO_HOM': 'TextEdit', 'A_ESCO_MUJ': 'TextEdit', 'PARIDAD': 'TextEdit', 'T_DESEMPL': 'TextEdit', 'DESEM_JUV': 'TextEdit', 'EMP_IN_E': 'TextEdit', 'EMP_IN_IMP': 'TextEdit', 'VIVI_OCU': 'TextEdit', 'HOGARES': 'TextEdit', 'PERSONAS': 'TextEdit', 'VENEZOLANO': 'TextEdit', 'U_INDUSTRI': 'TextEdit', 'U_SERVICIO': 'TextEdit', 'U_COMERCIO': 'TextEdit', 'U_MIXTO': 'TextEdit', 'U_VIVIENDA': 'TextEdit', 'U_PAR_ZVER': 'TextEdit', 'DIS_SALUD': 'TextEdit', 'DIS_EDUCA': 'TextEdit', 'DIS_BIBLIO': 'TextEdit', 'DIS_EP': 'TextEdit', 'REMOCIÓN': 'TextEdit', 'INUNDACIÓ': 'TextEdit', 'ID_MANZA_1': 'TextEdit', 'COMUNA_1': 'TextEdit', 'RIESGO': 'TextEdit', });
lyr_Proximidadaequipamientosdesaluddistanciaenmetros_5.set('fieldImages', {'ID_MANZANA': 'TextEdit', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'TextEdit', 'IPM': 'TextEdit', 'AGUA_MEJOR': 'TextEdit', 'SANEAMIENT': 'TextEdit', 'ELECTRICI': 'TextEdit', 'INTERNET': 'TextEdit', 'R_R_SOL': 'TextEdit', 'VIV_ADE': 'TextEdit', 'VIV_TUG': 'TextEdit', 'HACINAMI': 'TextEdit', 'MIXTICIDAD': 'TextEdit', 'DEPENDENCI': 'TextEdit', 'P_ALFAB': 'TextEdit', 'PRO_A_ESCO': 'TextEdit', 'A_ESCO_HOM': 'TextEdit', 'A_ESCO_MUJ': 'TextEdit', 'PARIDAD': 'TextEdit', 'T_DESEMPL': 'TextEdit', 'DESEM_JUV': 'TextEdit', 'EMP_IN_E': 'TextEdit', 'EMP_IN_IMP': 'TextEdit', 'VIVI_OCU': 'TextEdit', 'HOGARES': 'TextEdit', 'PERSONAS': 'TextEdit', 'VENEZOLANO': 'TextEdit', 'U_INDUSTRI': 'TextEdit', 'U_SERVICIO': 'TextEdit', 'U_COMERCIO': 'TextEdit', 'U_MIXTO': 'TextEdit', 'U_VIVIENDA': 'TextEdit', 'U_PAR_ZVER': 'TextEdit', 'DIS_SALUD': 'TextEdit', 'DIS_EDUCA': 'TextEdit', 'DIS_BIBLIO': 'TextEdit', 'DIS_EP': 'TextEdit', 'REMOCIÓN': 'TextEdit', 'INUNDACIÓ': 'TextEdit', 'ID_MANZA_1': 'TextEdit', 'COMUNA_1': 'TextEdit', 'RIESGO': 'TextEdit', });
lyr_DensidadpoblacionalCNPV2018HabMt2_6.set('fieldImages', {'ID_MANZANA': 'TextEdit', 'COMUNA': 'TextEdit', 'ESTRATO': 'TextEdit', 'DENSIDAD': 'TextEdit', 'IPM': 'TextEdit', 'AGUA_MEJOR': 'TextEdit', 'SANEAMIENT': 'TextEdit', 'ELECTRICI': 'TextEdit', 'INTERNET': 'TextEdit', 'R_R_SOL': 'TextEdit', 'VIV_ADE': 'TextEdit', 'VIV_TUG': 'TextEdit', 'HACINAMI': 'TextEdit', 'MIXTICIDAD': 'TextEdit', 'DEPENDENCI': 'TextEdit', 'P_ALFAB': 'TextEdit', 'PRO_A_ESCO': 'TextEdit', 'A_ESCO_HOM': 'TextEdit', 'A_ESCO_MUJ': 'TextEdit', 'PARIDAD': 'TextEdit', 'T_DESEMPL': 'TextEdit', 'DESEM_JUV': 'TextEdit', 'EMP_IN_E': 'TextEdit', 'EMP_IN_IMP': 'TextEdit', 'VIVI_OCU': 'TextEdit', 'HOGARES': 'TextEdit', 'PERSONAS': 'TextEdit', 'VENEZOLANO': 'TextEdit', 'U_INDUSTRI': 'TextEdit', 'U_SERVICIO': 'TextEdit', 'U_COMERCIO': 'TextEdit', 'U_MIXTO': 'TextEdit', 'U_VIVIENDA': 'TextEdit', 'U_PAR_ZVER': 'TextEdit', 'DIS_SALUD': 'TextEdit', 'DIS_EDUCA': 'TextEdit', 'DIS_BIBLIO': 'TextEdit', 'DIS_EP': 'TextEdit', 'REMOCIÓN': 'TextEdit', 'INUNDACIÓ': 'TextEdit', 'ID_MANZA_1': 'TextEdit', 'COMUNA_1': 'TextEdit', 'RIESGO': 'TextEdit', });
lyr_LmitefornterizoconVenezuela_1.set('fieldLabels', {});
lyr_ComunasCcutaVilladelRosario_2.set('fieldLabels', {});
lyr_Proximidadabibliotecasymuseosdistanciaenmetros_3.set('fieldLabels', {'ID_MANZANA': 'inline label', 'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'DENSIDAD': 'inline label', 'IPM': 'inline label', 'AGUA_MEJOR': 'inline label', 'SANEAMIENT': 'inline label', 'ELECTRICI': 'inline label', 'INTERNET': 'inline label', 'R_R_SOL': 'inline label', 'VIV_ADE': 'inline label', 'VIV_TUG': 'inline label', 'HACINAMI': 'inline label', 'MIXTICIDAD': 'inline label', 'DEPENDENCI': 'inline label', 'P_ALFAB': 'inline label', 'PRO_A_ESCO': 'inline label', 'A_ESCO_HOM': 'inline label', 'A_ESCO_MUJ': 'inline label', 'PARIDAD': 'inline label', 'T_DESEMPL': 'inline label', 'DESEM_JUV': 'inline label', 'EMP_IN_E': 'inline label', 'EMP_IN_IMP': 'inline label', 'VIVI_OCU': 'inline label', 'HOGARES': 'inline label', 'PERSONAS': 'inline label', 'VENEZOLANO': 'inline label', 'U_INDUSTRI': 'inline label', 'U_SERVICIO': 'inline label', 'U_COMERCIO': 'inline label', 'U_MIXTO': 'inline label', 'U_VIVIENDA': 'inline label', 'U_PAR_ZVER': 'inline label', 'DIS_SALUD': 'inline label', 'DIS_EDUCA': 'inline label', 'DIS_BIBLIO': 'inline label', 'DIS_EP': 'inline label', 'REMOCIÓN': 'no label', 'INUNDACIÓ': 'no label', 'ID_MANZA_1': 'no label', 'COMUNA_1': 'no label', 'RIESGO': 'no label', });
lyr_ProximidadaequipamientosdeEducacindistanciaenmetros_4.set('fieldLabels', {'ID_MANZANA': 'inline label', 'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'DENSIDAD': 'inline label', 'IPM': 'inline label', 'AGUA_MEJOR': 'inline label', 'SANEAMIENT': 'inline label', 'ELECTRICI': 'inline label', 'INTERNET': 'inline label', 'R_R_SOL': 'inline label', 'VIV_ADE': 'inline label', 'VIV_TUG': 'inline label', 'HACINAMI': 'inline label', 'MIXTICIDAD': 'inline label', 'DEPENDENCI': 'inline label', 'P_ALFAB': 'inline label', 'PRO_A_ESCO': 'inline label', 'A_ESCO_HOM': 'inline label', 'A_ESCO_MUJ': 'inline label', 'PARIDAD': 'inline label', 'T_DESEMPL': 'inline label', 'DESEM_JUV': 'inline label', 'EMP_IN_E': 'inline label', 'EMP_IN_IMP': 'inline label', 'VIVI_OCU': 'inline label', 'HOGARES': 'inline label', 'PERSONAS': 'inline label', 'VENEZOLANO': 'inline label', 'U_INDUSTRI': 'inline label', 'U_SERVICIO': 'inline label', 'U_COMERCIO': 'inline label', 'U_MIXTO': 'inline label', 'U_VIVIENDA': 'inline label', 'U_PAR_ZVER': 'inline label', 'DIS_SALUD': 'inline label', 'DIS_EDUCA': 'inline label', 'DIS_BIBLIO': 'inline label', 'DIS_EP': 'inline label', 'REMOCIÓN': 'no label', 'INUNDACIÓ': 'no label', 'ID_MANZA_1': 'no label', 'COMUNA_1': 'no label', 'RIESGO': 'no label', });
lyr_Proximidadaequipamientosdesaluddistanciaenmetros_5.set('fieldLabels', {'ID_MANZANA': 'inline label', 'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'DENSIDAD': 'inline label', 'IPM': 'inline label', 'AGUA_MEJOR': 'inline label', 'SANEAMIENT': 'inline label', 'ELECTRICI': 'inline label', 'INTERNET': 'inline label', 'R_R_SOL': 'inline label', 'VIV_ADE': 'inline label', 'VIV_TUG': 'inline label', 'HACINAMI': 'inline label', 'MIXTICIDAD': 'inline label', 'DEPENDENCI': 'inline label', 'P_ALFAB': 'inline label', 'PRO_A_ESCO': 'inline label', 'A_ESCO_HOM': 'inline label', 'A_ESCO_MUJ': 'inline label', 'PARIDAD': 'inline label', 'T_DESEMPL': 'inline label', 'DESEM_JUV': 'inline label', 'EMP_IN_E': 'inline label', 'EMP_IN_IMP': 'inline label', 'VIVI_OCU': 'inline label', 'HOGARES': 'inline label', 'PERSONAS': 'inline label', 'VENEZOLANO': 'inline label', 'U_INDUSTRI': 'inline label', 'U_SERVICIO': 'inline label', 'U_COMERCIO': 'inline label', 'U_MIXTO': 'inline label', 'U_VIVIENDA': 'inline label', 'U_PAR_ZVER': 'inline label', 'DIS_SALUD': 'inline label', 'DIS_EDUCA': 'inline label', 'DIS_BIBLIO': 'inline label', 'DIS_EP': 'inline label', 'REMOCIÓN': 'no label', 'INUNDACIÓ': 'no label', 'ID_MANZA_1': 'no label', 'COMUNA_1': 'no label', 'RIESGO': 'no label', });
lyr_DensidadpoblacionalCNPV2018HabMt2_6.set('fieldLabels', {'ID_MANZANA': 'inline label', 'COMUNA': 'inline label', 'ESTRATO': 'inline label', 'DENSIDAD': 'inline label', 'IPM': 'inline label', 'AGUA_MEJOR': 'inline label', 'SANEAMIENT': 'inline label', 'ELECTRICI': 'inline label', 'INTERNET': 'inline label', 'R_R_SOL': 'inline label', 'VIV_ADE': 'inline label', 'VIV_TUG': 'inline label', 'HACINAMI': 'inline label', 'MIXTICIDAD': 'inline label', 'DEPENDENCI': 'inline label', 'P_ALFAB': 'inline label', 'PRO_A_ESCO': 'inline label', 'A_ESCO_HOM': 'inline label', 'A_ESCO_MUJ': 'inline label', 'PARIDAD': 'inline label', 'T_DESEMPL': 'inline label', 'DESEM_JUV': 'inline label', 'EMP_IN_E': 'inline label', 'EMP_IN_IMP': 'inline label', 'VIVI_OCU': 'inline label', 'HOGARES': 'inline label', 'PERSONAS': 'inline label', 'VENEZOLANO': 'inline label', 'U_INDUSTRI': 'inline label', 'U_SERVICIO': 'inline label', 'U_COMERCIO': 'inline label', 'U_MIXTO': 'inline label', 'U_VIVIENDA': 'inline label', 'U_PAR_ZVER': 'inline label', 'DIS_SALUD': 'inline label', 'DIS_EDUCA': 'inline label', 'DIS_BIBLIO': 'inline label', 'DIS_EP': 'inline label', 'REMOCIÓN': 'no label', 'INUNDACIÓ': 'no label', 'ID_MANZA_1': 'no label', 'COMUNA_1': 'no label', 'RIESGO': 'no label', });
lyr_DensidadpoblacionalCNPV2018HabMt2_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});