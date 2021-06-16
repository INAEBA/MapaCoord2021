var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionYuriria_3 = new ol.format.GeoJSON();
var features_CoordinacionYuriria_3 = format_CoordinacionYuriria_3.readFeatures(json_CoordinacionYuriria_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionYuriria_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionYuriria_3.addFeatures(features_CoordinacionYuriria_3);
var lyr_CoordinacionYuriria_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionYuriria_3, 
                style: style_CoordinacionYuriria_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionYuriria_3.png" /> Coordinacion Yuriria'
            });
var format_CoordinacionVillagran_4 = new ol.format.GeoJSON();
var features_CoordinacionVillagran_4 = format_CoordinacionVillagran_4.readFeatures(json_CoordinacionVillagran_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionVillagran_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionVillagran_4.addFeatures(features_CoordinacionVillagran_4);
var lyr_CoordinacionVillagran_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionVillagran_4, 
                style: style_CoordinacionVillagran_4,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionVillagran_4.png" /> Coordinacion Villagran'
            });
var format_CoordinacionValledeSantiago_5 = new ol.format.GeoJSON();
var features_CoordinacionValledeSantiago_5 = format_CoordinacionValledeSantiago_5.readFeatures(json_CoordinacionValledeSantiago_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionValledeSantiago_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionValledeSantiago_5.addFeatures(features_CoordinacionValledeSantiago_5);
var lyr_CoordinacionValledeSantiago_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionValledeSantiago_5, 
                style: style_CoordinacionValledeSantiago_5,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionValledeSantiago_5.png" /> Coordinacion Valle de Santiago'
            });
var format_CoordinacionSilao_6 = new ol.format.GeoJSON();
var features_CoordinacionSilao_6 = format_CoordinacionSilao_6.readFeatures(json_CoordinacionSilao_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSilao_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSilao_6.addFeatures(features_CoordinacionSilao_6);
var lyr_CoordinacionSilao_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSilao_6, 
                style: style_CoordinacionSilao_6,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSilao_6.png" /> Coordinacion Silao'
            });
var format_CoordinacionSanMiguelAllende_7 = new ol.format.GeoJSON();
var features_CoordinacionSanMiguelAllende_7 = format_CoordinacionSanMiguelAllende_7.readFeatures(json_CoordinacionSanMiguelAllende_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanMiguelAllende_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanMiguelAllende_7.addFeatures(features_CoordinacionSanMiguelAllende_7);
var lyr_CoordinacionSanMiguelAllende_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanMiguelAllende_7, 
                style: style_CoordinacionSanMiguelAllende_7,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanMiguelAllende_7.png" /> Coordinacion San Miguel Allende'
            });
var format_CoordinacionSanLuisdelaPaz_8 = new ol.format.GeoJSON();
var features_CoordinacionSanLuisdelaPaz_8 = format_CoordinacionSanLuisdelaPaz_8.readFeatures(json_CoordinacionSanLuisdelaPaz_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanLuisdelaPaz_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanLuisdelaPaz_8.addFeatures(features_CoordinacionSanLuisdelaPaz_8);
var lyr_CoordinacionSanLuisdelaPaz_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanLuisdelaPaz_8, 
                style: style_CoordinacionSanLuisdelaPaz_8,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanLuisdelaPaz_8.png" /> Coordinacion San Luis de la Paz'
            });
var format_CoordinacionSanJoseIturbide_9 = new ol.format.GeoJSON();
var features_CoordinacionSanJoseIturbide_9 = format_CoordinacionSanJoseIturbide_9.readFeatures(json_CoordinacionSanJoseIturbide_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanJoseIturbide_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanJoseIturbide_9.addFeatures(features_CoordinacionSanJoseIturbide_9);
var lyr_CoordinacionSanJoseIturbide_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanJoseIturbide_9, 
                style: style_CoordinacionSanJoseIturbide_9,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanJoseIturbide_9.png" /> Coordinacion San Jose Iturbide'
            });
