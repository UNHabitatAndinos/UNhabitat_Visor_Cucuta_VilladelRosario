var wms_layers = [];

var format_RecoleccinderesiduosslidosHogares_0 = new ol.format.GeoJSON();
var features_RecoleccinderesiduosslidosHogares_0 = format_RecoleccinderesiduosslidosHogares_0.readFeatures(json_RecoleccinderesiduosslidosHogares_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RecoleccinderesiduosslidosHogares_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RecoleccinderesiduosslidosHogares_0.addFeatures(features_RecoleccinderesiduosslidosHogares_0);
var lyr_RecoleccinderesiduosslidosHogares_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RecoleccinderesiduosslidosHogares_0, 
                style: style_RecoleccinderesiduosslidosHogares_0,
                interactive: true,
    title: 'Recolección de residuos sólidos (% Hogares)<br />\
    <img src="styles/legend/RecoleccinderesiduosslidosHogares_0_0.png" /> 0 - 52<br />\
    <img src="styles/legend/RecoleccinderesiduosslidosHogares_0_1.png" /> 53 - 76<br />\
    <img src="styles/legend/RecoleccinderesiduosslidosHogares_0_2.png" /> 77 - 89<br />\
    <img src="styles/legend/RecoleccinderesiduosslidosHogares_0_3.png" /> 90 - 97<br />\
    <img src="styles/legend/RecoleccinderesiduosslidosHogares_0_4.png" /> 98 - 100<br />'
        });
var format_IPM_1 = new ol.format.GeoJSON();
var features_IPM_1 = format_IPM_1.readFeatures(json_IPM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IPM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IPM_1.addFeatures(features_IPM_1);
var lyr_IPM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IPM_1, 
                style: style_IPM_1,
                interactive: true,
    title: 'IPM %<br />\
    <img src="styles/legend/IPM_1_0.png" /> 0 - 8,3<br />\
    <img src="styles/legend/IPM_1_1.png" /> 8,3 - 18,8<br />\
    <img src="styles/legend/IPM_1_2.png" /> 18,8 - 29,6<br />\
    <img src="styles/legend/IPM_1_3.png" /> 29,6 - 45,3<br />\
    <img src="styles/legend/IPM_1_4.png" /> 45,3 - 100<br />'
        });
var format_Poblacinnacidasenvenezuela_2 = new ol.format.GeoJSON();
var features_Poblacinnacidasenvenezuela_2 = format_Poblacinnacidasenvenezuela_2.readFeatures(json_Poblacinnacidasenvenezuela_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacinnacidasenvenezuela_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacinnacidasenvenezuela_2.addFeatures(features_Poblacinnacidasenvenezuela_2);
var lyr_Poblacinnacidasenvenezuela_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblacinnacidasenvenezuela_2, 
                style: style_Poblacinnacidasenvenezuela_2,
                interactive: true,
    title: 'Población nacidas en venezuela (#)<br />\
    <img src="styles/legend/Poblacinnacidasenvenezuela_2_0.png" /> 1 - 5<br />\
    <img src="styles/legend/Poblacinnacidasenvenezuela_2_1.png" /> 5 - 15<br />\
    <img src="styles/legend/Poblacinnacidasenvenezuela_2_2.png" /> 15 - 31<br />\
    <img src="styles/legend/Poblacinnacidasenvenezuela_2_3.png" /> 31 - 87<br />\
    <img src="styles/legend/Poblacinnacidasenvenezuela_2_4.png" /> 87 - 205<br />'
        });
var format_AccesoainternetHogares_3 = new ol.format.GeoJSON();
var features_AccesoainternetHogares_3 = format_AccesoainternetHogares_3.readFeatures(json_AccesoainternetHogares_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccesoainternetHogares_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccesoainternetHogares_3.addFeatures(features_AccesoainternetHogares_3);
var lyr_AccesoainternetHogares_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccesoainternetHogares_3, 
                style: style_AccesoainternetHogares_3,
                interactive: true,
    title: 'Acceso a internet (% Hogares)<br />\
    <img src="styles/legend/AccesoainternetHogares_3_0.png" /> 2 - 11<br />\
    <img src="styles/legend/AccesoainternetHogares_3_1.png" /> 11,1 - 30<br />\
    <img src="styles/legend/AccesoainternetHogares_3_2.png" /> 30,1 - 45<br />\
    <img src="styles/legend/AccesoainternetHogares_3_3.png" /> 45,1 - 65<br />\
    <img src="styles/legend/AccesoainternetHogares_3_4.png" /> 65,1 - 100<br />'
        });
