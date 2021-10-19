ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-96.367282, -19.634766, -52.348928, 2.095140]);
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
var format_Watersheds_1 = new ol.format.GeoJSON();
var features_Watersheds_1 = format_Watersheds_1.readFeatures(json_Watersheds_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Watersheds_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watersheds_1.addFeatures(features_Watersheds_1);
var lyr_Watersheds_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Watersheds_1, 
                style: style_Watersheds_1,
                interactive: true,
                title: '<img src="styles/legend/Watersheds_1.png" /> Watersheds'
            });
var format_Riverstreams_2 = new ol.format.GeoJSON();
var features_Riverstreams_2 = format_Riverstreams_2.readFeatures(json_Riverstreams_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Riverstreams_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riverstreams_2.addFeatures(features_Riverstreams_2);
var lyr_Riverstreams_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Riverstreams_2, 
                style: style_Riverstreams_2,
                interactive: true,
                title: '<img src="styles/legend/Riverstreams_2.png" /> River streams'
            });
var format_Stations_3 = new ol.format.GeoJSON();
var features_Stations_3 = format_Stations_3.readFeatures(json_Stations_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Stations_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stations_3.addFeatures(features_Stations_3);
var lyr_Stations_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Stations_3, 
                style: style_Stations_3,
                interactive: true,
                title: '<img src="styles/legend/Stations_3.png" /> Stations'
            });

lyr_GooglePhysical_0.setVisible(true);lyr_Watersheds_1.setVisible(false);lyr_Riverstreams_2.setVisible(true);lyr_Stations_3.setVisible(true);
var layersList = [lyr_GooglePhysical_0,lyr_Watersheds_1,lyr_Riverstreams_2,lyr_Stations_3];
lyr_Watersheds_1.set('fieldAliases', {'Name': 'Name', 'Area_sqkm': 'Area_sqkm', });
lyr_Riverstreams_2.set('fieldAliases', {'COMID': 'COMID', });
lyr_Stations_3.set('fieldAliases', {'Name': 'Name', 'Abrev': 'Abrev', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Watershed': 'Watershed', 'Slope': 'Slope', });
lyr_Watersheds_1.set('fieldImages', {'Name': 'TextEdit', 'Area_sqkm': 'TextEdit', });
lyr_Riverstreams_2.set('fieldImages', {'COMID': 'TextEdit', });
lyr_Stations_3.set('fieldImages', {'Name': 'TextEdit', 'Abrev': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Watershed': 'TextEdit', 'Slope': 'TextEdit', });
lyr_Watersheds_1.set('fieldLabels', {'Name': 'header label', 'Area_sqkm': 'inline label', });
lyr_Riverstreams_2.set('fieldLabels', {'COMID': 'header label', });
lyr_Stations_3.set('fieldLabels', {'Name': 'header label', 'Abrev': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Watershed': 'inline label', 'Slope': 'inline label', });
lyr_Stations_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});