var format_CoordinacionSanFelipe_10 = new ol.format.GeoJSON();
var features_CoordinacionSanFelipe_10 = format_CoordinacionSanFelipe_10.readFeatures(json_CoordinacionSanFelipe_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanFelipe_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanFelipe_10.addFeatures(features_CoordinacionSanFelipe_10);
var lyr_CoordinacionSanFelipe_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanFelipe_10, 
                style: style_CoordinacionSanFelipe_10,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanFelipe_10.png" /> Coordinacion San Felipe'
            });
var format_CoordinacionSalvatierra_11 = new ol.format.GeoJSON();
var features_CoordinacionSalvatierra_11 = format_CoordinacionSalvatierra_11.readFeatures(json_CoordinacionSalvatierra_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSalvatierra_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSalvatierra_11.addFeatures(features_CoordinacionSalvatierra_11);
var lyr_CoordinacionSalvatierra_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSalvatierra_11, 
                style: style_CoordinacionSalvatierra_11,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSalvatierra_11.png" /> Coordinacion Salvatierra'
            });
var format_CoordinacionSalamanca_12 = new ol.format.GeoJSON();
var features_CoordinacionSalamanca_12 = format_CoordinacionSalamanca_12.readFeatures(json_CoordinacionSalamanca_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSalamanca_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSalamanca_12.addFeatures(features_CoordinacionSalamanca_12);
var lyr_CoordinacionSalamanca_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSalamanca_12, 
                style: style_CoordinacionSalamanca_12,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSalamanca_12.png" /> Coordinacion Salamanca'
            });
var format_CoordinacionPurisima_13 = new ol.format.GeoJSON();
var features_CoordinacionPurisima_13 = format_CoordinacionPurisima_13.readFeatures(json_CoordinacionPurisima_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionPurisima_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionPurisima_13.addFeatures(features_CoordinacionPurisima_13);
var lyr_CoordinacionPurisima_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionPurisima_13, 
                style: style_CoordinacionPurisima_13,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionPurisima_13.png" /> Coordinacion Purisima'
            });
var format_CoordinacionPenjamo_14 = new ol.format.GeoJSON();
var features_CoordinacionPenjamo_14 = format_CoordinacionPenjamo_14.readFeatures(json_CoordinacionPenjamo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionPenjamo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionPenjamo_14.addFeatures(features_CoordinacionPenjamo_14);
var lyr_CoordinacionPenjamo_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionPenjamo_14, 
                style: style_CoordinacionPenjamo_14,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionPenjamo_14.png" /> Coordinacion Penjamo'
            });
var format_CoordinacionLeonSur_15 = new ol.format.GeoJSON();
var features_CoordinacionLeonSur_15 = format_CoordinacionLeonSur_15.readFeatures(json_CoordinacionLeonSur_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionLeonSur_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionLeonSur_15.addFeatures(features_CoordinacionLeonSur_15);
var lyr_CoordinacionLeonSur_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionLeonSur_15, 
                style: style_CoordinacionLeonSur_15,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionLeonSur_15.png" /> Coordinacion Leon Sur'
            });
var format_CoordinacionLeonNorte_16 = new ol.format.GeoJSON();
var features_CoordinacionLeonNorte_16 = format_CoordinacionLeonNorte_16.readFeatures(json_CoordinacionLeonNorte_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionLeonNorte_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionLeonNorte_16.addFeatures(features_CoordinacionLeonNorte_16);
var lyr_CoordinacionLeonNorte_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionLeonNorte_16, 
                style: style_CoordinacionLeonNorte_16,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionLeonNorte_16.png" /> Coordinacion Leon Norte'
            });