var format_ProximidadaequipamientosdeSaludDistanciaenMts_4 = new ol.format.GeoJSON();
var features_ProximidadaequipamientosdeSaludDistanciaenMts_4 = format_ProximidadaequipamientosdeSaludDistanciaenMts_4.readFeatures(json_ProximidadaequipamientosdeSaludDistanciaenMts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProximidadaequipamientosdeSaludDistanciaenMts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProximidadaequipamientosdeSaludDistanciaenMts_4.addFeatures(features_ProximidadaequipamientosdeSaludDistanciaenMts_4);
var lyr_ProximidadaequipamientosdeSaludDistanciaenMts_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProximidadaequipamientosdeSaludDistanciaenMts_4, 
                style: style_ProximidadaequipamientosdeSaludDistanciaenMts_4,
                interactive: true,
    title: 'Proximidad a equipamientos de Salud (Distancia en Mts)<br />\
    <img src="styles/legend/ProximidadaequipamientosdeSaludDistanciaenMts_4_0.png" /> 0 - 300<br />\
    <img src="styles/legend/ProximidadaequipamientosdeSaludDistanciaenMts_4_1.png" /> 301 - 600<br />\
    <img src="styles/legend/ProximidadaequipamientosdeSaludDistanciaenMts_4_2.png" /> 601 - 1000<br />\
    <img src="styles/legend/ProximidadaequipamientosdeSaludDistanciaenMts_4_3.png" /> 1001 - 1500<br />\
    <img src="styles/legend/ProximidadaequipamientosdeSaludDistanciaenMts_4_4.png" /> 1501 - 4754<br />'
        });
var format_ProximidadaequipamientosdeeducacinDistanciaenMts_5 = new ol.format.GeoJSON();
var features_ProximidadaequipamientosdeeducacinDistanciaenMts_5 = format_ProximidadaequipamientosdeeducacinDistanciaenMts_5.readFeatures(json_ProximidadaequipamientosdeeducacinDistanciaenMts_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProximidadaequipamientosdeeducacinDistanciaenMts_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProximidadaequipamientosdeeducacinDistanciaenMts_5.addFeatures(features_ProximidadaequipamientosdeeducacinDistanciaenMts_5);
var lyr_ProximidadaequipamientosdeeducacinDistanciaenMts_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ProximidadaequipamientosdeeducacinDistanciaenMts_5, 
                style: style_ProximidadaequipamientosdeeducacinDistanciaenMts_5,
                interactive: true,
    title: 'Proximidad a equipamientos de educación (Distancia en Mts)<br />\
    <img src="styles/legend/ProximidadaequipamientosdeeducacinDistanciaenMts_5_0.png" /> 0 - 300<br />\
    <img src="styles/legend/ProximidadaequipamientosdeeducacinDistanciaenMts_5_1.png" /> 301 - 600<br />\
    <img src="styles/legend/ProximidadaequipamientosdeeducacinDistanciaenMts_5_2.png" /> 601 - 1000<br />\
    <img src="styles/legend/ProximidadaequipamientosdeeducacinDistanciaenMts_5_3.png" /> 1001 - 1500<br />\
    <img src="styles/legend/ProximidadaequipamientosdeeducacinDistanciaenMts_5_4.png" /> 1501 - 2025<br />'
        });
var format_Densidadpoblacional_6 = new ol.format.GeoJSON();
var features_Densidadpoblacional_6 = format_Densidadpoblacional_6.readFeatures(json_Densidadpoblacional_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Densidadpoblacional_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Densidadpoblacional_6.addFeatures(features_Densidadpoblacional_6);
var lyr_Densidadpoblacional_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Densidadpoblacional_6, 
                style: style_Densidadpoblacional_6,
                interactive: true,
    title: 'Densidad poblacional<br />\
    <img src="styles/legend/Densidadpoblacional_6_0.png" /> 0 - 0,015<br />\
    <img src="styles/legend/Densidadpoblacional_6_1.png" /> 0,015 - 0,031<br />\
    <img src="styles/legend/Densidadpoblacional_6_2.png" /> 0,031 - 0,093<br />\
    <img src="styles/legend/Densidadpoblacional_6_3.png" /> 0,093 - 0,284<br />\
    <img src="styles/legend/Densidadpoblacional_6_4.png" /> 0,284 - 0,541<br />'
        });
