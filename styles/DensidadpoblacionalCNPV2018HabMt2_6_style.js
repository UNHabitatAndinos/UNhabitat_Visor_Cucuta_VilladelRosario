var size = 0;
var placement = 'point';

var style_DensidadpoblacionalCNPV2018HabMt2_6 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("DENSIDAD");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 0.007000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(212,222,152,0.65)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.007000 && value <= 0.014000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(138,204,98,0.65)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.014000 && value <= 0.015000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(110,129,48,0.65)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(110,129,48,0.65)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.015000 && value <= 0.050000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,232,91,0.65)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.050000 && value <= 0.080000) {
            style = [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(246,144,83,0.65)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.080000 && value <= 0.539689) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,25,28,0.65)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(215,25,28,0.65)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
