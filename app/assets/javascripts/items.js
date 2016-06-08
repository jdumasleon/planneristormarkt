// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
    {
       "name" : "CCZ0018",
       "image" : "planner/models/thumbnails/assets/CCZ0018.jpg",
       "model" : "planner/models/js/assets/CCZ0018.js",
       "type" : "1"
    },
    {
       "name" : "EFA0002",
       "image" : "planner/models/thumbnails/assets/EFA0002.jpg",
       "model" : "planner/models/js/assets/EFA0002.js",
       "type" : "1"
    },
    {
       "name" : "VS7080CFG",
       "image" : "planner/models/thumbnails/assets/VS7080CFG.jpg",
       "model" : "planner/models/js/assets/VS7080CFG.js",
       "type" : "1"
    },
    {
      "name" : "HCD0008",
      "image" : "planner/models/thumbnails/assets/HCD0008.jpg",
      "model" : "planner/models/js/assets/HCD0008.js",
      "type" : "1"
    },
    {
      "name" : "GDZ0018",
      "image" : "planner/models/thumbnails/assets/GDZ0018.jpg",
      "model" : "planner/models/js/assets/GDZ0018.js",
      "type" : "2"
    },
    {
      "name" : "GLB0037",
      "image" : "planner/models/thumbnails/assets/GLB0037.jpg",
      "model" : "planner/models/js/assets/GLB0037.js",
      "type" : "1"
    },
    {
      "name" : "GLA0017",
      "image" : "planner/models/thumbnails/assets/GLA0017.jpg",
      "model" : "planner/models/js/assets/GLA0017.js",
      "type" : "1"
    },
    {
      "name" : "CBD0014",
      "image" : "planner/models/thumbnails/assets/CBD0014.jpg",
      "model" : "planner/models/js/assets/CBD0014.js",
      "type" : "1"
    },
    {
      "name" : "BNC0017",
      "image" : "planner/models/thumbnails/assets/BNC0017.jpg",
      "model" : "planner/models/js/assets/BNC0017.js",
      "type" : "1"
    },
    {
      "name" : "Closed Door",
      "image" : "planner/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "planner/models/js/closed-door28x80_baked.js",
      "type" : "7"
    },
    {
      "name" : "Open Door",
      "image" : "planner/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "planner/models/js/open_door.js",
      "type" : "7"
    },
    {
      "name" : "Window",
      "image" : "planner/models/thumbnails/thumbnail_window.png",
      "model" : "planner/models/js/whitewindow.js",
      "type" : "3"
    },
    {
      "name" : "Chair",
      "image" : "planner/models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model" : "planner/models/js/gus-churchchair-whiteoak.js",
      "type" : "1"
    }
