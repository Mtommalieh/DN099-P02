var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Boundries_1 = new ol.format.GeoJSON();
var features_Boundries_1 = format_Boundries_1.readFeatures(json_Boundries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundries_1.addFeatures(features_Boundries_1);
var lyr_Boundries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundries_1, 
                style: style_Boundries_1,
                popuplayertitle: "Boundries",
                interactive: true,
                title: '<img src="styles/legend/Boundries_1.png" /> Boundries'
            });
var format_EHV_2 = new ol.format.GeoJSON();
var features_EHV_2 = format_EHV_2.readFeatures(json_EHV_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EHV_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EHV_2.addFeatures(features_EHV_2);
var lyr_EHV_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EHV_2, 
                style: style_EHV_2,
                popuplayertitle: "EHV",
                interactive: true,
                title: '<img src="styles/legend/EHV_2.png" /> EHV'
            });
var format_MV_3 = new ol.format.GeoJSON();
var features_MV_3 = format_MV_3.readFeatures(json_MV_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MV_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MV_3.addFeatures(features_MV_3);
var lyr_MV_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MV_3, 
                style: style_MV_3,
                popuplayertitle: "MV",
                interactive: true,
                title: '<img src="styles/legend/MV_3.png" /> MV'
            });
var format_QNBN_4 = new ol.format.GeoJSON();
var features_QNBN_4 = format_QNBN_4.readFeatures(json_QNBN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QNBN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QNBN_4.addFeatures(features_QNBN_4);
var lyr_QNBN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QNBN_4, 
                style: style_QNBN_4,
                popuplayertitle: "QNBN",
                interactive: true,
                title: '<img src="styles/legend/QNBN_4.png" /> QNBN'
            });
var format_LV_5 = new ol.format.GeoJSON();
var features_LV_5 = format_LV_5.readFeatures(json_LV_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LV_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LV_5.addFeatures(features_LV_5);
var lyr_LV_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LV_5, 
                style: style_LV_5,
                popuplayertitle: "LV",
                interactive: true,
                title: '<img src="styles/legend/LV_5.png" /> LV'
            });
var format_Ooredoo_6 = new ol.format.GeoJSON();
var features_Ooredoo_6 = format_Ooredoo_6.readFeatures(json_Ooredoo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ooredoo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ooredoo_6.addFeatures(features_Ooredoo_6);
var lyr_Ooredoo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ooredoo_6, 
                style: style_Ooredoo_6,
                popuplayertitle: "Ooredoo",
                interactive: true,
                title: '<img src="styles/legend/Ooredoo_6.png" /> Ooredoo'
            });
var format_PWLayout_7 = new ol.format.GeoJSON();
var features_PWLayout_7 = format_PWLayout_7.readFeatures(json_PWLayout_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PWLayout_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PWLayout_7.addFeatures(features_PWLayout_7);
var lyr_PWLayout_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PWLayout_7, 
                style: style_PWLayout_7,
                popuplayertitle: "PW Layout",
                interactive: true,
                title: '<img src="styles/legend/PWLayout_7.png" /> PW Layout'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Boundries_1.setVisible(true);lyr_EHV_2.setVisible(true);lyr_MV_3.setVisible(true);lyr_QNBN_4.setVisible(true);lyr_LV_5.setVisible(true);lyr_Ooredoo_6.setVisible(true);lyr_PWLayout_7.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_Boundries_1,lyr_EHV_2,lyr_MV_3,lyr_QNBN_4,lyr_LV_5,lyr_Ooredoo_6,lyr_PWLayout_7];
lyr_Boundries_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_EHV_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_MV_3.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_QNBN_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_LV_5.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Ooredoo_6.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_PWLayout_7.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_Boundries_1.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_EHV_2.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_MV_3.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_QNBN_4.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_LV_5.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Ooredoo_6.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_PWLayout_7.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_Boundries_1.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_EHV_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_MV_3.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_QNBN_4.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_LV_5.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_Ooredoo_6.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PWLayout_7.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_PWLayout_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});