var format_AccesoaelectricidadHogares_7 = new ol.format.GeoJSON();
var features_AccesoaelectricidadHogares_7 = format_AccesoaelectricidadHogares_7.readFeatures(json_AccesoaelectricidadHogares_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccesoaelectricidadHogares_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccesoaelectricidadHogares_7.addFeatures(features_AccesoaelectricidadHogares_7);
var lyr_AccesoaelectricidadHogares_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccesoaelectricidadHogares_7, 
                style: style_AccesoaelectricidadHogares_7,
                interactive: true,
    title: 'Acceso a electricidad (% Hogares)<br />\
    <img src="styles/legend/AccesoaelectricidadHogares_7_0.png" /> 5 - 10<br />\
    <img src="styles/legend/AccesoaelectricidadHogares_7_1.png" /> 10,1 - 76<br />\
    <img src="styles/legend/AccesoaelectricidadHogares_7_2.png" /> 76,1 - 89<br />\
    <img src="styles/legend/AccesoaelectricidadHogares_7_3.png" /> 89,1 - 97<br />\
    <img src="styles/legend/AccesoaelectricidadHogares_7_4.png" /> 97,1 - 100<br />'
        });
var format_AccesoasaneamientoadecuadoHogares_8 = new ol.format.GeoJSON();
var features_AccesoasaneamientoadecuadoHogares_8 = format_AccesoasaneamientoadecuadoHogares_8.readFeatures(json_AccesoasaneamientoadecuadoHogares_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccesoasaneamientoadecuadoHogares_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccesoasaneamientoadecuadoHogares_8.addFeatures(features_AccesoasaneamientoadecuadoHogares_8);
var lyr_AccesoasaneamientoadecuadoHogares_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccesoasaneamientoadecuadoHogares_8, 
                style: style_AccesoasaneamientoadecuadoHogares_8,
                interactive: true,
    title: 'Acceso a saneamiento adecuado (% Hogares)<br />\
    <img src="styles/legend/AccesoasaneamientoadecuadoHogares_8_0.png" /> 1 - 30<br />\
    <img src="styles/legend/AccesoasaneamientoadecuadoHogares_8_1.png" /> 30,1 - 61<br />\
    <img src="styles/legend/AccesoasaneamientoadecuadoHogares_8_2.png" /> 61,1 - 85<br />\
    <img src="styles/legend/AccesoasaneamientoadecuadoHogares_8_3.png" /> 85,1 - 95<br />\
    <img src="styles/legend/AccesoasaneamientoadecuadoHogares_8_4.png" /> 95,1 - 100<br />'
        });
var format_HacinamientoHogares_9 = new ol.format.GeoJSON();
var features_HacinamientoHogares_9 = format_HacinamientoHogares_9.readFeatures(json_HacinamientoHogares_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HacinamientoHogares_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HacinamientoHogares_9.addFeatures(features_HacinamientoHogares_9);
var lyr_HacinamientoHogares_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HacinamientoHogares_9, 
                style: style_HacinamientoHogares_9,
                interactive: true,
    title: 'Hacinamiento (% Hogares)<br />\
    <img src="styles/legend/HacinamientoHogares_9_0.png" /> 0 - 17<br />\
    <img src="styles/legend/HacinamientoHogares_9_1.png" /> 17 - 35<br />\
    <img src="styles/legend/HacinamientoHogares_9_2.png" /> 35 - 50<br />\
    <img src="styles/legend/HacinamientoHogares_9_3.png" /> 50 - 70<br />\
    <img src="styles/legend/HacinamientoHogares_9_4.png" /> 70 - 100<br />'
        });
