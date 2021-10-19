ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-94.978403, -20.974972, -47.597703, 2.529290]);
var wms_layers = [];


        var lyr_GooglePhysical_0 = new ol.layer.Tile({
            'title': 'Google Physical',
            'type': 'base',
            'opacity': 0.796078,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}&s=Ga'
            })
        });
var format_Rios_1 = new ol.format.GeoJSON();
var features_Rios_1 = format_Rios_1.readFeatures(json_Rios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_1.addFeatures(features_Rios_1);
var lyr_Rios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_1, 
                style: style_Rios_1,
                interactive: true,
                title: '<img src="styles/legend/Rios_1.png" /> Rios'
            });
var format_Estaciones_2 = new ol.format.GeoJSON();
var features_Estaciones_2 = format_Estaciones_2.readFeatures(json_Estaciones_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Estaciones_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_2.addFeatures(features_Estaciones_2);
var lyr_Estaciones_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estaciones_2, 
                style: style_Estaciones_2,
                interactive: true,
                title: '<img src="styles/legend/Estaciones_2.png" /> Estaciones'
            });

lyr_GooglePhysical_0.setVisible(true);lyr_Rios_1.setVisible(true);lyr_Estaciones_2.setVisible(true);
var layersList = [lyr_GooglePhysical_0,lyr_Rios_1,lyr_Estaciones_2];
lyr_Rios_1.set('fieldAliases', {'COMID': 'COMID', });
lyr_Estaciones_2.set('fieldAliases', {'Name': 'Name', 'Abrev': 'Abrev', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Watershed': 'Watershed', 'Slope': 'Slope', });
lyr_Rios_1.set('fieldImages', {'COMID': 'TextEdit', });
lyr_Estaciones_2.set('fieldImages', {'Name': 'TextEdit', 'Abrev': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Watershed': 'TextEdit', 'Slope': 'TextEdit', });
lyr_Rios_1.set('fieldLabels', {'COMID': 'header label', });
lyr_Estaciones_2.set('fieldLabels', {'Name': 'header label', 'Abrev': 'header label', 'Latitude': 'header label', 'Longitude': 'header label', 'Watershed': 'header label', 'Slope': 'header label', });
lyr_Estaciones_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});