var format_CoordinacionIrapuato_17 = new ol.format.GeoJSON();
var features_CoordinacionIrapuato_17 = format_CoordinacionIrapuato_17.readFeatures(json_CoordinacionIrapuato_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionIrapuato_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionIrapuato_17.addFeatures(features_CoordinacionIrapuato_17);
var lyr_CoordinacionIrapuato_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionIrapuato_17, 
                style: style_CoordinacionIrapuato_17,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionIrapuato_17.png" /> Coordinacion Irapuato'
            });
var format_CoordinacionDolores_18 = new ol.format.GeoJSON();
var features_CoordinacionDolores_18 = format_CoordinacionDolores_18.readFeatures(json_CoordinacionDolores_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionDolores_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionDolores_18.addFeatures(features_CoordinacionDolores_18);
var lyr_CoordinacionDolores_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionDolores_18, 
                style: style_CoordinacionDolores_18,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionDolores_18.png" /> Coordinacion Dolores'
            });
var format_CoordinacionCelaya_19 = new ol.format.GeoJSON();
var features_CoordinacionCelaya_19 = format_CoordinacionCelaya_19.readFeatures(json_CoordinacionCelaya_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionCelaya_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionCelaya_19.addFeatures(features_CoordinacionCelaya_19);
var lyr_CoordinacionCelaya_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionCelaya_19, 
                style: style_CoordinacionCelaya_19,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionCelaya_19.png" /> Coordinacion Celaya'
            });
var format_CoordinacionAcambaro_20 = new ol.format.GeoJSON();
var features_CoordinacionAcambaro_20 = format_CoordinacionAcambaro_20.readFeatures(json_CoordinacionAcambaro_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionAcambaro_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionAcambaro_20.addFeatures(features_CoordinacionAcambaro_20);
var lyr_CoordinacionAcambaro_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionAcambaro_20, 
                style: style_CoordinacionAcambaro_20,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionAcambaro_20.png" /> Coordinacion Acambaro'
            });
var format_CoordinacionAbasolo_21 = new ol.format.GeoJSON();
var features_CoordinacionAbasolo_21 = format_CoordinacionAbasolo_21.readFeatures(json_CoordinacionAbasolo_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionAbasolo_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionAbasolo_21.addFeatures(features_CoordinacionAbasolo_21);
var lyr_CoordinacionAbasolo_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionAbasolo_21, 
                style: style_CoordinacionAbasolo_21,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionAbasolo_21.png" /> Coordinacion Abasolo'
            });
var format_Microregiones2020_22 = new ol.format.GeoJSON();
var features_Microregiones2020_22 = format_Microregiones2020_22.readFeatures(json_Microregiones2020_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Microregiones2020_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Microregiones2020_22.addFeatures(features_Microregiones2020_22);
var lyr_Microregiones2020_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Microregiones2020_22, 
                style: style_Microregiones2020_22,
                interactive: true,
                title: '<img src="styles/legend/Microregiones2020_22.png" /> Microregiones 2020'
            });