var format_AccesoaaguamejoradaHogares_10 = new ol.format.GeoJSON();
var features_AccesoaaguamejoradaHogares_10 = format_AccesoaaguamejoradaHogares_10.readFeatures(json_AccesoaaguamejoradaHogares_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AccesoaaguamejoradaHogares_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AccesoaaguamejoradaHogares_10.addFeatures(features_AccesoaaguamejoradaHogares_10);
var lyr_AccesoaaguamejoradaHogares_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AccesoaaguamejoradaHogares_10, 
                style: style_AccesoaaguamejoradaHogares_10,
                interactive: true,
    title: 'Acceso a agua mejorada (% Hogares) <br />\
    <img src="styles/legend/AccesoaaguamejoradaHogares_10_0.png" /> 1,92 - 30<br />\
    <img src="styles/legend/AccesoaaguamejoradaHogares_10_1.png" /> 30,1 - 60<br />\
    <img src="styles/legend/AccesoaaguamejoradaHogares_10_2.png" /> 60,1 - 81<br />\
    <img src="styles/legend/AccesoaaguamejoradaHogares_10_3.png" /> 81,1 - 95<br />\
    <img src="styles/legend/AccesoaaguamejoradaHogares_10_4.png" /> 95,1 - 100<br />'
        });
var format_ViviendaadecuadaHogares_11 = new ol.format.GeoJSON();
var features_ViviendaadecuadaHogares_11 = format_ViviendaadecuadaHogares_11.readFeatures(json_ViviendaadecuadaHogares_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendaadecuadaHogares_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendaadecuadaHogares_11.addFeatures(features_ViviendaadecuadaHogares_11);
var lyr_ViviendaadecuadaHogares_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendaadecuadaHogares_11, 
                style: style_ViviendaadecuadaHogares_11,
                interactive: true,
    title: 'Vivienda adecuada (% Hogares)<br />\
    <img src="styles/legend/ViviendaadecuadaHogares_11_0.png" /> 0 - 15,4<br />\
    <img src="styles/legend/ViviendaadecuadaHogares_11_1.png" /> 15,4 - 42,9<br />\
    <img src="styles/legend/ViviendaadecuadaHogares_11_2.png" /> 42,9 - 69,2<br />\
    <img src="styles/legend/ViviendaadecuadaHogares_11_3.png" /> 69,2 - 90,7<br />\
    <img src="styles/legend/ViviendaadecuadaHogares_11_4.png" /> 90,7 - 100<br />'
        });
var format_Remocinenmasa_12 = new ol.format.GeoJSON();
var features_Remocinenmasa_12 = format_Remocinenmasa_12.readFeatures(json_Remocinenmasa_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Remocinenmasa_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Remocinenmasa_12.addFeatures(features_Remocinenmasa_12);
var lyr_Remocinenmasa_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Remocinenmasa_12, 
                style: style_Remocinenmasa_12,
                interactive: true,
    title: 'Remoción en masa<br />\
    <img src="styles/legend/Remocinenmasa_12_0.png" /> Alta<br />\
    <img src="styles/legend/Remocinenmasa_12_1.png" /> Media<br />'
        });
var format_Inundacin_13 = new ol.format.GeoJSON();
var features_Inundacin_13 = format_Inundacin_13.readFeatures(json_Inundacin_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inundacin_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inundacin_13.addFeatures(features_Inundacin_13);
var lyr_Inundacin_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Inundacin_13, 
                style: style_Inundacin_13,
                interactive: true,
    title: 'Inundación <br />\
    <img src="styles/legend/Inundacin_13_0.png" /> Alta<br />\
    <img src="styles/legend/Inundacin_13_1.png" /> Media<br />'
        });
var format_FronteraconVenezuela_14 = new ol.format.GeoJSON();
var features_FronteraconVenezuela_14 = format_FronteraconVenezuela_14.readFeatures(json_FronteraconVenezuela_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FronteraconVenezuela_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FronteraconVenezuela_14.addFeatures(features_FronteraconVenezuela_14);
var lyr_FronteraconVenezuela_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FronteraconVenezuela_14, 
                style: style_FronteraconVenezuela_14,
                interactive: true,
                title: '<img src="styles/legend/FronteraconVenezuela_14.png" /> Frontera con Venezuela'
            });