/*    {
      "name" : "Red Chair",
      "image" : "planner/models/thumbnails/thumbnail_tn-orange.png",
      "model" : "planner/models/js/ik-ekero-orange_baked.js",
      "type" : "1"
    },
    {
      "name" : "Blue Chair",
      "image" : "planner/models/thumbnails/thumbnail_ekero-blue3.png",
      "model" : "planner/models/js/ik-ekero-blue_baked.js",
      "type" : "1"
    },
    {
      "name" : "Dresser - Dark Wood",
      "image" : "planner/models/thumbnails/thumbnail_matera_dresser_5.png",
      "model" : "planner/models/js/DWR_MATERA_DRESSER2.js",
      "type" : "1"
    },
    {
      "name" : "Dresser - White",
      "image" : "planner/models/thumbnails/thumbnail_img25o.jpg",
      "model" : "planner/models/js/we-narrow6white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Bedside table - Shale",
      "image" : "planner/models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model" : "planner/models/js/bd-shalebedside-smoke_baked.js",
      "type" : "1"
    },
    {
      "name" : "Bedside table - White",
      "image" : "planner/models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
      "model" : "planner/models/js/cb-archnight-white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Wardrobe - White",
      "image" : "planner/models/thumbnails/thumbnail_TN-ikea-kvikine.png",
      "model" : "planner/models/js/ik-kivine_baked.js",
      "type" : "1"
    },
    {
      "name" : "Full Bed",
      "image" : "planner/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
      "model" : "planner/models/js/ik_nordli_full.js",
      "type" : "1"
    },
    {
      "name" : "Bookshelf",
      "image" : "planner/models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
      "model" : "planner/models/js/cb-kendallbookcasewalnut_baked.js",
      "type" : "1"
    },
        {
      "name" : "Media Console - White",
      "image" : "planner/models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
      "model" : "planner/models/js/cb-clapboard_baked.js",
      "type" : "1"
    },
        {
      "name" : "Media Console - Black",
      "image" : "planner/models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
      "model" : "planner/models/js/cb-moore_baked.js",
      "type" : "1"
    },
       {
      "name" : "Sectional - Olive",
      "image" : "planner/models/thumbnails/thumbnail_img21o.jpg",
      "model" : "planner/models/js/we-crosby2piece-greenbaked.js",
      "type" : "1"
    },
    {
      "name" : "Sofa - Grey",
      "image" : "planner/models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
      "model" : "planner/models/js/cb-rochelle-gray_baked.js",
      "type" : "1"
    },
        {
      "name" : "Wooden Trunk",
      "image" : "planner/models/thumbnails/thumbnail_teca-storage-trunk.jpg",
      "model" : "planner/models/js/cb-tecs_baked.js",
      "type" : "1"
    },
        {
      "name" : "Floor Lamp",
      "image" : "planner/models/thumbnails/thumbnail_ore-white.png",
      "model" : "planner/models/js/ore-3legged-white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Coffee Table - Wood",
      "image" : "planner/models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
      "model" : "planner/models/js/ik-stockholmcoffee-brown.js",
      "type" : "1"
    },
    {
      "name" : "Side Table",
      "image" : "planner/models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
      "model" : "planner/models/js/GUSossingtonendtable.js",
      "type" : "1"
    },
    {
      "name" : "Dining Table",
      "image" : "planner/models/thumbnails/thumbnail_scholar-dining-table.jpg",
      "model" : "planner/models/js/cb-scholartable_baked.js",
      "type" : "1"
    },
    {
      "name" : "Dining table",
      "image" : "planner/models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
      "model" : "planner/models/js/BlakeAvenuejoshuatreecheftable.js",
      "type" : "1"
    },
    {
      "name" : "Blue Rug",
      "image" : "planner/models/thumbnails/thumbnail_cb-blue-block60x96.png",
      "model" : "planner/models/js/cb-blue-block-60x96.js",
      "type" : "8"
    },
    {
      "name" : "NYC Poster",
      "image" : "planner/models/thumbnails/thumbnail_nyc2.jpg",
      "model" : "planner/models/js/nyc-poster2.js",
      "type" : "2"
    }
    */
   /*
   {
      "name" : "",
      "image" : "",
      "model" : "",
      "type" : "1"
    },
    */
  ]

  var count = 0;
  var html =  "<p class='grey-text'>Aditional assets</p>";
  var itemsDiv = $("#items-wrapper")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (i%3 == 0) {
        html += '<li class="liasset"><div class="row center assetMenu">'
    }

    html += '<div class="col s4 borderAsset waves-effect waves-orange">' +
               '<a class="thumbnail add-item" model-name="' +
               item.name +
               '" model-url="' +
               item.model +
               '" model-type="' +
               item.type +
               '"><img style="height: 100%;margin-left: -42px;width: 430%" src="' +
               item.image +
               '" alt="Add Item"></a></div>';

    count++;
    if (count == 3) {
       html += '</div></li>'
       itemsDiv.append(html);
       html = "";
       count = 0;
    }
    else if(i == items.length - 1){
        itemsDiv.append(html);
    }
  }
});
