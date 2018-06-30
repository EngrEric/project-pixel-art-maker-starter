// Restrictions on the number to be used to avoid much expansion for mobile users.
$(function () {
    $("input").keydown(function (){
      $(this).data("old",$(this).val());  
    });
    $("input").keyup(function (){
        if (parseInt($(this).val())<=25 && parseInt ($(this).val())>=0);
        else
        $(this).val($(this).data("old"));
    });
    
});


//Javascript code used to create a table for pixel art.
$('#sizePicker').submit(function makeGrid(event) {  // selection of DOM element "form" for "submit" event.
  $('table tr').remove();                          // Clears previously created grid. Everytime a new value is added for grid height and grid width a new table should appear.
const rows=$('#input_height').val();                 // Grid height is equal to number of rows. 
const cells=$('#input_width').val();                 // Grid width is equal to number of columns.   
  for (let i=1;i<=rows;i++) {
    $('table').append("<tr></tr>");
    for (let j=1;j<=cells;j++) {
      $( 'tr:last').append("<td></td>");         //tr: last makes sure that the     cells are added only to the last created table row and not for all.
      $('td').attr('class','pixel');
    }
  } 
  event.preventDefault();                       //avoids the page to be refreshed after clicking on submit button and retains the table/grid.
});



//Javascript code used to select and apply color to the cell of the canvas.
$('#pixel_canvas').on('click','.pixel',function(){  //event delegation - checks for any changes in table with id pixel_canvas and makes changes to element with class .pixel
  const pen=$('#colorPicker').val();
  $(this).css('background-color',pen);
});