var format_LmitesurbanosCcutaVilladelRosario_15 = new ol.format.GeoJSON();
var features_LmitesurbanosCcutaVilladelRosario_15 = format_LmitesurbanosCcutaVilladelRosario_15.readFeatures(json_LmitesurbanosCcutaVilladelRosario_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LmitesurbanosCcutaVilladelRosario_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LmitesurbanosCcutaVilladelRosario_15.addFeatures(features_LmitesurbanosCcutaVilladelRosario_15);
var lyr_LmitesurbanosCcutaVilladelRosario_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LmitesurbanosCcutaVilladelRosario_15, 
                style: style_LmitesurbanosCcutaVilladelRosario_15,
                interactive: true,
    title: 'Límites urbanos Cúcuta -Villa del Rosario<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_0.png" /> Comuna 1<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_1.png" /> Comuna 2<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_2.png" /> Comuna 3<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_3.png" /> Comuna 4<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_4.png" /> Comuna 5<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_5.png" /> Comuna 6<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_6.png" /> Comuna 7<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_7.png" /> Comuna 8<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_8.png" />  Comuna 9<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_9.png" /> Comuna 10<br />\
    <img src="styles/legend/LmitesurbanosCcutaVilladelRosario_15_10.png" /> Villa del Rosario 11<br />'
        });

        var lyr_OSMStandard_16 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 0.300000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var group_CONVENCIONES = new ol.layer.Group({
                                layers: [lyr_FronteraconVenezuela_14,lyr_LmitesurbanosCcutaVilladelRosario_15,],
                                title: "CONVENCIONES"});
var group_AMENAZAYRIESGO = new ol.layer.Group({
                                layers: [lyr_Remocinenmasa_12,lyr_Inundacin_13,],
                                title: "AMENAZA Y RIESGO"});
var group_INFRAESTRUCTURAYDESARROLLO = new ol.layer.Group({
                                layers: [lyr_AccesoainternetHogares_3,lyr_ProximidadaequipamientosdeSaludDistanciaenMts_4,lyr_ProximidadaequipamientosdeeducacinDistanciaenMts_5,lyr_Densidadpoblacional_6,lyr_AccesoaelectricidadHogares_7,lyr_AccesoasaneamientoadecuadoHogares_8,lyr_HacinamientoHogares_9,lyr_AccesoaaguamejoradaHogares_10,lyr_ViviendaadecuadaHogares_11,],
                                title: "INFRAESTRUCTURA Y DESARROLLO"});
var group_CALIDADDEVIDA = new ol.layer.Group({
                                layers: [lyr_IPM_1,lyr_Poblacinnacidasenvenezuela_2,],
                                title: "CALIDAD DE VIDA"});
var group_SOSTENIBILIDADAMBIENTAL = new ol.layer.Group({
                                layers: [lyr_RecoleccinderesiduosslidosHogares_0,],
                                title: "SOSTENIBILIDAD AMBIENTAL"});

