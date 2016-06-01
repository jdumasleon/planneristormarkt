// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
    {
       "name" : "AJA0001",
       "image" : "public/models/thumbnails/tests/AJA0001.jpg",
       "model" : "public/models/js/tests/AJA0001.js",
       "type" : "1"
     },
     {
        "name" : "BGB0001",
        "image" : "public/models/thumbnails/tests/BGB0001.jpg",
        "model" : "public/models/js/tests/BGB0001.js",
        "type" : "1"
      },
      {
         "name" : "BHZ0001",
         "image" : "public/models/thumbnails/tests/BHZ0001.jpg",
         "model" : "public/models/js/tests/BHZ0001.js",
         "type" : "1"
       },
       {
          "name" : "VS7080GRL",
          "image" : "public/models/thumbnails/tests/VS7080GRL.jpg",
          "model" : "public/models/js/tests/VS7080GRL.js",
          "type" : "1"
        },
        {
           "name" : "BNC0003",
           "image" : "public/models/thumbnails/tests/BNC0003.jpg",
           "model" : "public/models/js/tests/BNC0003.js",
           "type" : "1"
         },
         {
            "name" : "VS7080FRE17X",
            "image" : "public/models/thumbnails/tests/VS7080FRE17X.jpg",
            "model" : "public/models/js/tests/VS7080FRE17X.js",
            "type" : "1"
          },
   {
      "name" : "Closed Door",
      "image" : "public/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "public/models/js/closed-door28x80_baked.js",
      "type" : "7"
    },
    {
      "name" : "Open Door",
      "image" : "public/models/thumbnails/thumbnail_Screen_Shot_2014-10-27_at_8.22.46_PM.png",
      "model" : "public/models/js/open_door.js",
      "type" : "7"
    },
    {
      "name" : "Window",
      "image" : "public/models/thumbnails/thumbnail_window.png",
      "model" : "public/models/js/whitewindow.js",
      "type" : "3"
    },
    {
      "name" : "Chair",
      "image" : "public/models/thumbnails/thumbnail_Church-Chair-oak-white_1024x1024.jpg",
      "model" : "public/models/js/gus-churchchair-whiteoak.js",
      "type" : "1"
    },
    {
      "name" : "Red Chair",
      "image" : "public/models/thumbnails/thumbnail_tn-orange.png",
      "model" : "public/models/js/ik-ekero-orange_baked.js",
      "type" : "1"
    },
    {
      "name" : "Blue Chair",
      "image" : "public/models/thumbnails/thumbnail_ekero-blue3.png",
      "model" : "public/models/js/ik-ekero-blue_baked.js",
      "type" : "1"
    },
    {
      "name" : "Dresser - Dark Wood",
      "image" : "public/models/thumbnails/thumbnail_matera_dresser_5.png",
      "model" : "public/models/js/DWR_MATERA_DRESSER2.js",
      "type" : "1"
    },
    {
      "name" : "Dresser - White",
      "image" : "public/models/thumbnails/thumbnail_img25o.jpg",
      "model" : "public/models/js/we-narrow6white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Bedside table - Shale",
      "image" : "public/models/thumbnails/thumbnail_Blu-Dot-Shale-Bedside-Table.jpg",
      "model" : "public/models/js/bd-shalebedside-smoke_baked.js",
      "type" : "1"
    },
    {
      "name" : "Bedside table - White",
      "image" : "public/models/thumbnails/thumbnail_arch-white-oval-nightstand.jpg",
      "model" : "public/models/js/cb-archnight-white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Wardrobe - White",
      "image" : "public/models/thumbnails/thumbnail_TN-ikea-kvikine.png",
      "model" : "public/models/js/ik-kivine_baked.js",
      "type" : "1"
    },
    {
      "name" : "Full Bed",
      "image" : "public/models/thumbnails/thumbnail_nordli-bed-frame__0159270_PE315708_S4.JPG",
      "model" : "public/models/js/ik_nordli_full.js",
      "type" : "1"
    },
    {
      "name" : "Bookshelf",
      "image" : "public/models/thumbnails/thumbnail_kendall-walnut-bookcase.jpg",
      "model" : "public/models/js/cb-kendallbookcasewalnut_baked.js",
      "type" : "1"
    },
        {
      "name" : "Media Console - White",
      "image" : "public/models/thumbnails/thumbnail_clapboard-white-60-media-console-1.jpg",
      "model" : "public/models/js/cb-clapboard_baked.js",
      "type" : "1"
    },
        {
      "name" : "Media Console - Black",
      "image" : "public/models/thumbnails/thumbnail_moore-60-media-console-1.jpg",
      "model" : "public/models/js/cb-moore_baked.js",
      "type" : "1"
    },
       {
      "name" : "Sectional - Olive",
      "image" : "public/models/thumbnails/thumbnail_img21o.jpg",
      "model" : "public/models/js/we-crosby2piece-greenbaked.js",
      "type" : "1"
    },
    {
      "name" : "Sofa - Grey",
      "image" : "public/models/thumbnails/thumbnail_rochelle-sofa-3.jpg",
      "model" : "public/models/js/cb-rochelle-gray_baked.js",
      "type" : "1"
    },
        {
      "name" : "Wooden Trunk",
      "image" : "public/models/thumbnails/thumbnail_teca-storage-trunk.jpg",
      "model" : "public/models/js/cb-tecs_baked.js",
      "type" : "1"
    },
        {
      "name" : "Floor Lamp",
      "image" : "public/models/thumbnails/thumbnail_ore-white.png",
      "model" : "public/models/js/ore-3legged-white_baked.js",
      "type" : "1"
    },
    {
      "name" : "Coffee Table - Wood",
      "image" : "public/models/thumbnails/thumbnail_stockholm-coffee-table__0181245_PE332924_S4.JPG",
      "model" : "public/models/js/ik-stockholmcoffee-brown.js",
      "type" : "1"
    },
    {
      "name" : "Side Table",
      "image" : "public/models/thumbnails/thumbnail_Screen_Shot_2014-02-21_at_1.24.58_PM.png",
      "model" : "public/models/js/GUSossingtonendtable.js",
      "type" : "1"
    },
    {
      "name" : "Dining Table",
      "image" : "public/models/thumbnails/thumbnail_scholar-dining-table.jpg",
      "model" : "public/models/js/cb-scholartable_baked.js",
      "type" : "1"
    },
    {
      "name" : "Dining table",
      "image" : "public/models/thumbnails/thumbnail_Screen_Shot_2014-01-28_at_6.49.33_PM.png",
      "model" : "public/models/js/BlakeAvenuejoshuatreecheftable.js",
      "type" : "1"
    },
    {
      "name" : "Blue Rug",
      "image" : "public/models/thumbnails/thumbnail_cb-blue-block60x96.png",
      "model" : "public/models/js/cb-blue-block-60x96.js",
      "type" : "8"
    },
    {
      "name" : "NYC Poster",
      "image" : "public/models/thumbnails/thumbnail_nyc2.jpg",
      "model" : "public/models/js/nyc-poster2.js",
      "type" : "2"
    }
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
               '"><img style="height: 100%;margin-left: -42px;width: 510%" src="' +
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
