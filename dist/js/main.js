$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 20) {
        $('#logo').stop().animate({height: "40px", width: "80px"},50);
    }
    else {
        $('#logo').stop().animate({height: "100px", width: "200px"},50);
    }
});


$(document).ready(function () {
    //modeal de connection
    $('.modal').modal();
    //
    $('.button-collapse').sideNav();
    // Mention Légal
    $('.collapsible').collapsible();
    //
    $("#navbar").sticky({topSpacing: 0, zIndex: 1000});
    $('select').material_select();


        $('textarea#presentation').characterCounter();


    $('input.autocomplete').autocomplete({
        //auto complete for departements
        data: {
            "Ain": null,
            "Aisne": null,
            "Allier": null,
            "Alpes de Haute-Provence": null,
            "Alpes-Maritimes": null,
            "Ardeche": null,
            "Ardennes": null,
            "Ariege": null,
            "Aube": null,
            "Aude": null,
            "Aveyron": null,
            "Bas-Rhin": null,
            "Bouches du Rhone": null,
            "Calvados": null,
            "Cantal": null,
            "Charente": null,
            "Charente Maritime": null,
            "Cher": null,
            "Corrèze": null,
            "Corse du Sud": null,
            "Côte d'Or": null,
            "Côtes d'Armor": null,
            "Creuse": null,
            "Deux-Sèvres": null,
            "Dordogne": null,
            "Doubs": null,
            "Drôme": null,
            "Essonne": null,
            "Eure": null,
            "Eure-et-Loir": null,
            "Finistère": null,
            "Gard": null,
            "Gers": null,
            "Gironde": null,
            "Haut-Rhin": null,
            "Haute-Corse": null,
            "Haute-Garonne": null,
            "Haute-Loire": null,
            "Haute-Marne": null,
            "Haute-Saône": null,
            "Haute-Savoie": null,
            "Haute-Vienne": null,
            "Hautes-Alpes": null,
            "Hautes-Pyrénées": null,
            "Hauts-de-Seine": null,
            "Hérault": null,
            "Ille-et-Vilaine": null,
            "Indre": null,
            "Indre-et-Loire": null,
            "Isère": null,
            "Jura": null,
            "Landes": null,
            "Loir-et-Cher": null,
            "Loire": null,
            "Loire-Atlantique": null,
            "Loiret": null,
            "Lot": null,
            "Lot-et-Garonne": null,
            "Lozère": null,
            "Maine-et-Loire": null,
            "Manche": null,
            "Marne": null,
            "Mayenne": null,
            "Meurthe-et-Moselle": null,
            "Meuse": null,
            "Morbihan": null,
            "Moselle": null,
            "Nièvre": null,
            "Nord": null,
            "Oise": null,
            "Orne": null,
            "Paris": null,
            "Pas-de-Calais": null,
            "Puy-de-Dôme": null,
            "Pyrénées-Atlantiques": null,
            "Pyrénées-Orientales": null,
            "Rhône": null,
            "Saône-et-Loire": null,
            "Sarthe": null,
            "Savoie": null,
            "Seine-et-Marne": null,
            "Seine-Maritime": null,
            "Seine-St-Denis": null,
            "Somme": null,
            "Tarn": null,
            "Tarn-et-Garonne": null,
            "Territoire-de-Belfort": null,
            "Val-d'Oise": null,
            "Val-de-Marne": null,
            "Var": null,
            "Vaucluse": null,
            "Vendée": null,
            "Vienne": null,
            "Vosges": null,
            "Yonne": null,
            "Yvelines": null
        },
        limit: 20,
        onAutocomplete: function (val) {
        },
        minLength: 1,
    });
});