lyr_RecoleccinderesiduosslidosHogares_0.setVisible(true);lyr_IPM_1.setVisible(true);lyr_Poblacinnacidasenvenezuela_2.setVisible(true);lyr_AccesoainternetHogares_3.setVisible(true);lyr_ProximidadaequipamientosdeSaludDistanciaenMts_4.setVisible(true);lyr_ProximidadaequipamientosdeeducacinDistanciaenMts_5.setVisible(true);lyr_Densidadpoblacional_6.setVisible(true);lyr_AccesoaelectricidadHogares_7.setVisible(true);lyr_AccesoasaneamientoadecuadoHogares_8.setVisible(true);lyr_HacinamientoHogares_9.setVisible(true);lyr_AccesoaaguamejoradaHogares_10.setVisible(true);lyr_ViviendaadecuadaHogares_11.setVisible(true);lyr_Remocinenmasa_12.setVisible(true);lyr_Inundacin_13.setVisible(true);lyr_FronteraconVenezuela_14.setVisible(true);lyr_LmitesurbanosCcutaVilladelRosario_15.setVisible(true);lyr_OSMStandard_16.setVisible(true);
var layersList = [group_SOSTENIBILIDADAMBIENTAL,group_CALIDADDEVIDA,group_INFRAESTRUCTURAYDESARROLLO,group_AMENAZAYRIESGO,group_CONVENCIONES,lyr_OSMStandard_16];
lyr_RecoleccinderesiduosslidosHogares_0.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_IPM_1.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_Poblacinnacidasenvenezuela_2.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_AccesoainternetHogares_3.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_ProximidadaequipamientosdeSaludDistanciaenMts_4.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_ProximidadaequipamientosdeeducacinDistanciaenMts_5.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_Densidadpoblacional_6.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_AccesoaelectricidadHogares_7.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_AccesoasaneamientoadecuadoHogares_8.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_HacinamientoHogares_9.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_AccesoaaguamejoradaHogares_10.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_ViviendaadecuadaHogares_11.set('fieldAliases', {'cod_dane': 'cod_dane', 'cod_dane_1': 'cod_dane_1', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'P_NO_SAN': 'P_NO_SAN', 'P_HACI': 'P_HACI', 'P_V_ADE': 'P_V_ADE', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'E_PUB': 'E_PUB', 'EDU': 'EDU', 'SALUD': 'SALUD', 'IPM': 'IPM', 'HOGARES': 'HOGARES', 'T_PER': 'T_PER', 'Enestemuni': 'Enestemuni', 'Enotromuni': 'Enotromuni', 'Enotropais': 'Enotropais', 'Noinforma': 'Noinforma', 'AREA': 'AREA', 'DEN_POBLA': 'DEN_POBLA', 'T_NO_ALC': 'T_NO_ALC', });
lyr_Remocinenmasa_12.set('fieldAliases', {'cod_dane': 'cod_dane', 'ipm': 'ipm', 'Cod_Dep': 'Cod_Dep', 'Cod_DANE_': 'Cod_DANE_', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_NO_ALC': 'T_NO_ALC', 'P_NO_ALC': 'P_NO_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'T_NO_ALC1': 'T_NO_ALC1', 'P_NO_ALC1': 'P_NO_ALC1', 'c_hacinami': 'c_hacinami', 'hogares': 'hogares', 'mc_hacinam': 'mc_hacinam', 'P_V_ADE': 'P_V_ADE', 'HAC': 'HAC', 'Dis_Hosp': 'Dis_Hosp', 'Dis_Coleg': 'Dis_Coleg', 'Inundacion': 'Inundacion', 'Remocion': 'Remocion', });
lyr_Inundacin_13.set('fieldAliases', {'cod_dane': 'cod_dane', 'ipm': 'ipm', 'Cod_Dep': 'Cod_Dep', 'Cod_DANE_': 'Cod_DANE_', 'VEN': 'VEN', 'P_VEN': 'P_VEN', 'T_VIV': 'T_VIV', 'PA_ADE': 'PA_ADE', 'PA_INA': 'PA_INA', 'PI_ADE': 'PI_ADE', 'PI_INA': 'PI_INA', 'T_SI_ENERG': 'T_SI_ENERG', 'P_ENERGIA': 'P_ENERGIA', 'T_SI_ACU': 'T_SI_ACU', 'P_ACU': 'P_ACU', 'T_SI_ALC': 'T_SI_ALC', 'P_ALC': 'P_ALC', 'T_NO_ALC': 'T_NO_ALC', 'P_NO_ALC': 'P_NO_ALC', 'T_SI_RECO': 'T_SI_RECO', 'P_RECOL': 'P_RECOL', 'T_SI_INTER': 'T_SI_INTER', 'P_INTER': 'P_INTER', 'T_NO_ALC1': 'T_NO_ALC1', 'P_NO_ALC1': 'P_NO_ALC1', 'c_hacinami': 'c_hacinami', 'hogares': 'hogares', 'mc_hacinam': 'mc_hacinam', 'P_V_ADE': 'P_V_ADE', 'HAC': 'HAC', 'Dis_Hosp': 'Dis_Hosp', 'Dis_Coleg': 'Dis_Coleg', 'Inundacion': 'Inundacion', 'Remocion': 'Remocion', });
lyr_FronteraconVenezuela_14.set('fieldAliases', {'Id': 'Id', });
lyr_LmitesurbanosCcutaVilladelRosario_15.set('fieldAliases', {'Id': 'Id', 'area': 'area', 'ID_1': 'ID_1', 'Comuna': 'Comuna', });
lyr_RecoleccinderesiduosslidosHogares_0.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_IPM_1.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_Poblacinnacidasenvenezuela_2.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_AccesoainternetHogares_3.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_ProximidadaequipamientosdeSaludDistanciaenMts_4.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_ProximidadaequipamientosdeeducacinDistanciaenMts_5.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_Densidadpoblacional_6.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_AccesoaelectricidadHogares_7.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_AccesoasaneamientoadecuadoHogares_8.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_HacinamientoHogares_9.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_AccesoaaguamejoradaHogares_10.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_ViviendaadecuadaHogares_11.set('fieldImages', {'cod_dane': 'TextEdit', 'cod_dane_1': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'P_NO_SAN': 'TextEdit', 'P_HACI': 'TextEdit', 'P_V_ADE': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'E_PUB': 'TextEdit', 'EDU': 'TextEdit', 'SALUD': 'TextEdit', 'IPM': 'TextEdit', 'HOGARES': 'TextEdit', 'T_PER': 'TextEdit', 'Enestemuni': 'TextEdit', 'Enotromuni': 'TextEdit', 'Enotropais': 'TextEdit', 'Noinforma': 'TextEdit', 'AREA': 'TextEdit', 'DEN_POBLA': 'TextEdit', 'T_NO_ALC': 'TextEdit', });
lyr_Remocinenmasa_12.set('fieldImages', {'cod_dane': 'TextEdit', 'ipm': 'TextEdit', 'Cod_Dep': 'TextEdit', 'Cod_DANE_': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_NO_ALC': 'TextEdit', 'P_NO_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'T_NO_ALC1': 'TextEdit', 'P_NO_ALC1': 'TextEdit', 'c_hacinami': 'TextEdit', 'hogares': 'TextEdit', 'mc_hacinam': 'TextEdit', 'P_V_ADE': 'TextEdit', 'HAC': 'TextEdit', 'Dis_Hosp': 'TextEdit', 'Dis_Coleg': 'TextEdit', 'Inundacion': 'TextEdit', 'Remocion': 'TextEdit', });
lyr_Inundacin_13.set('fieldImages', {'cod_dane': 'TextEdit', 'ipm': 'TextEdit', 'Cod_Dep': 'TextEdit', 'Cod_DANE_': 'TextEdit', 'VEN': 'TextEdit', 'P_VEN': 'TextEdit', 'T_VIV': 'TextEdit', 'PA_ADE': 'TextEdit', 'PA_INA': 'TextEdit', 'PI_ADE': 'TextEdit', 'PI_INA': 'TextEdit', 'T_SI_ENERG': 'TextEdit', 'P_ENERGIA': 'TextEdit', 'T_SI_ACU': 'TextEdit', 'P_ACU': 'TextEdit', 'T_SI_ALC': 'TextEdit', 'P_ALC': 'TextEdit', 'T_NO_ALC': 'TextEdit', 'P_NO_ALC': 'TextEdit', 'T_SI_RECO': 'TextEdit', 'P_RECOL': 'TextEdit', 'T_SI_INTER': 'TextEdit', 'P_INTER': 'TextEdit', 'T_NO_ALC1': 'TextEdit', 'P_NO_ALC1': 'TextEdit', 'c_hacinami': 'TextEdit', 'hogares': 'TextEdit', 'mc_hacinam': 'TextEdit', 'P_V_ADE': 'TextEdit', 'HAC': 'TextEdit', 'Dis_Hosp': 'TextEdit', 'Dis_Coleg': 'TextEdit', 'Inundacion': 'TextEdit', 'Remocion': 'TextEdit', });
lyr_FronteraconVenezuela_14.set('fieldImages', {'Id': 'Range', });
lyr_LmitesurbanosCcutaVilladelRosario_15.set('fieldImages', {'Id': 'TextEdit', 'area': 'TextEdit', 'ID_1': 'TextEdit', 'Comuna': 'TextEdit', });
lyr_RecoleccinderesiduosslidosHogares_0.set('fieldLabels', {});
lyr_IPM_1.set('fieldLabels', {});
lyr_Poblacinnacidasenvenezuela_2.set('fieldLabels', {});
lyr_AccesoainternetHogares_3.set('fieldLabels', {});
lyr_ProximidadaequipamientosdeSaludDistanciaenMts_4.set('fieldLabels', {});
lyr_ProximidadaequipamientosdeeducacinDistanciaenMts_5.set('fieldLabels', {});
lyr_Densidadpoblacional_6.set('fieldLabels', {});
lyr_AccesoaelectricidadHogares_7.set('fieldLabels', {});
lyr_AccesoasaneamientoadecuadoHogares_8.set('fieldLabels', {});
lyr_HacinamientoHogares_9.set('fieldLabels', {});
lyr_AccesoaaguamejoradaHogares_10.set('fieldLabels', {});
lyr_ViviendaadecuadaHogares_11.set('fieldLabels', {});
lyr_Remocinenmasa_12.set('fieldLabels', {});
lyr_Inundacin_13.set('fieldLabels', {});
lyr_FronteraconVenezuela_14.set('fieldLabels', {});
lyr_LmitesurbanosCcutaVilladelRosario_15.set('fieldLabels', {});
lyr_LmitesurbanosCcutaVilladelRosario_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});