var group_CoordinacionesdeZona = new ol.layer.Group({
                                layers: [lyr_CoordinacionYuriria_3,lyr_CoordinacionVillagran_4,lyr_CoordinacionValledeSantiago_5,lyr_CoordinacionSilao_6,lyr_CoordinacionSanMiguelAllende_7,lyr_CoordinacionSanLuisdelaPaz_8,lyr_CoordinacionSanJoseIturbide_9,lyr_CoordinacionSanFelipe_10,lyr_CoordinacionSalvatierra_11,lyr_CoordinacionSalamanca_12,lyr_CoordinacionPurisima_13,lyr_CoordinacionPenjamo_14,lyr_CoordinacionLeonSur_15,lyr_CoordinacionLeonNorte_16,lyr_CoordinacionIrapuato_17,lyr_CoordinacionDolores_18,lyr_CoordinacionCelaya_19,lyr_CoordinacionAcambaro_20,lyr_CoordinacionAbasolo_21,],
                                title: "Coordinaciones de Zona"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionYuriria_3.setVisible(true);lyr_CoordinacionVillagran_4.setVisible(true);lyr_CoordinacionValledeSantiago_5.setVisible(true);lyr_CoordinacionSilao_6.setVisible(true);lyr_CoordinacionSanMiguelAllende_7.setVisible(true);lyr_CoordinacionSanLuisdelaPaz_8.setVisible(true);lyr_CoordinacionSanJoseIturbide_9.setVisible(true);lyr_CoordinacionSanFelipe_10.setVisible(true);lyr_CoordinacionSalvatierra_11.setVisible(true);lyr_CoordinacionSalamanca_12.setVisible(true);lyr_CoordinacionPurisima_13.setVisible(true);lyr_CoordinacionPenjamo_14.setVisible(true);lyr_CoordinacionLeonSur_15.setVisible(true);lyr_CoordinacionLeonNorte_16.setVisible(true);lyr_CoordinacionIrapuato_17.setVisible(true);lyr_CoordinacionDolores_18.setVisible(true);lyr_CoordinacionCelaya_19.setVisible(true);lyr_CoordinacionAcambaro_20.setVisible(true);lyr_CoordinacionAbasolo_21.setVisible(true);lyr_Microregiones2020_22.setVisible(true);
var layersList = [group_MapasBase,group_CoordinacionesdeZona,lyr_Microregiones2020_22];
lyr_CoordinacionYuriria_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionVillagran_4.set('fieldAliases', {'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionValledeSantiago_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSilao_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanMiguelAllende_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanLuisdelaPaz_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanJoseIturbide_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanFelipe_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSalvatierra_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSalamanca_12.set('fieldAliases', {'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionPurisima_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionPenjamo_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionLeonSur_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CoordinacionLeonNorte_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_CoordinacionIrapuato_17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionDolores_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionCelaya_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionAcambaro_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionAbasolo_21.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_Microregiones2020_22.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionYuriria_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionVillagran_4.set('fieldImages', {'cat': 'Range', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionValledeSantiago_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSilao_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanMiguelAllende_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanLuisdelaPaz_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanJoseIturbide_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanFelipe_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSalvatierra_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSalamanca_12.set('fieldImages', {'cat': 'Range', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionPurisima_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionPenjamo_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionLeonSur_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CoordinacionLeonNorte_16.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CoordinacionIrapuato_17.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionDolores_18.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionCelaya_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionAcambaro_20.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionAbasolo_21.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Microregiones2020_22.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionYuriria_3.set('fieldLabels', {});
lyr_CoordinacionVillagran_4.set('fieldLabels', {});
lyr_CoordinacionValledeSantiago_5.set('fieldLabels', {});
lyr_CoordinacionSilao_6.set('fieldLabels', {});
lyr_CoordinacionSanMiguelAllende_7.set('fieldLabels', {});
lyr_CoordinacionSanLuisdelaPaz_8.set('fieldLabels', {});
lyr_CoordinacionSanJoseIturbide_9.set('fieldLabels', {});
lyr_CoordinacionSanFelipe_10.set('fieldLabels', {});
lyr_CoordinacionSalvatierra_11.set('fieldLabels', {});
lyr_CoordinacionSalamanca_12.set('fieldLabels', {});
lyr_CoordinacionPurisima_13.set('fieldLabels', {});
lyr_CoordinacionPenjamo_14.set('fieldLabels', {});
lyr_CoordinacionLeonSur_15.set('fieldLabels', {});
lyr_CoordinacionLeonNorte_16.set('fieldLabels', {});
lyr_CoordinacionIrapuato_17.set('fieldLabels', {});
lyr_CoordinacionDolores_18.set('fieldLabels', {});
lyr_CoordinacionCelaya_19.set('fieldLabels', {});
lyr_CoordinacionAcambaro_20.set('fieldLabels', {});
lyr_CoordinacionAbasolo_21.set('fieldLabels', {});
lyr_Microregiones2020_22.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_Microregiones2020_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});